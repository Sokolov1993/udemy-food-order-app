import React, { useRef, useState } from 'react';
import Input from '../../../UI/Input/Input';

import stylesMealItemForm from './MealItemForm.module.scss';

const MealItemForm = ({ id, onAddToCart }) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = +amountInputRef.current.value;

    if (enteredAmount === 0 || enteredAmount > 5) {
      setAmountIsValid(false);
      return;
    }

    onAddToCart(enteredAmount);
  };

  return (
    <form className={stylesMealItemForm.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        type="number"
        label="Amount"
        inputId={'amount_' + id}
        min="1"
        max="5"
        step="1"
        defaultValue="1"
      />
      <button>Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
