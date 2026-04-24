'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { X, Minus, Plus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import './cart.css';

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal, tax, total } = useCart();
  const [promoCode, setPromoCode] = useState('');

  return (
    <div className="cart-page">
      <section className="cart-header">
        <div className="container">
          <h1 className="cart-header__title">Your Cart</h1>
          <p className="cart-header__subtitle">Review your selections before completing your reservation.</p>
        </div>
      </section>

      <section className="cart-content section">
        <div className="container">
          {items.length === 0 ? (
            <div className="cart-empty">
              <h2 className="cart-empty__title">Your cart is empty</h2>
              <p className="cart-empty__text">Explore our menu or shop to add items.</p>
              <div className="cart-empty__actions">
                <Link href="/menu" className="btn btn--primary">Browse Menu</Link>
                <Link href="/shop" className="btn btn--outline">Visit Shop</Link>
              </div>
            </div>
          ) : (
            <div className="cart-layout">
              {/* Cart Items */}
              <div className="cart-items">
                {items.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="cart-item__image">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={100}
                        height={100}
                        style={{ objectFit: 'cover', borderRadius: '4px' }}
                      />
                    </div>
                    <div className="cart-item__info">
                      <h3 className="cart-item__name">{item.name}</h3>
                      <p className="cart-item__desc">{item.desc}</p>
                    </div>
                    <div className="cart-item__qty">
                      <button
                        className="cart-item__qty-btn"
                        onClick={() => updateQuantity(item.id, -1)}
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="cart-item__qty-val">{item.quantity}</span>
                      <button
                        className="cart-item__qty-btn"
                        onClick={() => updateQuantity(item.id, 1)}
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <span className="cart-item__price">${(item.price * item.quantity).toFixed(2)}</span>
                    <button
                      className="cart-item__remove"
                      onClick={() => removeItem(item.id)}
                      aria-label="Remove item"
                    >
                      <X size={18} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="order-summary">
                <h2 className="order-summary__title">Order Summary</h2>
                <div className="order-summary__divider" />
                <div className="order-summary__row">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="order-summary__row">
                  <span>Delivery</span>
                  <span>Complimentary</span>
                </div>
                <div className="order-summary__row">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="order-summary__divider" />
                <div className="order-summary__total">
                  <span>Total</span>
                  <span className="order-summary__total-price">${total.toFixed(2)}</span>
                </div>

                <div className="order-summary__promo">
                  <span className="order-summary__promo-label">PROMO CODE</span>
                  <div className="order-summary__promo-input">
                    <input
                      type="text"
                      placeholder="Enter code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                    />
                    <button className="order-summary__promo-apply">APPLY</button>
                  </div>
                </div>

                <Link href="/checkout" className="order-summary__checkout">PROCEED TO CHECKOUT</Link>
                <Link href="/shop" className="order-summary__continue">CONTINUE SHOPPING</Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
