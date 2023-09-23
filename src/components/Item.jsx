import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const Item = ({ item }) => {

    return (

        <Card key={item.id} style={{ width: '18rem' }}>
            <Card.Img style={{ height: '200px' }} variant="top" src={item.img} />
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text className='spanCard'>
                    <span>${item.price}</span>
                    <span>{item.categoryId}</span>
                </Card.Text>
                <Link to={`/item/${item.id}`}>
                    <Button variant="primary">Detalles</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}