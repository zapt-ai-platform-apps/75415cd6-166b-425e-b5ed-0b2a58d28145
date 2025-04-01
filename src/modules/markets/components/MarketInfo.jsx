import React from 'react';

const MarketInfo = ({ marketInfo }) => {
  if (!marketInfo) return null;

  return (
    <div className="card">
      <div className="prose max-w-none">
        <p className="text-gray-700 mb-6">{marketInfo.overview}</p>
        
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">Market Trends</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Price Trends</h4>
              <p className="text-gray-700">{marketInfo.priceTrends}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Rental Market</h4>
              <p className="text-gray-700">{marketInfo.rentalMarket}</p>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">Key Metrics</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <p className="font-semibold text-gray-700 mb-1">Avg. Price Growth</p>
              <p className="text-2xl font-bold text-blue-700">{marketInfo.metrics.priceGrowth}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <p className="font-semibold text-gray-700 mb-1">Avg. Rental Yield</p>
              <p className="text-2xl font-bold text-blue-700">{marketInfo.metrics.rentalYield}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <p className="font-semibold text-gray-700 mb-1">Avg. Vacancy Rate</p>
              <p className="text-2xl font-bold text-blue-700">{marketInfo.metrics.vacancyRate}</p>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">Hot Markets</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {marketInfo.hotMarkets.map((market, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-lg mb-2">{market.name}</h4>
                <p className="text-gray-700 mb-3">{market.description}</p>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Avg. Price: {market.avgPrice}</span>
                  <span className="text-gray-600">Yield: {market.yield}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-4">Investment Outlook</h3>
          <p className="text-gray-700 mb-4">{marketInfo.investmentOutlook}</p>
          
          <h4 className="font-semibold mb-2">Opportunities</h4>
          <ul className="list-disc pl-6 mb-4">
            {marketInfo.opportunities.map((item, index) => (
              <li key={index} className="text-gray-700 mb-1">{item}</li>
            ))}
          </ul>
          
          <h4 className="font-semibold mb-2">Challenges</h4>
          <ul className="list-disc pl-6">
            {marketInfo.challenges.map((item, index) => (
              <li key={index} className="text-gray-700 mb-1">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MarketInfo;