import styles from "./section.module.css";

interface propSection {
    id?: string,
    class?:String,
    children?: React.ReactNode
}

export default function Section(prop: propSection) {
    return (
        <div id={prop.id} className={`${prop.class} ${styles.section}`}>
            {prop.children}
        </div>
    )
}