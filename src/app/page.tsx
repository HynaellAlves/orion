import styles from "./index.module.css";

/* ---------- Importando os Componentes de Página ---------- */
import Section from "@/components/delimited/section/section";
import Image from "@/components/UI/image/image";

export default function Index() {
  return (
    <div className={`${styles.index} page`}>
      <Section id={styles.section_hero}>
        <div className={styles.content_informationsHero}></div>
        <div id={styles.content_imageHero}>
          <Image width={300} height={300} src={"https://images.unsplash.com/photo-1523240795612-9a054b0db644"} alt={"Imagem de seção Hero"}/>
        </div>
      </Section>
      <Section>2</Section>
      <Section>3</Section>
      <Section>4</Section>
      <Section>5</Section>
      <Section>6</Section>
    </div>
  );
}
