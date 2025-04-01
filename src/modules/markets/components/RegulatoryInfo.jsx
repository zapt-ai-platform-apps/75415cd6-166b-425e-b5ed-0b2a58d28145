import React from 'react';

const RegulatoryInfo = ({ regulatoryInfo }) => {
  if (!regulatoryInfo) return null;

  return (
    <div className="card">
      <div className="prose max-w-none dark:prose-invert">
        <p className="text-gray-700 dark:text-gray-300 mb-6">{regulatoryInfo.overview}</p>
        
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">Foreign Investor Regulations</h3>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-4">
            <p className="text-gray-700 dark:text-gray-300">{regulatoryInfo.foreignInvestorRules}</p>
          </div>
          
          <h4 className="font-semibold mb-2">Key Restrictions</h4>
          {regulatoryInfo.restrictions.length > 0 ? (
            <ul className="list-disc pl-6 mb-4">
              {regulatoryInfo.restrictions.map((item, index) => (
                <li key={index} className="text-gray-700 dark:text-gray-300 mb-1">{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-700 dark:text-gray-300 mb-4">No significant restrictions for foreign investors.</p>
          )}
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">Tax Considerations</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Property Taxes</h4>
              <p className="text-gray-700 dark:text-gray-300">{regulatoryInfo.taxes.propertyTax}</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Capital Gains</h4>
              <p className="text-gray-700 dark:text-gray-300">{regulatoryInfo.taxes.capitalGains}</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Rental Income</h4>
              <p className="text-gray-700 dark:text-gray-300">{regulatoryInfo.taxes.rentalIncome}</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Other Taxes</h4>
              <p className="text-gray-700 dark:text-gray-300">{regulatoryInfo.taxes.other}</p>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">Legal Process for Purchase</h3>
          <ol className="list-decimal pl-6 mb-6">
            {regulatoryInfo.purchaseProcess.map((step, index) => (
              <li key={index} className="text-gray-700 dark:text-gray-300 mb-3">{step}</li>
            ))}
          </ol>
          
          <div className="bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-400 dark:border-yellow-600 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400 dark:text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700 dark:text-yellow-200">
                  <strong>Note:</strong> {regulatoryInfo.legalCautions}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4">Tenant and Landlord Laws</h3>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-4">
            <p className="text-gray-700 dark:text-gray-300">{regulatoryInfo.tenantLaws.overview}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Landlord Rights</h4>
              <ul className="list-disc pl-6">
                {regulatoryInfo.tenantLaws.landlordRights.map((item, index) => (
                  <li key={index} className="text-gray-700 dark:text-gray-300 mb-1">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Tenant Rights</h4>
              <ul className="list-disc pl-6">
                {regulatoryInfo.tenantLaws.tenantRights.map((item, index) => (
                  <li key={index} className="text-gray-700 dark:text-gray-300 mb-1">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegulatoryInfo;