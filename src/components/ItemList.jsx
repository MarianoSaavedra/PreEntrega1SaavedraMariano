import Item from './Item';

const ItemList = ({ dataBase }) => {
	return dataBase.map((producto, key) => <Item key={key} producto={producto} />);
};

export default ItemList;
