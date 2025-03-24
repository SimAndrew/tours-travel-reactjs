const Tour = ({ id, image, info, name, price, removeTour }) => {
	return (
		<article className="single-tour">
			<img className="img" src={image} alt={name} />
			<span className="tour-price">{price}</span>
			<div className="tour-info">
				<h5>{name}</h5>
				<p>{info}</p>
				<button
					className="btn btn-block delete-btn"
					type="button"
					onClick={() => removeTour(id)}
				>
					Not interested
				</button>
			</div>
		</article>
	);
};

export default Tour;
