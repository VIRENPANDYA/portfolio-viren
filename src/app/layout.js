import './globals.css';
import '../styles/layout.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export const metadata = {
  title: "Viren's Portfolio",
  description: "Showcasing Viren's web development journey and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
