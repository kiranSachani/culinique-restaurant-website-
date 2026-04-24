'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, Clock, ChevronDown } from 'lucide-react';
import './home.css';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  useEffect(() => {
    // Hero animation
    const tl = gsap.timeline({ delay: 0.3 });
    tl.fromTo('.hero__subtitle', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
      .fromTo('.hero__title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.5')
      .fromTo('.hero__desc', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
      .fromTo('.hero__actions', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.5');

    // Scroll-triggered reveals
    const revealElements = gsap.utils.toArray('.gsap-reveal') as HTMLElement[];
    revealElements.forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%', once: true }
        }
      );
    });

    // Overlapping images animation in About section
    gsap.fromTo('.about__img--back', 
      { opacity: 0, x: 40 },
      { opacity: 1, x: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '.about__images', start: 'top 80%', once: true }}
    );
    gsap.fromTo('.about__img--front', 
      { opacity: 0, x: -40, y: 40 },
      { opacity: 1, x: 0, y: 0, duration: 1.2, delay: 0.2, ease: 'power3.out', scrollTrigger: { trigger: '.about__images', start: 'top 80%', once: true }}
    );

    // Stagger cards
    const cardContainers = [
      { container: '.showcase__grid', children: '.showcase__card' },
      { container: '.testimonials__grid', children: '.testimonials__card' },
      { container: '.gallery__grid', children: '.gallery__item' }
    ];

    cardContainers.forEach(({ container, children }) => {
      const cont = document.querySelector(container);
      if (!cont) return;
      const items = cont.querySelectorAll(children);
      gsap.fromTo(items,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: cont, start: 'top 80%', once: true }
        }
      );
    });

    // Parallax on hero image
    gsap.to('.hero__bg img', {
      y: '15%',
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__bg">
          <Image
            src="/images/hero-dining.png"
            alt="Culinique fine dining ambiance"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
          <div className="hero__overlay" />
        </div>
        <div className="hero__content">
          <span className="hero__subtitle">YOUR CULINARY EXPERIENCE</span>
          <h1 className="hero__title">Beyond the Plate.<br />Before Time.</h1>
          <p className="hero__desc">
            An intimate journey through taste, texture, and atmosphere. Driven by seasonal grace and local connection.
          </p>
          <div className="hero__actions">
            <Link href="/menu" className="btn btn--solid-terracotta">Explore Menu</Link>
            <Link href="/about" className="btn btn--outline-light">Book a Table</Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about section">
        <div className="container">
          <div className="about__grid">
            <div className="about__text">
              <div className="about__divider gsap-reveal"></div>
              <h2 className="about__title gsap-reveal">Crafted with Passion,<br />Served with Soul</h2>
              <div className="about__body gsap-reveal">
                <p>
                  At Culinique, we believe that a meal is more than sustenance; it is a profound narrative shared between the chef and the guest. Our philosophy is rooted in the purity of ingredients, the precision of technique, and the warmth of genuine hospitality.
                </p>
                <p>
                  Step into our dining room and leave the outside world behind. Here, time slows down, allowing you to appreciate the subtle symphonies of flavor in an environment designed for quiet luxury.
                </p>
              </div>
            </div>
            <div className="about__images">
              <div className="about__img about__img--back">
                <Image
                  src="/images/chef-plating.png"
                  alt="Chef plating a dish"
                  width={500}
                  height={360}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="about__img about__img--front">
                <Image
                  src="/images/restaurant-interior.png"
                  alt="Restaurant interior"
                  width={420}
                  height={420}
                  style={{ objectFit: 'cover', border: '8px solid var(--color-surface)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culinary Showcase */}
      <section className="showcase section">
        <div className="container">
          <div className="showcase__header gsap-reveal">
            <span className="showcase__label">THE CULINARY SHOWCASE</span>
            <h2 className="showcase__title">Signature Dishes</h2>
          </div>
          
          <div className="showcase__grid">
            <div className="showcase__card">
              <div className="showcase__card-img">
                <Image src="/images/scallops.png" alt="Scallops" width={380} height={380} style={{ objectFit: 'cover' }} />
              </div>
              <div className="showcase__card-content">
                <span className="showcase__card-label">APPETIZER</span>
                <h3 className="showcase__card-title">Hokkaido Scallops</h3>
              </div>
            </div>
            <div className="showcase__card">
              <div className="showcase__card-img">
                <Image src="/images/bistecca.png" alt="Wagyu" width={380} height={380} style={{ objectFit: 'cover' }} />
              </div>
              <div className="showcase__card-content">
                <span className="showcase__card-label">MAIN COURSE</span>
                <h3 className="showcase__card-title">Wagyu Striploin</h3>
              </div>
            </div>
            <div className="showcase__card">
              <div className="showcase__card-img">
                <Image src="/images/pastry-trio.png" alt="Dessert" width={380} height={380} style={{ objectFit: 'cover' }} />
              </div>
              <div className="showcase__card-content">
                <span className="showcase__card-label">DESSERT</span>
                <h3 className="showcase__card-title">Valrhona Chocolate</h3>
              </div>
            </div>
          </div>
          
          <div className="showcase__cta gsap-reveal">
            <Link href="/menu" className="btn btn--outline-dark">SEE FULL MENU</Link>
          </div>
        </div>
      </section>

      {/* Sourcing Section */}
      <section className="sourcing section">
        <div className="container">
          <div className="sourcing__grid">
            <div className="sourcing__text gsap-reveal">
              <div className="sourcing__header">
                <span className="sourcing__icon">🍃</span>
                <span className="sourcing__label">SOURCING</span>
              </div>
              <h2 className="sourcing__title">Farm Fresh Integrity</h2>
              <p className="sourcing__body">
                Our relationships with local purveyors are the bedrock of our menu. We source daily, allowing the seasons to dictate our creations. Every vegetable, every cut of meat, tells a story of the land it came from.
              </p>
            </div>
            <div className="sourcing__image gsap-reveal">
              <Image
                src="/images/fresh-vegetables.png"
                alt="Fresh seasonal vegetables"
                width={600}
                height={400}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technique Section */}
      <section className="technique section">
        <div className="container">
          <div className="technique__grid">
            <div className="technique__image gsap-reveal">
              <Image
                src="/images/chef-kitchen.png"
                alt="Chef working"
                width={600}
                height={400}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="technique__text gsap-reveal">
              <div className="technique__header">
                <span className="technique__icon">🔪</span>
                <span className="technique__label">TECHNIQUE</span>
              </div>
              <h2 className="technique__title">Artful Craftsmanship</h2>
              <p className="technique__body">
                Behind every plate is a meticulous process of refinement. Techniques borrowed from classic French tradition meld with modern innovation to create textures and flavors that linger in the memory long after the meal is finished.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chef Quote Section */}
      <section className="chef-quote">
        <div className="container">
          <div className="chef-quote__grid">
            <div className="chef-quote__portrait gsap-reveal">
              <Image
                src="/images/chef-portrait.png"
                alt="Chef Elias Thorne"
                width={360}
                height={420}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="chef-quote__content gsap-reveal">
              <div className="chef-quote__mark">&quot;</div>
              <blockquote className="chef-quote__text">
                &quot;Cooking at this level is not about ego; it is about absolute surrender to the ingredient. My role is simply to uncover the natural brilliance of what nature has already provided, and present it with absolute clarity.&quot;
              </blockquote>
              <div className="chef-quote__author-wrap">
                <span className="chef-quote__name">Elias Thorne</span>
                <span className="chef-quote__role">EXECUTIVE CHEF</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials section">
        <div className="container">
          <div className="testimonials__header gsap-reveal">
            <h2 className="testimonials__title">Hear from our Guests</h2>
            <div className="testimonials__divider"></div>
          </div>
          <div className="testimonials__grid">
            <div className="testimonials__card">
              <div className="testimonials__stars">★★★★★</div>
              <p className="testimonials__text">
                &quot;An unparalleled dining experience. The attention to detail, from the ambient lighting to the immaculate plating, makes Culinique a true temple of gastronomy.&quot;
              </p>
              <p className="testimonials__author">J. LAURENT</p>
            </div>
            <div className="testimonials__card">
              <div className="testimonials__stars">★★★★★</div>
              <p className="testimonials__text">
                &quot;The tasting menu was a revelation. Each course flowed seamlessly into the next, guided by an expertly curated wine pairing. Truly unforgettable.&quot;
              </p>
              <p className="testimonials__author">E. DANIELS</p>
            </div>
            <div className="testimonials__card">
              <div className="testimonials__stars">★★★★★</div>
              <p className="testimonials__text">
                &quot;Service that anticipates your needs before you even realize them. Culinique defines modern luxury hospitality with grace and warmth.&quot;
              </p>
              <p className="testimonials__author">M. SILVA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Bar */}
      <section className="reservation-bar">
        <div className="container">
          <h2 className="reservation-bar__title">Reserve Your Table Tonight</h2>
          <div className="reservation-bar__form">
            <div className="reservation-bar__field">
              <label>DATE</label>
              <div className="reservation-bar__input-wrap">
                <input type="date" placeholder="mm/dd/yyyy" />
                <Calendar size={16} />
              </div>
            </div>
            <div className="reservation-bar__field">
              <label>TIME</label>
              <div className="reservation-bar__input-wrap">
                <input type="time" placeholder="-- : --" />
                <Clock size={16} />
              </div>
            </div>
            <div className="reservation-bar__field">
              <label>GUESTS</label>
              <div className="reservation-bar__input-wrap">
                <select defaultValue="2">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6+</option>
                </select>
                <ChevronDown size={16} />
              </div>
            </div>
            <button className="btn btn--solid-dark reservation-bar__btn">FIND TABLE</button>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery">
        <div className="gallery__grid">
          <div className="gallery__item">
            <div className="gallery__overlay"></div>
            <Image src="/images/bistecca.png" alt="Gallery" fill style={{ objectFit: 'cover' }} />
          </div>
          <div className="gallery__item">
            <div className="gallery__overlay"></div>
            <Image src="/images/scallops.png" alt="Gallery" fill style={{ objectFit: 'cover' }} />
          </div>
          <div className="gallery__item">
            <div className="gallery__overlay"></div>
            <Image src="/images/pastry-trio.png" alt="Gallery" fill style={{ objectFit: 'cover' }} />
          </div>
          <div className="gallery__item">
            <div className="gallery__overlay"></div>
            <Image src="/images/chef-plating.png" alt="Gallery" fill style={{ objectFit: 'cover' }} />
          </div>
          <div className="gallery__item">
            <div className="gallery__overlay"></div>
            <Image src="/images/hero-dining.png" alt="Gallery" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>
    </div>
  );
}
