'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Lock, CreditCard, Truck, Package } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import './checkout.css';

export default function CheckoutPage() {
  const { items, subtotal, tax, total } = useCart();
  const [method, setMethod] = useState<'delivery' | 'pickup'>('delivery');
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    postcode: '',
    country: '',
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const handleChange = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="checkout-page">
      {/* Header */}
      <section className="checkout-header">
        <div className="container">
          <h1 className="checkout-header__title">Secure Checkout</h1>
          <div className="checkout-header__divider" />
        </div>
      </section>

      {/* Checkout Content */}
      <section className="checkout-content">
        <div className="container">
          {items.length === 0 ? (
            <div className="cart-empty">
              <h2 className="cart-empty__title">No items to checkout</h2>
              <p className="cart-empty__text">Add items from the menu or shop first.</p>
              <div className="cart-empty__actions">
                <Link href="/menu" className="btn btn--primary">Browse Menu</Link>
                <Link href="/shop" className="btn btn--outline">Visit Shop</Link>
              </div>
            </div>
          ) : (
            <div className="checkout-layout">
              {/* Left Column - Form */}
              <div className="checkout-form">
                {/* Contact Information */}
                <h2 className="checkout-form__heading">Contact Information</h2>
                <div className="checkout-form__group">
                  <div className="checkout-form__field checkout-form__field--full">
                    <label className="checkout-form__label">FULL NAME</label>
                    <input
                      type="text"
                      className="checkout-form__input"
                      value={form.fullName}
                      onChange={(e) => handleChange('fullName', e.target.value)}
                    />
                  </div>
                </div>
                <div className="checkout-form__group checkout-form__group--half">
                  <div className="checkout-form__field">
                    <label className="checkout-form__label">EMAIL ADDRESS</label>
                    <input
                      type="email"
                      className="checkout-form__input"
                      value={form.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                    />
                  </div>
                  <div className="checkout-form__field">
                    <label className="checkout-form__label">PHONE NUMBER</label>
                    <input
                      type="tel"
                      className="checkout-form__input"
                      value={form.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                    />
                  </div>
                </div>

                {/* Method */}
                <h2 className="checkout-form__heading">Method</h2>
                <div className="checkout-form__method">
                  <button
                    className={`checkout-form__method-btn ${method === 'delivery' ? 'checkout-form__method-btn--active' : ''}`}
                    onClick={() => setMethod('delivery')}
                  >
                    <Truck size={20} />
                    <span>DELIVERY</span>
                  </button>
                  <button
                    className={`checkout-form__method-btn ${method === 'pickup' ? 'checkout-form__method-btn--active' : ''}`}
                    onClick={() => setMethod('pickup')}
                  >
                    <Package size={20} />
                    <span>PICK UP</span>
                  </button>
                </div>

                {/* Delivery Address */}
                {method === 'delivery' && (
                  <>
                    <h2 className="checkout-form__heading">Delivery Address</h2>
                    <div className="checkout-form__group">
                      <div className="checkout-form__field checkout-form__field--full">
                        <label className="checkout-form__label">STREET ADDRESS</label>
                        <input
                          type="text"
                          className="checkout-form__input"
                          value={form.street}
                          onChange={(e) => handleChange('street', e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="checkout-form__group checkout-form__group--half">
                      <div className="checkout-form__field">
                        <label className="checkout-form__label">CITY</label>
                        <input
                          type="text"
                          className="checkout-form__input"
                          value={form.city}
                          onChange={(e) => handleChange('city', e.target.value)}
                        />
                      </div>
                      <div className="checkout-form__field">
                        <label className="checkout-form__label">POSTCODE</label>
                        <input
                          type="text"
                          className="checkout-form__input"
                          value={form.postcode}
                          onChange={(e) => handleChange('postcode', e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="checkout-form__group">
                      <div className="checkout-form__field checkout-form__field--full">
                        <label className="checkout-form__label">COUNTRY</label>
                        <input
                          type="text"
                          className="checkout-form__input"
                          value={form.country}
                          onChange={(e) => handleChange('country', e.target.value)}
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* Payment */}
                <div className="checkout-form__payment-header">
                  <h2 className="checkout-form__heading">Payment</h2>
                  <div className="checkout-form__card-icons">
                    <CreditCard size={22} />
                    <span className="checkout-form__card-badge">VISA</span>
                    <span className="checkout-form__card-badge">MC</span>
                  </div>
                </div>
                <div className="checkout-form__group">
                  <div className="checkout-form__field checkout-form__field--full">
                    <label className="checkout-form__label">NAME ON CARD</label>
                    <input
                      type="text"
                      className="checkout-form__input"
                      value={form.cardName}
                      onChange={(e) => handleChange('cardName', e.target.value)}
                    />
                  </div>
                </div>
                <div className="checkout-form__group">
                  <div className="checkout-form__field checkout-form__field--full">
                    <label className="checkout-form__label">CARD NUMBER</label>
                    <input
                      type="text"
                      className="checkout-form__input"
                      value={form.cardNumber}
                      onChange={(e) => handleChange('cardNumber', e.target.value)}
                    />
                  </div>
                </div>
                <div className="checkout-form__group checkout-form__group--half">
                  <div className="checkout-form__field">
                    <label className="checkout-form__label">EXPIRY (MM/YY)</label>
                    <input
                      type="text"
                      className="checkout-form__input"
                      value={form.expiry}
                      onChange={(e) => handleChange('expiry', e.target.value)}
                    />
                  </div>
                  <div className="checkout-form__field">
                    <label className="checkout-form__label">CVV</label>
                    <input
                      type="text"
                      className="checkout-form__input"
                      value={form.cvv}
                      onChange={(e) => handleChange('cvv', e.target.value)}
                    />
                  </div>
                </div>

                <button className="checkout-form__submit">PLACE ORDER</button>
              </div>

              {/* Right Column - Order Summary */}
              <div className="checkout-summary">
                <h2 className="checkout-summary__title">Order Summary</h2>
                <div className="checkout-summary__items">
                  {items.map((item) => (
                    <div key={item.id} className="checkout-summary__item">
                      <div className="checkout-summary__item-img">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={64}
                          height={64}
                          style={{ objectFit: 'cover', borderRadius: '4px' }}
                        />
                      </div>
                      <div className="checkout-summary__item-info">
                        <span className="checkout-summary__item-name">{item.name}</span>
                        <span className="checkout-summary__item-qty">Qty: {item.quantity}</span>
                        <span className="checkout-summary__item-price">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="checkout-summary__divider" />

                <div className="checkout-summary__row">
                  <span>SUBTOTAL</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="checkout-summary__row">
                  <span>DELIVERY</span>
                  <span>COMPLIMENTARY</span>
                </div>
                <div className="checkout-summary__row">
                  <span>TAX</span>
                  <span>${tax.toFixed(2)}</span>
                </div>

                <div className="checkout-summary__divider" />

                <div className="checkout-summary__total">
                  <span>Total</span>
                  <span className="checkout-summary__total-price">${total.toFixed(2)}</span>
                </div>

                <div className="checkout-summary__secure">
                  <Lock size={14} />
                  <span>SECURE SSL CHECKOUT</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
