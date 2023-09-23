import Container from "react-bootstrap/esm/Container"
import Table from 'react-bootstrap/Table';
import { useContext, useState } from "react"
import { CartContext } from "../contexts/CartContext"
import { Link } from "react-router-dom";
import { getFirestore, collection, addDoc } from "firebase/firestore"
import Swal from 'sweetalert2';
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';

export const Checkout = () => {
    const { cartList, deleteItem, removeList } = useContext(CartContext)

    const total = () => cartList.reduce(
        (acc, currentValue) => acc + currentValue.quantity * currentValue.price, 0
    )
    const isCartEmpty = cartList.length === 0;

    const [formValues, setFormValues] = useState({
        email: "",
        name: "",
        phone: "",
    });

    const handleChange = ev => {
        setFormValues(prev => ({
            ...prev,
            [ev.target.name]: ev.target.value
        }));
    }

    const handleFormSubmit = (ev) => {
        ev.preventDefault();
        const form = ev.target;
        if (form.checkValidity()) {
            sendOrder();
        }
    };

    const sendOrder = () => {
        if (formValues.email !== formValues.confirmEmail) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Los campos de correo electrónico no coinciden.',
            });
            return;
        }
        if (formValues.name === '' || formValues.phone === '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Debe completar todos los campos del formulario'
            });
            return;
        }

        const currentDate = new Date();
        const order = {
            buyer: formValues,
            items: cartList,
            total: total(),
            date: currentDate,
        }

        const db = getFirestore()        
        const orderCollection = collection(db, "orders")

        addDoc(orderCollection, order).then(({ id }) => {
            if (id) {
                setFormValues({
                    email: "",
                    name: "",
                    phone: "",
                })
                removeList();
                Swal.fire({
                    icon: 'success',
                    title: `Su orden ${id} ha sido procesada correctamente`,
                    showConfirmButton: false,
                    timer: 2500,
                });
            }
        })
    }

    return (
        <Container>
            <h1>Carrito</h1>
            {isCartEmpty ? (
                <>
                    <h2>Su carrito esta vacio</h2>
                    <Link as={Link} to="/"><Button>Seguir comprando</Button></Link>
                </>
            ) : (
                <>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th></th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Total</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartList.map(item => (
                                <tr key={item.id}>
                                    <td width="100px"><img src={item.img} alt="" height="100px" /></td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.quantity * item.price}</td>
                                    <td>
                                        <Button onClick={() => deleteItem(item.id)}>Borrar</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>Total</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>{total()}</td>
                                <td>
                                    <Button onClick={() => removeList()}>Vaciar carrito</Button>
                                </td>
                            </tr>
                        </tfoot>
                    </Table>
                    <h2>Ingresa tus datos</h2>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control onChange={handleChange}
                                value={formValues.email}
                                name="email"
                                type="email"
                                placeholder="example@gmail.com"
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicConfirmEmail">
                            <Form.Label>Confirmar email</Form.Label>
                            <Form.Control onChange={handleChange}
                                value={formValues.confirmEmail}
                                name="confirmEmail"
                                type="email"
                                placeholder="Re-ingrese su email"
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Nombre completo</Form.Label>
                            <Form.Control onChange={handleChange}
                                value={formValues.name}
                                name="name"
                                type="text"
                                placeholder="nombre y apellido"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicNum">
                            <Form.Label>Numero de contacto</Form.Label>
                            <Form.Control onChange={handleChange}
                                value={formValues.phone}
                                name="phone"
                                type="text"
                                placeholder="Ingrese su numero de celular o telefono"
                            />
                        </Form.Group>
                        <Button type="submit">Enviar orden</Button>
                    </Form>
                </>
            )}
        </Container>
    )
}