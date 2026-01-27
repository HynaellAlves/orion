import styles from "./input.module.css"

interface propInput {
    id?: string,
    label: string,
    children?: React.ReactNode
}

export default function Input(props: propInput) {
    return (
        <div className={styles.content_input}>
            <label className={styles.label_input} htmlFor="input">{props.label}</label>
            <input id={props.id} className={styles.input}>
                {props.children}
            </input>
        </div>

    )
}