import { ethers } from 'ethers';
import './App.css';
import logo from './images/logo.svg';

function App() {
  return (
    <div className="App">

      <header className="App-header">

        <div className='wrapper flow'>
          <img className='logo' src={logo} alt='logo' />
          <p className='subHeading'>Welcome to <span className='textColor'>SubDev!</span></p>
        </div>

      </header>

      <main className='App-main'>

        <div className='wrapper flow'>
          <h2 className='tag1'>Developer subscriptions to scale your business.</h2>
          <p className='tag2'>Your one-stop shop for all your development needs.</p>
        </div>

      </main>

      <main className='App-main'>

        <div className='wrapper flow'>

          <div className='about'>
            <h2 className='aboutHeader'>About</h2>
            <p>
              At SubDev, we bring to you an innovative, cost-effective solution for your tech development needs. In today's digital era, the significance of an optimized, interactive, and efficient online presence can't be overstated, but the logistics and costs of maintaining a full-time development team can be challenging for many businesses. This is where SubDev comes in.
            </p>
            <p>
              SubDev is a unique Developer-as-a-Service subscription platform designed to take your business to the next level. We offer comprehensive, high-quality development services - from front-end and back-end development to website and application design. We don't stop at just design and development; we make your platforms smarter with A.I. integration, more secure with Ethereum integration, and take care of the essentials like web hosting and domain registration too.
            </p>
            <p>
              What makes SubDev stand out is our flexible subscription model. Choose from our monthly, quarterly, or annual subscriptions based on your needs and budget. We are your on-demand tech team, ready to support you when you need it and without the expense and commitment of full-time staff. This means you have more time and resources to focus on what you do best: growing your business.
            </p>
            <p>
              We're more than just a service provider; we're your tech partners. At SubDev, your success is our success. So let's scale your business together with SubDev - your one-stop shop for all your development needs.
            </p>
          </div>


          <div className='service'>
            <h2 className='serviceHead'>Services</h2>
          </div>

          <div className='service'>
            <h3 className='tag1'>Front End Development</h3>
            <p className='tag2'>This is like the art of creating what you see and interact with on a website. It's about making buttons, menus, images, and texts work smoothly together.</p>
          </div>

          <div className='service'>
            <h3 className='tag1'>Back End Development</h3>
            <p className='tag2'>This is the invisible engine of the website. It's all about making sure everything you do on a website, like making an order or signing up, works perfectly behind the scenes.</p>
          </div>

          <div className='service'>
            <h3 className='tag1'>Website Design</h3>
            <p className='tag2'>This service involves making your website look attractive and easy to use, ensuring it reflects your brand and keeps visitors coming back.</p>
          </div>

          <div className='service'>
            <h3 className='tag1'>Application Design</h3>
            <p className='tag2'>This is all about designing mobile or desktop apps that are not only functional but also pleasing to the eye and easy to navigate.</p>
          </div>

          <div className='service'>
            <h3 className='tag1'>A.I. Intergration</h3>
            <p className='tag2'>This is about making your website or app smarter with Artificial Intelligence. It can help automate tasks, provide personalized recommendations, or even chat with users!</p>
          </div>

          <div className='service'>
            <h3 className='tag1'>Ethereum Integration</h3>
            <p className='tag2'>This is about integrating blockchain technology into your website or app. It opens up possibilities like accepting cryptocurrency payments or creating secure, tamper-proof records.</p>
          </div>

          <div className='service'>
            <h3 className='tag1'>Web Hosting</h3>
            <p className='tag2'>Every website needs a place to live on the internet, and that's what web hosting is. This service ensures your website is available to the world, 24/7.</p>
          </div>

          <div className='service'>
            <h3 className='tag1'>Domain Registration</h3>
            <p className='tag2'>This service is about securing your very own address on the internet, like www.yourbusiness.com. It's like registering your business name, but in the online world.</p>
          </div>
        </div>

        <div className='pricing'>
          <h2 className='tag1'>Pricing:</h2>

          <div className='priceCard'>
            <div className='wrapper flow'>

              <div className='cardHead'>
              <h3>Monthly</h3>
              <p>No minimum commitment.</p>
              <p className='prices'>$5,000/m</p>
              <p>Pause or cancel anytime</p>
              <button>Get Started</button>
              </div>

              
              <ul>
              <h4>What's Included:</h4>
                <li>One request at a time</li>
                <li>Unlimited jobs</li>
                <li>Unlimited users</li>
                <li>Unlimited revisions</li>
                <li>Easy credit-card payments</li>
                <li>Pause or cancel anytime</li>
              </ul>
            </div>
          </div>

          <div className='priceCard'>
            <div className='wrapper flow'>

              <div className='cardHead'>
              <h3>Quarterly</h3>
              <p>Save $500 per month.</p>
              <p className='prices'>$4,500/m</p>
              <p>Paid quarterly</p>
              <button>Get Started</button>
              </div>

              
              <ul>
              <h4>What's Included:</h4>
                <li>One request at a time</li>
                <li>Unlimited jobs</li>
                <li>Unlimited users</li>
                <li>Unlimited revisions</li>
                <li>Easy credit-card payments</li>
              </ul>
            </div>
          </div>

          <div className='priceCard'>
            <div className='wrapper flow'>

              <div className='cardHead'>
              <h3>Yearly</h3>
              <p>Save $1,000 per month.</p>
              <p className='prices'>$4,000/m</p>
              <p>Paid annually</p>
              <button>Get Started</button>
              </div>

              
              <ul>
              <h4>What's Included:</h4>
                <li>One request at a time</li>
                <li>Unlimited jobs</li>
                <li>Unlimited users</li>
                <li>Unlimited revisions</li>
                <li>Easy credit-card payments</li>
              </ul>
            </div>
          </div>

        </div>

      </main>

      <footer className='App-footer'>

        <div className='wrapper flow'>
          <h3>© 2023 SubDev. All rights reserved.</h3>
        </div>

      </footer>

    </div>
  );
}

export default App;
