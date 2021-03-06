import ComicsList from '../components/comicsList/ComicsList';
import ErrorBoundary from '../components/errorBoundary/errorBoundary';
import AppBanner from '../components/appBanner/AppBanner';

const ComicsPage = () => {
	return (
		<>
			<AppBanner />
			<ErrorBoundary>
				<ComicsList />
			</ErrorBoundary>
		</>
	);
};

export default ComicsPage;
