import React, { useContext, useEffect, useState } from 'react';

import CartIcon from '../../Cart/CartIcon';
import CartContext from '../../../store/cartContext';

import stylesHeaderCartButton from './HeaderCartButton.module.scss';

const HeaderCartButton = ({ onClick }) => {
  const [btnIsHighLited, setBtnIsHighlited] = useState(false);
  const cartCtx = useContext(CartContext);

  const numberOfCurtItems = cartCtx.items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  const btnStyles = `${stylesHeaderCartButton.button} ${
    btnIsHighLited && stylesHeaderCartButton.bump
  }`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnIsHighlited(true);

    const timer = setTimeout(() => {
      setBtnIsHighlited(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);

  return (
    <button onClick={onClick} className={btnStyles}>
      <span className={stylesHeaderCartButton.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={stylesHeaderCartButton.badge}>{numberOfCurtItems}</span>
    </button>
  );
};

export default HeaderCartButton;
