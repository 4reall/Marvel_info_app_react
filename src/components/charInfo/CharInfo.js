import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Skeleton from '../skeleton/Skeleton';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import { useMarvelServices } from '../../services/marvelServices';

import './charInfo.scss';
import { Link } from 'react-router-dom';

const CharInfo = ({ charId }) => {
	const [char, setChar] = useState(null);

	const { loading, error, getCharacter, clearError } = useMarvelServices();

	useEffect(() => {
		updateChar();
	}, []);

	useEffect(() => {
		updateChar();
	}, [charId]);

	const onCharLoaded = (char) => {
		setChar(char);
	};

	const updateChar = () => {
		if (!charId) {
			return;
		}
		clearError();
		getCharacter(charId).then(onCharLoaded);
	};

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
};

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
							<Link to={`comics/${item.resourceURI.match(/\d{3,}/)}`}>{item.name}</Link>
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
