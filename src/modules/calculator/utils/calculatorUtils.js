// Calculate investment capacity based on financial data
export const calculateInvestmentCapacity = (financialData) => {
  // Calculate disposable income
  const disposableIncome = financialData.monthlyIncome - financialData.monthlyExpenses;
  
  // Calculate debt-to-income ratio
  const dti = financialData.existingDebt / financialData.monthlyIncome;
  
  // Estimate mortgage rate based on credit score
  let estimatedMortgageRate;
  if (financialData.creditScore >= 760) {
    estimatedMortgageRate = 5.0;
  } else if (financialData.creditScore >= 700) {
    estimatedMortgageRate = 5.25;
  } else if (financialData.creditScore >= 660) {
    estimatedMortgageRate = 5.5;
  } else if (financialData.creditScore >= 620) {
    estimatedMortgageRate = 5.75;
  } else {
    estimatedMortgageRate = 6.25;
  }
  
  // Maximum DTI allowed for a mortgage typically 43%
  const maxDTI = 0.43;
  const remainingDTICapacity = maxDTI - dti;
  
  // Maximum additional monthly payment capacity
  const monthlyPaymentCapacity = Math.min(
    financialData.monthlyIncome * remainingDTICapacity,
    disposableIncome * 0.8 // Conservative estimate using 80% of disposable income
  );
  
  // Calculate cash available for investing (keeping emergency fund)
  const emergencyFund = financialData.monthlyExpenses * 3; // 3 months of expenses
  const cashAvailableForInvesting = Math.max(0, financialData.availableCash - emergencyFund);
  
  // Typical down payment percentage based on credit score
  let downPaymentPercentage;
  if (financialData.creditScore >= 740) {
    downPaymentPercentage = 0.2; // 20%
  } else if (financialData.creditScore >= 680) {
    downPaymentPercentage = 0.25; // 25%
  } else {
    downPaymentPercentage = 0.3; // 30%
  }
  
  // Calculate maximum property value based on down payment
  const maxPropertyValueByDownPayment = cashAvailableForInvesting / downPaymentPercentage;
  
  // Calculate maximum property value based on monthly payment capacity
  // Using a simplified mortgage calculation (not accounting for taxes, insurance)
  const monthlyRate = estimatedMortgageRate / 100 / 12;
  const termInMonths = 30 * 12; // 30-year mortgage
  
  const maxLoanAmount = monthlyPaymentCapacity * 
    (1 - Math.pow(1 + monthlyRate, -termInMonths)) / monthlyRate;
  
  const maxPropertyValueByPayment = maxLoanAmount / (1 - downPaymentPercentage);
  
  // Take the lower of the two max property values
  const maxPropertyValue = Math.min(maxPropertyValueByDownPayment, maxPropertyValueByPayment);
  
  // Recommended down payment
  const recommendedDownPayment = maxPropertyValue * downPaymentPercentage;
  
  return {
    maxPropertyValue: Math.round(maxPropertyValue),
    recommendedDownPayment: Math.round(recommendedDownPayment),
    monthlyPaymentCapacity: Math.round(monthlyPaymentCapacity),
    cashAvailableForInvesting: Math.round(cashAvailableForInvesting),
    estimatedMortgageRate,
    downPaymentPercentage
  };
};

// Generate investment recommendations based on financial data and capacity
export const generateRecommendations = (financialData, investmentCapacity) => {
  const { 
    investmentGoals, 
    riskTolerance, 
    investmentTimeframe,
    propertyTypePreference,
    preferredLocations 
  } = financialData;
  
  // General advice based on goals and risk tolerance
  const generalAdvice = [];
  
  if (investmentGoals === 'cashflow') {
    generalAdvice.push('Focus on properties in areas with high rent-to-price ratios.');
    generalAdvice.push('Consider properties that may need minor repairs to increase rental value.');
  } else if (investmentGoals === 'appreciation') {
    generalAdvice.push('Look for properties in emerging neighborhoods or areas with strong economic growth.');
    generalAdvice.push('Be prepared for potentially lower initial cash flow in exchange for long-term value growth.');
  } else if (investmentGoals === 'balance') {
    generalAdvice.push('Aim for properties that offer a balance of current income and appreciation potential.');
    generalAdvice.push('Consider areas with stable rental demand and moderate but consistent price growth.');
  } else if (investmentGoals === 'taxbenefits') {
    generalAdvice.push('Consult with a tax professional about optimal investment structures.');
    generalAdvice.push('Properties needing significant renovation may offer accelerated depreciation benefits.');
  }
  
  if (riskTolerance === 'conservative') {
    generalAdvice.push('Prioritize established neighborhoods with stable rental histories.');
    generalAdvice.push('Consider turnkey properties requiring minimal initial work.');
  } else if (riskTolerance === 'moderate') {
    generalAdvice.push('Balance between established areas and emerging markets for diversification.');
    generalAdvice.push('Be open to properties needing moderate improvements to increase value.');
  } else if (riskTolerance === 'aggressive') {
    generalAdvice.push('Consider emerging areas with higher growth potential but greater uncertainty.');
    generalAdvice.push('Value-add properties may align with your risk tolerance, offering greater upside.');
  }
  
  // Recommend property types based on financial capacity and goals
  const propertyTypes = [];
  
  // Single-family homes
  if (
    (propertyTypePreference === 'residential' || propertyTypePreference === 'any') &&
    investmentCapacity.maxPropertyValue >= 150000
  ) {
    propertyTypes.push({
      name: 'Single-Family Home',
      description: 'Traditional single-family houses in residential neighborhoods.',
      initialInvestment: Math.min(investmentCapacity.maxPropertyValue, 350000),
      cashFlowRating: investmentGoals === 'cashflow' ? 3 : 2,
      appreciationRating: investmentGoals === 'appreciation' ? 4 : 3,
      managementComplexity: 2,
      bestFor: [
        'First-time investors',
        'Long-term appreciation',
        'Stable tenant base'
      ]
    });
  }
  
  // Condos/Townhomes
  if (investmentCapacity.maxPropertyValue >= 100000) {
    propertyTypes.push({
      name: 'Condominium/Townhouse',
      description: 'Attached housing units with lower maintenance requirements and often amenities.',
      initialInvestment: Math.min(investmentCapacity.maxPropertyValue, 250000),
      cashFlowRating: 2,
      appreciationRating: 3,
      managementComplexity: 1,
      bestFor: [
        'Hands-off investors',
        'Urban markets',
        'Lower initial investment'
      ]
    });
  }
  
  // Duplexes/Small Multi-family
  if (
    (propertyTypePreference === 'multifamily' || propertyTypePreference === 'any') &&
    investmentCapacity.maxPropertyValue >= 200000
  ) {
    propertyTypes.push({
      name: 'Small Multi-family (2-4 units)',
      description: 'Properties with multiple units, offering stronger cash flow potential.',
      initialInvestment: Math.min(investmentCapacity.maxPropertyValue, 450000),
      cashFlowRating: 4,
      appreciationRating: 3,
      managementComplexity: 3,
      bestFor: [
        'Cash flow focused investors',
        'House hacking (living in one unit)',
        'Diversified rental income'
      ]
    });
  }
  
  // Location advice
  let locationAdvice = '';
  if (preferredLocations) {
    locationAdvice = `Based on your preference for ${preferredLocations}, focus on areas with strong rental demand and local economic indicators supporting your ${investmentTimeframe}-term investment horizon.`;
  } else {
    locationAdvice = `Look for areas with strong employment growth, good school districts, and convenient access to amenities. These factors support both rental demand and property appreciation over your ${investmentTimeframe}-term investment horizon.`;
  }
  
  // Next steps
  const nextSteps = [
    'Research specific markets that match your investment criteria',
    'Connect with a real estate agent specializing in investment properties',
    'Pre-qualify for financing to understand your exact borrowing capacity',
    'Begin viewing properties to get a feel for the market',
    'Consider working with a property manager if you plan to invest outside your local area'
  ];
  
  return {
    generalAdvice,
    propertyTypes,
    locationAdvice,
    nextSteps
  };
};