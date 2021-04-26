import React, { useRef, useState } from 'react';
import './index.scss';
import qCard from '../../assets/q_card.svg';
import qNumber from '../../assets/question_circle.svg';
import { BsInfoCircle } from 'react-icons/bs';
import infoImage from '../../assets/info_button.svg';
import { Redirect } from 'react-router-dom';

const QuestionCard = ({
	data,
	onAnswerUpdate,
	numberOfQuestions,
	activeQuestion,
	setActiveQuestion,
	setStopWatch,
	currentTimer,
	setResetTimer,
	setStep,
}) => {
	const radiosWrapper = useRef();
	const [selected, setSelected] = useState(false);
	const [count, setCount] = useState(1);
	const [redirect, setRedirect] = useState(false);

	const changeHandler = (e) => {
		setSelected(e.target.value);
		setStopWatch(false);

		const findCheckedInput = radiosWrapper.current.querySelectorAll('input');
		findCheckedInput.forEach((item) =>
			item.checked ? (item.disabled = false) : (item.disabled = true)
		);
	};

	const nextQuestionHandler = () => {
		onAnswerUpdate((prevState) => {
			return [
				...prevState,
				{
					question: data.question,
					answer: selected,
					time: currentTimer.current.innerText,
				},
			];
		});
		if (activeQuestion < numberOfQuestions - 1) {
			setActiveQuestion(activeQuestion + 1);
		} else {
			console.log('Questions ended');
			// setStep(3);
			setRedirect(true);
		}

		setSelected(false);
		setStopWatch(true);
		setResetTimer((prevState) => prevState + 1);
		setCount((prevState) => prevState + 1);
	};

	if (redirect) {
		return <Redirect to="/register" />;
	}

	return (
		<>
			<div className="container question_card">
				<div className="Question">
					<div className="banner">
						<img src={qCard} alt="banner" />
					</div>

					<div className="q_number">
						<img src={qNumber} alt="question_number" />
						<span>{count}</span>
					</div>

					<div className="question">
						<p>{data.question}</p>
					</div>
					<div className="score">
						<p>🥎 6 Runs</p>
					</div>
				</div>

				<div className="Answer">
					<div className="answer_card" ref={radiosWrapper}>
						{data?.choices.map((choice, index) => (
							<div className="option" key={choice + index + count}>
								<input
									className="radio"
									type="radio"
									name="radio_check"
									id={choice + index + count}
									onChange={changeHandler}
									value={choice}
								/>
								<label htmlFor={choice + index + count}>
									<span />
									{choice}
								</label>
							</div>
						))}
					</div>
				</div>

				<div className="Warning">
					<div className="toast_warning_card">
						<BsInfoCircle />
						<p>Please select one at least one answer!</p>
					</div>
				</div>
			</div>
			<div className={`info_button  ${selected && 'info_button_anim'}`}>
				<img src={infoImage} alt="info" />
			</div>

			<div className={`nxt_question_button ${selected && 'nxt_button_anim'}`}>
				<button onClick={nextQuestionHandler}>
					{activeQuestion !== numberOfQuestions - 1
						? 'Next Question'
						: 'Finish'}
				</button>
			</div>
		</>
	);
};

export default QuestionCard;
