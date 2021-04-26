import React from 'react';

const Answer = () => {
	return (
		<div className="Answer">
			<div className="answer_card">
				<div className="option">
					<input type="radio" name="radio_check" id="answer_1" />
					<label htmlFor="answer_1">
						<span />
						Andrew Tye
						<div></div>
					</label>
				</div>

				<div className="option">
					<input type="radio" name="radio_check" id="answer_2" />
					<label htmlFor="answer_2">
						<span />
						Adam Zampa
						<div></div>
					</label>
				</div>

				<div className="option">
					<input type="radio" name="radio_check" disabled id="answer_3" />
					<label htmlFor="answer_3">
						<span />
						James Faulkner
						<div></div>
					</label>
				</div>

				<div className="option">
					<input type="radio" name="radio_check" id="answer_4" />
					<label htmlFor="answer_4">
						<span />
						Nicholas Pooran
						<div></div>
					</label>
				</div>
			</div>
		</div>
	);
};

export default Answer;
