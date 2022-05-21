import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import paths from '../../pages/pathes';

import './comicsList.scss';

const ComicItem = ({ comicList }) => {
	const items = comicList.map((comic, i) => {
		return (
			<CSSTransition key={i} timeout={500} classNames="comics__item">
				<li className="comics__item">
					<Link to={`${paths.comicPage}${comic.id}`}>
						<img
							src={comic.thumbnail}
							alt="ultimate war"
							className="comics__item-img"
						/>
						<div className="comics__item-name">{comic.title}</div>
						<div className="comics__item-price">{comic.price}</div>
					</Link>
				</li>
			</CSSTransition>
		);
	});

	return (
		<ul className="comics__grid">
			<TransitionGroup component={null}>{items}</TransitionGroup>
		</ul>
	);
};

export default ComicItem;
