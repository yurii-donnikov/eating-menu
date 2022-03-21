import Container from "../container/Container";
import { NavLink } from "react-router-dom";
import { Path } from "../../constants/path";
import { useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import { useSelector } from "react-redux";
import { IReduserModalState } from "../../interface/interface";

function Header() {
  const location = useLocation();
  const openModal = useSelector(
    (ReduserModalState: IReduserModalState) =>
      ReduserModalState.ReduserModalState
  );
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.header__nav}>
          <NavLink className={styles.btn_link_page} to={Path.DISH}>
            Random dish
          </NavLink>
          <NavLink className={styles.btn_link_page} to={Path.FAVORITES}>
            Favorites
          </NavLink>
          {location.pathname === Path.FAVORITES && (
            <button
              onClick={() => openModal()}
              className={styles.btn_add_custom}
            >
              Add custom dish
            </button>
          )}
        </nav>
      </Container>
    </header>
  );
}
export default Header;
