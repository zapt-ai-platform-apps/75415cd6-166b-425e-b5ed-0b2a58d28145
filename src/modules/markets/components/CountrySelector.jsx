import React, { useState } from 'react';

const CountrySelector = ({ countries, onSelect, selectedCountry }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCountries = countries.filter(country =>
    country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="country-selector">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search countries..."
          className="input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="max-h-96 overflow-y-auto pr-2">
        {filteredCountries.length > 0 ? (
          <ul className="space-y-2">
            {filteredCountries.map((country) => (
              <li key={country}>
                <button
                  onClick={() => onSelect(country)}
                  className={`w-full text-left px-4 py-2 rounded transition-colors ${
                    selectedCountry === country
                      ? 'bg-blue-100 text-blue-700 font-medium'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {country}
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-center py-4">No countries match your search</p>
        )}
      </div>
    </div>
  );
};

export default CountrySelector;