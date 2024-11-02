import React from 'react';
import { Users, DollarSign, Calendar, Wallet } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface LevelStats {
  level: number;
  customers: number;
  commission: number;
  percentage: number;
}

interface TimeframeStats {
  daily: number;
  weekly: number;
  monthly: number;
}

const AffiliateDashboard: React.FC = () => {
  const { t } = useTranslation();

  const levelStats: LevelStats[] = [
    { level: 1, customers: 12, commission: 250.50, percentage: 25 },
    { level: 2, customers: 45, commission: 22.30, percentage: 1 },
    { level: 3, customers: 156, commission: 78.90, percentage: 1 },
    { level: 4, customers: 489, commission: 489.20, percentage: 2 },
    { level: 5, customers: 1250, commission: 312.50, percentage: 1 },
  ];

  const timeframeStats: TimeframeStats = {
    daily: 45.80,
    weekly: 320.60,
    monthly: 1153.40,
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Calendar className="h-6 w-6 text-green-600" />
            <h3 className="text-lg font-medium text-gray-900">
              {t('ibusiness.dashboard.dailyEarnings')}
            </h3>
          </div>
          <p className="text-3xl font-bold text-gray-900">
            ${timeframeStats.daily.toFixed(2)}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Calendar className="h-6 w-6 text-blue-600" />
            <h3 className="text-lg font-medium text-gray-900">
              {t('ibusiness.dashboard.weeklyEarnings')}
            </h3>
          </div>
          <p className="text-3xl font-bold text-gray-900">
            ${timeframeStats.weekly.toFixed(2)}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Calendar className="h-6 w-6 text-purple-600" />
            <h3 className="text-lg font-medium text-gray-900">
              {t('ibusiness.dashboard.monthlyEarnings')}
            </h3>
          </div>
          <p className="text-3xl font-bold text-gray-900">
            ${timeframeStats.monthly.toFixed(2)}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Users className="h-6 w-6 text-indigo-600" />
          <h3 className="text-xl font-semibold text-gray-900">
            {t('ibusiness.dashboard.levelStats')}
          </h3>
        </div>

        <div className="space-y-4">
          {levelStats.map((stat) => (
            <div key={stat.level} className="border border-gray-100 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-medium text-gray-900">
                    {t('ibusiness.dashboard.level')} {stat.level}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {t('ibusiness.dashboard.customers', { count: stat.customers })}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-gray-900">
                    ${stat.commission.toFixed(2)}
                  </p>
                  <p className="text-sm text-green-600">
                    {stat.percentage}% {t('ibusiness.dashboard.commission')}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Wallet className="h-6 w-6 text-indigo-600" />
          <h3 className="text-xl font-semibold text-gray-900">
            {t('ibusiness.dashboard.payoutInfo')}
          </h3>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-gray-700">
            {t('ibusiness.dashboard.payoutDetails')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AffiliateDashboard;