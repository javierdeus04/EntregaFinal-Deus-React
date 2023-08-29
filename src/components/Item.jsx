import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const Item = ({ item }) => {

    return (

        <Card key={item.id} style={{ width: '18rem' }}>
            <Card.Img style={{ height: '200px' }} variant="top" src={item.imageUrl} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text className='spanCard'>
                    <span>${item.price}</span>
                    <span>{item.category.toUpperCase()}</span>
                </Card.Text>
                <Link to={`/item/${item.id}`}>
                    <Button variant="primary">Detalles</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}