import Item from "./Item";

const ItemList = ({info}) => {
	return	info.map((producto) => <Item key={producto.id} producto={producto} />)
};

export default ItemList;