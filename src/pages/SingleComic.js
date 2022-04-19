import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import Spinner from '../components/spinner/Spinner';
import ErrorMessage from '../components/errorMessage/ErrorMessage';
import { useMarvelServices } from '../services/marvelServices';

import './singleComic.scss';
import AppBanner from '../components/appBanner/AppBanner';

const SingleComicPage = () => {
	const [comic, setComic] = useState(null);
	const { comicId } = useParams();

	const { loading, error, getComic, clearError } = useMarvelServices();

	useEffect(() => {
		updateComic();
	}, [comicId]);

	const onComicLoaded = (comic) => {
		setComic(comic);
	};

	const updateComic = () => {
		clearError();
		getComic(comicId).then(onComicLoaded);
	};

	const errorMessage = error ? <ErrorMessage /> : null;
	const spinner = loading ? <Spinner /> : null;
	const content = !(spinner || errorMessage || !comic) ? <View comic={comic} /> : null;

	return (
		<>
			<AppBanner />
			{errorMessage}
			{spinner}
			{content}
		</>
	);
};

const View = ({ comic }) => {
	const { title, id, thumbnail, pages, language, price, description } = comic;
	const navigate = useNavigate();

	return (
		<div className="single-comic">
			<img src={thumbnail} alt={title} className="single-comic__img" />
			<div className="single-comic__info">
				<h2 className="single-comic__name">{title}</h2>
				<p className="single-comic__descr">{description}</p>
				<p className="single-comic__descr">{pages}</p>
				<p className="single-comic__descr">Language: {language}</p>
				<div className="single-comic__price">{price}</div>
			</div>
			<button className="button button__main" onClick={() => navigate(-1)}>
				<div className="inner">GO Back</div>
			</button>
		</div>
	);
};

export default SingleComicPage;
