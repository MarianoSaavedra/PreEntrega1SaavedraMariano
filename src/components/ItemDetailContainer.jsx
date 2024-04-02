import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import data from "../data/products.json"

const ItemDetailContainer = () => {
	const [item, setItem] = useState()
	const { id } = useParams()

	useEffect(() => {		
		setItem(data.find((i) => i.id === Number(id)));
	}, [id])



	return (		
		<div className="itemListContainer">
			<h1>Productos</h1>
			<div>
				{item.map(producto =>
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

export default ItemDetailContainer;