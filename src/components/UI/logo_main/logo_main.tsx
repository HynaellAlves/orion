import styles from "./logo_main.module.css";

export default function logo_main(){
return(
    <div id={styles.logo_main} className={styles.logo_main}>
        <img src="/Orion-Banner.png" alt="Logo da empresa" />
    </div>
)
}