import styles from "./smarts.module.css";

import Image from "../../image/image";

interface props {
  id?: string;
  class?: string;
  src?: string;
}

export default function smarts(prop: props) {
  return (
    <div id={prop.id} className={`${styles.smarts} ${prop.class}`}>
      <div className={styles.cam}></div>
      <div className={styles.screen}>
        <Image
          class={styles.mediaImage}
          src={prop.src || ""}
          alt={"Media Image"}
        />
      </div>
    </div>
  );
}
