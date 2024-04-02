import { BrowserRouter, Routes, Route } from "react-router-dom"

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemListContainer';
import Error404 from './components/Error404';

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/" element={<ItemListContainer />} />

				<Route path="/category/:id" element={<ItemListContainer />} />

				<Route path="/item/:id" element={<ItemDetailContainer />} />

				<Route path="*" element={<Error404 />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
