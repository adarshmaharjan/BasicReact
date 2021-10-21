import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

// console.log(allCategories);
function App() {
	// return <h2>menu project setup</h2>;
	const allCategories = [
		'all',
		...new Set(items.map((item) => item.categories)),
	];

	const [menuItems, setMenuItems] = useState(items);
	const [categories, setCategories] = useState(allCategories);

	const filterItems = (category) => {
		// console.log(category);
		if (category === 'all') {
			setMenuItems(items);
			return;
		}
		const newItems = items.filter((item) => item.category === category);
		setMenuItems(newItems);
	};
	return (
		<main>
			<section className='menu section'>
				<div className='title'>
					<h2>Our Menu</h2>
					<div className='underline'></div>
				</div>
				<Categories filterItems={filterItems} categories={categories} />
				<Menu items={menuItems} />
			</section>
		</main>
	);
}

export default App;
