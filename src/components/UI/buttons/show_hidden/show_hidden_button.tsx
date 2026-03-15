import styles from "./show_hidden_button.module.css"

interface props {
  id?: string;
  class?: string;
  children: React.ReactNode
  method?: () => void;
}

export default function show_hidden_button(props: props) {
  return <button id={props.id} className={`${styles.show_hidden}`}>{props.children}</button>;
}
