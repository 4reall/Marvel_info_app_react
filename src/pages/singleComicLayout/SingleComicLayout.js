import { useNavigate } from 'react-router-dom';
import './singleComicLayout.scss';

const SingleComicLayout = ({ data }) => {
	const { title, id, thumbnail, pages, language, price, description } = data;
	const navigate = useNavigate();

	return (
		<div className="single-comic">
			<img src={thumbnail} alt={title} className="single-comic__img" />
			<div className="single-comic__info">
				<h2 className="single-comic__name">{title}</h2>
				<p className="single-comic__descr">{description}</p>
				<p className="single-comic__descr">{pages}</p>
				<p className="single-comic__descr">Language: {language}</p>
				<div className="single-comic__price">{price}</div>
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
export default SingleComicLayout;
