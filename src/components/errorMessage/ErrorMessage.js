import error from './error.gif';

const ErrorMessage = () => {
	return (
		<img
			style={{
				display: 'block',
				margin: '0 auto',
				width: '260px',
				height: '250px',
				objectFit: 'contain',
				// gridColumn: '2/3',
			}}
			src={error}
			alt="error"
		/>
	);
};

export default ErrorMessage;
