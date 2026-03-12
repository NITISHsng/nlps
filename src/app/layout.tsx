import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SocialSidebar from '@/components/SocialSidebar';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'NLPS Badigachh High School',
  description: 'NLPS Badigachh High School',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen relative">
          <SocialSidebar />
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
