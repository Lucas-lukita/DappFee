import type { Metadata } from "next";
import "./globals.css"; // <--- ESTA LINHA TRAZ O VERDE DE VOLTA

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
        {children}
      </body>
    </html>
  );
}