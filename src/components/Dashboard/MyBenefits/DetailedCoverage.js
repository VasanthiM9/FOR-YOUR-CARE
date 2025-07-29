import React, { useEffect, useState } from 'react';

const coverageMockData = {
  'Preventive Care': {
    services: ['Annual Checkup', 'Vaccines'],
    copay: '$0',
    coinsurance: '0%',
    limits: 'Once per year'
  },
  'Emergency Services': {
    services: ['ER Visit', 'Ambulance'],
    copay: '$100',
    coinsurance: '20%',
    limits: 'Unlimited'
  },
  'Specialist Visits': {
    services: ['Dermatology', 'Cardiology'],
    copay: '$40',
    coinsurance: '10%',
    limits: 'Up to 10 visits/year'
  }
};

const DetailedCoverage = ({ category }) => {
  const [coverage, setCoverage] = useState(null);

  useEffect(() => {
    setCoverage(coverageMockData[category]);
  }, [category]);

  if (!coverage) return <div>Loading detailed coverage...</div>;

  return (
    <div>
      <h4>{category}</h4>
      <p><strong>Services:</strong> {coverage.services.join(', ')}</p>
      <p><strong>Copay:</strong> {coverage.copay}</p>
      <p><strong>Coinsurance:</strong> {coverage.coinsurance}</p>
      <p><strong>Limits:</strong> {coverage.limits}</p>
    </div>
  );
};

export default DetailedCoverage;
