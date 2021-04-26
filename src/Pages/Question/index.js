import React, { useContext, useRef, useState } from 'react';
import NavBar from '../../components/NavBar/Navbar';
import QuestionCard from '../../components/QuestionCard';
import styles from './index.module.scss';
import { QuizContext } from '../../data/QuizApiContext';
import { AnswersContext } from '../../data/AnswersContext';

const QuestionFragment = ({ step }) => {
	const quizData = useContext(QuizContext);
	const userAnswers = useContext(AnswersContext);
	const [stopWatch, setStopWatch] = useState(true);
	const [activeQuestion, setActiveQuestion] = useState(0);
	const [resetTimer, setResetTimer] = useState(0);

	const stopWatchTimer = useRef();

	const renderTime = ({ remainingTime }) => {
		return (
			<div className="timer">
				<div className={styles.timer_value} ref={stopWatchTimer}>
					{remainingTime}
				</div>
			</div>
		);
	};

	const handleExitHomeScreen = () => {
		step(1);
	};

	return (
		<div className={styles.background}>
			<NavBar
				isRunning={stopWatch}
				timer={renderTime}
				resetTimer={resetTimer}
				homeScreen={handleExitHomeScreen}
			/>

			{quizData?.length ? (
				<QuestionCard
					data={quizData[activeQuestion]}
					onAnswerUpdate={userAnswers[1]}
					numberOfQuestions={quizData?.length}
					activeQuestion={activeQuestion}
					setActiveQuestion={setActiveQuestion}
					setStopWatch={setStopWatch}
					currentTimer={stopWatchTimer}
					setResetTimer={setResetTimer}
					setStep={step}
				/>
			) : (
				'"Loading..."'
			)}
			<div className="p-5"></div>
		</div>
	);
};

export default QuestionFragment;
