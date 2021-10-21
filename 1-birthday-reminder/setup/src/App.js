import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
	const [people, setPeople] = useState(data);

	const clearAll = () => {
		setPeople((prevState) => (prevState = []));
	};

	return (
		<main>
			{console.log(people)}
			<section className='container'>
				<h3>{people.length} BirthDay Today</h3>

				<List people={people} />
				<button onClick={clearAll}>Clear All</button>
			</section>
		</main>
	);
}

export default App;
