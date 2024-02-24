import { bootstrap } from "@neopress/plugin-system";
import "./global.css";
import { PLUGIN_LIST } from "../plugins";

bootstrap(PLUGIN_LIST);

export const metadata = {
  title: 'Welcome to neopress',
  description: 'Generated by create-nx-workspace',
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
