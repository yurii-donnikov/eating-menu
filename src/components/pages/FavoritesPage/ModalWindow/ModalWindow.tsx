import { useDispatch } from "react-redux";
import styles from "./ModalWindow.module.scss";
import { dispatchDish } from "../../../Redux/Actions";
import { IModal } from "../../../../interface/interface";

function ModalWindow({ updateModal }: IModal) {
  const dispatch = useDispatch();
  const createCustomDish = () => {
    let customDish = {
      strMealThumb: String(
        document.querySelector<HTMLInputElement>(".addCustonImage")?.value
      ),
      strMeal: String(
        document.querySelector<HTMLInputElement>(".addCustonTitle")?.value
      ),
      strInstructions: String(
        document.querySelector<HTMLInputElement>(".addCustonText")?.value
      ),
      idMeal: String(Math.random()),
    };
    dispatch(dispatchDish(customDish));
    updateModal();
  };

  return (
    <div className={styles.wrapperModal}>
      <div
        className={styles.wrapperModal__background}
        onClick={() => updateModal()}
      ></div>
      <div className={styles.wrapperModal__modal}>
        <h3 className={styles.modal_title}>Add custon dish</h3>
        <input
          className="addCustonImage"
          type="text"
          placeholder="image link"
        />
        <input
          className={styles.modal_titleInput + " " + "addCustonTitle"}
          type="text"
          placeholder="title"
        />
        <textarea
          className={styles.modal_textarea + " " + "addCustonText"}
          placeholder="text"
        ></textarea>
        <button onClick={() => createCustomDish()}>SAVE</button>
      </div>
    </div>
  );
}

export default ModalWindow;
