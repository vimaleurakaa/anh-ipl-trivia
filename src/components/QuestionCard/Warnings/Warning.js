import React from 'react';
import { BsInfoCircle } from 'react-icons/bs';

const Warning = () => {
	return (
		<div className="Warning">
			<div className="toast_warning_card">
				<BsInfoCircle />
				<p>Please select one at least one answer!</p>
			</div>
		</div>
	);
};

export default Warning;
