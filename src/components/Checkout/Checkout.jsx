import { collection, getFirestore, addDoc } from 'firebase/firestore';
import Button from 'react-bootstrap/esm/Button';

const Checkout = () => {

    function createOrder() {

        const order = {
            buyer: {
                name: 'Meg',
                email: 'john@example',
                phone: '123-456'
            },
            items: [
                {
                    id: '2',
                    model: 'Dunk Low',
                    price: 300
                }
            ],
            total: 300
        }

        const db = getFirestore()

        const ordersRef = collection(db, "orders");

        addDoc(ordersRef, order).then((result) => console.log(result.id))
    }


    return (
        <>
            <Button onClick={createOrder}>Pagar</Button>
        </>
    )
}

export default Checkout
