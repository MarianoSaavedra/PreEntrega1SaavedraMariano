import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { CartProvider } from './contexts/CartContext';

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Error404 from './components/Error404';
import Cart from './components/Cart';

function App() {
	return (
		<CartProvider>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path='/' element={<ItemListContainer />} />

					<Route path='/category/:useParamsID' element={<ItemListContainer />} />

					<Route path='/item/:id' element={<ItemDetailContainer />} />
					<Route path='/cart' element={<Cart />} />

					<Route path='*' element={<Error404 />} />
				</Routes>
			</BrowserRouter>
		</CartProvider>
	);
}

export default App;
