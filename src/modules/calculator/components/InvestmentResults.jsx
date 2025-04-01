import React from 'react';
import PropertyTypeCard from './PropertyTypeCard';

const InvestmentResults = ({ financialData, results }) => {
  if (!results) return null;

  const { investmentCapacity, recommendations } = results;

  return (
    <div>
      <div className="card mb-8">
        <h2 className="text-2xl font-bold mb-6">Your Investment Capacity</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-1">Potential Property Value</p>
            <p className="text-3xl font-bold text-blue-700 dark:text-blue-300">
              ${investmentCapacity.maxPropertyValue.toLocaleString()}
            </p>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-1">Recommended Down Payment</p>
            <p className="text-3xl font-bold text-blue-700 dark:text-blue-300">
              ${investmentCapacity.recommendedDownPayment.toLocaleString()}
            </p>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-1">Monthly Payment Capacity</p>
            <p className="text-3xl font-bold text-blue-700 dark:text-blue-300">
              ${investmentCapacity.monthlyPaymentCapacity.toLocaleString()}
            </p>
          </div>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <h3 className="font-bold text-lg mb-2">Financial Analysis</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Based on your monthly income of ${financialData.monthlyIncome.toLocaleString()}, 
            expenses of ${financialData.monthlyExpenses.toLocaleString()}, 
            available cash of ${financialData.availableCash.toLocaleString()}, 
            and credit score of {financialData.creditScore}, we've calculated your investment capacity.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            You have approximately ${investmentCapacity.cashAvailableForInvesting.toLocaleString()} available for investment 
            after maintaining a recommended emergency fund. With your credit score, you can expect 
            a mortgage rate of approximately {investmentCapacity.estimatedMortgageRate}%.
          </p>
        </div>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold mb-6">Recommended Investment Strategies</h2>
        
        <div className="mb-8">
          <h3 className="font-bold text-lg mb-4">Based on your goals and financial situation:</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            {recommendations.generalAdvice.map((advice, index) => (
              <li key={index}>{advice}</li>
            ))}
          </ul>
        </div>
        
        <h3 className="font-bold text-lg mb-4">Recommended Property Types</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendations.propertyTypes.map((propertyType, index) => (
            <PropertyTypeCard key={index} propertyType={propertyType} />
          ))}
        </div>
        
        {recommendations.locationAdvice && (
          <div className="mt-8 bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Location Recommendations</h3>
            <p className="text-gray-700 dark:text-gray-300">{recommendations.locationAdvice}</p>
          </div>
        )}
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h3 className="font-bold text-lg mb-4">Next Steps</h3>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            {recommendations.nextSteps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default InvestmentResults;