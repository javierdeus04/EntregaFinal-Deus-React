import { useState } from "react";
import { useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner'
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { getDoc, getFirestore, doc } from "firebase/firestore";
import Container from "react-bootstrap/esm/Container";


export const ItemDetailContainer = (props) => {

    const [item, setItem] = useState(null)
    const [isLoading, setIsLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const refDoc = doc(db, "items", id)

        getDoc(refDoc).then((snapshot) => {
            if (snapshot.exists()) {
                setItem({ id: snapshot.id, ...snapshot.data() });
            } else {
                setNotFound(true);
            }
        }).finally(() => setIsLoading(false))
    }, [id]);

    if (isLoading) return (
        <div className="box">
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    );

    return (
        <div className="detailItem">
            {notFound ? (
                <Container>
                    <h2>Producto no encontrado...</h2>
                </Container>
            ) : (
                <>
                    <h1 style={{ textAlign: 'center' }}>Detalle del producto</h1>
                    <ItemDetail className="box" item={item} />
                </>
            )}

        </div>
    )
}