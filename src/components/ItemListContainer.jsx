import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import { ItemList } from "./ItemList";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import Container from "react-bootstrap/esm/Container";

export const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();


    useEffect(() => {

        const db = getFirestore();
        const refCollection = collection(db, "items");
        setIsLoading(true);

        getDocs(refCollection).then((snapshot) => {
            if (snapshot.size === 0) {
                setIsLoading(true);
            } else {
                const data = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                if (!id) {
                    setItems(data);
                } else {
                    const itemsFiltered = data.filter(item => item.categoryId === id);
                    setItems(itemsFiltered);
                }
            }
            setIsLoading(false);
        });
    }, [id]);

    return (
        <Container>
            <h1>Productos</h1>
            <div className="box">
                {isLoading ? (
                    <Spinner animation="border" role="status">
                        <span className="sr-only"></span>
                    </Spinner>
                ) : (
                    <ItemList items={items} />
                )}
            </div>
        </Container>
    );
};
