import styles from "./section.module.css";

interface propSection {
    id?: string,
    children?: React.ReactNode
}

export default function Section(prop: propSection) {
    return (
        <div id={prop.id} className={styles.section}>
            {prop.children}
        </div>
    )
}