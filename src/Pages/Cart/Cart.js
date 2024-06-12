import CartList from '../../Components/CartList/CartList';
import OrderForm from '../../Components/OrderForm/OrderForm';
import React from 'react';
import Total from '../../Components/Total/Total'

export default function Cart() {
    return (
        <div className="Cart">
            <h1>Cart</h1>
            <CartList />
            <Total/>
            <OrderForm />
        </div>
    );
}