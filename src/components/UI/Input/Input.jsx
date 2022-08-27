import React from 'react';

import stylesInput from './Input.module.scss';

const Input = React.forwardRef(
  ({ type, label, inputId, min, max, step, defaultValue }, ref) => {
    return (
      <div className={stylesInput.input}>
        <label htmlFor={inputId}> {label}</label>
        <input
          ref={ref}
          id={inputId}
          type={type}
          min={min}
          max={max}
          step={step}
          defaultValue={defaultValue}
        />
      </div>
    );
  }
);

export default Input;
