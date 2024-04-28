import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
	getFirestore,
	getDocs,
	collection,
	query,
	where,
} from 'firebase/firestore';

import ItemList from './ItemList';
const ItemListContainer = () => {
	const [info, setInfo] = useState([]);
	const [loading, setLoading] = useState(true);
	const { id } = useParams();

	useEffect(() => {
		const db = getFirestore();

		let refCollection;

		if (!id) refCollection = collection(db, 'items');
		else {
			refCollection = query(
				collection(db, 'items'),
				where('categoryID', '==', id),
			);
		}

		getDocs(refCollection)
			.then((snapshot) => {
				setInfo(
					snapshot.docs.map((doc) => {
						return { id: doc.id, ...doc.data() };
					}),
				);
			})
			.finally(() => setLoading(false));
	}, [id]);

	if (loading) return <div>Cargando</div>;

	return (
		<div className='itemListContainer'>
			<h1>Productos</h1>
			<ItemList info={info} />
		</div>
	);
};

export default ItemListContainer;
