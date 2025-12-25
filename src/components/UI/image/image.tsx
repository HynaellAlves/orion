import Img from "next/image";

import styles from "./image.module.css";

interface propsImage {
    id?: string,
    class?: string,
    src: string,
    alt: string,
    width: number,
    height: number,
}

export default function Image(props: propsImage) {
    return (
        <Img width={props.width} height={props.height} id={props.id} className={`${props.class} ${styles.img}`} src={props.src} alt={props.alt} />
    )
}