// Importação do Tipo Metadado que contém objetos de Metadados
import type { Metadata } from "next";

// Importação das fontes
import { Poppins, Nunito } from "next/font/google";

// Importação da Folha de Estilo
import "./globals.css";

// Importando Componentes
import Header from "@/components/shared/header/header";
import Logo_main from "@/components/UI/logo_main/logo_main";
import Footer from "@/components/shared/footer/footer";

// Declarando e Configurando as Fontes
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const nunito = Nunito({
  weight: ["400", "500", "600", "700"],
  variable: "--font-nunito",
  subsets: ["latin"],
});

// Objeto dos Metadados da página
export const metadata: Metadata = {
  title: "Título da Guia",
  authors: [{ name: "Hynaell Alves" }],
  description: "Projeto Base para edição e criação de novos projetos",
};

// Função que renderiza os elementos básicos da página e os seus filhos
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">

      {/* Introduzindo as fontes no site para serem acessíveis pelos elementos */}
      <body className={`${poppins.variable} ${nunito.variable}`}>
        <Logo_main />
        <main>
        <Header />
          {children}
        <Footer />
        </main>
      </body>
    </html>
  );
}
