'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import './auth.css';

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState<'signin' | 'create'>('signin');
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
    rememberMe: false,
    // Create account fields
    fullName: '',
    confirmPassword: '',
  });

  const handleChange = (field: string, value: string | boolean) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="auth-page">
      {/* Left Panel - Image */}
      <div className="auth-page__hero">
        <Image
          src="/images/hero-dining.png"
          alt="Culinique dining ambiance"
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
        <div className="auth-page__hero-overlay" />
        <div className="auth-page__hero-content">
          <h1 className="auth-page__hero-logo">Culinique</h1>
          <p className="auth-page__hero-tagline">The Art of the Table.</p>
          <div className="auth-page__hero-accent" />
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="auth-page__form-panel">
        <div className="auth-page__form-inner">
          {/* Tabs */}
          <div className="auth-tabs">
            <button
              className={`auth-tabs__tab ${activeTab === 'signin' ? 'auth-tabs__tab--active' : ''}`}
              onClick={() => setActiveTab('signin')}
            >
              Sign In
            </button>
            <button
              className={`auth-tabs__tab ${activeTab === 'create' ? 'auth-tabs__tab--active' : ''}`}
              onClick={() => setActiveTab('create')}
            >
              Create Account
            </button>
          </div>

          {/* Sign In Form */}
          {activeTab === 'signin' && (
            <div className="auth-form">
              <h2 className="auth-form__title">Welcome Back</h2>
              <p className="auth-form__subtitle">Please enter your details to continue.</p>

              <div className="auth-form__field">
                <label className="auth-form__label">Email Address</label>
                <input
                  type="email"
                  className="auth-form__input"
                  value={form.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                />
              </div>

              <div className="auth-form__field">
                <label className="auth-form__label">Password</label>
                <div className="auth-form__password-wrap">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="auth-form__input"
                    value={form.password}
                    onChange={(e) => handleChange('password', e.target.value)}
                  />
                  <button
                    type="button"
                    className="auth-form__eye-btn"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                  </button>
                </div>
              </div>

              <div className="auth-form__options">
                <label className="auth-form__remember">
                  <input
                    type="checkbox"
                    checked={form.rememberMe}
                    onChange={(e) => handleChange('rememberMe', e.target.checked)}
                  />
                  <span>REMEMBER ME</span>
                </label>
                <Link href="#" className="auth-form__forgot">FORGOT PASSWORD?</Link>
              </div>

              <button className="auth-form__submit">Sign In</button>

              <div className="auth-form__divider">
                <span>OR</span>
              </div>

              <button className="auth-form__social auth-form__social--google">
                <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
                  <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
                  <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
                  <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
                </svg>
                <span>Continue with Google</span>
              </button>

              <button className="auth-form__social auth-form__social--apple">
                <svg width="16" height="18" viewBox="0 0 16 18" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                  <path d="M13.545 9.547c-.02-2.09 1.706-3.092 1.784-3.14-0.97-1.42-2.484-1.614-3.023-1.636-1.286-.131-2.514.757-3.167.757-.653 0-1.663-.738-2.733-.718-1.407.02-2.704.818-3.429 2.079C1.1 9.274 2.302 12.75 3.932 14.692c.812 1.17 1.78 2.486 3.05 2.44 1.224-.05 1.687-.792 3.168-.792 1.48 0 1.897.792 3.19.767 1.316-.022 2.15-1.193 2.955-2.367.932-1.358 1.315-2.672 1.338-2.74-.029-.013-2.567-.985-2.588-3.453z"/>
                  <path d="M11.15 3.397c.674-.817 1.13-1.953 1.005-3.083-0.97.04-2.147.647-2.843 1.462-.624.722-1.17 1.876-1.024 2.983 1.084.084 2.19-.55 2.862-1.362z"/>
                </svg>
                <span>Continue with Apple</span>
              </button>
            </div>
          )}

          {/* Create Account Form */}
          {activeTab === 'create' && (
            <div className="auth-form">
              <h2 className="auth-form__title">Create Account</h2>
              <p className="auth-form__subtitle">Join the Culinique experience.</p>

              <div className="auth-form__field">
                <label className="auth-form__label">Full Name</label>
                <input
                  type="text"
                  className="auth-form__input"
                  value={form.fullName}
                  onChange={(e) => handleChange('fullName', e.target.value)}
                />
              </div>

              <div className="auth-form__field">
                <label className="auth-form__label">Email Address</label>
                <input
                  type="email"
                  className="auth-form__input"
                  value={form.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                />
              </div>

              <div className="auth-form__field">
                <label className="auth-form__label">Password</label>
                <div className="auth-form__password-wrap">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="auth-form__input"
                    value={form.password}
                    onChange={(e) => handleChange('password', e.target.value)}
                  />
                  <button
                    type="button"
                    className="auth-form__eye-btn"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                  </button>
                </div>
              </div>

              <div className="auth-form__field">
                <label className="auth-form__label">Confirm Password</label>
                <input
                  type="password"
                  className="auth-form__input"
                  value={form.confirmPassword}
                  onChange={(e) => handleChange('confirmPassword', e.target.value)}
                />
              </div>

              <button className="auth-form__submit">Create Account</button>

              <div className="auth-form__divider">
                <span>OR</span>
              </div>

              <button className="auth-form__social auth-form__social--google">
                <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
                  <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
                  <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
                  <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
                </svg>
                <span>Continue with Google</span>
              </button>

              <button className="auth-form__social auth-form__social--apple">
                <svg width="16" height="18" viewBox="0 0 16 18" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                  <path d="M13.545 9.547c-.02-2.09 1.706-3.092 1.784-3.14-0.97-1.42-2.484-1.614-3.023-1.636-1.286-.131-2.514.757-3.167.757-.653 0-1.663-.738-2.733-.718-1.407.02-2.704.818-3.429 2.079C1.1 9.274 2.302 12.75 3.932 14.692c.812 1.17 1.78 2.486 3.05 2.44 1.224-.05 1.687-.792 3.168-.792 1.48 0 1.897.792 3.19.767 1.316-.022 2.15-1.193 2.955-2.367.932-1.358 1.315-2.672 1.338-2.74-.029-.013-2.567-.985-2.588-3.453z"/>
                  <path d="M11.15 3.397c.674-.817 1.13-1.953 1.005-3.083-0.97.04-2.147.647-2.843 1.462-.624.722-1.17 1.876-1.024 2.983 1.084.084 2.19-.55 2.862-1.362z"/>
                </svg>
                <span>Continue with Apple</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
