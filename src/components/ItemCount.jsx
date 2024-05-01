import { useState } from 'react';

const ItemCount = ({ onAdd, stock }) => {
	const [number, setNumber] = useState(1);

	const handleButtonRestar = () => {
		if (number > 1) {
			setNumber((prev) => prev - 1);
		}
	};
	const handleButtonSumar = () => {
		if (number < stock) {
			setNumber((prev) => prev + 1);
		}
	};
	const handleAdd = () => {
		setNumber(1);
		onAdd(number);
	};
	return (
		<>
			<div className='buttonCantidad'>
				<button onClick={handleButtonRestar}>-</button>
				<span>{number}</span>
				<button onClick={handleButtonSumar}>+</button>
			</div>
			<button onClick={handleAdd} className='buttonOnAdd'>
				Agregar al carrito
			</button>
		</>
	);
};

export default ItemCount;
