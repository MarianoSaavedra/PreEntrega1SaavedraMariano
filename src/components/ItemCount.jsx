import { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';

const ItemCount = ({ onAdd, stock }) => {
	const [number, setNumber] = useState(1);
	const { items, addItem, clearCart } = useContext(CartContext);

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
			<button onClick={handleButtonRestar}>-</button>
			<mark>{number}</mark>
			<button onClick={handleButtonSumar}>+</button>
			<button onClick={handleAdd}>Agregar al carrito</button>
		</>
	);
};

export default ItemCount;
