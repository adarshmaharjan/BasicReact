import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = (props) => {
	// console.log(props);
	const { rgb, weight, index, hexColor } = props;
	// console.log(rgb, weight, index, hexColor);

	const bcg = rgb.join(',');
	const hex = rgbToHex(...rgb);
	const hexValue = `#${hexColor}`;
	// console.log(bcg);
	const [alert, setAlert] = useState(false);
	useEffect(() => {
		const timeOut = setTimeout(() => {
			setAlert(false);
		}, 1000);
		// console.log(timeOut);
		return () => clearTimeout(timeOut);
	}, [alert]);
	return (
		<article
			className={`color ${index > 10 && 'color-light'}`}
			style={{ backgroundColor: `rgb(${bcg})` }}
			onClick={() => {
				setAlert(true);
				navigator.clipboard.writeText(hexValue);
			}}
		>
			<p className='percent-value'>{weight}%</p>
			<p className='color-value'>{hexValue}</p>
			{alert && <p className='alert'>copied to clipboard value</p>}
		</article>
	);
};

export default SingleColor;
