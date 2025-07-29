import React, { useState } from 'react';

const CostEstimator = () => {
  const [procedureCode, setProcedureCode] = useState('');
  const [estimate, setEstimate] = useState(null);

  const handleEstimate = () => {

    if (procedureCode.toLowerCase().includes('xray')) {
      setEstimate('$50 out-of-pocket');
    } else {
      setEstimate('$100 out-of-pocket');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Procedure Code or Description"
        value={procedureCode}
        onChange={(e) => setProcedureCode(e.target.value)}
      />
      <button onClick={handleEstimate}>Estimate Cost</button>

      {estimate && <p><strong>Estimated Cost:</strong> {estimate}</p>}
    </div>
  );
};

export default CostEstimator;
