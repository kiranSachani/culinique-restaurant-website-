import Image from 'next/image';
import './about.css';

const milestones = [
  { year: '2015', title: 'The First Spark' },
  { year: '2017', title: 'Finding Our Home' },
  { year: '2020', title: 'A Michelin Star' },
  { year: '2024', title: 'The Art of the Table' },
];

const values = [
  {
    icon: '🌿',
    title: 'Farm to Fork',
    desc: 'We source the finest, sustainable ingredients from local purveyors, ensuring freshness and supporting our community.',
  },
  {
    icon: '❤️',
    title: 'Crafted with Love',
    desc: 'Every dish is a labor of love, meticulously prepared by our passionate team to ignite the senses.',
  },
  {
    icon: '🤝',
    title: 'Community First',
    desc: 'We believe in fostering connections, creating a welcoming space where guests become family.',
  },
];

const team = [
  { name: 'Julian Mercer', role: 'Executive Chef', image: '/images/chef-kitchen.png' },
  { name: 'Elara Vance', role: 'Head Pastry Chef', image: '/images/chef-plating.png' },
  { name: 'Silas Thorne', role: 'Master Sommelier', image: '/images/chef-portrait.png' },
  { name: 'Aria Sterling', role: 'General Manager', image: '/images/restaurant-interior.png' },
];

const stats = [
  { number: '10+', label: 'Years of Excellence' },
  { number: '50k+', label: 'Delighted Guests' },
  { number: '120+', label: 'Signature Dishes' },
  { number: '4', label: 'Global Locations' },
];

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero__bg">
          <Image
            src="/images/about-hero.png"
            alt="Our Story"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
          <div className="about-hero__overlay" />
        </div>
        <div className="about-hero__content">
          <h1 className="about-hero__title">Our Story Began with a Single Flame</h1>
        </div>
      </section>

      {/* Journey Section */}
      <section className="journey section">
        <div className="container">
          <div className="journey__grid">
            <div className="journey__image">
              <Image
                src="/images/chef-kitchen.png"
                alt="The Culinary Journey"
                width={520}
                height={380}
                style={{ objectFit: 'cover', borderRadius: '4px' }}
              />
            </div>
            <div className="journey__text">
              <h2 className="journey__title">The Culinary Journey</h2>
              <p className="journey__body">
                In the heart of the city, a vision was born. A vision to redefine the culinary landscape, to elevate every ingredient, and to craft an experience that transcends a mere meal. Culinique is not just a restaurant; it is a symphony of flavors, a canvas for artistry, and a sanctuary for those who seek the extraordinary.
              </p>
              <p className="journey__body">
                We believe that every dish tells a story. From the careful selection of local, seasonal produce to the masterful execution of complex techniques, our commitment to excellence is unwavering. Our kitchen is an atelier, and our dining room, a theater of taste.
              </p>
              <div className="journey__milestones">
                {milestones.map((m) => (
                  <div key={m.year} className="journey__milestone">
                    <div className="journey__milestone-dot" />
                    <span className="journey__milestone-title">{m.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="values section">
        <div className="container">
          <h2 className="values__title">Our Core Values</h2>
          <div className="values__grid">
            {values.map((v) => (
              <div key={v.title} className="values__card">
                <div className="values__icon">{v.icon}</div>
                <h3 className="values__card-title">{v.title}</h3>
                <p className="values__card-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Artisans */}
      <section className="artisans section">
        <div className="container">
          <h2 className="artisans__title">The Artisans</h2>
          <div className="artisans__grid">
            {team.map((member) => (
              <div key={member.name} className="artisans__card">
                <div className="artisans__photo">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={260}
                    height={300}
                    style={{ objectFit: 'cover', borderRadius: '4px' }}
                  />
                </div>
                <h3 className="artisans__name">{member.name}</h3>
                <p className="artisans__role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="container">
          <div className="stats__grid">
            {stats.map((s) => (
              <div key={s.label} className="stats__item">
                <span className="stats__number">{s.number}</span>
                <span className="stats__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
