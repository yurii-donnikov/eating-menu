import styles from "./Container.module.scss";
import { IContainer } from "../../interface/interface";

const Container = ({ children }: IContainer) => (
  <div className={styles.container}>{children}</div>
);

export default Container;
