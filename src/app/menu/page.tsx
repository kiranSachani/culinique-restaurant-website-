'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { X, Check } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import './menu.css';

const categories = ['All', 'Italian', 'Meat & Seafood', 'Vegetarian', 'Desserts', 'Miscellaneous'];

import { menuItems, MenuItem } from '@/data/menuData';

export default function MenuPage() {
  const router = useRouter();
  const { addItem } = useCart();
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [toast, setToast] = useState<{ show: boolean; name: string }>({ show: false, name: '' });

  const filteredItems = activeCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  // Close modal on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedItem(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Auto-hide toast
  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => setToast({ show: false, name: '' }), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast.show]);

  const handleAdd = (item: MenuItem) => {
    // Parse price string to number
    const numericPrice = parseFloat(item.price.replace('$', ''));
    addItem({
      id: item.id,
      name: item.name,
      desc: item.description,
      price: numericPrice,
      image: item.image,
    });
    setToast({ show: true, name: item.name });
    // Navigate to cart after brief delay
    setTimeout(() => {
      router.push('/cart');
    }, 1200);
  };

  return (
    <div className="menu-page">
      {/* Hero */}
      <section className="menu-hero">
        <div className="menu-hero__bg">
          <Image
            src="/images/menu-hero.png"
            alt="The Curated Menu"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
          <div className="menu-hero__overlay" />
        </div>
        <div className="menu-hero__content">
          <span className="menu-hero__label">A Culinary Voyage</span>
          <h1 className="menu-hero__title">The Curated Menu</h1>
          <div className="menu-hero__divider" />
        </div>
      </section>

      {/* Filter Pills */}
      <section className="menu-filters">
        <div className="container">
          <div className="menu-filters__pills">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`menu-filters__pill ${activeCategory === cat ? 'menu-filters__pill--active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="menu-grid section">
        <div className="container">
          <div className="menu-grid__items">
            {filteredItems.map((item) => (
              <div key={item.id} className="menu-card">
                <div className="menu-card__image">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={360}
                    height={320}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="menu-card__body">
                  <span className="menu-card__cuisine">{item.cuisine}</span>
                  <h3 className="menu-card__name">{item.name}</h3>
                  <p className="menu-card__desc">{item.description}</p>
                  <div className="menu-card__footer">
                    <span className="menu-card__price">{item.price}</span>
                    <div className="menu-card__actions">
                      <button
                        className="menu-card__btn menu-card__btn--details"
                        onClick={() => setSelectedItem(item)}
                      >
                        Details
                      </button>
                      <button
                        className="menu-card__btn menu-card__btn--add"
                        onClick={() => handleAdd(item)}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details Modal */}
      {selectedItem && (
        <div className="menu-modal__backdrop" onClick={() => setSelectedItem(null)}>
          <div className="menu-modal" onClick={(e) => e.stopPropagation()}>
            <button className="menu-modal__close" onClick={() => setSelectedItem(null)} aria-label="Close">
              <X size={24} />
            </button>
            <div className="menu-modal__image">
              <Image
                src={selectedItem.image}
                alt={selectedItem.name}
                width={480}
                height={360}
                style={{ objectFit: 'cover', borderRadius: '4px' }}
              />
            </div>
            <div className="menu-modal__content">
              <span className="menu-modal__cuisine">{selectedItem.cuisine}</span>
              <h2 className="menu-modal__name">{selectedItem.name}</h2>
              <p className="menu-modal__desc">{selectedItem.description}</p>

              <div className="menu-modal__section">
                <h4 className="menu-modal__section-title">Ingredients</h4>
                <ul className="menu-modal__list">
                  {selectedItem.details.ingredients.map((ing, i) => (
                    <li key={i}>{ing}</li>
                  ))}
                </ul>
              </div>

              <div className="menu-modal__section">
                <h4 className="menu-modal__section-title">Preparation</h4>
                <p className="menu-modal__text">{selectedItem.details.preparation}</p>
              </div>

              <div className="menu-modal__section">
                <h4 className="menu-modal__section-title">Wine Pairing</h4>
                <p className="menu-modal__text">{selectedItem.details.pairings}</p>
              </div>

              <div className="menu-modal__tags">
                {selectedItem.details.dietary.map((tag, i) => (
                  <span key={i} className="menu-modal__tag">{tag}</span>
                ))}
              </div>

              <div className="menu-modal__footer">
                <span className="menu-modal__price">{selectedItem.price}</span>
                <button
                  className="menu-modal__add-btn"
                  onClick={() => {
                    setSelectedItem(null);
                    handleAdd(selectedItem);
                  }}
                >
                  Add to Order
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      <div className={`menu-toast ${toast.show ? 'menu-toast--visible' : ''}`}>
        <div className="menu-toast__icon">
          <Check size={16} />
        </div>
        <span><strong>{toast.name}</strong> added to your order</span>
      </div>
    </div>
  );
}
