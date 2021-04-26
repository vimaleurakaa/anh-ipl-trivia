import React from 'react';

const Start = ({ onQuizStart }) => {
	return (
		<div className="card">
			<div className="card-body">
				<div className="p-3">
					<h1>Start the quiz</h1>
					<p>Good luck!</p>
					<button className="btn btn-primary w-100" onClick={onQuizStart}>
						Start
					</button>
				</div>
			</div>
		</div>
	);
};

export default Start;
