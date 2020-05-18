import React from 'react';

function StepCounter(props) {
	return (
        <div className="moveCount">
            Move Count: {props.steps}
        </div>			
	)
}

export default StepCounter;