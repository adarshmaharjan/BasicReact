import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

const getLocalStorage = () => {
	let list = localStorage.getItem('list');
	if (list) return JSON.parse(localStorage.getItem('list'));
	else return [];
};
function App() {
	const [name, setName] = useState('');
	const [list, setList] = useState(getLocalStorage());
	const [isEditing, setIsEditing] = useState(false);
	const [editID, setEditID] = useState(null);
	// const [isFocused, setIsFocused] = useState(false);
	const [alert, setAlert] = useState({
		show: false,
		msg: 'Hello world',
		type: 'success',
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('handleSubmit');
		if (!name) {
			//display alert
			showAlert(
				true,
				'danger',
				'Please Enter The Value In the Input Box'
			);
		} else if (name && isEditing) {
			//deal with edit
			setList(
				list.map((item) => {
					if (item.id === editID) {
						return { ...item, title: name };
					}
					return item;
				})
			);
			showAlert(true, 'success', 'Item Edited');
			setName('');
			setEditID(false);
			setEditID(null);
			// setIsFocused(false);
		} else {
			//show alert
			const newItem = {
				id: new Date().getTime().toString(),
				title: name,
			};
			setList([...list, newItem]);
			showAlert(true, 'success', 'Item Added');
			setName('');
		}
	};
	//functions
	const showAlert = (show = false, type = '', msg = '') => {
		setAlert({ show, type, msg });
	};
	const clearList = () => {
		setList([]);
		showAlert(true, 'success', 'Items Cleared');
	};
	const removeItem = (id) => {
		showAlert(true, 'danger', 'Item Removed');
		setList(list.filter((item) => item.id !== id));
	};
	const editItem = (id) => {
		setIsEditing(true);
		const specificItem = list.find((item) => item.id === id);
		setEditID(id);
		// console.log(specificItem);
		setName(specificItem.title);
	};
	useEffect(() => {
		localStorage.setItem('list', JSON.stringify(list));
	}, [list]);
	//component
	return (
		<section className='section-center'>
			<form className='grocery-form' onSubmit={handleSubmit}>
				{alert.show && (
					<Alert {...alert} removeAlert={showAlert} list={list} />
				)}
				<h3>Grocery Bud</h3>
				<div className='form-control'>
					<input
						type='text'
						className='grocery'
						placeholder='eg. eggs'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<button type='submit' className='submit-btn'>
						{isEditing ? 'Edit' : 'Submit'}
					</button>
				</div>
			</form>
			{list.length > 0 && (
				<div className='grocery-container'>
					<List
						items={list}
						removeItem={removeItem}
						editItem={editItem}
					/>
					<button className='clear-btn' onClick={clearList}>
						Clear Items
					</button>
				</div>
			)}
		</section>
	);
}

export default App;
