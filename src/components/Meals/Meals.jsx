import React, { Fragment } from 'react';

import MealsSummary from './MealsSummary/MealsSummary';
import AvailableMeals from './AvailableMeals/AvailableMeals';

import stylesMeals from './Meals.module.scss';

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
