import styles from "./index.module.css";

/* ---------- Importando os Componentes de Página ---------- */
import Section from "@/components/delimited/section/section";
import ConfirmButton from "@/components/UI/buttons/confirm/confirm_button";
import Show_hidden_button from "@/components/UI/buttons/show_hidden/show_hidden_button";
import Image from "@/components/UI/image/image";
import Input from "@/components/UI/inputs/input";
import Text_area from "@/components/UI/inputs/text_area/text_area";
import Title from "@/components/UI/title/title";

export default function Index() {
  return (
    <div className={`${styles.index} page`}>
      <Section id="section_hero" class={styles.section_hero}>
        <div className={styles.content_informationsHero}>
          <Title id="impact_title" class={styles.impact_title}>
            Formação profissional para quem quer entrar no mercado de verdade
          </Title>
          <Title id="" class={styles.impact_subtitle}>
            Cursos presenciais e híbridos, professores experientes e foco total
            na prática profissional.
          </Title>
          <ConfirmButton alt="Ver Cursos" type="button" />
        </div>
        <div id="content_imageHero" className={styles.content_imageHero}>
          <Image src={"/image_hero.png"} alt={"Imagem da seção Hero"} />
        </div>
      </Section>
      <Section id="section_mediaCourses" class={styles.section_mediaCourses}>
        <Show_hidden_button>D</Show_hidden_button>
        <Title class={styles.title_mediaCourses}>Veja o dia a dia de quem estuda no Orion !</Title>
        <div className={styles.content_mediaCourses}>
        </div>
      </Section>
      <Section>3</Section>
      <Section>4</Section>
      <Section>5</Section>
      <Section id="section_contact" class={styles.section_contact}>
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
