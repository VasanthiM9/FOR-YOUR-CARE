import React, { useState } from 'react';
import BenefitSummary from './BenefitsSummary';
import DetailedCoverage from './DetailedCoverage';
import CostEstimator from './CostEstimator';
import './MyBenefits.css';

const MyBenefits = () => {
  const [selectedCategory, setSelectedCategory] = useState('Preventive Care');

  return (
    <div className="my-benefits-container">
      <h2>My Benefits</h2>
      
      <div className="benefit-summary">
        <BenefitSummary />
      </div>

      <hr />

      <div className="detailed-coverage">
        <h3>Detailed Coverage</h3>
        <select
          className="category-dropdown"
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}
        >
          <option>Preventive Care</option>
          <option>Emergency Services</option>
          <option>Specialist Visits</option>
        </select>
        <DetailedCoverage category={selectedCategory} />
      </div>

      <hr />

      <div className="cost-estimator">
        <h3>Cost Estimator</h3>
        <CostEstimator />
      </div>
    </div>
  );
};

export default MyBenefits;
