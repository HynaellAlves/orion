// Importação do Tipo Metadado que contém objetos de Metadados
import type { Metadata } from "next";

// Importação das fontes
import { Geist, Geist_Mono } from "next/font/google";

// Importação da Folha de Estilo
import "./globals.css";

// Declarando e Configurando as Fontes
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Objeto dos Metadados da página
export const metadata: Metadata = {
  title: "Título da Guia",
  authors: [{name: "Hynaell Alves"}],
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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <main>
        {children}
        </main>
      </body>
    </html>
  );
}
