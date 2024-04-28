import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore';

import ItemList from './ItemList';

const ItemListContainer = () => {
	const [dataBase, setDataBase] = useState([]);

	const [isLoading, setIsLoading] = useState(true);

	const { useParamsID } = useParams();

	useEffect(() => {
		const db = getFirestore();
		let refCollection;

		!useParamsID
			? (refCollection = collection(db, 'items'))
			: (refCollection = query(
					collection(db, 'items'),
					where('categoryID', '==', useParamsID),
			  ));

		getDocs(refCollection)
			.then((snapshot) => {
				setDataBase(
					snapshot.docs.map((doc) => {
						return { id: doc.id, ...doc.data() };
					}),
				);
			})
			.finally(() => setIsLoading(false));
	}, [useParamsID]);

	if (isLoading) return <div className='spinner'></div>;

	return (
		<div className='itemListContainer'>
			<h1 className='itemListContainerH1'>RANDOM STORE</h1>
			<ItemList dataBase={dataBase} />
		</div>
	);
};

export default ItemListContainer;
