import React, { useState, useEffect, useRef } from 'react';

const Questions = ({
	data,
	onAnswerUpdate,
	numberOfQuestions,
	activeQuestion,
	onSetActiveQuestion,
	onSetStep,
}) => {
	const [selected, setSelected] = useState('');
	const [error, setError] = useState('');
	const radiosWrapper = useRef();

	useEffect(() => {
		const findCheckedInput = radiosWrapper.current.querySelector(
			'input:checked'
		);

		const findCheckedInputAll = radiosWrapper.current.querySelectorAll('input');
		findCheckedInputAll.forEach((item) => {
			item.disabled = false;
		});

		if (findCheckedInput) {
			findCheckedInput.checked = false;
		}
	}, [data]);

	const changeHandler = (e) => {
		setSelected(e.target.value);
		const findCheckedInput = radiosWrapper.current.querySelectorAll('input');
		findCheckedInput.forEach((item) => {
			item.disabled = true;
		});
		console.log(findCheckedInput);

		if (error) {
			setError('');
		}
	};

	const nextClickHandler = (e) => {
		if (selected === '') {
			return setError('Please Select an Option');
		}
		onAnswerUpdate((prevState) => {
			return [...prevState, { q: data.question, a: selected }];
		});
		setSelected('');
		if (activeQuestion < numberOfQuestions - 1) {
			onSetActiveQuestion(activeQuestion + 1);
		} else {
			onSetStep(3);
		}
	};

	return (
		<div className="card shadow-lg">
			<div className="card-body">
				<div className="p-4">
					<h2 className="mb-5">{data.question}</h2>
					<div className="control" ref={radiosWrapper}>
						{data.choices.map((choice, i) => (
							<label className="radio bg-light mb-3" key={i}>
								<input
									className="radio_btn"
									type="radio"
									name="answer"
									value={choice}
									onChange={changeHandler}
								/>
								{choice}
							</label>
						))}
					</div>
					{error && <div className="text-danger">{error}</div>}
					<button
						className="btn btn-primary w-100 mt-4"
						onClick={nextClickHandler}
					>
						Next
					</button>
				</div>
			</div>
		</div>
	);
};

export default Questions;
