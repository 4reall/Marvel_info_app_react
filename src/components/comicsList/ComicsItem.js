import { Link } from 'react-router-dom';

const ComicsItem = ({ comicsList }) => {
	const items = comicsList.map((comic, i) => {
		return (
			<li key={i} className="comics__item">
				<Link to={`/Marvel_react_app/comics/${comic.id}`}>
					<img src={comic.thumbnail} alt="ultimate war" className="comics__item-img" />
					<div className="comics__item-name">{comic.title}</div>
					<div className="comics__item-price">{comic.price}</div>
				</Link>
			</li>
		);
	});

	return <ul className="comics__grid">{items}</ul>;
};

export default ComicsItem;
