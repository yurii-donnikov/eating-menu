import { Navigate, Route, Routes } from "react-router-dom";
import Container from "../container/Container";
import { Path } from "../../constants/path";
import DishPage from "../pages/DishPage/DishPage";
import FavoritesPage from "../pages/FavoritesPage/FavoritesPage";
import styles from "./RouteNavigate.module.scss";

function RoutesNavigate() {
  return (
    <Container>
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<Navigate replace to={Path.DISH} />} />
          <Route path={Path.DISH} element={<DishPage />} />
          <Route path={Path.FAVORITES} element={<FavoritesPage />} />
        </Routes>
      </main>
    </Container>
  );
}

export default RoutesNavigate;
