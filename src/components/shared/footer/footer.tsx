import styles from "./footer.module.css";

interface propsFooter {
    id?: string,
}

export default function Footer(prop: propsFooter) {
    return (
        <div id={prop.id} className={styles.footer}>

        </div>
    )
}