import React from 'react';

const PropertyTypeCard = ({ propertyType }) => {
  return (
    <div className="card border border-gray-200 hover:shadow-md transition-shadow h-full flex flex-col">
      <div className="flex-grow">
        <h4 className="font-bold text-lg mb-2">{propertyType.name}</h4>
        <p className="text-gray-600 mb-4">{propertyType.description}</p>
        
        <div className="space-y-3 mb-4">
          <div className="flex items-center">
            <span className="font-medium w-1/2">Initial Investment:</span>
            <span className="text-gray-700">${propertyType.initialInvestment.toLocaleString()}</span>
          </div>
          <div className="flex items-center">
            <span className="font-medium w-1/2">Cash Flow Potential:</span>
            <div className="flex">
              {Array(5).fill(0).map((_, i) => (
                <svg 
                  key={i}
                  className={`h-5 w-5 ${i < propertyType.cashFlowRating ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <span className="font-medium w-1/2">Appreciation Potential:</span>
            <div className="flex">
              {Array(5).fill(0).map((_, i) => (
                <svg 
                  key={i}
                  className={`h-5 w-5 ${i < propertyType.appreciationRating ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <span className="font-medium w-1/2">Management Complexity:</span>
            <div className="flex">
              {Array(5).fill(0).map((_, i) => (
                <svg 
                  key={i}
                  className={`h-5 w-5 ${i < propertyType.managementComplexity ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
        
      <div>
        <h5 className="font-semibold mb-2">Best for:</h5>
        <ul className="list-disc pl-5 text-sm text-gray-600">
          {propertyType.bestFor.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PropertyTypeCard;