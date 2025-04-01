import React, { useState } from 'react';
import CountrySelector from '../components/CountrySelector';
import MarketInfo from '../components/MarketInfo';
import RegulatoryInfo from '../components/RegulatoryInfo';
import { marketData } from '../data/marketData';

const Markets = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [activeTab, setActiveTab] = useState('market');

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    // Reset to market tab when changing countries
    setActiveTab('market');
    // Scroll to tab content for mobile users
    document.getElementById('marketTabContent').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="container-custom py-12">
      <h1 className="mb-4">Markets & Regulations</h1>
      <p className="text-xl text-gray-600 mb-8">
        Explore real estate markets and investment regulations across different countries.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="card sticky top-24">
            <h2 className="text-xl font-bold mb-6">Select a Country</h2>
            <CountrySelector 
              countries={marketData.map(country => country.name)} 
              onSelect={handleCountrySelect}
              selectedCountry={selectedCountry}
            />
          </div>
        </div>

        <div className="md:col-span-2" id="marketTabContent">
          {selectedCountry ? (
            <div>
              <h2 className="text-2xl font-bold mb-6">
                Real Estate in {selectedCountry}
              </h2>

              <div className="mb-6 border-b">
                <div className="flex">
                  <button
                    className={`px-4 py-2 font-medium text-sm border-b-2 ${
                      activeTab === 'market'
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => setActiveTab('market')}
                  >
                    Market Overview
                  </button>
                  <button
                    className={`px-4 py-2 font-medium text-sm border-b-2 ${
                      activeTab === 'regulations'
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => setActiveTab('regulations')}
                  >
                    Regulations & Taxes
                  </button>
                </div>
              </div>

              <div className="mb-8">
                {activeTab === 'market' ? (
                  <MarketInfo 
                    marketInfo={marketData.find(country => country.name === selectedCountry).marketInfo} 
                  />
                ) : (
                  <RegulatoryInfo 
                    regulatoryInfo={marketData.find(country => country.name === selectedCountry).regulatoryInfo} 
                  />
                )}
              </div>
            </div>
          ) : (
            <div className="card text-center py-12">
              <svg 
                className="mx-auto h-16 w-16 text-gray-400 mb-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
              <h3 className="text-xl font-medium mb-2">Select a Country</h3>
              <p className="text-gray-500">
                Choose a country from the list to view detailed market information and regulations.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Markets;