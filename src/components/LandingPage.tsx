import React from 'react';
import { Shield, Wallet, Bot, Building2, Receipt, Landmark, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const LandingPage: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Wallet,
      title: "All-in-One Crypto Wallet",
      description: "Seamlessly send, receive, and swap cryptocurrencies with our intuitive wallet interface. Supporting major networks and tokens, with real-time market data and instant transactions."
    },
    {
      icon: Bot,
      title: "i-BOT Trading Assistant",
      description: "Connect your favorite exchanges and automate your trading strategy. Our intelligent bot helps you make data-driven decisions with advanced market analysis and automated trading features."
    },
    {
      icon: Landmark,
      title: "i-Money Banking Solutions",
      description: "Bridge traditional and crypto finance with our comprehensive banking solutions. Manage multiple accounts, track transactions, and handle both FIAT and crypto in one place."
    },
    {
      icon: Building2,
      title: "i-Business Suite",
      description: "Scale your crypto business with our powerful affiliate program. Create multiple business accounts, manage team permissions, and grow your network with our multi-level commission structure."
    },
    {
      icon: Receipt,
      title: "i-Tax Management",
      description: "Stay compliant with automated tax reporting. Import your trading history from multiple exchanges, generate tax documents, and manage your crypto tax obligations effortlessly."
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Your assets are protected with military-grade encryption, multi-signature wallets, and advanced security protocols. Regular security audits ensure your funds stay safe."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            The Ultimate Crypto Management Platform
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            One platform for all your crypto needs - from trading and banking to business management and tax compliance.
          </p>
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition-colors inline-flex items-center">
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <feature.icon className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Crypto Experience?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust our platform for their crypto management needs.
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors">
            Start Your Journey
          </button>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Trusted by Crypto Enthusiasts Worldwide</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="text-3xl font-bold text-indigo-600">100K+</p>
              <p className="text-gray-600">Active Users</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-indigo-600">$1B+</p>
              <p className="text-gray-600">Monthly Volume</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-indigo-600">50+</p>
              <p className="text-gray-600">Supported Exchanges</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-indigo-600">24/7</p>
              <p className="text-gray-600">Expert Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;