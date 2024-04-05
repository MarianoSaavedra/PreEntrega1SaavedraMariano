import { Link } from "react-router-dom";

const Item = ({producto}) => {
return (
    <div className="card">
        <h3>{producto.title}</h3>
        <div className="boxImg">
            <img src={producto.thumbnail} alt={producto.title} />
        </div>
        <span>${producto.price}</span>
        <span>{producto.category}</span>
        <Link to={`/item/${producto.id}`}><button>Ir al detalle</button></Link>
    </div> 
)
}

export default Item;