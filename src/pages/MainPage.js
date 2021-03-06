import { useState } from 'react';

import ErrorBoundary from '../components/errorBoundary/errorBoundary';
import RandomChar from '../components/randomChar/RandomChar';
import CharInfo from '../components/charInfo/CharInfo';
import CharList from '../components/charList/CharList';
import SearchForm from '../components/searchForm/SearchForm';

import decoration from '../resources/img/vision.png';

const MainPage = () => {
	const [selectedChar, setSelectedChar] = useState(null);

	const onCharSelected = (id) => {
		setSelectedChar(id);
	};
	return (
		<>
			<ErrorBoundary>
				<RandomChar />
			</ErrorBoundary>
			<div className="char__content">
				<ErrorBoundary>
					<CharList onCharSelected={onCharSelected} />
				</ErrorBoundary>
				<div>
					<ErrorBoundary>
						<CharInfo charId={selectedChar} />
					</ErrorBoundary>
					<ErrorBoundary>
						<SearchForm />
					</ErrorBoundary>
				</div>
			</div>
			<img className="bg-decoration" src={decoration} alt="vision" />
		</>
	);
};

export default MainPage;
