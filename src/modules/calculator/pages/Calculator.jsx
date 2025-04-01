import React, { useState } from 'react';
import FinancialInputForm from '../components/FinancialInputForm';
import InvestmentResults from '../components/InvestmentResults';
import { calculateInvestmentCapacity, generateRecommendations } from '../utils/calculatorUtils';

const Calculator = () => {
  const [financialData, setFinancialData] = useState(null);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFinancialDataSubmit = (data) => {
    setLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const investmentCapacity = calculateInvestmentCapacity(data);
      const recommendations = generateRecommendations(data, investmentCapacity);
      
      setResults({
        investmentCapacity,
        recommendations
      });
      
      setFinancialData(data);
      setLoading(false);
    }, 1000);
  };

  const handleReset = () => {
    setFinancialData(null);
    setResults(null);
  };

  return (
    <div className="container-custom py-12">
      <h1 className="mb-4">Investment Calculator</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
        Get personalized investment recommendations based on your financial situation and goals.
      </p>

      {!financialData ? (
        <FinancialInputForm onSubmit={handleFinancialDataSubmit} loading={loading} />
      ) : (
        <div>
          <InvestmentResults 
            financialData={financialData} 
            results={results}
          />
          <button 
            onClick={handleReset}
            className="btn-secondary mt-8 cursor-pointer"
          >
            Recalculate with Different Data
          </button>
        </div>
      )}
    </div>
  );
};

export default Calculator;