import { collection, getFirestore, addDoc } from 'firebase/firestore';
import Button from 'react-bootstrap/esm/Button';
import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';

const Checkout = () => {

    const { cart, totalPrice, clearAll } = useContext(CartContext);
    const { register, handleSubmit } = useForm();
    const [isPaid, setIsPaid] = useState(false);
    const [orderId, setOrderId] = useState("");

    function createOrder(data) {
        const order = {
            // buyer: {
            //     name: 'Meg',
            //     email: 'john@example',
            //     phone: '123-456'
            // },
            // items: [
            //     {
            //         id: '2',
            //         model: 'Dunk Low',
            //         price: 300
            //     }
            // ],
            // total: 300
            buyer: {
                name: data.name,
                email: data.email,
                phone: data.phone,
            },
            items: cart,
            total: totalPrice,
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
                    </div>


                    : <div className='containerCheckout'>

                        <h1>Finalizar Compra</h1>
                        <form onSubmit={handleSubmit(createOrder)} className='containerForm'>

                            <input type="text" placeholder='Ingresa tu nombre' {...register("name")} />
                            <input type="email" placeholder='Ingresa tu e-mail' {...register("email")} />
                            <input type="phone" placeholder='Ingresa tu telefono' {...register("phone")} />

                            <Button type='submit'>Pagar</Button>

                        </form>

                    </div>

            }
        </>
    )
}

export default Checkout
