import React from 'react';

function Square(props) {
	return (
        <button className="square" onClick={props.onClick} color={props.value}>
            
        </button>
	);
}

export default Square;