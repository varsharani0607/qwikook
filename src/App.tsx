import { useState } from 'react'
import type { FormEvent } from 'react'
import './App.css'
import logo from './assets/QuikookLogo.png'
import banner from './assets/QuikookBannerImage.png'

const recipes = [
  { title: 'Masala paneer toast', tag: 'Under 15 min', time: '12 min', accent: 'saffron', description: 'Crisp, cheesy and loaded with a punchy masala filling.' },
  { title: 'One-pan garlic noodles', tag: 'Weeknight win', time: '18 min', accent: 'green', description: 'A glossy, savoury bowl for when the fridge looks a little bare.' },
  { title: '5-minute mango chaat', tag: 'No-cook', time: '5 min', accent: 'coral', description: 'Sweet, tangy and crunchy enough to wake up any afternoon.' },
]

const products = [
  { name: 'The everyday kadai', type: 'For curries & sautés', icon: '01', description: 'A sturdy, easy-clean pan for one-pot recipes and quick tempering.' },
  { name: 'Mini spice trio', type: 'For instant flavour', icon: '02', description: 'The little trio that makes weeknight cooking taste considered.' },
  { name: 'Wooden prep board', type: 'For happy chopping', icon: '03', description: 'A generous prep surface with enough room for a full mise en place.' },
]

function App() {
  const [activeFilter, setActiveFilter] = useState('All recipes')
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (email.trim()) setSubscribed(true)
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Quikook home">
          <img src={logo} alt="Quikook" />
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#recipes">Recipes</a>
          <a href="#about">About</a>
          <a href="#tools">Kitchen picks</a>
        </nav>
        <a className="nav-cta" href="#newsletter">Join the table <span aria-hidden="true">↗</span></a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <img className="hero-image" src={banner} alt="Quikook banner with colourful vegetables and quick recipes" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="eyebrow">Quick recipes · tasty meals · happy you</p>
            <h1 id="hero-title">Good food,<br /><em>no fuss.</em></h1>
            <p className="hero-copy">Big flavour for busy days. Come for the quick bites, stay for the happy little rituals that make cooking yours.</p>
            <a className="button button-dark" href="#recipes">Explore recipes <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-note"><span>01</span> Made for your next craving</div>
        </section>

        <section className="intro section-wrap" id="about">
          <div className="section-kicker">A little about us</div>
          <div className="intro-grid">
            <h2>Cooking should feel like a <em>good idea.</em></h2>
            <div className="intro-copy">
              <p>Quikook is your corner of the internet for fast, flavourful recipes that fit into real life. No complicated shopping lists. No precious techniques. Just food that makes you want to go back for seconds.</p>
              <a className="text-link" href="#newsletter">Get the good stuff <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </section>

        <section className="recipes section-wrap" id="recipes">
          <div className="section-heading">
            <div>
              <div className="section-kicker">From the Quikook kitchen</div>
              <h2>Pick your <em>pleasure.</em></h2>
            </div>
            <div className="filter-row" role="group" aria-label="Filter recipes">
              {['All recipes', 'Under 15 min', 'No-cook'].map((filter) => (
                <button className={activeFilter === filter ? 'filter active' : 'filter'} key={filter} onClick={() => setActiveFilter(filter)}>{filter}</button>
              ))}
            </div>
          </div>
          <div className="recipe-grid">
            {recipes.filter((recipe) => activeFilter === 'All recipes' || recipe.tag === activeFilter).map((recipe, index) => (
              <article className={`recipe-card ${recipe.accent}`} key={recipe.title}>
                <div className="recipe-art"><span>{String(index + 1).padStart(2, '0')}</span><div className="dish-mark" aria-hidden="true">✦</div></div>
                <div className="recipe-body">
                  <div className="recipe-meta"><span>{recipe.tag}</span><span>{recipe.time}</span></div>
                  <h3>{recipe.title}</h3>
                  <p>{recipe.description}</p>
                  <a className="text-link" href="#newsletter">View recipe <span aria-hidden="true">→</span></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="tools" id="tools">
          <div className="section-wrap">
            <div className="tools-heading">
              <div className="section-kicker">The useful corner</div>
              <h2>Things we’d keep<br /><em>on the counter.</em></h2>
              <p>Some of the tools and ingredients that make quick cooking feel even easier. These are affiliate links, which means Quikook may earn a small commission at no extra cost to you.</p>
            </div>
            <div className="product-list">
              {products.map((product) => (
                <a className="product-row" href="#newsletter" key={product.name}>
                  <span className="product-number">{product.icon}</span>
                  <span className="product-copy"><strong>{product.name}</strong><small>{product.type}</small><span>{product.description}</span></span>
                  <span className="product-arrow" aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="newsletter section-wrap" id="newsletter">
          <div className="newsletter-stamp" aria-hidden="true">Q</div>
          <div>
            <div className="section-kicker">No spam. Just snacks.</div>
            <h2>A little sunshine<br /><em>in your inbox.</em></h2>
          </div>
          {subscribed ? <p className="success-message">You’re on the list. The next good bite is on its way.</p> : (
            <form className="signup-form" onSubmit={handleSubscribe}>
              <label className="sr-only" htmlFor="email">Your email address</label>
              <input id="email" type="email" placeholder="Your email address" value={email} onChange={(event) => setEmail(event.target.value)} required />
              <button className="button button-yellow" type="submit">Sign me up <span aria-hidden="true">→</span></button>
            </form>
          )}
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="footer-brand" href="#top"><img src={logo} alt="Quikook" /></a>
        <p>Quick bites, big comfort.</p>
        <div className="footer-links"><a href="#recipes">YouTube</a><a href="#tools">Shop the kitchen</a><a href="#newsletter">Contact</a></div>
        <small>© 2026 Quikook</small>
      </footer>
    </div>
  )
}

export default App
