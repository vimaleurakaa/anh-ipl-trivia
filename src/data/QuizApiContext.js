import React, { createContext, useEffect, useState } from 'react';

export const QuizContext = createContext();

export const QuizDataProvider = ({ children }) => {
	const [quizDataAPI, setQuizDataAPI] = useState();

	useEffect(() => {
		fetch(process.env.REACT_APP_FIREBASE_API)
			.then((res) => res.json())
			.then((data) => {
				setQuizDataAPI(data);
				console.log('fetching api');
			});
	}, []);
	return (
		<QuizContext.Provider value={quizDataAPI}>{children}</QuizContext.Provider>
	);
};
