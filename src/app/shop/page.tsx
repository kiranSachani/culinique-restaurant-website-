'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Heart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import './shop.css';

const shopCategories = ['All', 'Sauces', 'Spices', 'Merch', 'Gift Cards'];

const products = [
  {
    id: 101,
    category: 'Sauces',
    name: 'Signature Truffle Oil',
    desc: 'Infused with white Alba truffles',
    price: 45.00,
    priceLabel: '$45.00',
    image: '/images/truffle-oil.png',
    btnLabel: 'ADD TO CART',
  },
  {
    id: 102,
    category: 'Spices',
    name: 'Artisan Spice Blend',
    desc: 'Smoked paprika, sumac & wild herbs',
    price: 28.00,
    priceLabel: '$28.00',
    image: '/images/spice-blend.png',
    btnLabel: 'ADD TO CART',
  },
  {
    id: 103,
    category: 'Merch',
    name: 'Culinique Apron',
    desc: 'Heavy linen with leather accents',
    price: 85.00,
    priceLabel: '$85.00',
    image: '/images/apron.png',
    btnLabel: 'ADD TO CART',
  },
  {
    id: 104,
    category: 'Gift Cards',
    name: 'Digital Gift Card',
    desc: 'The perfect taste for any occasion',
    price: 50.00,
    priceLabel: 'From $50.00',
    image: '/images/gift-card.png',
    btnLabel: 'ADD TO CART',
  },
];

export default function ShopPage() {
  const { addItem } = useCart();
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Popular');
  const [wishlist, setWishlist] = useState<number[]>([]);

  let filtered = activeCategory === 'All'
    ? [...products]
    : products.filter(p => p.category === activeCategory);

  filtered.sort((a, b) => {
    if (sortBy === 'Price: Low to High') return a.price - b.price;
    if (sortBy === 'Price: High to Low') return b.price - a.price;
    if (sortBy === 'Newest') return b.id - a.id;
    return 0;
  });

  const toggleWishlist = (id: number) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const handleAddToCart = (product: typeof products[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      desc: product.desc,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <div className="shop-page">
      {/* Hero */}
      <section className="shop-hero">
        <div className="shop-hero__bg">
          <Image
            src="/images/truffle-oil.png"
            alt="The Culinique Shop"
            fill
            priority
            style={{ objectFit: 'cover', filter: 'brightness(0.5)' }}
          />
          <div className="shop-hero__overlay" />
        </div>
        <div className="shop-hero__content">
          <h1 className="shop-hero__title">The Culinique Shop</h1>
          <p className="shop-hero__subtitle">Bring the essence of our kitchen into yours. Curated ingredients and signature tools for the discerning home chef.</p>
        </div>
      </section>

      {/* Filters & Sort */}
      <section className="shop-controls section">
        <div className="container">
          <div className="shop-controls__inner">
            <div className="shop-controls__tabs">
              {shopCategories.map(cat => (
                <button
                  key={cat}
                  className={`shop-controls__tab ${activeCategory === cat ? 'shop-controls__tab--active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="shop-controls__sort">
              <span className="shop-controls__sort-label">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="shop-controls__select"
              >
                <option>Popular</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="shop-grid">
        <div className="container">
          <div className="shop-grid__items">
            {filtered.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-card__image">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    style={{ objectFit: 'cover' }}
                  />
                  <button
                    className={`product-card__heart ${wishlist.includes(product.id) ? 'product-card__heart--active' : ''}`}
                    onClick={() => toggleWishlist(product.id)}
                    aria-label="Add to wishlist"
                  >
                    <Heart size={18} fill={wishlist.includes(product.id) ? '#E07A5F' : 'none'} />
                  </button>
                </div>
                <div className="product-card__body">
                  <h3 className="product-card__name">{product.name}</h3>
                  <p className="product-card__desc">{product.desc}</p>
                  <span className="product-card__price">{product.priceLabel}</span>
                  <button 
                    className="product-card__btn"
                    onClick={() => handleAddToCart(product)}
                  >
                    {product.btnLabel}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="shop-grid__more">
            <button className="btn btn--outline">Load More Experiences</button>
          </div>
        </div>
      </section>
    </div>
  );
}
