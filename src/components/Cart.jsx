import { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import { collection, getFirestore, addDoc } from 'firebase/firestore';

const initialValues = {
	name: '',
	phone: '',
	email: '',
};
const Cart = () => {
	const [comprador, setComprador] = useState(initialValues);
	const [completos, setCamposCompletos] = useState(false);
	const { items, clearCart, removeItem } = useContext(CartContext);

	const handleChange = (evento) => {
		const { name, value } = evento.target;

		setComprador((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
		const completados = Object.values(comprador).every((field) => field.length > 0);

		setCamposCompletos(completados);
	};

	const total = items.reduce((acu, act) => acu + act.price * act.cantidad, 0);
	const handleOrder = () => {
		const order = {
			comprador,
			items,
			total,
		};
		const db = getFirestore();
		const orderCollection = collection(db, 'orders');
		addDoc(orderCollection, order).then(({ id }) => {
			if (id) {
				alert(`Su orden: ${id} ha sido creada exitosamente `);
			}
			clearCart();
			window.location.assign('/');
		});
	};

	return (
		<div className='formularioFinal'>
			<div className='formularioFinalPedido'>
				<h3>Pedido</h3>
				<ul>
					{items.map((item) => (
						<li key={item.id}>
							<div>
								<img src={item.thumbnail} alt='{item.title}' />
								{item.title} - {item.cantidad} - ${item.price}
								<button onClick={() => removeItem(item.id)}>Quitar Item</button>
							</div>
						</li>
					))}
				</ul>
			</div>

			<form className='formularioFinalDatos'>
				<h3>Informacion</h3>
				<div>
					<label>Nombre</label>
					<input type='text' value={comprador.name} name='name' onChange={handleChange} />
				</div>
				<div>
					<label>Celular</label>
					<input
						type='number'
						value={comprador.phone}
						name='phone'
						onChange={handleChange}
					/>
				</div>
				<div>
					<label>Email</label>
					<input
						type='email'
						value={comprador.email}
						name='email'
						onChange={handleChange}
					/>
				</div>
				<button onClick={clearCart}>Vaciar Carrito</button>
				{completos && (
					<button type='button' onClick={handleOrder}>
						Comprar
					</button>
				)}
			</form>
		</div>
	);
};

export default Cart;
