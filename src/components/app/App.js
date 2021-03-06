import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// import { ComicsPage, MainPage, Page404, SinglePage } from '../../pages';
import AppHeader from '../appHeader/AppHeader';
import Spinner from '../spinner/Spinner';

import paths from '../../pages/pathes';

const Page404 = lazy(() => import('../../pages/404'));
const ComicPage = lazy(() => import('../../pages/ComicsPage'));
const MainPage = lazy(() => import('../../pages/MainPage'));
const SingleComicLayout = lazy(() =>
	import('../../pages/singleComicLayout/SingleComicLayout')
);
const SingleCharLayout = lazy(() =>
	import('../../pages/singleCharLayout/SingleCharLayout')
);
const SinglePage = lazy(() => import('../../pages/SinglePage'));

const App = () => {
	return (
		<Router>
			<div className="app">
				<AppHeader />
				<main>
					<Suspense fallback={<Spinner />}>
						<Routes>
							<Route
								end
								path={paths.mainPage}
								element={<MainPage />}
							/>
							<Route
								end
								path={paths.comicPage}
								element={<ComicPage />}
							/>
							<Route
								end
								path={`${paths.singleComicPage}:id`}
								element={
									<SinglePage
										Component={SingleComicLayout}
										dataType="comic"
									/>
								}
							/>
							<Route
								end
								path={`${paths.characterPage}:id`}
								element={
									<SinglePage
										Component={SingleCharLayout}
										dataType="char"
									/>
								}
							/>
							<Route path={'*'} element={<Page404 />} />
						</Routes>
					</Suspense>
				</main>
			</div>
		</Router>
	);
};

export default App;
