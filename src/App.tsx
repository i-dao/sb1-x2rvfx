import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Wallet, Menu, LogOut } from 'lucide-react';
import { useAuth } from './context/AuthContext';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import Send from './components/Send';
import Receive from './components/Receive';
import Swap from './components/Swap';
import IBot from './components/IBot';
import IMoney from './components/IMoney';
import ITax from './components/ITax';
import Balance from './components/Balance';
import IBusiness from './components/IBusiness';
import Profile from './components/Profile';
import Login from './components/Login';
import LandingPage from './components/LandingPage';
import LanguageSelector from './components/LanguageSelector';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();
  const { t } = useTranslation();

  if (!isAuthenticated) {
    return (
      <>
        <LandingPage />
        <Login />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Wallet className="h-8 w-8 text-indigo-600" />
              <h1 className="text-2xl font-bold text-gray-900">i-Wallet</h1>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-6">
              <LanguageSelector />
              <span className="text-gray-600">{user?.email}</span>
              <button
                onClick={logout}
                className="flex items-center text-gray-600 hover:text-red-600"
              >
                <LogOut className="h-6 w-6 mr-2" />
                <span className="text-lg">{t('common.logout')}</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-indigo-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 py-2 border-t border-gray-100">
              <div className="flex flex-col space-y-4">
                <LanguageSelector />
                <span className="text-gray-600">{user?.email}</span>
                <button
                  onClick={logout}
                  className="flex items-center text-gray-600 hover:text-red-600"
                >
                  <LogOut className="h-6 w-6 mr-2" />
                  <span className="text-lg">{t('common.logout')}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="mt-8">
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'balance' && <Balance />}
          {activeTab === 'send' && <Send />}
          {activeTab === 'receive' && <Receive />}
          {activeTab === 'swap' && <Swap />}
          {activeTab === 'ibot' && <IBot />}
          {activeTab === 'imoney' && <IMoney />}
          {activeTab === 'itax' && <ITax />}
          {activeTab === 'ibusiness' && <IBusiness />}
          {activeTab === 'profile' && <Profile />}
        </div>
      </main>
    </div>
  );
}

export default App;