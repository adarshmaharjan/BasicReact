import React from 'react';

const Form = (props) => {
	const { handleSubmit, count, setCount } = props;
	return (
		<form className='lorem-form' onSubmit={handleSubmit}>
			<label htmlFor='amount'>paragraphs:</label>
			<input
				type='number'
				name='amount'
				id='amount'
				value={count}
				onChange={(e) => setCount(e.target.value)}
			/>
			<button type='submit' className='btn'>
				generate
			</button>
		</form>
	);
};
export default Form;
