import React, { useEffect, useState } from 'react';


const BenefitSummary = () => {
  const [summary, setSummary] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBenefitSummary = () => {
      setTimeout(() => {
        const shouldError = Math.random() < 0.1;
        if (shouldError) {
          setError('Failed to fetch benefit summary.');
          setSummary(null);
        } else {
          const mockData = {
            planType: 'PPO Plus',
            effectiveDate: '2025-01-01',
            deductible: 750,
          };
          setSummary(mockData);
          setError(null);
        }
      }, 1000);
    };

    fetchBenefitSummary();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateObj = new Date(dateString);
    return dateObj.toLocaleDateString(undefined, options);
  };

  if (error)
    return (
      <div style={{ color: 'red' }}>
        Error loading benefits: {error}{' '}
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );

  if (!summary) return <div>Loading benefit summary...</div>;

  return (
    <div style={{ border: '1px solid #ccc', padding: 20, maxWidth: 400, borderRadius: 5 }}>
      <h3>Benefit Summary</h3>
      <p>
        <strong>Plan Type:</strong> {summary.planType}
      </p>
      <p>
        <strong>Effective Date:</strong> {formatDate(summary.effectiveDate)}
      </p>
      <p>
        <strong>Deductible:</strong> ${summary.deductible.toLocaleString()}
      </p>
    </div>
  );
};


export default BenefitSummary;
