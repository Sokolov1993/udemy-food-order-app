import React, { useContext } from 'react';

import MealItemForm from './MealItemForm/MealItemForm';
import CartContext from '../../../store/cartContext';

import stylesMealItem from './MealItem.module.scss';

const MealItem = ({ name, description, price, id }) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({ id, name, amount, price });
  };
  return (
    <li className={stylesMealItem.meal}>
      <div>
        <h3>{name}</h3>
        <p className={stylesMealItem.description}>{description}</p>
        <p className={stylesMealItem.price}>{price.toFixed(2)}</p>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
