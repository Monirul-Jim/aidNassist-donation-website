
import useAuth from '@/hooks/useAuth';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Router } from 'next/router';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const CheckoutForm = ({ amount }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    useEffect(() => {

        if (amount > 0) {
            fetch('/api/paymentdonatenow', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ price: amount }),
            })
            .then(response => response.json())
            .then(data => {
                setClientSecret(data.clientSecret);
            })
            .catch(error => {
                console.error(error);
                // Handle error appropriately
            });
        }
    }, [amount]);
    

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error)
            setCardError(error.message);
        }
        else {
            setCardError('');
            // console.log('payment method', paymentMethod)
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }

        console.log('payment intent', paymentIntent)
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            // save payment information to the server
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price: amount,
                date: new Date(),
            }
            fetch('/api/payhere', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  // You might need to include additional headers like authentication tokens here
                },
                body: JSON.stringify(payment)
              })
              .then(response => response.json())
              .then(data => {
                if (data.insertResult.insertedId) {
                  Swal.fire(
                    'Payment successful!',
                    'Go to enroll classes to see your course',
                    'success'
                  );
                }
              })
              .catch(error => {
                console.log(error.message);
              });
              
        }


    }
    
    return (
        <>
         <h1>Your Total Cost: ${amount}</h1>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='mt-6 bg-blue-500 py-2 px-4 rounded-md' type="submit" disabled={!stripe || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
            {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
        </>
    );
};

export default CheckoutForm;