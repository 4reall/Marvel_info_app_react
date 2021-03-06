import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import List from './List';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import { useMarvelServices } from '../../services/marvelServices';

import './charList.scss';

const CharList = (props) => {
	const [charList, setCharList] = useState([]);
	const [newItemLoading, setNewItemLoading] = useState(false);
	const [offset, setOffset] = useState(210);
	const [charsEnded, setCharsEnded] = useState(false);

	const { loading, error, getAllCharacters, clearError } =
		useMarvelServices();

	useEffect(() => {
		onRequest(offset, true);
	}, []);

	const onRequest = (offset, initial) => {
		initial ? setNewItemLoading(false) : setNewItemLoading(true);
		getAllCharacters(offset).then((res) => onCharListLoaded(res));
	};

	const onCharListLoaded = (newCharList) => {
		clearError();
		const ended = newCharList.length < 9;

		setCharList((charList) => [...charList, ...newCharList]);
		setNewItemLoading(false);
		setOffset((offset) => offset + 9);
		setCharsEnded(ended);
	};

	const errorMessage = error && !newItemLoading ? <ErrorMessage /> : null;
	const spinner = loading && !newItemLoading ? <Spinner /> : null;
	// const content = !(spinner || errorMessage) ? (
	// 	<List arr={charList} onCharSelected={props.onCharSelected} />
	// ) : null;

	return (
		<div className="char__list">
			{errorMessage}
			{spinner}
			<List arr={charList} onCharSelected={props.onCharSelected} />
			{/*{content}*/}
			<div className="char__buttons">
				<button
					onClick={() => {
						onRequest(offset);
					}}
					disabled={error ? true : newItemLoading}
					style={{ display: `${charsEnded ? 'none' : 'block'}` }}
					className="button button__main button__long"
				>
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
