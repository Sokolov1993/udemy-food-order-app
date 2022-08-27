import React, { useContext } from 'react';

import Modal from '../UI/Modal/Modal';
import CartContext from '../../store/cartContext';
import CartItem from './CartItem/CartItem';

import stylesCart from './Cart.module.scss';

const Cart = ({ onHideCart }) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  return (
    <Modal onHideCart={onHideCart}>
      <ul className={stylesCart.cartItems}>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
            price={item.price}
            amount={item.amount}
          ></CartItem>
        ))}
      </ul>
      <div className={stylesCart.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={stylesCart.actions}>
        <button onClick={onHideCart} className={stylesCart['button--alt']}>
          Close
        </button>
        {hasItems && <button className={stylesCart.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
