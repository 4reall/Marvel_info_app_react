import React, { Component } from 'react';
import PropTypes from 'prop-types';

import List from './List';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import MarvelServices from '../../services/marvelServices';

import './charList.scss';

class CharList extends Component {
	state = {
		charList: [],
		loading: true,
		newItemLoading: false,
		error: false,
		offset: 210,
		charsEnded: false,
	};

	marvelServices = new MarvelServices();

	componentDidMount() {
		this.onRequest();
		// this.intervalId = setInterval(this.updateChar, 3000);
	}

	onRequest = (offset, i = 9) => {
		this.onCharListLoading();
		this.marvelServices
			.getAllCharacters(offset)
			.then((res) => this.onCharListLoaded(res, i))
			.catch(this.onError);
	};

	componentWillUnmount() {
		// clearInterval(this.intervalId);
	}

	onError = () => {
		this.setState({ loading: false, error: true });
	};

	onCharListLoading = () => {
		this.setState({ newItemLoading: true });
	};

	onCharListLoaded = (newCharList, i) => {
		let ended = false;
		if (newCharList.length < 9) {
			ended = true;
		}
		this.setState(({ offset, charList }) => ({
			// charList: [...charList, ...newCharList],
			charList: newCharList,
			loading: false,
			newItemLoading: false,
			offset: offset + i,
			charEnded: ended,
		}));
	};

	render() {
		const { charList, loading, error, newItemLoading, offset, charsEnded } = this.state;
		const errorMessage = error ? <ErrorMessage /> : null;
		const spinner = loading ? <Spinner /> : null;
		const content = !(spinner || errorMessage) ? (
			<List arr={charList} onCharSelected={this.props.onCharSelected} />
		) : null;

		return (
			<div className="char__list">
				{errorMessage}
				{spinner}
				{content}
				<div className="char__buttons">
					<button
						onClick={() => {
							this.onRequest(offset);
						}}
						disabled={newItemLoading}
						style={{ display: `${charsEnded ? 'none' : 'block'}` }}
						className="button button__main button__long">
						<div className="inner">Next page</div>
					</button>
					<button
						onClick={() => {
							this.onRequest(offset, -9);
						}}
						disabled={newItemLoading}
						style={{ display: `${charsEnded ? 'none' : 'block'}` }}
						className="button button__main button__long">
						<div className="inner">Previous page</div>
					</button>
				</div>
			</div>
		);
	}
}

CharList.propTypes = {
	onCharSelected: PropTypes.func.isRequired,
};

export default CharList;
