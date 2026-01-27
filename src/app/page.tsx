import styles from "./index.module.css";

/* ---------- Importando os Componentes de Página ---------- */
import Section from "@/components/delimited/section/section";
import ConfirmButton from "@/components/UI/buttons/confirm/confirm_button";
import Image from "@/components/UI/image/image";
import Input from "@/components/UI/inputs/input";
import Text_area from "@/components/UI/inputs/text_area/text_area";
import Title from "@/components/UI/title/title";

export default function Index() {
  return (
    <div className={`${styles.index} page`}>
      <Section id={styles.section_hero}>
        <div className={styles.content_informationsHero}>
          <Title>Formação profissional para quem quer entrar no mercado de verdade</Title>
          <ConfirmButton alt="Ver Cursos" type="button" />
        </div>
        <div id={styles.content_imageHero}>
          <Image width={300} height={300} src={"https://images.unsplash.com/photo-1523240795612-9a054b0db644"} alt={"Imagem de seção Hero"} />
        </div>
      </Section>
      <Section>2</Section>
      <Section>3</Section>
      <Section>4</Section>
      <Section>5</Section>
      <Section id={styles.section_contact}>
        {/* <div id={styles.forms}>
          <Input label={"Nome"}></Input>
          <Input label={"Telefone"}></Input>
          <Text_area label={"Observações"}></Text_area>
        <ConfirmButton alt="Enviar" type="button" />
        </div> */}
      </Section>
    </div>
  );
}
