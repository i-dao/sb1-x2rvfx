import React from 'react';
import { Coins, TrendingUp, TrendingDown, DollarSign, Bitcoin, Landmark } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface BalanceProps {}

const Balance: React.FC<BalanceProps> = () => {
  const { t } = useTranslation();

  const cryptoBalances = [
    { symbol: 'BTC', name: 'Bitcoin', balance: 0.5432, value: 23456.78, change: 2.5 },
    { symbol: 'ETH', name: 'Ethereum', balance: 4.3210, value: 8765.43, change: -1.2 },
    { symbol: 'USDT', name: 'Tether', balance: 10000.00, value: 10000.00, change: 0.1 },
    { symbol: 'USDC', name: 'USD Coin', balance: 5000.00, value: 5000.00, change: 0.0 }
  ];

  const fiatBalances = [
    { currency: 'USD', balance: 15000.00, name: 'US Dollar' },
    { currency: 'EUR', balance: 12000.00, name: 'Euro' },
    { currency: 'GBP', balance: 8000.00, name: 'British Pound' }
  ];

  const totalValue = [...cryptoBalances, ...fiatBalances].reduce(
    (acc, curr) => acc + ('value' in curr ? curr.value : curr.balance),
    0
  );

  return (
    <div className="space-y-8">
      {/* Total Balance Card */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Coins className="h-8 w-8 text-indigo-600" />
          <h2 className="text-2xl font-semibold text-gray-900">{t('wallet.totalBalance')}</h2>
        </div>
        <div className="text-4xl font-bold text-gray-900 mb-2">
          ${totalValue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
        </div>
      </div>

      {/* Crypto Balances */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Bitcoin className="h-6 w-6 text-indigo-600" />
          <h3 className="text-xl font-semibold text-gray-900">{t('wallet.cryptoAssets')}</h3>
        </div>
        <div className="space-y-4">
          {cryptoBalances.map((crypto) => (
            <div key={crypto.symbol} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-indigo-200 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="bg-gray-100 p-2 rounded-lg">
                  <span className="font-mono font-medium">{crypto.symbol}</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">{crypto.name}</p>
                  <p className="text-sm text-gray-500">
                    {crypto.balance.toLocaleString()} {crypto.symbol}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900">
                  ${crypto.value.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </p>
                <p className={`text-sm flex items-center justify-end ${
                  crypto.change > 0 ? 'text-green-600' : crypto.change < 0 ? 'text-red-600' : 'text-gray-600'
                }`}>
                  {crypto.change > 0 ? (
                    <TrendingUp className="h-4 w-4 mr-1" />
                  ) : crypto.change < 0 ? (
                    <TrendingDown className="h-4 w-4 mr-1" />
                  ) : null}
                  {crypto.change > 0 ? '+' : ''}{crypto.change}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fiat Balances */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Landmark className="h-6 w-6 text-indigo-600" />
          <h3 className="text-xl font-semibold text-gray-900">{t('wallet.fiatBalance')}</h3>
        </div>
        <div className="space-y-4">
          {fiatBalances.map((fiat) => (
            <div key={fiat.currency} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-indigo-200 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="bg-gray-100 p-2 rounded-lg">
                  <DollarSign className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{fiat.name}</p>
                  <p className="text-sm text-gray-500">{fiat.currency}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900">
                  {fiat.currency} {fiat.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Balance;