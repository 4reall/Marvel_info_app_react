import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ComicsPage, MainPage, Page404, SingleComicPage } from '../../pages';
import AppHeader from '../appHeader/AppHeader';

const App = () => {
	return (
		<Router>
			<div className="app">
				<AppHeader />
				<main>
					<Routes>
						<Route end path={'/Marvel_react_app/'} element={<MainPage />} />
						<Route end path={'/Marvel_react_app/comics'} element={<ComicsPage />} />
						<Route end path={'/Marvel_react_app/comics/:comicId'} element={<SingleComicPage />} />
						<Route path={'*'} element={<Page404 />} />
					</Routes>
				</main>
			</div>
		</Router>
	);
};

export default App;
