class MarvelServices {
	_apiBase = 'https://gateway.marvel.com:443/v1/public/';
	_apiKey = 'apikey=804561fe0b4553a3fa7b8ec7fb139828';
	_baseCharOffset = 210;

	getResources = async (url) => {
		let res = await fetch(url);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status ${res.status}`);
		}

		return await res.json();
	};

	getAllCharacters = async (offset = this._baseCharOffset) => {
		const res = await this.getResources(`${this._apiBase}characters?limit=9&offset=${offset}&${this._apiKey}`);
		return res.data.results.map(this._transformCharacter);
	};

	getCharacter = async (id) => {
		const res = await this.getResources(`${this._apiBase}characters/${id}?${this._apiKey}`);
		return this._transformCharacter(res.data.results[0]);
	};

	_transformCharacter = (char) => {
		const descr = (str, length) => {
			if (str) return str.substr(0, length) + '... CLICK ON WIKI TO SEE FULL DESCRIPTION';
			else return 'There is no description for this character';
		};

		const comicsItems = (arr, length) => {
			if (arr.length) return arr.splice(length);
			else return [{ name: 'This character does not have comics' }];
		};

		return {
			id: char.id,
			thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`,
			name: char.name,
			description: descr(char.description, 150),
			homepage: char.urls[0].url,
			wiki: char.urls[1].url,
			comicsItems: comicsItems(char.comics.items, 10),
		};
	};
}

export default MarvelServices;
