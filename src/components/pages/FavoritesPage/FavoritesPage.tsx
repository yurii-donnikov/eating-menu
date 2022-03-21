import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { IDishInfo } from "../../../interface/interface";
import FavoritesPageContant from "../contantPages/FavoritesPageContant/FavoritesPageContant";
import styles from "../contantPages/FavoritesPageContant/FavoritesPageContant.module.scss";
import ModalWindow from "./ModalWindow/ModalWindow";
import { FUNC_COPY_UPDATE_MODAL } from "../../Redux/Types";

function FavoritesPage() {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  let dishObject = localStorage.getItem("dish");

  const updateModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    dispatch({ type: FUNC_COPY_UPDATE_MODAL, updateModal });
  }, []);

  return (
    <div className={styles.wrapperFavorites}>
      {dishObject !== null
        ? JSON.parse(dishObject).dishes.map((dish: IDishInfo) => {
            return <FavoritesPageContant key={dish.idMeal} dish={dish} />;
          })
        : null}
      {modal && <ModalWindow updateModal={updateModal} />}
    </div>
  );
}

export default FavoritesPage;
