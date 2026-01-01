import styles from "./header_button.module.css";

interface propsHeaderButton {
    src: string;
    alt: string;
    class?: string;
}

export default function header_button(props: propsHeaderButton) {
    return (
        <div className={`${styles.header_button} ${props.class}`}>
            <a href="#">{props.alt? props.alt : "Option"}</a>
        </div>
    )
}