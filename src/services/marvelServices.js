import { useHttp } from '../hooks/useHttp';

export const useMarvelServices = () => {
	const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
	const _apiKey = 'apikey=804561fe0b4553a3fa7b8ec7fb139828';
	const _baseCharOffset = 210;

	const { error, loading, request, clearError } = useHttp();

	const getAllCharacters = async (offset = _baseCharOffset) => {
		const res = await request(
			`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`
		);
		return res.data.results.map(_transformCharacter);
	};

	const getCharacter = async (id) => {
		const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
		return _transformCharacter(res.data.results[0]);
	};

	const getCharacterByName = async (name) => {
		const res = await request(
			`${_apiBase}characters?name=${name}&${_apiKey}`
		);
		return res.data.results.map(_transformCharacter);
	};

	const getAllComics = async (offset = _baseCharOffset) => {
		const res = await request(
			`${_apiBase}comics?limit=8&offset=${offset}&${_apiKey}`
		);
		return res.data.results.map(_transformComic);
	};

	const getComic = async (id) => {
		const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
		return _transformComic(res.data.results[0]);
	};

	const _transformCharacter = (char, fullDescr = 150) => {
		const comicsItems = (arr, length) => {
			if (arr.length) return arr.splice(0, length);
			else return [{ name: 'This character does not have comics' }];
		};

		return {
			id: char.id,
			thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`,
			name: char.name,
			description: char.description
				? fullDescr
					? char.description
					: char.description.slice(0, 220)
				: 'There is no description for this character',
			homepage: char.urls[0].url,
			wiki: char.urls[1].url,
			comicsItems: comicsItems(char.comics.items, 10),
		};
	};

	const _transformComic = (comics) => {
		return {
			id: comics.id,
			thumbnail: `${comics.thumbnail.path}.${comics.thumbnail.extension}`,
			title: comics.title,
			description:
				comics.description || 'There is no description for this comic',
			price: comics.prices[0].price + '$',
			language: comics.textObjects.language || 'en-us',
			pages: comics.pageCount
				? `${comics.pageCount} pages`
				: 'No information about the number of pages',
		};
	};

	return {
		loading,
		error,
		getAllCharacters,
		getCharacter,
		getAllComics,
		getComic,
		clearError,
		getCharacterByName,
	};
};
