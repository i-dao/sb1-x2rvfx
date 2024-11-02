import React, { useState } from 'react';
import { Landmark, Building2, User, Plus, Copy, CreditCard } from 'lucide-react';

interface BankAccount {
  id: string;
  iban: string;
  type: string;
  balance: number;
  currency: string;
}

const IMoney: React.FC = () => {
  const [privateAccounts, setPrivateAccounts] = useState<BankAccount[]>([
    {
      id: '1',
      iban: 'DE89 3704 0044 0532 0130 00',
      type: 'Personal',
      balance: 5000.00,
      currency: 'EUR'
    }
  ]);

  const [companyAccounts, setCompanyAccounts] = useState<BankAccount[]>([]);

  const generateIBAN = () => {
    const countryCode = 'DE';
    const bankCode = '37040044';
    const accountNumber = Math.floor(Math.random() * 10000000000).toString().padStart(10, '0');
    return `${countryCode}89 ${bankCode.match(/.{1,4}/g)?.join(' ')} ${accountNumber.match(/.{1,4}/g)?.join(' ')}`;
  };

  const createNewAccount = (type: 'company' | 'salary') => {
    const newAccount: BankAccount = {
      id: Date.now().toString(),
      iban: generateIBAN(),
      type: type === 'company' ? 'Company' : 'Salary',
      balance: 0,
      currency: 'EUR'
    };
    setCompanyAccounts([...companyAccounts, newAccount]);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('IBAN copied to clipboard!');
  };

  return (
    <div className="max-w-6xl mx-auto space-y-4 md:space-y-8 px-4 sm:px-6 lg:px-8">
      {/* Personal Section */}
      <div className="bg-white rounded-xl shadow-sm p-4 md:p-8">
        <div className="flex items-center space-x-3 mb-4 md:mb-6">
          <User className="h-6 w-6 md:h-8 md:w-8 text-indigo-600" />
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">My Private</h2>
        </div>

        <div className="space-y-4">
          {privateAccounts.map((account) => (
            <div key={account.id} className="border border-gray-200 rounded-lg p-4 md:p-6 hover:border-indigo-200 transition-colors">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-4 md:space-y-0">
                <div>
                  <h3 className="text-base md:text-lg font-medium text-gray-900">{account.type} Account</h3>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <code className="bg-gray-50 px-2 py-1 md:px-3 text-xs md:text-sm rounded-lg break-all">{account.iban}</code>
                    <button
                      onClick={() => copyToClipboard(account.iban)}
                      className="text-gray-500 hover:text-indigo-600"
                    >
                      <Copy className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-xl md:text-2xl font-bold text-gray-900">
                    €{account.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </p>
                  <p className="text-sm text-gray-500">Available Balance</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Company Section */}
      <div className="bg-white rounded-xl shadow-sm p-4 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6 mb-6">
          <div className="flex items-center space-x-3">
            <Building2 className="h-6 w-6 md:h-8 md:w-8 text-indigo-600" />
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">My Company</h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => createNewAccount('company')}
              className="flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm md:text-base"
            >
              <Plus className="h-4 w-4 mr-2" />
              New Company Account
            </button>
            <button
              onClick={() => createNewAccount('salary')}
              className="flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm md:text-base"
            >
              <CreditCard className="h-4 w-4 mr-2" />
              New Salary Account
            </button>
          </div>
        </div>

        {companyAccounts.length === 0 ? (
          <div className="text-center py-8 md:py-12 bg-gray-50 rounded-lg">
            <Building2 className="h-8 w-8 md:h-12 md:w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">No company accounts yet. Create one to get started!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {companyAccounts.map((account) => (
              <div key={account.id} className="border border-gray-200 rounded-lg p-4 md:p-6 hover:border-indigo-200 transition-colors">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-4 md:space-y-0">
                  <div>
                    <h3 className="text-base md:text-lg font-medium text-gray-900">{account.type} Account</h3>
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <code className="bg-gray-50 px-2 py-1 md:px-3 text-xs md:text-sm rounded-lg break-all">{account.iban}</code>
                      <button
                        onClick={() => copyToClipboard(account.iban)}
                        className="text-gray-500 hover:text-indigo-600"
                      >
                        <Copy className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="text-left md:text-right">
                    <p className="text-xl md:text-2xl font-bold text-gray-900">
                      €{account.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </p>
                    <p className="text-sm text-gray-500">Available Balance</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default IMoney;