import image from "../../../../image/dish.jpg";
import styles from "./FavoritesPageContant.module.scss";
import { IFavoritesPageContant } from "../../../../interface/interface";

function FavoritesPageContant({ dish }: IFavoritesPageContant) {
  return (
    <div className={styles.wrapperItem}>
      {dish.strMealThumb !== "" ? (
        <img
          className={styles.wrapperItem__img}
          src={dish.strMealThumb}
          alt={dish.strMeal}
        />
      ) : (
        <img
          className={styles.wrapperItem__img}
          src={image}
          alt={dish.strMeal}
        />
      )}
      <h2 className={styles.wrapperItem__title}>{dish.strMeal}</h2>
      <p className={styles.wrapperItem__txt}>{dish.strInstructions}</p>
    </div>
  );
}

export default FavoritesPageContant;
