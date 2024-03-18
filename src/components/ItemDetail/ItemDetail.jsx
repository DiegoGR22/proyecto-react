/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from 'react';

import { Container, Button, Card, Image, Row, Col, Tab, Nav, Form } from 'react-bootstrap';
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import './ItemDetail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke, faHeart } from '@fortawesome/free-solid-svg-icons';


const ItemDetail = ({ item }) => {

    const { cart, addItem } = useContext(CartContext);

    const [itemCount, setItemCount] = useState(1);
    const [isAdded, setIsAdded] = useState(false);

    const [isLiked, setIsLiked] = useState(false);

    const handleLikeClick = () => {
        setIsLiked(!isLiked);
    }

    const onAdd = (quantity) => {
        setItemCount(quantity);
        setIsAdded(true);
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    return (
        <Container>
            <Card className='card-detail'>
                <Container fluid>
                    <Row className="wrapper">
                        <Col md={6}>
                            <Tab.Container id="pic-preview" defaultActiveKey="#pic-1">
                                <Row>
                                    <Col>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="#pic-1">
                                                <Image style={{ transform: 'none' }} src={item.image} fluid />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="#pic-2">
                                                <Image style={{ transform: 'none' }} src={item.image} alt="Preview 2" fluid />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="#pic-3">
                                                <Image style={{ transform: 'none' }} src={item.image} alt="Preview 3" fluid />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="#pic-4">
                                                <Image style={{ transform: 'none' }} src={item.image} alt="Preview 4" fluid />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="#pic-5">
                                                <Image style={{ transform: 'none' }} src={item.image} alt="Preview 5" fluid />
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Nav className="preview-thumbnail" variant="tabs">
                                            <Nav.Item>
                                                <Nav.Link eventKey="#pic-1"><Image style={{ borderRadius: '10%' }} src={item.image} alt="Thumbnail 1" fluid /></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="#pic-2"><Image style={{ borderRadius: '10%' }} src={item.image} alt="Thumbnail 2" fluid /></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="#pic-3"><Image style={{ borderRadius: '10%' }} src={item.image} alt="Thumbnail 3" fluid /></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="#pic-4"><Image style={{ borderRadius: '10%' }} src={item.image} alt="Thumbnail 4" fluid /></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="#pic-5"><Image style={{ borderRadius: '10%' }} src={item.image} alt="Thumbnail 5" fluid /></Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </Col>
                        <Col md={6}>
                        <button className={`like btn btn-default ${isLiked ? 'handleLike' : ''}`} type="button" onClick={handleLikeClick}><FontAwesomeIcon icon={faHeart}/></button>
                            <h5 className="product-title">{item.brand}</h5>
                            <h2 className="product-title">{item.model}</h2>
                            <div className="rating">
                                <div>
                                    <Link className="stars">
                                        <FontAwesomeIcon icon={faStar} className='checked' />
                                        <FontAwesomeIcon icon={faStar} className='checked' />
                                        <FontAwesomeIcon icon={faStar} className='checked' />
                                        <FontAwesomeIcon icon={faStar} className='checked' />
                                        <FontAwesomeIcon icon={faStarHalfStroke} className='checked' />
                                    </Link>
                                </div>
                                <div>
                                    <Link className="review-no">{getRandomInt(10,50)} reviews</Link>
                                </div>
                            </div>
                            <p className="product-description">{item.description}</p>
                            <h4 className="price">PRICE: <span>${item.price}.00</span></h4>
                            <p className="vote"><strong>{getRandomInt(87,98)}%</strong> of buyers enjoyed this product! <strong><Link style={{textDecoration: 'underline'}} className='fw-bold'>({getRandomInt(40,90)} votes)</Link></strong></p>
                            <Form>
                                <Form.Group controlId="SizeForm">
                                    <Form.Label>Sizes:</Form.Label>
                                    <Form.Select style={{width: '70px', cursor: 'pointer'}}>
                                        <option>25</option>
                                        <option>26</option>
                                        <option>27</option>
                                        <option>28</option>
                                    </Form.Select>
                                </Form.Group>
                            </Form>
                            {
                                isAdded ?
                                    <div>
                                        <Link to={"/"}>
                                            <Button variant='secondary'>Seguir comprando</Button>{' '}
                                        </Link>
                                        <Link to="/cart/">
                                            <Button variant='secondary'>Ir al Carrito</Button>{' '}
                                        </Link>
                                    </div>
                                    : <ItemCount stock={item.stock} initial={1} item={item} onAdd={onAdd} />
                            }
                        </Col>
                    </Row>
                </Container>
            </Card>
        </Container>
    );


};

export default ItemDetail;
