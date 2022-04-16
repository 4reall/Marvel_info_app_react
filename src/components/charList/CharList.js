import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import List from './List';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import MarvelServices from '../../services/marvelServices';

import './charList.scss';

const CharList = (props) => {
	const [charList, setCharList] = useState([]);
	const [loading, setLoading] = useState(true);
	const [newItemLoading, setNewItemLoading] = useState(false);
	const [error, setError] = useState(false);
	const [offset, setOffset] = useState(210);
	const [charsEnded, setCharsEnded] = useState(false);
	const [fetching, setFetching] = useState(false);

	const marvelServices = new MarvelServices();

	useEffect(() => {
		if (fetching) {
			onRequest(offset);
			setFetching(false);
		}
	}, [fetching]);

	useEffect(() => {
		setFetching(true);
	}, []);

	const onRequest = (offset) => {
		onCharListLoading();
		marvelServices
			.getAllCharacters(offset)
			.then((res) => onCharListLoaded(res))
			.catch(onError);
	};

	const onError = () => {
		setLoading(false);
		setError(true);
	};

	const onCharListLoading = () => {
		setNewItemLoading(true);
	};

	const onCharListLoaded = (newCharList) => {
		let ended = false;

		if (newCharList.length < 9) {
			ended = true;
		}

		setCharList((charList) => [...charList, ...newCharList]);
		setLoading(false);
		setNewItemLoading(false);
		setOffset((offset) => offset + 9);
		setCharsEnded(ended);
	};

	const errorMessage = error ? <ErrorMessage /> : null;
	const spinner = loading ? <Spinner /> : null;
	const content = !(spinner || errorMessage) ? <List arr={charList} onCharSelected={props.onCharSelected} /> : null;

	return (
		<div className="char__list">
			{errorMessage}
			{spinner}
			{content}
			<div className="char__buttons">
				{/* <button
						onClick={() => {
							onRequest(offset, -9);
						}}
						disabled={newItemLoading}
						style={{ display: `${charsEnded ? 'none' : 'block'}` }}
						className="button button__main button__long">
						<div className="inner">Previous page</div>
					</button> */}
				<button
					onClick={() => {
						setFetching(true);
					}}
					disabled={newItemLoading}
					style={{ display: `${charsEnded ? 'none' : 'block'}` }}
					className="button button__main button__long">
					<div className="inner">Next page</div>
				</button>
			</div>
		</div>
	);
};

CharList.propTypes = {
	onCharSelected: PropTypes.func.isRequired,
};

export default CharList;

// import { Component } from 'react';
// import PropTypes from 'prop-types';

// import Spinner from '../spinner/Spinner';
// import ErrorMessage from '../errorMessage/ErrorMessage';
// import MarvelService from '../../services/marvelServices';
// import './charList.scss';

// class CharList extends Component {
// 	state = {
// 		charList: [],
// 		loading: true,
// 		error: false,
// 		newItemLoading: false,
// 		offset: 210,
// 		charEnded: false,
// 	};

// 	marvelService = new MarvelService();

// 	componentDidMount() {
// 		this.onRequest();
// 	}

// 	onRequest = (offset) => {
// 		this.onCharListLoading();
// 		this.marvelService.getAllCharacters(offset).then(this.onCharListLoaded).catch(this.onError);
// 	};

// 	onCharListLoading = () => {
// 		this.setState({
// 			newItemLoading: true,
// 		});
// 	};

// 	onCharListLoaded = (newCharList) => {
// 		let ended = false;
// 		if (newCharList.length < 9) {
// 			ended = true;
// 		}

// 		this.setState(({ offset, charList }) => ({
// 			charList: [...charList, ...newCharList],
// 			loading: false,
// 			newItemLoading: false,
// 			offset: offset + 9,
// 			charEnded: ended,
// 		}));
// 	};

// 	onError = () => {
// 		this.setState({
// 			error: true,
// 			loading: false,
// 		});
// 	};

// 	itemRefs = [];

// 	setRef = (ref) => {
// 		this.itemRefs.push(ref);
// 	};

// 	focusOnItem = (id) => {
// 		// Я реализовал вариант чуть сложнее, и с классом и с фокусом
// 		// Но в теории можно оставить только фокус, и его в стилях использовать вместо класса
// 		// На самом деле, решение с css-классом можно сделать, вынеся персонажа
// 		// в отдельный компонент. Но кода будет больше, появится новое состояние
// 		// и не факт, что мы выиграем по оптимизации за счет бОльшего кол-ва элементов

// 		// По возможности, не злоупотребляйте рефами, только в крайних случаях
// 		this.itemRefs.forEach((item) => item.classList.remove('char__item_selected'));
// 		this.itemRefs[id].classList.add('char__item_selected');
// 		this.itemRefs[id].focus();
// 	};

// 	// Этот метод создан для оптимизации,
// 	// чтобы не помещать такую конструкцию в метод render
// 	renderItems(arr) {
// 		const items = arr.map((item, i) => {
// 			let imgStyle = { objectFit: 'cover' };
// 			if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
// 				imgStyle = { objectFit: 'unset' };
// 			}

// 			return (
// 				<li
// 					className="char__item"
// 					tabIndex={0}
// 					ref={this.setRef}
// 					key={item.id}
// 					onClick={() => {
// 						this.props.onCharSelected(item.id);
// 						this.focusOnItem(i);
// 					}}
// 					onKeyPress={(e) => {
// 						if (e.key === ' ' || e.key === 'Enter') {
// 							this.props.onCharSelected(item.id);
// 							this.focusOnItem(i);
// 						}
// 					}}>
// 					<img src={item.thumbnail} alt={item.name} style={imgStyle} />
// 					<div className="char__name">{item.name}</div>
// 				</li>
// 			);
// 		});
// 		// А эта конструкция вынесена для центровки спиннера/ошибки
// 		return <ul className="char__grid">{items}</ul>;
// 	}

// 	render() {
// 		const { charList, loading, error, offset, newItemLoading, charEnded } = this.state;

// 		const items = this.renderItems(charList);

// 		const errorMessage = error ? <ErrorMessage /> : null;
// 		const spinner = loading ? <Spinner /> : null;
// 		const content = !(loading || error) ? items : null;

// 		return (
// 			<div className="char__list">
// 				{errorMessage}
// 				{spinner}
// 				{content}
// 				<button
// 					className="button button__main button__long"
// 					disabled={newItemLoading}
// 					style={{ display: charEnded ? 'none' : 'block' }}
// 					onClick={() => this.onRequest(offset)}>
// 					<div className="inner">load more</div>
// 				</button>
// 			</div>
// 		);
// 	}
// }

// CharList.propTypes = {
// 	onCharSelected: PropTypes.func.isRequired,
// };

// export default CharList;
