import { Link } from 'react-router-dom';

import ErrorMessage from '../components/errorMessage/ErrorMessage';
import paths from './pathes';

const Page404 = () => {
	return (
		<div>
			<ErrorMessage />
			<p
				style={{
					textAlign: 'center',
					fontWeight: 'bold',
					fontSize: '24px',
				}}
			>
				Page doesn't exist
			</p>
			<Link
				style={{
					display: 'block',
					textAlign: 'center',
					fontWeight: 'bold',
					fontSize: '24px',
					marginTop: '30px',
					color: '#9F0013',
				}}
				to={paths.mainPage}
			>
				Back to main page
			</Link>
		</div>
	);
};

export default Page404;
