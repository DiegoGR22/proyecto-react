import { collection, getFirestore, addDoc, serverTimestamp } from 'firebase/firestore';
import Button from 'react-bootstrap/esm/Button';
import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';

const Checkout = () => {

    const { cart, totalPrice, clearAll } = useContext(CartContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [isPaid, setIsPaid] = useState(false);
    const [orderId, setOrderId] = useState("");

    function createOrder(data) {
        const order = {
            buyer: {
                name: data.name,
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


    return (
        <>
            {
                isPaid ?

                    <div className='containerCheckout'>
                        <h2>Gracias por tu compra!</h2>
                        <p>Tu numero de orden es: {orderId}</p>
                        <Button>
                            <Link to={"/"}>Volver a la Tienda</Link>
                        </Button>
                    </div>

                    :

                    <div className='containerCheckout'>

                        <h1>Finalizar Compra</h1>

                        <form onSubmit={handleSubmit(createOrder)} className='containerForm'>

                            <input type="text" placeholder='Ingresa tu nombre' {...register("name", {
                                required: {
                                    value: true, message: "Campo obligatorio"
                                }
                            })} />
                            {errors.name && <p>{errors.name.message}</p>}

                            <input type="email" placeholder='Ingresa tu e-mail' {...register("email", {
                                required: { value: true, message: "Campo obligatorio" },
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: "Por favor, introduce una dirección de correo electrónico válida."
                                }
                            })} />
                            {errors.email && <p>{errors.email.message}</p>}

                            <input
                                type="email"
                                placeholder='Confirma tu e-mail'
                                {...register("confirmEmail", {
                                    required: { value: true, message: "Campo obligatorio" },
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: "Por favor, introduce una dirección de correo electrónico válida."
                                    },
                                    validate: (value) => value === watch("email") || "Los correos electrónicos no coinciden"
                                })}
                            />
                            {errors.confirmEmail && <p>{errors.confirmEmail.message}</p>}

                            <input type="phone" placeholder='Teléfono a 10 dígitos' {...register("phone", {
                                required: { value: true, message: "Campo obligatorio" },
                                pattern: {
                                    value: /^\d+$/,
                                    message: "Por favor, ingresa solo números."
                                }
                            })}
                                maxLength={10} onInput={(e) => {
                                    if (e.target.value.length > 10) {
                                        e.target.value = e.target.value.slice(0, 10);
                                    }
                                }} />
                            {errors.phone && <p>{errors.phone.message}</p>}

                            <Button type='submit'>Pagar</Button>

                        </form>

                    </div>

            }
        </>
    )
}

export default Checkout
