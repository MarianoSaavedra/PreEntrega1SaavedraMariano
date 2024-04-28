import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [items, setItems] = useState([]);

	const clearCart = () => {
		setItems([]);
	};

	const addItem = (item, cantidad) => {
		const exist = items.some((i) => i.id === item.id);

		if (exist) {
			const updateItems = items.map((i) => {
				if (i.id === item.id) {
					return {
						...i,
						cantidad: i.cantidad + cantidad,
					};
				} else {
					return i;
				}
			});
			setItems(updateItems);
		} else {
			setItems((prev) => {
				return [...prev, { ...item, cantidad }];
			});
		}
	};

	return (
		<CartContext.Provider value={{ items, clearCart, addItem }}>
			{children}
		</CartContext.Provider>
	);
};
