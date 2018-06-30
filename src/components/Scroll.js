import React from 'react';

//Scroll can rander children
const Scroll = (props) => {
	return (
		<div style={{ overflowY: 'scroll', borderTop: '5px solid blue', height: '800px'}}>
			{props.children}
		</div>
	);
}

export default Scroll;