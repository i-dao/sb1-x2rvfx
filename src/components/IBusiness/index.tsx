import React, { useState } from 'react';
import { Building, User } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useTranslation } from 'react-i18next';
import AffiliateSignup from './AffiliateSignup';
import AffiliateDashboard from './AffiliateDashboard';
import InvitationCode from './InvitationCode';
import SponsorInfo from './SponsorInfo';

const IBusiness: React.FC = () => {
  const [isAffiliate, setIsAffiliate] = useState(false);
  const { user } = useAuth();
  const { t } = useTranslation();

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center space-x-3 mb-8">
        <Building className="h-8 w-8 text-indigo-600" />
        <h2 className="text-2xl font-semibold text-gray-900">{t('common.ibusiness')}</h2>
      </div>

      {/* Sponsor Information */}
      <SponsorInfo />

      {!isAffiliate ? (
        <AffiliateSignup onSignupSuccess={() => setIsAffiliate(true)} />
      ) : (
        <>
          <InvitationCode />
          <AffiliateDashboard />
        </>
      )}
    </div>
  );
};

export default IBusiness;