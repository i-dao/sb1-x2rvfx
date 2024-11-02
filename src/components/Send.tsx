import React, { useState } from 'react';
import { Send as SendIcon, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Send: React.FC = () => {
  const { t } = useTranslation();
  const [amount, setAmount] = useState('');
  const [address, setAddress] = useState('');
  const [token, setToken] = useState('USDC');

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm p-8">
      <div className="flex items-center space-x-3 mb-8">
        <SendIcon className="h-8 w-8 text-indigo-600" />
        <h2 className="text-2xl font-semibold text-gray-900">{t('send.title')}</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            {t('send.selectToken')}
          </label>
          <select
            value={token}
            onChange={(e) => setToken(e.target.value)}
            className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
          >
            <option value="USDC">USDC</option>
            <option value="USDT">USDT</option>
          </select>
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            {t('send.amount')}
          </label>
          <div className="relative">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
              {token}
            </span>
          </div>
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            {t('send.recipientAddress')}
          </label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="0x..."
            className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="bg-blue-50 p-4 rounded-lg flex items-start space-x-3">
          <AlertCircle className="h-6 w-6 text-blue-500 flex-shrink-0 mt-0.5" />
          <p className="text-blue-700">{t('send.warning')}</p>
        </div>

        <button
          className="w-full bg-indigo-600 text-white text-lg font-medium p-4 rounded-lg hover:bg-indigo-700 transition-colors"
          onClick={() => alert('Send functionality will be implemented')}
        >
          {t('send.reviewTransaction')}
        </button>
      </div>
    </div>
  );
};

export default Send;