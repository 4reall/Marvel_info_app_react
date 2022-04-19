import { useState, useEffect } from 'react';

import { useMarvelServices } from '../../services/marvelServices';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import ComicsItem from './ComicsItem';

import './comicsList.scss';

const ComicsList = () => {
	const [comicsList, setComicsList] = useState([]);
	const [offset, setOffset] = useState(210);
	const [newComicsLoading, setNewComicsLoading] = useState(false);
	const [comicsEnded, setComicsEnded] = useState(false);

	const { loading, error, getAllComics } = useMarvelServices();

	useEffect(() => {
		onRequest(offset, true);
	}, []);

	const onRequest = (offset, initial) => {
		initial ? setNewComicsLoading(false) : setNewComicsLoading(true);
		getAllComics(offset).then(onComicsLoaded);
	};

	const onComicsLoaded = (newComicsList) => {
		const ended = newComicsList.length < 8 ? true : false;

		setComicsList((comicsList) => [...comicsList, ...newComicsList]);
		setOffset((offset) => offset + 8);
		setComicsEnded(ended);
		setNewComicsLoading(false);
	};

	const errorMessage = error ? <ErrorMessage /> : null;
	const spinner = loading && !newComicsLoading ? <Spinner /> : null;

	return (
		<div className="comics__list">
			{errorMessage}
			{spinner}
			<ComicsItem comicsList={comicsList} />
			<button
				style={{ display: comicsEnded ? 'none' : 'block' }}
				disabled={error ? true : newComicsLoading}
				onClick={() => onRequest(offset)}
				className="button button__main button__long">
				<div className="inner">load more</div>
			</button>
		</div>
	);
};

export default ComicsList;
