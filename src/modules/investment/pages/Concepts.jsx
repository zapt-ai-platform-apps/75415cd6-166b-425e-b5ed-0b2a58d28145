import React, { useState } from 'react';
import ConceptDetails from '../components/ConceptDetails';
import { investmentConcepts } from '../data/conceptsData';

const Concepts = () => {
  const [activeConcept, setActiveConcept] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredConcepts = investmentConcepts.filter(concept => 
    concept.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    concept.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [...new Set(investmentConcepts.map(concept => concept.category))];

  return (
    <div className="container-custom py-12">
      <h1 className="mb-4">Real Estate Investment Concepts</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
        Understanding these fundamental concepts will help you make informed real estate investment decisions.
      </p>

      {/* Search */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search investment concepts..."
          className="input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {activeConcept ? (
        <div>
          <button 
            onClick={() => setActiveConcept(null)}
            className="btn-secondary mb-6 flex items-center cursor-pointer"
          >
            <svg className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Concepts
          </button>
          <ConceptDetails concept={activeConcept} />
        </div>
      ) : (
        <div>
          {categories.map(category => {
            const categoryConcepts = filteredConcepts.filter(concept => concept.category === category);
            if (categoryConcepts.length === 0) return null;
            
            return (
              <div key={category} className="mb-12">
                <h2 className="text-2xl font-bold mb-6">{category}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryConcepts.map(concept => (
                    <div 
                      key={concept.id} 
                      className="card hover:shadow-lg transition-shadow cursor-pointer"
                      onClick={() => setActiveConcept(concept)}
                    >
                      <h3 className="text-xl font-bold mb-2">{concept.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{concept.description}</p>
                      <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium">
                        Read More →
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {filteredConcepts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 dark:text-gray-300">No concepts match your search term.</p>
              <button
                onClick={() => setSearchTerm('')}
                className="btn-primary mt-4 cursor-pointer"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Concepts;