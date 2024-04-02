import { Link } from "react-router-dom";

const Item = ({producto}) => {
    <div key={producto.id}>
        <h3>{producto.title}</h3>
        <img src={producto.thumbnail} alt={producto.title} />
        <span>{producto.description}</span>
        <span>{producto.category}</span>
        <Link to={`/item/${producto.id}`}></Link>
    </div> 
}

export default Item;