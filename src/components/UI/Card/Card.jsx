import React from 'react';

import stylesCard from './Card.module.scss';

const Card = ({ children }) => {
  return <div className={stylesCard.card}>{children}</div>;
};

export default Card;
