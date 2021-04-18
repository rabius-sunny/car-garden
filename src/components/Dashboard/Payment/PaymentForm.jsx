import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../../App';

const PaymentForm = ({ handlePayment, id, car }) => {

    const history = useHistory()
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);
    const [user, setUser] = useContext(UserContext)

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message);
            setPaymentSuccess(null);
        } else {
            setPaymentSuccess(paymentMethod.id);
            setPaymentError(null);
            handlePayment(paymentMethod.id)
        }
        const bookingData = {
            userName: user.name,
            email: user.email,
            date: new Date(),
            pamentId: id,
            car: car
        }
        const url = 'https://car-garden.herokuapp.com/bookThisCar'
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
            .then(res => console.log('Car Booking Placed'))
            .catch(err => console.log(err))

        alert('Succesfully Booked This Car')
        history.push('/')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button type="submit" className="btn btn-outline-success" disabled={!stripe}>
                    Confirm Order
                </button>
            </form>
            {
                paymentError && <p style={{ color: 'red' }}>{paymentError}</p>
            }
            {
                paymentSuccess && <p style={{ color: 'green' }}>Your payment was successful.</p>
            }
        </div>
    )
}

export default PaymentForm
