import React, { useState, createContext } from 'react';

export const AnswersContext = createContext();

export const AnswersContextProvider = ({ children }) => {
	const [answer, setAnswer] = useState([]);

	return (
		<AnswersContext.Provider value={[answer, setAnswer]}>
			{children}
		</AnswersContext.Provider>
	);
};
