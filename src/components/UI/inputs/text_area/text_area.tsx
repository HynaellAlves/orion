import styles from "./text_area.module.css"

interface propTextarea {
    id?: string,
    label: string,
    children?: React.ReactNode
}

export default function Text_area(props: propTextarea) {

    return (
        <div className={styles.content_textArea}>
            <label className={styles.label_textArea} htmlFor="textarea">{props.label}</label>
            <textarea id={props.id} className={styles.text_area} name="text_area"></textarea>
        </div>
    )
}