import React from 'react';
import { Wallet2, Zap, Gamepad2, Clock3 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-sky-100">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=3272&ixlib=rb-4.0.3"
            alt="Abstract background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-4 py-16 relative">
          <nav className="flex justify-between items-center mb-16">
            <div className="flex items-center space-x-2">
            <img src="/sp.png" alt="Stabapay Logo" className="w-40 h-20" />
            </div>

            <div className="space-x-6">
              <a href="#features" className="text-sky-800 hover:text-sky-600 transition-colors">Features</a>
              <a href="#about" className="text-sky-800 hover:text-sky-600 transition-colors">About</a>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-sky-900 px-4 py-2 rounded-lg transition-all transform hover:scale-105">
                Get Started
              </button>
            </div>
          </nav>

          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-sky-900 animate-float">
              Layer 2 Microtransactions Made Simple
            </h1>
            <p className="text-xl text-sky-700 mb-8">
              Built on Dymension RollApp for instant tipping, streaming payments, and in-game transactions
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
                Launch App
              </button>
              <button className="border-2 border-sky-500 text-sky-700 hover:bg-sky-50 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
                Documentation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16" id="features">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg transform transition-all hover:scale-105">
            <div className="relative mb-6">
              <img 
                src="https://images.unsplash.com/photo-1621504450181-5d356f61d307?auto=format&fit=crop&q=80&w=3270&ixlib=rb-4.0.3"
                alt="Lightning fast payments"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <Zap className="w-12 h-12 text-yellow-400 absolute -bottom-6 right-4 bg-white rounded-full p-2 shadow-lg" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-sky-900">Instant Tipping</h3>
            <p className="text-sky-700">
              Send micro-tips instantly with near-zero fees. Perfect for content creators and social platforms.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg transform transition-all hover:scale-105">
            <div className="relative mb-6">
              <img 
                src="https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&q=80&w=2148&ixlib=rb-4.0.3"
                alt="Streaming payments"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <Clock3 className="w-12 h-12 text-yellow-400 absolute -bottom-6 right-4 bg-white rounded-full p-2 shadow-lg" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-sky-900">Pay-Per-Second</h3>
            <p className="text-sky-700">
              Stream payments in real-time for content consumption, services, or resource usage.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg transform transition-all hover:scale-105">
            <div className="relative mb-6">
              <img 
                src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=2150&ixlib=rb-4.0.3"
                alt="Gaming micropayments"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <Gamepad2 className="w-12 h-12 text-yellow-400 absolute -bottom-6 right-4 bg-white rounded-full p-2 shadow-lg" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-sky-900">Gaming Micropayments</h3>
            <p className="text-sky-700">
              Seamless in-game transactions for items, upgrades, and peer-to-peer trading.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient rounded-2xl p-8 shadow-xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="transform transition-all hover:scale-105">
              <div className="text-4xl font-bold mb-2 text-white">$0.001</div>
              <div className="text-sky-100">Average Fee</div>
            </div>
            <div className="transform transition-all hover:scale-105">
              <div className="text-4xl font-bold mb-2 text-white">&lt;1s</div>
              <div className="text-sky-100">Transaction Time</div>
            </div>
            <div className="transform transition-all hover:scale-105">
              <div className="text-4xl font-bold mb-2 text-white">100k+</div>
              <div className="text-sky-100">Daily Transactions</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-sky-200">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Wallet2 className="w-6 h-6 text-sky-600" />
            <span className="font-semibold text-sky-900">Stabapay</span>
          </div>
          <div className="text-sm text-sky-600">
            © 2025 Stabapay. Built on Dymension RollApp.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;