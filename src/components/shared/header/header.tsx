import styles from "./header.module.css";

import HeaderButton from "@/components/UI/buttons/header/header_button";

export default function Header() {
    return (

        <div id={styles.header} className={styles.header}>
            <HeaderButton class={styles.options_header} alt="Option 1" src="#" />
            <HeaderButton class={styles.options_header} alt="Option 2" src="#" />
            <HeaderButton class={styles.options_header} alt="Option 3" src="#" />
            <HeaderButton class={styles.options_header} alt="Option 4" src="#" />
            <HeaderButton class={styles.options_header} alt="Option 5" src="#" />
        </div>
    )
}