/* eslint-disable no-unused-vars */

import { collection, getFirestore, addDoc, serverTimestamp } from 'firebase/firestore';
import { Button, Row, Col, Form, Card, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';
import "./Checkout.css";

const Checkout = () => {

    const { cart, totalPrice, clearAll } = useContext(CartContext);
    const [isPaid, setIsPaid] = useState(false);
    const [orderId, setOrderId] = useState("");
    const { register, handleSubmit, watch, formState: { errors }, trigger } = useForm();
    const [isHovered, setIsHovered] = useState(false);

    function createOrder(data) {
        const order = {
            buyer: {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                phone: data.phone,
            },
            items: cart,
            total: totalPrice,
            date: serverTimestamp(),
        }

        const db = getFirestore()

        const ordersRef = collection(db, "orders");

        addDoc(ordersRef, order).then((result) => {
            console.log(result.id)
            setOrderId(result.id)
            clearAll();
            setIsPaid(true)
        })
    }

    // const handleBlur = async (fieldName) => {
    //     await trigger(fieldName);
    // }
    const handleBlur = (fieldName) => {
        trigger(fieldName);
    }

    return (
        <>
            {
                isPaid ?

                    <Container className='checkout-container'>
                        <Row className="justify-content-center">
                            <Col md={8} className="text-center">
                                <h2 className='mb-4'>¡Gracias por tu compra!</h2>
                                <p className='mb-4'>Tu número de orden es: <strong>{orderId}</strong></p>
                                <Button variant="success">
                                    <Link to={"/"} className="return-link">Volver a la Tienda</Link>
                                </Button>
                            </Col>
                        </Row>
                    </Container>

                    :
                    <div className='containerCheckout'>
                        <section className="w-100 px-3 py-5" style={{ backgroundColor: '#eee', borderRadius: '1rem 1rem 0 0' }}>
                            <Card>
                                <Card.Body>
                                    <Row>
                                        <Col>

                                            <h1>Finalizar Compra</h1>

                                            <Form onSubmit={handleSubmit(createOrder)} className='containerForm'>
                                                <Row className='mb-3'>
                                                    <Col md={6} className='mb-3'>
                                                        <Form.Group>
                                                            <Form.Label>First name</Form.Label>
                                                            <Form.Control type="text" placeholder='Ingresa tu nombre' className={errors.firstName ? 'is-invalid' : ''} {...register("firstName", {
                                                                required: {
                                                                    value: true, message: "Campo obligatorio"
                                                                }
                                                            })} />

                                                            {errors.firstName && <Form.Control.Feedback type='invalid'>
                                                                {errors.firstName.message}
                                                            </Form.Control.Feedback>}

                                                        </Form.Group>
                                                    </Col>

                                                    <Col md={6} className='mb-3'>
                                                        <Form.Group>
                                                            <Form.Label>Last name</Form.Label>
                                                            <Form.Control type="text" placeholder='Ingresa tu apellido' className={errors.lastName ? 'is-invalid' : ''} {...register("lastName", {
                                                                required: {
                                                                    value: true, message: "Campo obligatorio"
                                                                }
                                                            })} />
                                                            {errors.lastName && <Form.Control.Feedback type='invalid'>
                                                                {errors.lastName.message}
                                                            </Form.Control.Feedback>}
                                                        </Form.Group>
                                                    </Col>

                                                    <Col md={6} className='mb-3'>
                                                        <Form.Group>
                                                            <Form.Label>Email</Form.Label>
                                                            <Form.Control type="email" placeholder='Ingresa tu e-mail' className={errors.email ? 'is-invalid' : ''} {...register("email", {
                                                                required: { value: true, message: "Campo obligatorio" },
                                                                pattern: {
                                                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                                                    message: "Por favor, introduce una dirección de correo electrónico válida."
                                                                }
                                                            })} onBlur={() => handleBlur("email")} />
                                                            {errors.email && <Form.Control.Feedback type='invalid'>
                                                                {errors.email.message}
                                                            </Form.Control.Feedback>}
                                                        </Form.Group>
                                                    </Col>

                                                    <Col md={6} className='mb-3'>
                                                        <Form.Group>
                                                            <Form.Label>Confirm Email</Form.Label>
                                                            <Form.Control
                                                                type="email"
                                                                placeholder='Confirma tu e-mail' className={errors.confirmEmail ? 'is-invalid' : ''}
                                                                {...register("confirmEmail", {
                                                                    required: { value: true, message: "Campo obligatorio" },
                                                                    pattern: {
                                                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                                                        message: "Por favor, introduce una dirección de correo electrónico válida."
                                                                    },
                                                                    validate: (value) => value === watch("email") || "Los correos electrónicos no coinciden"
                                                                })}
                                                                onBlur={() => handleBlur("confirmEmail")} />
                                                            {errors.confirmEmail && <Form.Control.Feedback type='invalid'>
                                                                {errors.confirmEmail.message}
                                                            </Form.Control.Feedback>}
                                                        </Form.Group>
                                                    </Col>

                                                    <Col md={2} className='mb-3'>
                                                        <Form.Group>
                                                            <Form.Label>Teléfono</Form.Label>
                                                            <Form.Control type="phone" placeholder='Teléfono a 10 dígitos' className={errors.phone ? 'is-invalid' : ''} {...register("phone", {
                                                                required: { value: true, message: "Campo obligatorio" },
                                                                pattern: {
                                                                    value: /^\d+$/,
                                                                    message: "Por favor, ingresa solo números."
                                                                },
                                                                validate: value => {
                                                                    if (value.length < 10) {
                                                                        return "El teléfono debe tener al menos 10 dígitos.";
                                                                    }
                                                                    return true;
                                                                }
                                                            })}
                                                                maxLength={10} onInput={(e) => {
                                                                    if (e.target.value.length > 10) {
                                                                        e.target.value = e.target.value.slice(0, 10);
                                                                    }
                                                                }} />
                                                            {errors.phone && <Form.Control.Feedback type='invalid'>
                                                                {errors.phone.message}
                                                            </Form.Control.Feedback>}
                                                        </Form.Group>
                                                    </Col>

                                                    <Col md={4} className='mb-3'>
                                                        <Form.Group>
                                                            <Form.Label>Country</Form.Label>
                                                            <Form.Select className={errors.country ? 'is-invalid' : ''} {...register("country", {
                                                                required: { value: true, message: "Seleccione un país" },
                                                                validate: value => value !== ""
                                                            })}>
                                                                <option value="">Choose...</option>
                                                                <option>México</option>
                                                                {/* <option>United States</option> */}
                                                                {/* <option>Argentina</option> */}
                                                            </Form.Select>
                                                            {errors.country && <Form.Control.Feedback type='invalid'>
                                                                {errors.country.message}
                                                            </Form.Control.Feedback>}
                                                        </Form.Group>
                                                    </Col>

                                                    <Col md={4} className='mb-3'>
                                                        <Form.Group>
                                                            <Form.Label>State</Form.Label>
                                                            <Form.Select placeholder="Choose..." className={errors.state ? 'is-invalid' : ''} {...register("state", {
                                                                required: { value: true, message: "Seleccione un estado" },
                                                                validate: value => value !== ""
                                                            })}>
                                                                <option value="">Choose...</option>
                                                                <option>Aguascalientes</option>
                                                                <option>Baja California</option>
                                                                <option>Baja California Sur</option>
                                                                <option>Campeche</option>
                                                                <option>Chiapas</option>
                                                                <option>Chihuahua</option>
                                                                <option>Ciudad de México</option>
                                                                <option>Coahuila</option>
                                                                <option>Colima</option>
                                                                <option>Durango</option>
                                                                <option>Estado de México</option>
                                                                <option>Guanajuato</option>
                                                                <option>Guerrero</option>
                                                                <option>Hidalgo</option>
                                                                <option>Jalisco</option>
                                                                <option>Michoacán</option>
                                                                <option>Morelos</option>
                                                                <option>Nayarit</option>
                                                                <option>Nuevo León</option>
                                                                <option>Oaxaca</option>
                                                                <option>Puebla</option>
                                                                <option>Querétaro</option>
                                                                <option>Quintana Roo</option>
                                                                <option>San Luis Potosí</option>
                                                                <option>Sinaloa</option>
                                                                <option>Sonora</option>
                                                                <option>Tabasco</option>
                                                                <option>Tamaulipas</option>
                                                                <option>Tlaxcala</option>
                                                                <option>Veracruz</option>
                                                                <option>Yucatán</option>
                                                                <option>Zacatecas</option>
                                                            </Form.Select>
                                                            {errors.state && <Form.Control.Feedback type='invalid'>
                                                                {errors.state.message}
                                                            </Form.Control.Feedback>}
                                                        </Form.Group>
                                                    </Col>

                                                    <Col md={2} className='mb-3'>
                                                        <Form.Group>
                                                            <Form.Label>Zip</Form.Label>
                                                            <Form.Control type="zip" placeholder="Zip" className={errors.zip ? 'is-invalid' : ''} {...register("zip", {
                                                                required: { value: true, message: "Campo obligatorio" },
                                                                pattern: {
                                                                    value: /^\d+$/,
                                                                    message: "Por favor, ingresa solo números."
                                                                }
                                                            })} />
                                                            {errors.zip && <Form.Control.Feedback type='invalid'>
                                                                {errors.zip.message}
                                                            </Form.Control.Feedback>}
                                                        </Form.Group>
                                                    </Col>

                                                    <Col>
                                                        <hr className='my-4' />
                                                    </Col>
                                                    <Col md={12}>
                                                        <Button className={`w-100 btn-lg ${isHovered ? 'btn-success' : 'btn-warning'}`}
                                                            type='submit'
                                                            onMouseEnter={() => setIsHovered(true)}
                                                            onMouseLeave={() => setIsHovered(false)}>Completar tu Pago</Button>
                                                    </Col>

                                                </Row>
                                            </Form>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </section>

                    </div>

            }
        </>
    )
}

export default Checkout
