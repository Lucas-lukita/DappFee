import type { Metadata } from "next";
import "./globals.css";
import { Web3Provider } from "../context/Web3Provider"; // Importando o contexto que criamos

export const metadata: Metadata = {
  title: "Fee Agro",
  description: "Teste Front-end",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50 text-gray-900 antialiased">
        
        <Web3Provider>
          {children}
        </Web3Provider>
      </body>
    </html>
  );
}
