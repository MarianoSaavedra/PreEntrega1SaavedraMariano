import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, getDoc, doc } from 'firebase/firestore';

import { CartContext } from '../contexts/CartContext';
import ItemCount from './ItemCount';

const ItemDetailContainer = () => {
	const [item, setItem] = useState([]);
	const { id } = useParams();
	const { addItem } = useContext(CartContext);

	useEffect(() => {
		const db = getFirestore();

		const refDoc = doc(db, 'items', id);

		getDoc(refDoc).then((snapshot) => {
			setItem({ id: snapshot.id, ...snapshot.data() });
		});
	}, []);

	const add = (cantidad) => {
		addItem(item, cantidad);
	};
	return (
		<div className='itemContenedor'>
			<div className='itemDetail'>
				<h1>{item.title}</h1>
				<span>{item.categoryID}</span>
				<img src={item.thumbnail} alt={item.title} />
				<span>{item.description}</span>

				<span>PRECIO: ${item.price}</span>
				<span>STOCK:{item.stock}</span>
				<ItemCount onAdd={add} stock={item.stock} />
			</div>
		</div>
	);
};

export default ItemDetailContainer;
