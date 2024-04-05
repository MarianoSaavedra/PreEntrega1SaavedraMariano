import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import data from "../data/products.json";
import ItemList from './ItemList';

const ItemListContainer = () => {
	const [info, setInfo] = useState([]);
	const { id } = useParams();
	
	useEffect(() => {
		setTimeout(() => {
			if(id){
				const filtrarCategoria = data.filter(product => product.category === id)
				setInfo(filtrarCategoria)			
			}
			else{
				setInfo(data)
			}
		}, 2000)
	}, [id])

	return (		
		<div className="itemListContainer">
			<h1>Productos</h1>
			<ItemList info={info}/>
		</div>
	);
};

export default ItemListContainer;
