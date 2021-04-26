import React from 'react';
import styles from './nav.module.scss';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import logo from '../../assets/logo.png';

const NavBar = ({ isRunning, timer, resetTimer, homeScreen }) => {
	return (
		<>
			<nav
				className={`navbar sticky-top navbar-light ${styles.nav_background}`}
			>
				<div className="container">
					<div className={styles.exit_btn} onClick={homeScreen}>
						<span>EXIT</span>
					</div>
					<div className={styles.svg}>
						<CountdownCircleTimer
							key={resetTimer}
							isPlaying={isRunning}
							duration={10}
							colors={[['#bf1a1a']]}
						>
							{timer}
						</CountdownCircleTimer>
					</div>
					<div className={styles.nav_logo}>
						<img src={logo} alt="logo" />
					</div>
				</div>
			</nav>
		</>
	);
};

export default NavBar;
