import styles from "./header.module.css";

export default function Header() {
    return (
        <div id={styles.header} className={styles.header}>
            <div className={styles.options_header}>
                <h3>Option 1</h3>
            </div>
            <div className={styles.options_header}>
                <h3>Option 2</h3>
            </div>
            <div className={styles.options_header}>
                <h3>Option 3</h3>
            </div>
            <div className={styles.options_header}>
                <h3>Option 4</h3>
            </div>
            <div className={styles.options_header}>
                <h3>Option 5</h3>
            </div>
        </div>
    )
}