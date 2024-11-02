import React, { useState } from 'react';
import { Bot, Plus, Trash2, Eye, EyeOff, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ExchangeKey {
  id: string;
  name: string;
  apiKey: string;
  apiSecret: string;
}

const IBot: React.FC = () => {
  const { t } = useTranslation();
  const [exchangeKeys, setExchangeKeys] = useState<ExchangeKey[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newExchange, setNewExchange] = useState({
    name: '',
    apiKey: '',
    apiSecret: '',
  });
  const [showSecrets, setShowSecrets] = useState<{ [key: string]: boolean }>({});

  const handleAddKey = () => {
    if (newExchange.name && newExchange.apiKey && newExchange.apiSecret) {
      setExchangeKeys([
        ...exchangeKeys,
        {
          id: Date.now().toString(),
          ...newExchange,
        },
      ]);
      setNewExchange({ name: '', apiKey: '', apiSecret: '' });
      setShowAddForm(false);
    }
  };

  const handleDeleteKey = (id: string) => {
    setExchangeKeys(exchangeKeys.filter((key) => key.id !== id));
  };

  const toggleSecret = (id: string) => {
    setShowSecrets((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8">
      <div className="flex items-center space-x-3 mb-8">
        <Bot className="h-8 w-8 text-indigo-600" />
        <h2 className="text-2xl font-semibold text-gray-900">{t('ibot.title')}</h2>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          {exchangeKeys.map((exchange) => (
            <div
              key={exchange.id}
              className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  {exchange.name}
                </h3>
                <button
                  onClick={() => handleDeleteKey(exchange.id)}
                  className="text-red-500 hover:text-red-600 p-2"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">{t('tax.exchanges.apiKey')}:</span>
                  <div className="flex items-center space-x-2">
                    <code className="bg-gray-100 px-2 py-1 rounded">
                      {showSecrets[`${exchange.id}-key`]
                        ? exchange.apiKey
                        : '••••••••••••••••'}
                    </code>
                    <button
                      onClick={() => toggleSecret(`${exchange.id}-key`)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      {showSecrets[`${exchange.id}-key`] ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">{t('tax.exchanges.apiSecret')}:</span>
                  <div className="flex items-center space-x-2">
                    <code className="bg-gray-100 px-2 py-1 rounded">
                      {showSecrets[`${exchange.id}-secret`]
                        ? exchange.apiSecret
                        : '••••••••••••••••'}
                    </code>
                    <button
                      onClick={() => toggleSecret(`${exchange.id}-secret`)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      {showSecrets[`${exchange.id}-secret`] ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showAddForm ? (
          <div className="border border-gray-200 rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              {t('ibot.addExchange')}
            </h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t('tax.exchanges.selectExchange')}
              </label>
              <input
                type="text"
                value={newExchange.name}
                onChange={(e) =>
                  setNewExchange({ ...newExchange, name: e.target.value })
                }
                placeholder="e.g., Binance, Coinbase"
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t('tax.exchanges.apiKey')}
              </label>
              <input
                type="text"
                value={newExchange.apiKey}
                onChange={(e) =>
                  setNewExchange({ ...newExchange, apiKey: e.target.value })
                }
                placeholder="Enter your API key"
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t('tax.exchanges.apiSecret')}
              </label>
              <input
                type="password"
                value={newExchange.apiSecret}
                onChange={(e) =>
                  setNewExchange({ ...newExchange, apiSecret: e.target.value })
                }
                placeholder="Enter your API secret"
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="flex space-x-3">
              <button
                onClick={handleAddKey}
                className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                <Check className="h-4 w-4 mr-2" />
                {t('common.save')}
              </button>
              <button
                onClick={() => setShowAddForm(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                {t('common.cancel')}
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setShowAddForm(true)}
            className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
          >
            <Plus className="h-5 w-5 mr-2" />
            {t('ibot.addExchange')}
          </button>
        )}

        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-blue-700">{t('ibot.securityNote')}</p>
        </div>
      </div>
    </div>
  );
};

export default IBot;