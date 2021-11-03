import React, { useState } from "react";
import PropTypes from "prop-types";

const Square = props => {
	const [value, setValue] = useState("");

	return (
		<div
			className="square"
			onClick={() => {
				if (!value) {
					setValue(props.value);
					props.continueGame(props.position);
				}
			}}>
			{value}
		</div>
	);
};

Square.propTypes = {
	value: PropTypes.string,
	continueGame: PropTypes.func,
	position: PropTypes.number
};

export default Square;
