import React, { Fragment } from 'react';

import headerImage from '../../../assets//images//header//headerMeals.jpg';
import HeaderCartButton from '../HeaderCartButton/HeaderCartButton';

import stylesHeader from './Header.module.scss';

const Header = ({ onShowCart }) => {
  return (
    <Fragment>
      <header className={stylesHeader.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={stylesHeader.mainImage}>
        <img src={headerImage} alt="A table full of delicious food" />
      </div>
    </Fragment>
  );
};

export default Header;
