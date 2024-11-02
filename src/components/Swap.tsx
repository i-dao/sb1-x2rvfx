import React, { useState } from 'react';
import { ArrowDownUp, RefreshCw } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Swap: React.FC = () => {
  const { t } = useTranslation();
  const [fromAmount, setFromAmount] = useState('');
  const [fromToken, setFromToken] = useState('USDC');
  const [toToken, setToToken] = useState('USDT');

  const handleSwapTokens = () => {
    const temp = fromToken;
    setFromToken(toToken);
    setToToken(temp);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm p-8">
      <div className="flex items-center space-x-3 mb-8">
        <ArrowDownUp className="h-8 w-8 text-indigo-600" />
        <h2 className="text-2xl font-semibold text-gray-900">{t('swap.title')}</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            {t('swap.from')}
          </label>
          <div className="flex space-x-4">
            <input
              type="number"
              value={fromAmount}
              onChange={(e) => setFromAmount(e.target.value)}
              placeholder="0.00"
              className="flex-1 p-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
            <select
              value={fromToken}
              onChange={(e) => setFromToken(e.target.value)}
              className="w-32 p-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            >
              <option value="USDC">USDC</option>
              <option value="USDT">USDT</option>
            </select>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleSwapTokens}
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <RefreshCw className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            {t('swap.to')}
          </label>
          <div className="flex space-x-4">
            <input
              type="number"
              value={fromAmount}
              readOnly
              placeholder="0.00"
              className="flex-1 p-4 text-lg border border-gray-300 rounded-lg bg-gray-50"
            />
            <select
              value={toToken}
              onChange={(e) => setToToken(e.target.value)}
              className="w-32 p-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            >
              <option value="USDC">USDC</option>
              <option value="USDT">USDT</option>
            </select>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg space-y-2">
          <div className="flex justify-between text-gray-600">
            <span>{t('swap.rate')}</span>
            <span>1 {fromToken} = 0.99 {toToken}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>{t('swap.networkFee')}</span>
            <span>~$0.01</span>
          </div>
        </div>

        <button
          className="w-full bg-indigo-600 text-white text-lg font-medium p-4 rounded-lg hover:bg-indigo-700 transition-colors"
          onClick={() => alert('Swap functionality will be implemented')}
        >
          {t('swap.reviewSwap')}
        </button>
      </div>
    </div>
  );
};

export default Swap;