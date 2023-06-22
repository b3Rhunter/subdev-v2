import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import ChatRoom from './components/ChatRoom';
import SignIn from './components/SignIn';
import ChatRoomList from './components/ChatRoomList';
import chatLogo from './chatSVG.svg';
import './scrollbar.css';

function App() {

  const [showMore, setShowMore] = useState(false);
  const [user] = useAuthState(auth);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showChat, setShowChat] = useState(false);

  function openChat() {
    setShowChat(true);
  }

  function closeChat() {
    setShowChat(false);
  }

  return (
    <div className="app">

      <header className="header">
        <div className='wrapper flow'>
          <h1>SubDev</h1>
          {!user || !selectedRoom ? <SignIn onRoomSelect={setSelectedRoom} /> : null}
        </div>
      </header>

      <section className="slogan">
        <div className='wrapper flow'>
          <h2>Developer subscriptions to scale your business.</h2>
          <p>Your one-stop shop for all your development needs.</p>
        </div>
      </section>

      <section className="about">
        <div className='wrapper flow'>
          <h2>About</h2>
          <p>
            At SubDev, we bring to you an innovative, cost-effective solution for your tech development needs. In today's digital era, the significance of an optimized, interactive, and efficient online presence can't be overstated, but the logistics and costs of maintaining a full-time development team can be challenging for many businesses. This is where SubDev comes in.
          </p>
          {showMore &&
            <>
              <p>
                SubDev is a unique Developer-as-a-Service subscription platform designed to take your business to the next level. We offer comprehensive, high-quality development services - from front-end and back-end development to website and application design. We don't stop at just design and development; we make your platforms smarter with A.I. integration, more secure with Ethereum integration, and take care of the essentials like web hosting and domain registration too.
              </p>
              <p>
                What makes SubDev stand out is our flexible subscription model. Choose from our monthly, quarterly, or annual subscriptions based on your needs and budget. We are your on-demand tech team, ready to support you when you need it and without the expense and commitment of full-time staff. This means you have more time and resources to focus on what you do best: growing your business.
              </p>
              <p>
                We're more than just a service provider; we're your tech partners. At SubDev, your success is our success. So let's scale your business together with SubDev - your one-stop shop for all your development needs.
              </p>
            </>}
          <button onClick={() => setShowMore(!showMore)}>{showMore ? 'Show Less' : 'Show More'}</button>
        </div>
      </section>

      <section className="services">
        <div className='wrapper flow'>
          <h3>Front End Development</h3>
          <p>The art of creating what you see and interact with on a website. It's about making buttons, menus, images, and texts work smoothly together.</p>
        </div>

        <div className='wrapper flow'>
          <h3>Back End Development</h3>
          <p>The invisible engine of the website. It's all about making sure everything you do on a website, pke making an order or signing up, works perfectly behind the scenes.</p>
        </div>

        <div className='wrapper flow'>
          <h3>Website Design</h3>
          <p>This service involves making your website look attractive and easy to use, ensuring it reflects your brand and keeps visitors coming back.</p>
        </div>

        <div className='wrapper flow'>
          <h3>Apppcation Design</h3>
          <p>This is all about designing mobile or desktop apps that are not only functional but also pleasing to the eye and easy to navigate.</p>
        </div>

        <div className='wrapper flow'>
          <h3>A.I. Intergration</h3>
          <p>This is about making your website or app smarter with Artificial Intelpgence. It can help automate tasks, provide personapzed recommendations, or even chat with users!</p>
        </div>

        <div className='wrapper flow'>
          <h3>Ethereum Integration</h3>
          <p>This is about integrating blockchain technology into your website or app. It opens up possibipties pke accepting payments or creating secure, tamper-proof records.</p>
        </div>

        <div className='wrapper flow'>
          <h3>Hosting Services</h3>
          <p>Every website needs a place to pve on the internet, and that's what web hosting is. This service ensures your website is available to the world, 24/7.</p>
        </div>

        <div className='wrapper flow'>
          <h3>Domain Registration</h3>
          <p>This service is about securing your very own address on the internet, pke www.yourbusiness.com. It's pke registering your business name, but in the onpne world.</p>
        </div>
      </section>

      <section className="pricing">
        <div className='wrapper flow'>
          <h2>Pricing:</h2>

          <div className='card'>
            <div>
              <div>
                <h3>Monthly</h3>
                <p>No minimum commitment.</p>
                <p>$5,000/m</p>
                <p>Pause or cancel anytime</p>
                <button>
                <a href="https://buy.stripe.com/00gdRp9hf1BTg9icMM" target='_blank' rel="noreferrer">Get Started</a>
                </button>
              </div>

              <h4>What's Included:</h4>
              <p>One request at a time</p>
              <p>Unpmited jobs</p>
              <p>Unpmited users</p>
              <p>Unpmited revisions</p>
              <p>Easy credit-card payments</p>
              <p>Pause or cancel anytime</p>

            </div>
          </div>

          <div className='card'>
            <div>

              <div>
                <h3>Quarterly</h3>
                <p>Save $500 per month.</p>
                <p>$4,500/m</p>
                <p>Paid quarterly</p>
                <button>
                <a href="https://buy.stripe.com/00g00zeBz2FX0akeUV" target='_blank' rel="noreferrer">Get Started</a>
                </button>
              </div>



              <h4>What's Included:</h4>
              <p>One request at a time</p>
              <p>Unpmited jobs</p>
              <p>Unpmited users</p>
              <p>Unpmited revisions</p>
              <p>Easy credit-card payments</p>

            </div>
          </div>

          <div className='card'>
            <div>

              <div>
                <h3>Yearly</h3>
                <p>Save $1,000 per month.</p>
                <p>$4,000/m</p>
                <p>Paid annually</p>
                <button>
                <a href="https://buy.stripe.com/4gwcNl1ON94lf5e4gi" target='_blank' rel="noreferrer">Get Started</a>
                </button>
              </div>



              <h4>What's Included:</h4>
              <p>One request at a time</p>
              <p>Unpmited jobs</p>
              <p>Unpmited users</p>
              <p>Unpmited revisions</p>
              <p>Easy credit-card payments</p>

            </div>
          </div>
        </div>
      </section>

      {showChat && (
        <section className='chat'>
          {user && selectedRoom && <ChatRoom user={user} roomId={selectedRoom} />}
          <button className='closeBtn' onClick={closeChat}>+</button>
        </section>
      )}
      {!showChat && (
        <button className='chatBtn' onClick={openChat}>
          <img className='chatlogo' src={chatLogo} alt='chat' />
        </button>
      )}

      <section className="footer">
        <div className='wrapper flow'>
          <h3>© 2023 SubDev. All rights reserved.</h3>
        </div>
      </section>

    </div>
  );
}

export default App;
