import { useEffect, useState } from 'react';
import Loading from './Loading.jsx';
import Tours from './Tours.jsx';

const url = 'https://www.course-api.com/react-tours-project';

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [tours, setTours] = useState([]);

	const removeTour = (id) => {
		const newTours = tours.filter((tour) => tour.id !== id);
		setTours(newTours);
	};

	const fetchTours = async () => {
		setIsLoading(true);
		try {
			const response = await fetch(url);
			const tours = await response.json();
			setTours(tours);
		} catch (error) {
			console.log(error);
		}
		setIsLoading(false);
	};

	useEffect(() => {
		fetchTours();
	}, []);

	if (isLoading) {
		return (
			<main>
				<Loading />
			</main>
		);
	}

	if (tours.length === 0) {
		return (
			<main>
				<div className="title">
					<h2>No tours left</h2>
					<button
						className="btn"
						style={{ marginTop: '2rem' }}
						type="button"
						onClick={fetchTours}
					>
						Refresh tours
					</button>
				</div>
			</main>
		);
	}

	return (
		<main>
			<Tours tours={tours} removeTour={removeTour} />
		</main>
	);
}
export default App;
