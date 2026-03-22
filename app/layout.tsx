import "./globals.css";

export const metadata = {
  title: "AxiomCorex",
  description: "Built by EnvAxiom",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}