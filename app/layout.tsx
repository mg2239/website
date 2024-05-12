import { GeistSans } from 'geist/font';
import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'matthew guo',
  description: "Matthew Guo's personal website",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.className} scroll-smooth`}>
      <body className="bg-slate-50 text-gray-800">{children}</body>
    </html>
  );
}
