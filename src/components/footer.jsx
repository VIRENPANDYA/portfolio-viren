import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Viren's Portfolio. All rights reserved.</p>
    </footer>
  );
}
