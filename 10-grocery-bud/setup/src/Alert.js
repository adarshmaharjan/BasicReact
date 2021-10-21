import React, { useEffect } from 'react';

const Alert = (props) => {
	// console.log(props);
	const { type, msg, removeAlert, list } = props;

	useEffect(() => {
		const timeOut = setTimeout(() => {
			removeAlert();
		}, 2000);
		return () => clearTimeout(timeOut);
	}, [list]);
	return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
