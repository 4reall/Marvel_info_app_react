import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useRef } from 'react';

const List = ({ arr, onCharSelected }) => {
	const focusRefs = useRef([]);

	const onItemFocus = (arr, i) => {
		arr.forEach((item) => item.classList.remove('char__item_selected'));
		arr[i].classList.add('char__item_selected');
		arr[i].focus();
	};
	const items = arr.map((item, i) => {
		const imgNotAvailabe = item.thumbnail.match('image_not_available.jpg')
			? { objectFit: 'contain' }
			: null;
		return (
			<CSSTransition key={item.id} timeout={500} classNames="char__item">
				<li
					className="char__item"
					tabIndex={0}
					ref={(e) => (focusRefs.current[i] = e)}
					key={item.id}
					onClick={() => {
						onCharSelected(item.id);
						onItemFocus(focusRefs.current, i);
					}}
					onKeyDown={(e) => {
						if (e.key === ' ' || e.key === 'Enter') {
							onCharSelected(item.id);
							onItemFocus(focusRefs.current, i);
						}
					}}
				>
					<img
						src={item.thumbnail}
						alt="Character's name"
						style={imgNotAvailabe}
					/>
					<div className="char__name">{item.name}</div>
				</li>
			</CSSTransition>
		);
	});
	return (
		<ul className="char__grid">
			<TransitionGroup component={null}>{items}</TransitionGroup>
		</ul>
	);
};

export default List;
