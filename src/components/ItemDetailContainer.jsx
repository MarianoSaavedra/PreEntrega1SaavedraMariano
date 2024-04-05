import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"

import data from "../data/products.json"

const ItemDetailContainer = () => {
	const [item, setItem] = useState([])
	const { id } = useParams()

	useEffect(() => {		
		setItem(data.find((producto) => producto.id === Number(id)));
    }, [id])

	return (		
		<div className="itemContenedor">
			<div className="itemDetail">
				<h1>{item.title}</h1>
				<h3>{item.description}</h3>
				<img src={item.thumbnail} alt={item.title} />
				<span>{item.description}</span>
				<span>{item.category}</span>
				<Link to="/"><button>Home</button></Link>
			</div>
		</div>
	);
};

export default ItemDetailContainer;