import Link from 'next/link';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <h4 className="footer__logo">CULINIQUE</h4>
          </div>
          <div className="footer__links-row">
            <Link href="/menu">Menu</Link>
            <Link href="/about">About</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/cart">Cart</Link>
          </div>
          <div className="footer__legal-row">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Press Inquiries</a>
            <a href="#">Sustainability</a>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2024 CULINIQUE. AN ARTFUL DINING EXPERIENCE.
          </p>
        </div>
      </div>
    </footer>
  );
}
