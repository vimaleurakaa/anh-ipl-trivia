import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './routes/App';
import { AnswersContextProvider } from './data/AnswersContext';
import { QuizDataProvider } from './data/QuizApiContext';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
	<React.StrictMode>
		<QuizDataProvider>
			<AnswersContextProvider>
				<App />
			</AnswersContextProvider>
		</QuizDataProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();
