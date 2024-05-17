import styles from "./app.module.css";
import "./App.css";

export const App = () => {
  return (
    <div className={styles.app}>
      <h1 className={styles["page-heading"]}>Ввод значения</h1>
      <p className={["no-margin-text"]}>
        Текущее значение <code>value</code>: "
        <output className={"current-value"}></output>"
      </p>
      <div className={styles.error}>
        Введенное значение должно содержать минимум 3 символа
      </div>
      <div className={styles["buttons-container"]}>
        <button className={styles.button}>Ввести новое</button>
        <button className={styles.button}>Добавить в список</button>
      </div>
      <div className={styles["list-container"]}>
        <h2 className={styles["list-heading"]}>Список:</h2>
        <p className={styles["no-margin-text"]}>Нет добавленных элементов</p>
        <ul className={styles.list}>
          <li className={styles["list-item"]}></li>
        </ul>
      </div>
    </div>
  );
};
