import styles from "./title.module.css"

interface propTitle {
    id?: string,
    children: React.ReactNode,
}

export default function Title(props: propTitle) {
    return (
        <h1 id={props.id} className={styles.title}>
            {props.children}
        </h1>
    )
}