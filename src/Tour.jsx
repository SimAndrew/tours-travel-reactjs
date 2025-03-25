import { useState } from 'react';

const Tour = ({ id, image, info, name, price, removeTour }) => {
	const [readMore, setRreadMore] = useState(false);

	return (
		<article className="single-tour">
			<img className="img" src={image} alt={name} />
			<span className="tour-price">{price}</span>
			<div className="tour-info">
				<h5>{name}</h5>
				<p>
					{readMore ? info : `${info.substring(0, 200)}...`}

					<button
						className="info-btn"
						type="button"
						onClick={() => setRreadMore(!readMore)}
					>
						{readMore ? 'Show less' : 'Read more'}
					</button>
				</p>
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
