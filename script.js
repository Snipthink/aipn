/* Fonts & Base */
body {
  font-family: 'Open Sans', sans-serif;
  background: #0d0d0d;
  color: #e0e0e0;
}

h1, h2, h3, h5 {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  color: #ffffff;
}

p {
  color: #bbbbbb;
}

.text-neon {
  color: #00ff88 !important;
}

/* Navbar */
.navbar {
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
}

.navbar .nav-link {
  color: #ffffff !important;
  margin: 0 10px;
}

.navbar .nav-link:hover,
.navbar .nav-link.active {
  color: #00ff88 !important;
}

/* Hero */
.hero-section {
  background: linear-gradient(135deg, #0d0d0d, #111, #1a1a1a);
  padding: 150px 20px;
}

.hero-section h1 {
  color: #00ff88;
}

.hero-section .lead {
  color: #bbbbbb;
}

/* Neon Button */
.btn-neon {
  background: #00ff88;
  border: none;
  color: #000;
  font-weight: 600;
  border-radius: 30px;
  transition: all 0.3s ease;
}

.btn-neon:hover {
  background: #00cc6f;
  color: #fff;
  box-shadow: 0 0 15px #00ff88;
}

/* Sections */
.section-heading {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #00ff88;
}

.max-width-para {
  max-width: 800px;
  margin: 0 auto;
}

/* Feature Cards */
.feature-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 20px;
  border-radius: 12px;
  backdrop-filter: blur(8px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card i {
  font-size: 2rem;
  color: #00ff88;
  margin-bottom: 15px;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 20px rgba(0, 255, 136, 0.3);
}

/* Stats */
.dark-section {
  background: #111;
}

.stat-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 30px;
  border-radius: 12px;
}

.stat-card i {
  font-size: 2rem;
  color: #00ff88;
  margin-bottom: 15px;
}

.stat-card h3 {
  color: #fff;
}

/* Community */
.community-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 25px;
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.community-card i {
  font-size: 2rem;
  color: #00ff88;
  margin-bottom: 15px;
}

.community-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 15px rgba(0, 255, 136, 0.3);
}

/* Contact */
.contact-form input,
.contact-form textarea {
  background: #111;
  border: 1px solid #333;
  color: #fff;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: #00ff88;
  box-shadow: 0 0 8px rgba(0, 255, 136, 0.3);
}

/* Footer */
footer {
  background: #0d0d0d;
  color: #888;
}

footer .social-icons a {
  color: #888;
  margin: 0 10px;
  transition: color 0.3s ease, text-shadow 0.3s ease;
}

footer .social-icons a:hover {
  color: #00ff88;
  text-shadow: 0 0 10px #00ff88;
}
