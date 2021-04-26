import React, { useContext, useState } from 'react';
import Questions from '../Pages/Question';
import Start from '../Pages/Start';

import { AnswersContext } from '../data/AnswersContext';

const Container = () => {
	const [step, setStep] = useState(1);
	const [answer] = useContext(AnswersContext);

	const quizStartHandler = () => {
		setStep(2);
	};

	console.log(answer);

	return (
		<div className="App">
			{step === 1 && <Start onQuizStart={quizStartHandler} />}
			{step === 2 && <Questions step={setStep} />}
			{step === 3 && <h1>END Screen</h1>}
		</div>
	);
};

export default Container;
