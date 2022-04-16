import { useState, useEffect } from 'react';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import MarvelServices from '../../services/marvelServices';

import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';

const RandomChar = () => {
	const [char, setChar] = useState({});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const marvelServices = new MarvelServices();

	useEffect(() => {
		updateChar();
		// const intervalId = setInterval(updateChar, 5000);
		// return () => {
		// 	clearInterval(intervalId);
		// };
	}, []);

	const onError = () => {
		setLoading(false);
		setError(true);
	};

	const onCharLoaded = (char) => {
		setChar(char);
		setLoading(false);
		setError(false);
	};

	const onCharLoading = () => {
		setLoading(true);
	};

	const updateChar = () => {
		const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
		onCharLoading();
		marvelServices.getCharacter(id).then(onCharLoaded).catch(onError);
	};

	const handleClick = () => {
		onCharLoading();
		updateChar();
	};

	const errorMessage = error ? <ErrorMessage /> : null;
	const spinner = loading ? <Spinner /> : null;
	const content = !(spinner || errorMessage) ? <RandomCharBlock char={char} /> : null;

	return (
		<div className="randomchar">
			{errorMessage}
			{spinner}
			{content}
			<div className="randomchar__static">
				<p className="randomchar__title">
					Random character for today!
					<br />
					Do you want to get to know him better?
				</p>
				<p className="randomchar__title">Or choose another one</p>
				<button onClick={() => handleClick()} className="button button__main">
					<div className="inner">try it</div>
				</button>
				<img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
			</div>
		</div>
	);
};

const RandomCharBlock = ({ char }) => {
	const { thumbnail, name, description, homepage, wiki } = char;
	const imgNotAvailabe = thumbnail.match('image_not_available.jpg') ? { objectFit: 'contain' } : null;
	return (
		<div className="randomchar__block">
			<img src={thumbnail} alt="Random character" className="randomchar__img" style={imgNotAvailabe} />
			<div className="randomchar__info">
				<p className="randomchar__name">{name}</p>
				<p className="randomchar__descr">{description}</p>
				<div className="randomchar__btns">
					<a href={homepage} className="button button__main">
						<div className="inner">homepage</div>
					</a>
					<a href={wiki} className="button button__secondary">
						<div className="inner">Wiki</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default RandomChar;
