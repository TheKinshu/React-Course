import DUMMY_MEALS from "./dummy-meals";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card/Card";
import MealItem from "./MealItem/MealItem";

const AvaliableMeals = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul className={classes["meals-appear"]}>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvaliableMeals;
