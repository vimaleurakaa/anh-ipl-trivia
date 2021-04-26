import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from '../container/Container';
import Register from '../Pages/Register';
import LeaderBoard from '../Pages/LeaderBoard';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Container} />
				<Route exact path="/register" component={Register} />
				<Route exact path="/leaderboard" component={LeaderBoard} />
			</Switch>
		</Router>
	);
};

export default App;
