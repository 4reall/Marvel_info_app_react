import { Component } from 'react';
import PropTypes from 'prop-types';

import Skeleton from '../skeleton/Skeleton';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import MarvelServices from '../../services/marvelServices';

import './charInfo.scss';
class CharInfo extends Component {
	state = {
		char: null,
		loading: false,
		error: false,
	};
	marvelServices = new MarvelServices();

	componentDidMount() {
		this.updateChar();
	}

	componentDidUpdate(prevProps) {
		if (prevProps.charId !== this.props.charId) {
			this.updateChar();
		}
	}

	onError = () => {
		this.setState({ loading: false, error: true });
	};

	onCharLoaded = (char) => {
		this.setState({ char });
		this.setState({ loading: false });
	};

	onCharLoading = () => {
		this.setState({ loading: true });
	};

	updateChar = () => {
		const { charId } = this.props;
		if (!charId) {
			return;
		}
		this.onCharLoading();
		this.marvelServices.getCharacter(this.props.charId).then(this.onCharLoaded).catch(this.onError);
	};

	render() {
		const { char, loading, error } = this.state;
		const skeleton = !(char || error || loading) ? <Skeleton /> : null;
		const errorMessage = error ? <ErrorMessage /> : null;
		const spinner = loading ? <Spinner /> : null;
		const content = !(spinner || errorMessage || !char) ? <View char={char} /> : null;
		return (
			<div className="char__info">
				{skeleton}
				{errorMessage}
				{spinner}
				{content}
			</div>
		);
	}
}

const View = ({ char }) => {
	const { thumbnail, name, description, homepage, wiki, comicsItems } = char;
	const imgNotAvailabe = thumbnail.match('image_not_available.jpg') ? { objectFit: 'contain' } : null;
	return (
		<>
			<div className="char__basics">
				<img src={thumbnail} alt="abyss" style={imgNotAvailabe} />
				<div>
					<div className="char__info-name">{name}</div>
					<div className="char__btns">
						<a href={homepage} className="button button__main">
							<div className="inner">Homepage</div>
						</a>
						<a href={wiki} className="button button__secondary">
							<div className="inner">wiki</div>
						</a>
					</div>
				</div>
			</div>
			<div className="char__descr">{description}</div>
			<div className="char__comics">Comics:</div>
			<ul className="char__comics-list">
				{comicsItems.map((item, i) => {
					return (
						<li key={i} className="char__comics-item">
							{item.name}
						</li>
					);
				})}
			</ul>
		</>
	);
};

CharInfo.propTypes = {
	charId: PropTypes.number,
};
View.propTypes = {
	char: PropTypes.object.isRequired,
};

export default CharInfo;
