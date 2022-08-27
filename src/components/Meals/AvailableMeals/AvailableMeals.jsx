import React from 'react';

import { DUMMY_MEALS } from '../../../constants/dummyMeals';
import Card from '../../UI/Card/Card';
import MealItem from '../MealItem/MealItem';

import stylesAvailableMeals from './AvailableMeals.module.scss';

const AvailableMeals = () => {
  return (
    <section className={stylesAvailableMeals.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => (
            <MealItem
              key={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
              id={meal.id}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
