import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Calendar, 
  MapPin, 
  Star, 
  CheckCircle, 
  MessageCircle, 
  Clock, 
  ChevronRight,
  Shield,
  Stethoscope,
  Smile,
  Zap,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ToothCursor from './components/ToothCursor';

// --- Navbar Component ---
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Blog', href: '#blog' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`nav-sticky ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '8px', borderRadius: '10px' }}>
            <Smile size={24} />
          </div>
          <div>
            <h1 style={{ fontSize: '1.5rem', fontWeight: '700', lineHeight: '1', color: 'var(--primary)' }}>SS Dental Care</h1>
            <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', tracking: '1px', color: 'var(--text-light)' }}>Premium Oral Clinic</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <ul style={{ display: 'flex', gap: '32px' }} className="desktop-only">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} style={{ fontWeight: '500', color: 'var(--text-dark)' }}>{link.name}</a>
            </li>
          ))}
        </ul>

        <div className="desktop-only">
          <a href="#booking" className="btn btn-primary">Book Now</a>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-only" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ backgroundColor: 'white', padding: '24px', borderBottom: '1px solid var(--accent)' }}
            className="mobile-only"
          >
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={() => setMobileMenuOpen(false)} style={{ display: 'block', fontSize: '1.2rem' }}>{link.name}</a>
                </li>
              ))}
              <li>
                <a href="#booking" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Book Appointment</a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- Hero Component ---
const Hero = () => {
  return (
    <section id="home" className="section" style={{ position: 'relative', overflow: 'hidden', padding: '120px 0 80px' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <div style={{ padding: '4px 12px', backgroundColor: 'var(--accent)', color: 'var(--primary)', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '600' }}>
              4.9 ⭐ Rated Patient Satisfaction
            </div>
          </div>
          <h1 style={{ fontSize: '4rem', lineHeight: '1.1', fontWeight: '800', marginBottom: '24px' }}>
            Your Smile, <br />
            <span style={{ color: 'var(--primary)' }}>Our Priority 😊</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-medium)', marginBottom: '40px', maxWidth: '500px' }}>
            Advanced, painless dental treatments in Hyderabad with 184+ happy patients. Experience world-class oral care today.
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a href="#booking" className="btn btn-primary" style={{ padding: '16px 36px' }}>
              Book Appointment <Calendar size={20} />
            </a>
            <a href="tel:09985947383" className="btn btn-outline" style={{ padding: '16px 36px' }}>
              Call Now <Phone size={20} />
            </a>
          </div>
          <div style={{ marginTop: '40px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ display: 'flex' }}>
              {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={18} fill="gold" stroke="gold" />)}
            </div>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}><strong>184+</strong> Reviews on Google</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{ position: 'relative' }}
        >
          <div style={{ 
            width: '100%', 
            height: '500px', 
            borderRadius: '30px', 
            overflow: 'hidden',
            boxShadow: 'var(--shadow-xl)',
            border: '12px solid white'
          }}>
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2070" 
              alt="Dental Care" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          {/* Glass Card Overlay */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="glass-panel"
            style={{ 
              position: 'absolute', 
              bottom: '40px', 
              left: '-40px', 
              padding: '24px', 
              borderRadius: '20px',
              maxWidth: '220px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <div style={{ backgroundColor: 'var(--secondary)', padding: '6px', borderRadius: '50%' }}>
                <CheckCircle size={16} color="white" />
              </div>
              <span style={{ fontWeight: '700' }}>Painless Rituals</span>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-medium)' }}>Advanced anesthesia and microscopic precision for comfort.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// --- Services Component ---
const Services = () => {
  const services = [
    { 
      title: 'Root Canal Treatment', 
      icon: <Stethoscope />, 
      image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800',
      desc: 'Save your natural tooth with painless root canal therapy using advanced rotary technology.' 
    },
    { 
      title: 'Tooth Extraction', 
      icon: <Zap />, 
      image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=800',
      desc: 'Gentle, precise tooth removal with minimal discomfort and fast recovery.' 
    },
    { 
      title: 'Wisdom Tooth Removal', 
      icon: <Shield />, 
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800',
      desc: 'Expert surgical extraction for impacted wisdom teeth with care.' 
    },
    { 
      title: 'Teeth Cleaning & Whitening', 
      icon: <Smile />, 
      image: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80&w=800',
      desc: 'Restore your bright smile with professional ultrasonic cleaning & whitening.' 
    },
    { 
      title: 'Dental Implants', 
      icon: <CheckCircle />, 
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=800',
      desc: 'Permanent, natural-looking solution for missing teeth with titanium implants.' 
    },
    { 
      title: 'Braces & Aligners', 
      icon: <Calendar />, 
      image: 'https://images.unsplash.com/photo-1616391182219-e080b4d1043a?auto=format&fit=crop&q=80&w=800',
      desc: 'Straighten your teeth comfortably with modern braces or invisible aligners.' 
    },
  ];

  return (
    <section id="services" className="section" style={{ backgroundColor: 'var(--bg-soft)' }}>
      <div className="container">
        <h2 className="section-title">Exclusive Dental Services</h2>
        <p className="section-subtitle">We offer a wide range of dental treatments using the latest technology to ensure your comfort and oral health.</p>
        
        <div className="responsive-grid">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card card-service"
            >
              <div style={{ width: '100%', height: '220px', overflow: 'hidden' }}>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="card-service-img"
                />
              </div>
              <div className="card-service-content">
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  backgroundColor: 'var(--accent)', 
                  color: 'var(--primary)', 
                  borderRadius: '12px', 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center',
                  marginBottom: '8px'
                }}>
                  {service.icon}
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '700' }}>{service.title}</h3>
                <p style={{ color: 'var(--text-medium)', fontSize: '0.95rem' }}>{service.desc}</p>
                <a href="#booking" style={{ color: 'var(--primary)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px', marginTop: 'auto' }}>
                  Learn More <ChevronRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- About Component ---
const About = () => {
  return (
    <section id="about" className="section">
        <div className="responsive-grid" style={{ alignItems: 'center', gap: '64px' }}>
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <div style={{ position: 'relative' }}>
              <img 
                src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=2070" 
                alt="Our Clinic" 
                style={{ width: '100%', borderRadius: '30px', boxShadow: 'var(--shadow-lg)' }}
              />
              <div className="desktop-only" style={{ 
                position: 'absolute', 
                top: '-30px', 
                right: '-30px', 
                backgroundColor: 'var(--secondary)', 
                color: 'white', 
                padding: '32px', 
                borderRadius: '24px',
                textAlign: 'center',
                boxShadow: 'var(--shadow-lg)'
              }}>
                <h4 style={{ fontSize: '2rem', fontWeight: '800' }}>10+</h4>
                <p style={{ fontSize: '0.8rem' }}>Years of Excellence</p>
              </div>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <span style={{ color: 'var(--primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>About SS Dental Care</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '16px 0 24px' }}>Expert Doctors. <br />Modern Technology.</h2>
            <p style={{ color: 'var(--text-medium)', marginBottom: '24px' }}>
              Located in the heart of Hyderabad at Erragadda, SS Dental Care is committed to providing premium dental services at affordable rates. Our clinic is equipped with the latest diagnostic and treatment tools to ensure high precision and painless procedures.
            </p>
            <ul style={{ marginBottom: '40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle size={18} color="var(--secondary)" /> Experienced Doctors
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle size={18} color="var(--secondary)" /> Modern Equipment
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle size={18} color="var(--secondary)" /> Friendly Staff
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle size={18} color="var(--secondary)" /> Affordable Pricing
              </li>
            </ul>
            <a href="#contact" className="btn btn-outline" style={{ display: 'inline-flex' }}>Visit Our Clinic</a>
          </motion.div>
        </div>
    </section>
  );
};

// --- Testimonials Component ---
const Testimonials = () => {
  const reviews = [
    { name: "Rahul Sharma", text: "Excellent work by doctor and staff. The root canal treatment was completely painless. Highly recommended!", rating: 5 },
    { name: "Priya V.", text: "Very pleasant experience. The clinic is very clean and the staff is super friendly. Best dental clinic in Hyderabad.", rating: 5 },
    { name: "Suresh Kumar", text: "Affordable and quality treatment. I got my dental implants done here and the results are amazing.", rating: 5 },
  ];

  return (
    <section id="reviews" className="section" style={{ backgroundColor: 'var(--bg-soft)' }}>
      <div className="container">
        <h2 className="section-title">What Our Patients Say</h2>
        <p className="section-subtitle">Real experiences from patients who entrusted us with their smiles.</p>
        
        <div className="responsive-grid">
          {reviews.map((rev, i) => (
            <motion.div 
              key={i} 
              className="card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill="#FFD700" stroke="#FFD700" />)}
              </div>
              <p style={{ fontStyle: 'italic', color: 'var(--text-medium)', marginBottom: '24px' }}>"{rev.text}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '45px', height: '45px', borderRadius: '50%', backgroundColor: 'var(--accent)', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: '700', color: 'var(--primary)' }}>
                  {rev.name[0]}
                </div>
                <span style={{ fontWeight: '700' }}>{rev.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '16px', padding: '16px 32px', backgroundColor: 'white', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}>
            <span style={{ fontSize: '1.4rem', fontWeight: '800' }}>4.9/5</span>
            <div style={{ width: '2px', height: '30px', backgroundColor: '#EEE' }}></div>
            <span style={{ color: 'var(--text-light)' }}>Based on 184 Google Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Gallery Component ---
const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=900',
    alt: 'Modern Dental Clinic Reception',
    span: 'tall',
  },
  {
    src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=900',
    alt: 'Dental Treatment Room',
    span: 'wide',
  },
  {
    src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=900',
    alt: 'Professional Teeth Cleaning',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&q=80&w=900',
    alt: 'Orthodontic Braces Treatment',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=900',
    alt: 'Dental Procedure',
    span: 'wide',
  },
  {
    src: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=900',
    alt: 'Happy Patient Smiling',
    span: 'tall',
  },
  {
    src: 'https://images.unsplash.com/photo-1598256989014-21eb0ca90afa?auto=format&fit=crop&q=80&w=900',
    alt: 'Endodontic Treatment',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1619177553561-6b78ee24cc9e?auto=format&fit=crop&q=80&w=900',
    alt: 'Dental Implant Procedure',
    span: '',
  },
];

const Gallery = () => {
  const [activeImg, setActiveImg] = useState(null);

  return (
    <section id="gallery" className="section">
      <div className="container">
        <h2 className="section-title">Our Clinic Gallery</h2>
        <p className="section-subtitle">A glimpse inside our state-of-the-art clinic and the smiles we've transformed.</p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridAutoRows: '200px',
          gap: '16px',
        }}>
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.07 }}
              viewport={{ once: true }}
              onClick={() => setActiveImg(img)}
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                cursor: 'pointer',
                position: 'relative',
                gridColumn: img.span === 'wide' ? 'span 2' : 'span 1',
                gridRow: img.span === 'tall' ? 'span 2' : 'span 1',
                boxShadow: 'var(--shadow-md)',
              }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={img.src}
                alt={img.alt}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)',
                display: 'flex', alignItems: 'flex-end', padding: '16px',
                opacity: 0,
                transition: 'opacity 0.3s',
              }}
              className="gallery-overlay"
              >
                <span style={{ color: 'white', fontWeight: '600', fontSize: '0.9rem' }}>{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {activeImg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveImg(null)}
              style={{
                position: 'fixed', inset: 0, zIndex: 9999,
                background: 'rgba(0,0,0,0.88)',
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                padding: '32px',
                cursor: 'zoom-out',
              }}
            >
              <motion.div
                initial={{ scale: 0.85 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.85 }}
                style={{ position: 'relative', maxWidth: '900px', width: '100%' }}
                onClick={e => e.stopPropagation()}
              >
                <img
                  src={activeImg.src}
                  alt={activeImg.alt}
                  style={{ width: '100%', borderRadius: '20px', boxShadow: '0 30px 80px rgba(0,0,0,0.5)' }}
                />
                <button
                  onClick={() => setActiveImg(null)}
                  style={{
                    position: 'absolute', top: '-16px', right: '-16px',
                    background: 'white', border: 'none', borderRadius: '50%',
                    width: '40px', height: '40px', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: 'var(--shadow-lg)', fontWeight: '700', fontSize: '1.1rem',
                  }}
                >
                  ✕
                </button>
                <p style={{ color: 'white', textAlign: 'center', marginTop: '16px', fontWeight: '600' }}>{activeImg.alt}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .gallery-overlay { opacity: 0; }
        .gallery-overlay:hover { opacity: 1; }
        div:hover > .gallery-overlay { opacity: 1; }
        @media (max-width: 768px) {
          #gallery .container > div:nth-child(2) {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          #gallery .container > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />
    </section>
  );
};

// --- Blog Component ---
const blogPosts = [
  {
    category: 'Oral Health',
    title: '5 Signs You Need a Root Canal (And When to Act Fast)',
    excerpt: 'Many patients delay treatment due to fear, but understanding the key warning signs can save your tooth and prevent serious complications.',
    date: 'April 10, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800',
    color: '#EEF6FF',
    tagColor: '#0A74DA',
  },
  {
    category: 'Patient Guide',
    title: 'After Tooth Extraction: A Complete Recovery Guide',
    excerpt: 'Everything you need to know about caring for your mouth after a tooth extraction — from diet tips to when to call your dentist.',
    date: 'March 28, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=800',
    color: '#F0FFF4',
    tagColor: '#22C55E',
  },
  {
    category: 'Dental Tips',
    title: 'Braces vs Invisible Aligners: Which is Right for You?',
    excerpt: 'We break down the pros and cons of traditional braces and clear aligners so you can make the best choice for your smile goals.',
    date: 'March 15, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&q=80&w=800',
    color: '#FFF7ED',
    tagColor: '#F97316',
  },
];

const Blog = () => {
  return (
    <section id="blog" className="section" style={{ backgroundColor: 'var(--bg-soft)' }}>
      <div className="container">
        <h2 className="section-title">Dental Health Blog</h2>
        <p className="section-subtitle">Expert insights, patient guides, and dental tips from the SS Dental Care team.</p>

        <div className="responsive-grid">
          {blogPosts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              viewport={{ once: true }}
              style={{
                background: 'white',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s, box-shadow 0.3s',
              }}
              whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(10,116,218,0.13)' }}
            >
              <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={post.image}
                  alt={post.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                />
                <div style={{
                  position: 'absolute', top: '16px', left: '16px',
                  background: post.color,
                  color: post.tagColor,
                  padding: '4px 14px',
                  borderRadius: '20px',
                  fontSize: '0.78rem',
                  fontWeight: '700',
                  backdropFilter: 'blur(8px)',
                }}>
                  {post.category}
                </div>
              </div>

              <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ display: 'flex', gap: '12px', marginBottom: '12px', fontSize: '0.8rem', color: 'var(--text-light)' }}>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '12px', lineHeight: '1.5', color: 'var(--text-dark)' }}>
                  {post.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-medium)', marginBottom: '24px', lineHeight: '1.7', flexGrow: 1 }}>
                  {post.excerpt}
                </p>
                <a
                  href="#booking"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: post.tagColor,
                    fontWeight: '700',
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                  }}
                >
                  Read More <ChevronRight size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '56px' }}>
          <a href="#booking" className="btn btn-outline" style={{ display: 'inline-flex' }}>
            View All Articles <ChevronRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

// --- Contact & Location ---
const Contact = () => {
  const mapAddress = "SS Dental Care, Second Floor, Fairmount Fortune One, Erragadda, Hyderabad";
  const mapUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapAddress)}`;

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="responsive-grid" style={{ gap: '64px' }}>
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '24px' }}>Visit Our Clinic</h2>
            <p style={{ color: 'var(--text-medium)', marginBottom: '32px' }}>
              We are conveniently located in the Fairmount Fortune One building, right above Zudio and near the Erragadda Metro Station.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--primary)', backgroundColor: 'var(--accent)', padding: '12px', borderRadius: '12px' }}><MapPin /></div>
                <div>
                  <h4 style={{ fontWeight: '700', marginBottom: '4px' }}>Our Location</h4>
                  <p style={{ color: 'var(--text-medium)', fontSize: '0.95rem' }}>
                    Second Floor, Fairmount Fortune One,<br />
                    Above Zudio, near Metro Station Erragadda,<br />
                    Sanath Nagar, Hyderabad, Telangana 500018
                  </p>
                  <a 
                    href={mapUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '8px', 
                      color: 'var(--primary)', 
                      fontWeight: '700', 
                      marginTop: '12px',
                      fontSize: '0.9rem' 
                    }}
                  >
                    Get Directions <ChevronRight size={16} />
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div style={{ color: 'var(--primary)', backgroundColor: 'var(--accent)', padding: '12px', borderRadius: '12px' }}><Phone /></div>
                <div>
                  <h4 style={{ fontWeight: '700', marginBottom: '4px' }}>Contact Number</h4>
                  <a href="tel:09985947383" style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '1.2rem' }}>099859 47383</a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div style={{ color: 'var(--primary)', backgroundColor: 'var(--accent)', padding: '12px', borderRadius: '12px' }}><Clock /></div>
                <div>
                  <h4 style={{ fontWeight: '700', marginBottom: '4px' }}>Clinic Timings</h4>
                  <p style={{ color: 'var(--text-medium)' }}>Monday - Saturday: 10:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '40px', padding: '24px', backgroundColor: '#F0F7FF', borderRadius: '24px', border: '1px solid #D1E9FF' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '12px' }}>
                <div style={{ color: 'var(--primary)' }}><Shield size={20} /></div>
                <h5 style={{ fontWeight: '700', color: 'var(--primary)' }}>Safe & Hygienic</h5>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-medium)' }}>
                We follow international sterilization protocols and provide ample free parking for all our patients.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ 
              borderRadius: '32px', 
              overflow: 'hidden', 
              boxShadow: 'var(--shadow-xl)', 
              height: '100%', 
              minHeight: '450px',
              border: '10px solid white',
              position: 'relative'
            }}
          >
             <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15227.1!2d78.4385!3d17.4473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb910c732007f3%3A0x81e974e645167683!2sSS%20Dental%20Care!5e0!3m2!1sen!2sin!4v1713550000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- Booking Form ---
const Booking = () => {
  const [purpose, setPurpose] = useState('appointment');

  return (
    <section id="booking" className="section" style={{ backgroundColor: 'var(--bg-soft)' }}>
      <div className="container" style={{ maxWidth: '600px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 className="section-title">Schedule Your Visit</h2>
          <p className="section-subtitle">Fill in the details below and our team will get back to you shortly.</p>
        </div>
        
        <form className="booking-form-card" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="John Doe" />
          </div>
          
          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="+91 00000 00000" />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Age</label>
              <input type="text" placeholder="Years" />
            </div>
            <div className="form-group">
              <label>Gender</label>
              <select defaultValue="">
                <option value="" disabled>Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>City/Loc</label>
            <input type="text" placeholder="E.g., Bengaluru" />
          </div>

          <div className="form-group">
            <label>Purpose of Visit</label>
            <div className="purpose-grid">
              <button 
                type="button" 
                className={`purpose-btn ${purpose === 'appointment' ? 'active' : ''}`}
                onClick={() => setPurpose('appointment')}
              >
                <Calendar size={18} />
                <span>Book Appointment</span>
              </button>
              <button 
                type="button" 
                className={`purpose-btn ${purpose === 'enquiry' ? 'active' : ''}`}
                onClick={() => setPurpose('enquiry')}
              >
                <MessageCircle size={18} />
                <span>General Enquiry</span>
              </button>
            </div>
          </div>

          <div className="form-group">
            <label>Select Service</label>
            <select defaultValue="general">
              <option value="general">General Dentistry</option>
              <option value="root-canal">Root Canal Treatment</option>
              <option value="implants">Dental Implants</option>
              <option value="braces">Braces & Aligners</option>
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Date</label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label>Time Slot</label>
              <select defaultValue="">
                <option value="" disabled>Select</option>
                <option value="morning">Morning (10AM - 1PM)</option>
                <option value="afternoon">Afternoon (2PM - 5PM)</option>
                <option value="evening">Evening (6PM - 8PM)</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Message (Optional)</label>
            <textarea placeholder="How can we help?" rows="4"></textarea>
          </div>

          <button className="submit-btn">
            Send Request
          </button>
        </form>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .booking-form-card {
          background: white;
          padding: 40px;
          border-radius: 32px;
          box-shadow: 0 10px 40px rgba(10, 116, 218, 0.08);
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .form-group label {
          font-size: 0.9rem;
          font-weight: 600;
          color: #344767;
        }
        .form-group input, 
        .form-group select, 
        .form-group textarea {
          background-color: #F8FAFF;
          border: 1.5px solid #E9ECEF;
          padding: 14px 20px;
          border-radius: 12px;
          font-size: 1rem;
          transition: all 0.2s;
          color: #344767;
          width: 100%;
          outline: none;
        }
        .form-group input:focus, 
        .form-group select:focus, 
        .form-group textarea:focus {
          border-color: var(--primary);
          background-color: white;
          box-shadow: 0 0 0 4px rgba(10, 116, 218, 0.1);
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .purpose-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .purpose-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 20px;
          background: #F8FAFF;
          border: 1.5px solid #E9ECEF;
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.2s;
          color: #67748E;
          font-weight: 600;
          font-size: 0.95rem;
        }
        .purpose-btn.active {
          background: #EEF6FF;
          border-color: var(--primary);
          color: var(--primary);
        }
        .submit-btn {
          background: #0D52A1;
          color: white;
          padding: 18px;
          border-radius: 20px;
          font-weight: 700;
          font-size: 1.1rem;
          margin-top: 10px;
          transition: all 0.2s;
        }
        .submit-btn:hover {
          background: #083c7a;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(13, 82, 161, 0.2);
        }
        @media (max-width: 640px) {
          .form-row, .purpose-grid {
            grid-template-columns: 1fr;
          }
          .booking-form-card {
            padding: 24px;
          }
        }
      `}} />
    </section>
  );
};

// --- Footer ---
const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#1A1A1A', color: 'white', padding: '80px 0 40px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '64px', marginBottom: '60px' }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '24px' }}>SS Dental Care</h3>
            <p style={{ opacity: '0.7', fontSize: '0.9rem' }}>Providing world-class dental care in Hyderabad with a focus on patient comfort and painless treatments.</p>
          </div>
          <div>
            <h4 style={{ fontWeight: '700', marginBottom: '24px' }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', opacity: '0.7' }}>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#booking">Book Appointment</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontWeight: '700', marginBottom: '24px' }}>Services</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', opacity: '0.7' }}>
              <li>Root Canal</li>
              <li>Dental Implants</li>
              <li>Braces & Aligners</li>
              <li>Teeth Whitening</li>
            </ul>
          </div>
          <div>
             <h4 style={{ fontWeight: '700', marginBottom: '24px' }}>Follow Us</h4>
             <div style={{ display: 'flex', gap: '16px' }}>
               <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#333', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Smile size={20} />
               </div>
               {/* Add other social icons here */}
             </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #333', paddingTop: '40px', textAlign: 'center', opacity: '0.5', fontSize: '0.85rem' }}>
          © {new Date().getFullYear()} SS Dental Care. All Rights Reserved. Designed for Excellence.
        </div>
      </div>
    </footer>
  );
};

// --- Main App Component ---
const App = () => {
  return (
    <>
      <ToothCursor />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Blog />
      <Testimonials />
      <Booking />
      <Contact />
      <Footer />
      
      {/* Floating Buttons */}
      <div className="floating-contact">
        <motion.a 
          whileHover={{ scale: 1.1 }}
          href="https://wa.me/919985947383" 
          target="_blank"
          style={{ 
            backgroundColor: '#25D366', 
            color: 'white', 
            width: '60px', 
            height: '60px', 
            borderRadius: '50%', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            boxShadow: 'var(--shadow-lg)'
          }}
        >
          <MessageCircle size={30} />
        </motion.a>
        <motion.a 
          whileHover={{ scale: 1.1 }}
          href="tel:09985947383" 
          style={{ 
            backgroundColor: 'var(--primary)', 
            color: 'white', 
            width: '60px', 
            height: '60px', 
            borderRadius: '50%', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            boxShadow: 'var(--shadow-lg)'
          }}
        >
          <Phone size={28} />
        </motion.a>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .desktop-only { display: none !important; }
          .container { padding: 0 20px; }
          section { padding: 60px 0; }
          .grid-2, .grid-3 { grid-template-columns: 1fr !important; gap: 32px !important; }
          h1 { font-size: 2.8rem !important; }
          .hero-img { height: 350px !important; }
          .glass-panel { left: 0 !important; bottom: -20px !important; width: 100% !important; max-width: none !important; }
        }
        @media (min-width: 769px) {
          .mobile-only { display: none !important; }
        }
      `}} />
    </>
  );
};

export default App;
