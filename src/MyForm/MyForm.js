import styles from "./style.module.css";
export default function MyForm() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        paddingTop: "100px",
      }}
    >
      <form style={{ display: "flex", flexDirection: "column", width: "50%" }}>
        <label>
          <input
            type="text"
            className={styles.textInput}
            placeholder="Enter your task here ..."
          />
        </label>
        <div style={{ height: "20px" }} />
        <div>
          <input type="radio" id="1" className={styles.item} />
          <label for="1">Clean your bedroom</label>
        </div>
        <div>
          <input type="radio" id="2" className={styles.item} />
          <label for="2">Buy some milk</label>
        </div>
        <div>
          <input type="radio" id="3" className={styles.item} />
          <label for="3">Jogging</label>
        </div>
        <div>
          <input type="radio" id="4" className={styles.item} />
          <label for="4">Learn React</label>
        </div>
        <div>
          <input type="radio" id="5" className={styles.item} />
          <label for="5">Doing excercises</label>
        </div>
        <div className={styles.bottemText}>
          <p>5 tasks left!</p>
          <p>MindX toolist</p>
        </div>
      </form>
    </div>
  );
}
