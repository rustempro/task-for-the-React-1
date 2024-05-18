import styles from "./app.module.css";
import { useState } from "react";

export const App = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const [error, setError] = useState("");

  const validate = (val) => val.length >= 3;

  const onInputButtonClick = () => {
    const promptValue = prompt("Введите значение");
    if (validate(promptValue)) {
      setValue(promptValue);
      setError("");
    } else {
      setError("Введенное значение должно содержать минимум 3 символа");
    }
  };

  const onAddButtonClick = () => {
    if (!validate(value)) return;
    setList((prev) => [...prev, { value }]);
    setValue("");
    setError("");
  };

  const isValueVaild = validate(value);

  return (
    <div className={styles.app}>
      <h1 className={styles["page-heading"]}>Ввод значения</h1>
      <p className={["no-margin-text"]}>
        Текущее значение <code>value</code>: "
        <output className={"current-value"}>{value}</output>"
      </p>
      {error !== "" && <div className={styles.error}>{error}</div>}
      <div className={styles["buttons-container"]}>
        <button className={styles.button} onClick={onInputButtonClick}>
          Ввести новое
        </button>
        <button
          className={styles.button}
          disabled={!isValueVaild}
          onClick={onAddButtonClick}
        >
          Добавить в список
        </button>
      </div>
      <div className={styles["list-container"]}>
        <h2 className={styles["list-heading"]}>Список:</h2>
        {list.length > 0 ? (
          <ul className={styles.list}>
            {list.map((item) => (
              <li className={styles["list-item"]} key={item.id}>
                {item.value}
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles["no-margin-text"]}>Нет добавленных элементов</p>
        )}
      </div>
    </div>
  );
};
