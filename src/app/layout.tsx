import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/components/Menu";
import { font_body, font_display, font_external } from "./fonts";

export const metadata: Metadata = {
  title: "Origamid Next",
  description: "Criado por Origamid",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${font_body.className} ${font_body.variable} ${font_display.variable} ${font_external.variable}`}
      >
        <Menu />
        {children}
      </body>
    </html>
  );
}
