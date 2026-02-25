import styles from "./header.module.css";

import HeaderButton from "@/components/UI/buttons/header/header_button";

export default function Header() {
    return (

        <div id={styles.header} className={styles.header}>
            <HeaderButton class={styles.options_header} alt="Início" src="#" iconPath={"/home.svg"} iconAlt={"Início"} />
            <HeaderButton class={styles.options_header} alt="Cursos" src="#" iconPath={"/courses.svg"} iconAlt={"Cursos"} />
            <HeaderButton class={styles.options_header} alt="Unidades" src="#" iconPath={"/units.svg"} iconAlt={"Unidades"} />
            <HeaderButton class={styles.options_header} alt="Área do Aluno" src="#" iconPath={"/student_personal.svg"} iconAlt={"Área do Aluno"} />
            <HeaderButton class={styles.options_header} alt="Contato" src="#" iconPath={"/contact.svg"} iconAlt={"Contato"} />
        </div>
    )
}