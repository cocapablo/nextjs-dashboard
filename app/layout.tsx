import "./ui/global.css";
import { montserrat } from "./ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <h1>Bienvenidos a la fantástica app</h1>
        <div style={{ border: "1px solid #000", padding: "10px" }}>
          {children}
        </div>
        <footer className="py-10 flex justify-center items-center">
          <p>© 2024 Acme Corp. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
