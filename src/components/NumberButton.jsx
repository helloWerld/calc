import React from 'react';

const NumberButton = ({
	operand,
	setOperand,
	operator,
	setOperator,
	setEquation,
	button,
}) => {
	const handleNumberButtonClick = () => {
		console.log('Number Button', button);

		// Edge case, number already contains .
		if (operand?.includes('.') && button === '.') {
			return;
		}

		// Operand logic
		if (operand === null && operator === null) {
			setOperand(button);
			setEquation(String(button));
		} else if (operand !== null && operator === null) {
			setOperand((prev) => prev + button);
			setEquation((prev) => `${prev}${button}`);
		} else if (operand === null && operator !== null) {
			setOperand(button);
			setEquation((prev) => `${prev} ${button}`);
			setOperator(null);
		}
	};

	return (
		<button
			onClick={handleNumberButtonClick}
			className="hover:scale-105 active:scale-100 h-12 min-w-1/3 flex items-center justify-center text-white text-4xl hover:bg-gradient-to-br bg-gradient-to-b from-gray-600 via-gray-500 to-gray-600 rounded-md"
		>
			{button}
		</button>
	);
};

export default NumberButton;
