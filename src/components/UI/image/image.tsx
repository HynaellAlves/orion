import styles from "./image.module.css";

interface propsImage {
  id?: string;
  class?: string;
  src: string;
  alt: string;
}

export default function Image(props: propsImage) {
  return (
    <img
      id={props.id}
      className={`${props.class} ${styles.img}`}
      src={props.src}
      alt={props.alt}
    />
  );
}
