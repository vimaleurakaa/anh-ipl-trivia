import React, { useContext, useEffect, useState } from 'react';
import styles from './index.module.scss';
import homeButton from '../../assets/home.svg';
import shareButton from '../../assets/share.svg';
import { Link } from 'react-router-dom';
import { AnswersContext } from '../../data/AnswersContext';
import { QuizContext } from '../../data/QuizApiContext';

const Register = () => {
	const quizData = useContext(QuizContext);
	const [answers] = useContext(AnswersContext);
	const [correctAnswer, setCorrectAnswer] = useState({
		count: 0,
	});

	useEffect(() => {
		let count = 0;
		let time = 0;
		answers.forEach((item, i) => {
			console.log(item.answer);
			if (item.answer === quizData[i].answer) {
				count++;
				time += parseInt(item.time);
			}
		});

		setCorrectAnswer({
			count: count + 1,
			time,
		});
		// eslint-disable-next-line
	}, []);

	return (
		<div className="background">
			<div className={styles.score_wrapper}>
				<h1>Your Best</h1>
				<p>
					{correctAnswer.count !== 0
						? parseInt(correctAnswer.count) + parseInt(correctAnswer.time) * 200
						: 'Calculating!'}
				</p>
			</div>

			<div className="container">
				<div className={styles.register_form}>
					<div className={styles.header}>
						<p>Submit your score to win the contest.</p>
					</div>
					<form>
						<div className={styles.form_input}>
							<label htmlFor="fname" className="form-label">
								Full Name
							</label>
							<input
								type="text"
								className="form-control"
								id="fname"
								placeholder="Full Name"
								required
							/>
						</div>
						<div className={styles.form_input}>
							<label htmlFor="email" className="form-label">
								Email address
							</label>
							<input
								type="email"
								className="form-control"
								id="email"
								placeholder="Enter Email ID"
								required
							/>
						</div>
						<div className={styles.terms}>
							<p>By submitting you agree to our terms and policies.</p>
						</div>

						<div className={styles.submit}>
							<button type="submit"></button>
						</div>
					</form>
				</div>
				<div className={styles.bottom_button}>
					<div className={styles.left_button}>
						<Link to="/">
							<img src={homeButton} alt="leader-board" />
						</Link>
					</div>
					<div className={styles.right_button}>
						<img src={shareButton} alt="help" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
