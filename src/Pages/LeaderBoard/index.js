import React from 'react';
import styles from './index.module.scss';
import { Link } from 'react-router-dom';

const LeaderBoard = () => {
	return (
		<div className="background">
			<div className={styles.header_wrapper}>
				<h2>LeaderBoard</h2>
			</div>
			<div className="container">
				<div className={styles.table_wrapper}>
					<table className={`table ${styles.table}`}>
						<thead>
							<tr>
								<th>Rank</th>
								<th>Name</th>
								<th>Score</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th>1</th>
								<td>Mark Otto</td>
								<td>Otto</td>
							</tr>
							<tr>
								<th>2</th>
								<td>Jacob</td>
								<td>Thornton</td>
							</tr>
							<tr>
								<th>2</th>
								<td>Jacob</td>
								<td>Thornton</td>
							</tr>
							<tr>
								<th>2</th>
								<td>Jacob</td>
								<td>Thornton</td>
							</tr>
							<tr>
								<th>2</th>
								<td>Jacob</td>
								<td>Thornton</td>
							</tr>
							<tr>
								<th>2</th>
								<td>Jacob</td>
								<td>Thornton</td>
							</tr>

							<tr>
								<th>2</th>
								<td>Jacob</td>
								<td>Thornton</td>
							</tr>
							<tr>
								<th>2</th>
								<td>Jacob</td>
								<td>Thornton</td>
							</tr>
							<tr>
								<th>2</th>
								<td>Jacob</td>
								<td>Thornton</td>
							</tr>
							<tr>
								<th>2</th>
								<td>Jacob</td>
								<td>Thornton</td>
							</tr>
							<tr>
								<th>2</th>
								<td>Jacob</td>
								<td>Thornton</td>
							</tr>
							<tr>
								<th>2</th>
								<td>Jacob</td>
								<td>Thornton</td>
							</tr>
							<tr>
								<th>2</th>
								<td>Jacob</td>
								<td>Thornton</td>
							</tr>
							<tr>
								<th>2</th>
								<td>Jacob</td>
								<td>Thornton</td>
							</tr>
							<tr>
								<th>2</th>
								<td>Jacob</td>
								<td>Thornton</td>
							</tr>
							<tr>
								<th>2</th>
								<td>Jacob</td>
								<td>Thornton</td>
							</tr>
							<tr>
								<th>2</th>
								<td>Jacob</td>
								<td>Thornton</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div className={styles.bottom_button}>
				<Link to="/">
					<div className={styles.button}>Home</div>
				</Link>
			</div>
		</div>
	);
};

export default LeaderBoard;
