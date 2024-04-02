import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import data from "../data/products.json";

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
			<div>
				{info.map(producto =>
					<div key={producto.id}>
						<h3>{producto.title}</h3>
						<img src={producto.images[0]} alt={producto.title} />
						<span>{producto.description}</span>
						<span>{producto.category}</span>
						<Link to={`/item/${producto.id}`}> <button>Ir a detalle</button></Link>
            		</div>
				)}
			</div>
		</div>
	);
};

export default ItemListContainer;