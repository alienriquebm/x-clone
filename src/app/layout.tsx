import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'X twitter clone',
  description: 'Un clon de X hecho a pulsito',
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
