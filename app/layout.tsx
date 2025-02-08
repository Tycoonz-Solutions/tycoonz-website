import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { ToastContainer } from "react-toastify";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'], // Adjust based on your design
  variable: '--font-plus-jakarta-sans', // Optional CSS variable for the font
});

export const metadata = {
  title: 'Tycoonz Solutions',
  description: 'Tycoonz Solutions - Software Development',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} font-sans`}>
      <body className="bg-[#000000] "
      >
        <Navbar />
        {children}
        <Footer />
        <ToastContainer position="top-right" autoClose={5000}  style={{ marginTop: '70px' }}/>
      </body>
    </html>
  );
}
