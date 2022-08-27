import React from 'react';

import stylesCartItem from './CartItem.module.scss';

const CartItem = ({ name, onRemove, onAdd, amount, price }) => {
  const itemPrice = `$${price.toFixed(2)}`;

  return (
    <li className={stylesCartItem.cartItem}>
      <div>
        <h2>{name}</h2>
        <div className={stylesCartItem.summary}>
          <span className={stylesCartItem.price}>{itemPrice}</span>
          <span className={stylesCartItem.amount}>x {amount}</span>
        </div>
      </div>
      <div className={stylesCartItem.actions}>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
