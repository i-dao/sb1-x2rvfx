import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface CryptoPrice {
  symbol: string;
  name: string;
  price: number;
  change24h: number;
}

const cryptoPrices: CryptoPrice[] = [
  { symbol: 'BTC', name: 'Bitcoin', price: 67234.52, change24h: 2.5 },
  { symbol: 'ETH', name: 'Ethereum', price: 3456.78, change24h: 1.8 },
  { symbol: 'POL', name: 'Polygon', price: 0.98, change24h: -0.5 },
  { symbol: 'TRX', name: 'TRON', price: 0.12, change24h: 3.2 },
  { symbol: 'BNB', name: 'BNB', price: 456.78, change24h: -1.2 },
];

const PriceTicker: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 mb-6 md:mb-8">
      <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-4">Market Prices</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
        {cryptoPrices.map((crypto) => (
          <div key={crypto.symbol} className="p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-gray-600">{crypto.symbol}</span>
              {crypto.change24h >= 0 ? (
                <TrendingUp className="h-4 w-4 text-green-500" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-500" />
              )}
            </div>
            <div className="text-sm md:text-lg font-semibold truncate">${crypto.price.toLocaleString()}</div>
            <div className={`text-xs md:text-sm ${crypto.change24h >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {crypto.change24h >= 0 ? '+' : ''}{crypto.change24h}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceTicker;