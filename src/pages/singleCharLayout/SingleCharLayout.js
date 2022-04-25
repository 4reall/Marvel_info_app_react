import { useNavigate } from 'react-router-dom';
import './singleCharLayout.scss';

const SingleCharLayout = ({ data }) => {
	const { title, thumbnail, description } = data;
	const navigate = useNavigate();

	return (
		<div className="single-char">
			<img src={thumbnail} alt={title} className="single-char__img" />
			<div className="single-char__info">
				<h2 className="single-char__name">{title}</h2>
				<p className="single-char__descr">{description}</p>
			</div>
			<button
				className="button button__main"
				onClick={() => navigate(-1)}
			>
				<div className="inner">GO Back</div>
			</button>
		</div>
	);
};
export default SingleCharLayout;
