import Item from './Item';

const ItemList = ({ info }) => {
	return info.map((producto, key) => <Item key={key} producto={producto} />);
};

export default ItemList;
