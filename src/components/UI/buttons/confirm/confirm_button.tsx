import styles from "./confirm_button.module.css";

interface propsConfirmButton {
    class?: string;
    alt: string;
    type: "button" | "submit" | "reset";
}

export default function confirm_button(props: propsConfirmButton){
    return(
        <button className={`${styles.confirm_button} ${props.class}`}>
            {props.alt? props.alt : "Button"}
        </button>
    )
}