const List = ({ arr, onCharSelected }) => {
	const focusRefs = [];

	const createRef = (ref) => {
		focusRefs.push(ref);
	};
	const onItemFocus = (arr, i) => {
		arr.forEach((item) => item.classList.remove('char__item_selected'));
		arr[i].classList.add('char__item_selected');
		arr[i].focus();
	};
	const items = arr.map((item, i) => {
		const imgNotAvailabe = item.thumbnail.match('image_not_available.jpg') ? { objectFit: 'contain' } : null;
		return (
			<li
				className="char__item"
				tabIndex={0}
				ref={createRef}
				key={item.id}
				onClick={() => {
					onCharSelected(item.id);
					onItemFocus(focusRefs, i);
				}}
				onKeyPress={(e) => {
					if (e.key === ' ' || e.key === 'Enter') {
						this.props.onCharSelected(item.id);
						this.onItemFocus(focusRefs, i);
					}
				}}>
				<img src={item.thumbnail} alt="Character's name" style={imgNotAvailabe} />
				<div className="char__name">{item.name}</div>
			</li>
		);
	});
	return <ul className="char__grid">{items}</ul>;
};

export default List;
