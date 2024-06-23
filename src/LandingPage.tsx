// src/LandingPage.tsx
import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div className="bg-white">
      <header className="bg-purple-dark text-white py-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className='flex items-center justify-center'>
            <img src="src/assets/Asset_1@1x.png" alt="SocialBazaar" className="w-12 h-12" />
          <h1 className="text-3xl font-bold">SocialBazaar</h1>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#features" className="hover:text-purple-light">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-purple-light">How It Works</a></li>
              <li><a href="#rewards" className="hover:text-purple-light">Rewards</a></li>
              <li><a href="#contact" className="hover:text-purple-light">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section id="hero" className="text-center py-20 bg-purple-light rounded-lg shadow-lg">
          <h2 className="text-5xl font-bold text-purple-dark">Invest in Ideas, Earn Rewards!</h2>
          <p className="mt-4 text-xl text-purple-dark">
            Support and invest in small businesses on Instagram. Watch them grow and earn exciting rewards!
          </p>
          <button className="mt-8 px-8 py-4 bg-purple-dark text-white rounded-lg shadow-md hover:bg-purple-700">
            Coming Soon
          </button>
        </section>

        <section id="features" className="py-16">
          <h3 className="text-4xl font-bold text-center text-purple-dark mb-8">Features</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-purple-lighter p-6 rounded-lg shadow-lg">
              <h4 className="text-2xl font-bold text-purple-dark mb-4">Virtual Investing</h4>
              <p>Buy, sell, and trade virtual shares of small businesses using our in-app virtual coins.</p>
            </div>
            <div className="bg-purple-lighter p-6 rounded-lg shadow-lg">
              <h4 className="text-2xl font-bold text-purple-dark mb-4">Support Small Businesses</h4>
              <p>Engage with and support small Instagram businesses. Help them grow and succeed!</p>
            </div>
            <div className="bg-purple-lighter p-6 rounded-lg shadow-lg">
              <h4 className="text-2xl font-bold text-purple-dark mb-4">Earn Rewards</h4>
              <p>Earn virtual coins and redeem them for discounts, special offers, and more.</p>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-16 bg-purple-light rounded-lg shadow-lg">
          <h3 className="text-4xl font-bold text-center text-purple-dark mb-8">How It Works</h3>
          <div className="space-y-8">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-purple-dark text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div className="ml-6 text-lg">
                <p>Sign up and receive an initial allocation of virtual coins.</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-purple-dark text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div className="ml-6 text-lg">
                <p>Browse through small businesses and invest in your favorites.</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-purple-dark text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div className="ml-6 text-lg">
                <p>Watch your investments grow as the businesses gain popularity.</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-purple-dark text-white rounded-full flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div className="ml-6 text-lg">
                <p>Redeem your earned coins for exciting rewards and benefits.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="rewards" className="py-16">
          <h3 className="text-4xl font-bold text-center text-purple-dark mb-8">Rewards</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-purple-lighter p-6 rounded-lg shadow-lg">
              <h4 className="text-2xl font-bold text-purple-dark mb-4">Discount Coupons</h4>
              <p>Redeem your coins for discounts on products from the businesses you support.</p>
            </div>
            <div className="bg-purple-lighter p-6 rounded-lg shadow-lg">
              <h4 className="text-2xl font-bold text-purple-dark mb-4">Exclusive Access</h4>
              <p>Gain exclusive access to new products and offers from your favorite businesses.</p>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-purple-dark text-white py-8">
        <div className="container mx-auto text-center">
          <h4 className="text-2xl font-bold">Contact Us</h4>
          <p className="mt-2">Have questions? Reach out to us at <a href="mailto:socialbazaar.contact@gmail.com" className="underline">socialbazaar.contact@gmail.com</a></p>
          <p className="mt-4">© 2024 SocialBazaar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
