import MealsSummary from "./MealsSummary";
import { Fragment } from "react";
import AvaliableMeals from "./AvailableMeals";

const Meals = () => {
  return <Fragment>
    <MealsSummary/>
    <AvaliableMeals/>
  </Fragment>;
};

export default Meals;
