import React, { useState } from 'react';

const FinancialInputForm = ({ onSubmit, loading }) => {
  const [formData, setFormData] = useState({
    monthlyIncome: '',
    monthlyExpenses: '',
    availableCash: '',
    creditScore: '',
    existingDebt: '',
    investmentGoals: 'cashflow', // default value
    riskTolerance: 'moderate', // default value
    investmentTimeframe: 'medium', // default value
    preferredLocations: '',
    propertyTypePreference: 'residential', // default value
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when field is being edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Required numeric fields
    ['monthlyIncome', 'monthlyExpenses', 'availableCash'].forEach(field => {
      if (!formData[field]) {
        newErrors[field] = 'This field is required';
      } else if (isNaN(formData[field]) || Number(formData[field]) < 0) {
        newErrors[field] = 'Please enter a valid positive number';
      }
    });
    
    // Credit score validation
    if (!formData.creditScore) {
      newErrors.creditScore = 'This field is required';
    } else if (
      isNaN(formData.creditScore) || 
      Number(formData.creditScore) < 300 || 
      Number(formData.creditScore) > 850
    ) {
      newErrors.creditScore = 'Please enter a valid credit score (300-850)';
    }
    
    // Existing debt validation
    if (!formData.existingDebt) {
      newErrors.existingDebt = 'This field is required';
    } else if (isNaN(formData.existingDebt) || Number(formData.existingDebt) < 0) {
      newErrors.existingDebt = 'Please enter a valid positive number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Convert string inputs to numbers
      const processedData = {
        ...formData,
        monthlyIncome: Number(formData.monthlyIncome),
        monthlyExpenses: Number(formData.monthlyExpenses),
        availableCash: Number(formData.availableCash),
        creditScore: Number(formData.creditScore),
        existingDebt: Number(formData.existingDebt),
      };
      
      onSubmit(processedData);
    }
  };

  return (
    <div className="card max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Your Financial Information</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Income and Expenses */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Monthly Income ($)</label>
            <input
              type="number"
              name="monthlyIncome"
              value={formData.monthlyIncome}
              onChange={handleChange}
              className={`input ${errors.monthlyIncome ? 'border-red-500' : ''}`}
              placeholder="5000"
            />
            {errors.monthlyIncome && <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.monthlyIncome}</p>}
          </div>
          
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Monthly Expenses ($)</label>
            <input
              type="number"
              name="monthlyExpenses"
              value={formData.monthlyExpenses}
              onChange={handleChange}
              className={`input ${errors.monthlyExpenses ? 'border-red-500' : ''}`}
              placeholder="3000"
            />
            {errors.monthlyExpenses && <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.monthlyExpenses}</p>}
          </div>
          
          {/* Available Cash and Credit Score */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Available Cash for Investment ($)</label>
            <input
              type="number"
              name="availableCash"
              value={formData.availableCash}
              onChange={handleChange}
              className={`input ${errors.availableCash ? 'border-red-500' : ''}`}
              placeholder="25000"
            />
            {errors.availableCash && <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.availableCash}</p>}
          </div>
          
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Credit Score (300-850)</label>
            <input
              type="number"
              name="creditScore"
              value={formData.creditScore}
              onChange={handleChange}
              className={`input ${errors.creditScore ? 'border-red-500' : ''}`}
              placeholder="720"
              min="300"
              max="850"
            />
            {errors.creditScore && <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.creditScore}</p>}
          </div>
          
          {/* Existing Debt */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Existing Monthly Debt Payments ($)</label>
            <input
              type="number"
              name="existingDebt"
              value={formData.existingDebt}
              onChange={handleChange}
              className={`input ${errors.existingDebt ? 'border-red-500' : ''}`}
              placeholder="1000"
            />
            {errors.existingDebt && <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.existingDebt}</p>}
          </div>
          
          {/* Investment Goals */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Primary Investment Goal</label>
            <select
              name="investmentGoals"
              value={formData.investmentGoals}
              onChange={handleChange}
              className="input"
            >
              <option value="cashflow">Monthly Cash Flow</option>
              <option value="appreciation">Long-term Appreciation</option>
              <option value="balance">Balanced Approach</option>
              <option value="taxbenefits">Tax Benefits</option>
            </select>
          </div>
          
          {/* Risk Tolerance */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Risk Tolerance</label>
            <select
              name="riskTolerance"
              value={formData.riskTolerance}
              onChange={handleChange}
              className="input"
            >
              <option value="conservative">Conservative</option>
              <option value="moderate">Moderate</option>
              <option value="aggressive">Aggressive</option>
            </select>
          </div>
          
          {/* Investment Timeframe */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Investment Timeframe</label>
            <select
              name="investmentTimeframe"
              value={formData.investmentTimeframe}
              onChange={handleChange}
              className="input"
            >
              <option value="short">Short (1-3 years)</option>
              <option value="medium">Medium (3-10 years)</option>
              <option value="long">Long (10+ years)</option>
            </select>
          </div>
          
          {/* Preferred Locations */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Preferred Locations (optional)</label>
            <input
              type="text"
              name="preferredLocations"
              value={formData.preferredLocations}
              onChange={handleChange}
              className="input"
              placeholder="e.g., Urban, Suburban, Specific Cities"
            />
          </div>
          
          {/* Property Type Preference */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Property Type Preference</label>
            <select
              name="propertyTypePreference"
              value={formData.propertyTypePreference}
              onChange={handleChange}
              className="input"
            >
              <option value="residential">Residential Single-family</option>
              <option value="multifamily">Multi-family (2-4 units)</option>
              <option value="apartment">Apartment Building</option>
              <option value="commercial">Commercial</option>
              <option value="mixed">Mixed-use</option>
            </select>
          </div>
        </div>
        
        <div className="mt-8">
          <button
            type="submit"
            className="btn-primary w-full cursor-pointer"
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Calculating Recommendations...
              </div>
            ) : (
              'Get Investment Recommendations'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FinancialInputForm;