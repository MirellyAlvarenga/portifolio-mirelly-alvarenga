import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local"; 
import NavBar from "./_components/root/NavBar";
import { Providers } from "./providers";

const jetbrainsMono = localFont({
src: [
  {
    path: "../public/fonts/JetBrainsMono/JetBrainsMono-Regular.woff2", 
    weight: "400", 
    style: "normal", 
  },
  {
    path: "../public/fonts/JetBrainsMono/JetBrainsMono-Bold.woff2", 
    weight: "700", 
    style: "normal",
  },
],
variable: "--font-jetbrains-mono",
display: "swap", 
});

export const metadata: Metadata = {
title: "Mirelly Alvarenga - Portfolio",
description: "Portfólio de Análise de Dados de Mirelly Alvarenga",
icons: {
  icon: "/",
},
};

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return (
  <html lang="pt-BR" suppressHydrationWarning>
    <body className={`${jetbrainsMono.className} bg-black text-white`}>
      <Providers>
        <NavBar />
        <main className="pt-2">{children}</main>
      </Providers>
    </body>
  </html>
);
}