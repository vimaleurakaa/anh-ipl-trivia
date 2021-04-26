import styles from './index.module.scss';
import titleImage from '../../assets/title_card.png';
import playButton from '../../assets/play_btn.svg';
import leaderboardButton from '../../assets/leader_board.svg';
import helpButton from '../../assets/help.svg';
import { Link } from 'react-router-dom';

const StartPage = ({ onQuizStart }) => {
	return (
		<div className="background">
			<div className="container">
				<div className={styles.cricket_title}>
					<img src={titleImage} alt="title" />
				</div>
				<div className={styles.play_button} onClick={onQuizStart}>
					<img src={playButton} alt="play" />
				</div>
				<div className={styles.powered_by}>
					<p>
						Powered by
						<br /> Arm & Hammer Arabia.
					</p>
				</div>

				<div className={styles.bottom_button}>
					<div className={styles.left_button}>
						<Link to="/leaderboard">
							<img src={leaderboardButton} alt="leader-board" />
						</Link>
					</div>
					<div className={styles.right_button}>
						<img src={helpButton} alt="help" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default StartPage;
