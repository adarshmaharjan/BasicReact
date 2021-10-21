import React, { useState } from 'react';
import data from './data';

//components
import Form from './Form';
import Article from './Article';
function App() {
	const [count, setCount] = useState(0);
	const [text, setText] = useState([]);
	console.log(data.length);
	const handleSubmit = (e) => {
		e.preventDefault();
		let amount = parseInt(count);
		// if (amount > -1 && amount < data.length)
		if (count <= 0) amount = 1;
		if (count > data.length - 1) amount = data.length - 1;
		setText(data.slice(0, amount));
	};
	return (
		<section className='section-center'>
			<h3>Just a text</h3>
			<Form
				handleSubmit={handleSubmit}
				count={count}
				setCount={setCount}
			/>
			<Article text={text} />
		</section>
	);
}

export default App;
