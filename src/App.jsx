import { useEffect, useState } from 'react';
import Loading from './Loading.jsx';
import Tours from './Tours.jsx';

const url = 'https://www.course-api.com/react-tours-project';

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [tours, setTours] = useState([]);

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

	return (
		<main>
			<Tours tours={tours} />
		</main>
	);
}
export default App;
