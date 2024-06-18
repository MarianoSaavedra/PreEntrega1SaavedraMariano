import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import ItemCount from './ItemCount';

const Item = ({ producto }) => {
	const { addItem } = useContext(CartContext);

	const add = (cantidad) => {
		addItem(producto, cantidad);
	};

	return (
		<div className='card'>
			<h3 className='cardH3'>{producto.title}</h3>
			<span className='cardSpan'>{producto.categoryID}</span>
			<div className='boxImg'>
				<img src={producto.thumbnail} alt={producto.title} />
			</div>
			<span className='cardSpan'>$ {producto.price}</span>
			<span className='cardSpan'>STOCK: {producto.stock}</span>
			<Link to={`/item/${producto.id}`}>
				<button className='cardButton'>Ir al detalle</button>
			</Link>
			<ItemCount onAdd={add} stock={producto.stock} />
		</div>
	);
};

export default Item;
