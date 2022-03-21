import styles from "./DishPageContant.module.scss";
import image from "../../../../../image/dish.jpg";
import { IDishPageParams } from "../../../../../interface/interface";

function DishPageContant({ dish, updateDish, saveDish }: IDishPageParams) {
  return (
    <div className={styles.wrapperRecipe}>
      {dish.strMealThumb !== "" ? (
        <img
          className={styles.wrapperRecipe__img}
          src={dish.strMealThumb}
          alt={dish.strMeal}
        />
      ) : (
        <img
          className={styles.wrapperRecipe__img}
          src={image}
          alt={dish.strMeal}
        />
      )}
      <h2 className={styles.wrapperRecipe__title}>{dish.strMeal}</h2>
      <p className={styles.wrapperRecipe__txt}>{dish.strInstructions}</p>
      <div className={styles.wrapperBtn}>
        <button className={styles.wrapperRecipe__btn} onClick={saveDish}>
          Save
        </button>
        <button className={styles.wrapperRecipe__btn} onClick={updateDish}>
          Send
        </button>
      </div>
    </div>
  );
}
export default DishPageContant;
