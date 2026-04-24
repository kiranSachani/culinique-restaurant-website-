'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { ShoppingBag, User, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import './Navbar.css';

export default function Navbar() {
  const pathname = usePathname();
  const { itemCount } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isAuthPage = pathname === '/auth';
  const isHome = pathname === '/';
  const isAbout = pathname === '/about';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Auth page has its own layout — hide navbar
  if (isAuthPage) return null;

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'The Menu' },
    { href: '/about', label: 'About' },
    { href: '/shop', label: 'Shop' },
  ];

  const transparent = (isHome || isAbout) && !scrolled;

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${transparent ? 'navbar--transparent' : ''}`}>
        <div className="navbar__inner">
          <Link href="/" className="navbar__logo">
            <span className="navbar__logo-text">Culinique</span>
          </Link>

          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`navbar__link ${pathname === link.href ? 'navbar__link--active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="navbar__actions">
            <Link href="/cart" className="navbar__action-btn navbar__cart-btn" aria-label="Cart">
              <ShoppingBag size={20} />
              {itemCount > 0 && <span className="navbar__cart-badge">{itemCount}</span>}
            </Link>
            <Link href="/auth" className="navbar__action-btn" aria-label="Account">
              <User size={20} />
            </Link>
            <button
              className="navbar__hamburger"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div className={`mobile-overlay ${mobileOpen ? 'mobile-overlay--open' : ''}`}>
        <div className="mobile-overlay__content">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`mobile-overlay__link ${pathname === link.href ? 'mobile-overlay__link--active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/cart" className="mobile-overlay__link" onClick={() => setMobileOpen(false)}>
            Cart
          </Link>
          <Link href="/auth" className="mobile-overlay__link" onClick={() => setMobileOpen(false)}>
            Sign In
          </Link>
        </div>
      </div>
    </>
  );
}
