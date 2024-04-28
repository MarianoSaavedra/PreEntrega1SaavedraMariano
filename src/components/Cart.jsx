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
	const { items } = useContext(CartContext);

	const handleChange = (evento) => {
		const { name, value } = evento.target;

		setComprador((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
		const completados = Object.values(comprador).every(
			(field) => field !== '',
		);
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
		});
	};

	return (
		<>
			<h1>Pedido</h1>
			<div height={400} width={400}>
				<ul>
					{items.map((item) => (
						<li key={item.id}>
							<img
								src={item.thumbnail}
								alt='{item.title}'
								height={200}
								width={200}
							/>
							{item.title} - {item.cantidad} - ${item.price}
						</li>
					))}
				</ul>
			</div>

			<h2>DATOS</h2>
			<form>
				<div>
					<label>Nombre</label>
					<input
						type='text'
						value={comprador.name}
						name='name'
						required
						onChange={handleChange}
					/>
				</div>
				<div>
					<label>Celular</label>
					<input
						type='number'
						value={comprador.phone}
						name='phone'
						required
						onChange={handleChange}
					/>
				</div>
				<div>
					<label>Email</label>
					<input
						type='email'
						value={comprador.email}
						name='email'
						required
						onChange={handleChange}
					/>
				</div>
			</form>
			{completos && (
				<button type='button' onClick={handleOrder}>
					Comprar
				</button>
			)}
		</>
	);
};

export default Cart;
