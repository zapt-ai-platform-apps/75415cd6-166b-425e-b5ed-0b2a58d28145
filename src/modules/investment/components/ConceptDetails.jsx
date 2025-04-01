import React from 'react';

const ConceptDetails = ({ concept }) => {
  if (!concept) return null;

  return (
    <div className="card">
      <h2 className="text-3xl font-bold mb-4">{concept.title}</h2>
      <div className="flex items-center mb-6">
        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
          {concept.category}
        </span>
        {concept.level && (
          <span className={`text-sm font-medium px-2.5 py-0.5 rounded ${
            concept.level === 'Beginner' 
              ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300' 
              : concept.level === 'Intermediate'
                ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300'
                : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-300'
          }`}>
            {concept.level}
          </span>
        )}
      </div>

      <div className="prose prose-lg max-w-none dark:prose-invert">
        <p className="text-gray-700 dark:text-gray-300 mb-6">{concept.description}</p>
        
        {concept.image && (
          <div className="my-6">
            <img 
              src={concept.image} 
              alt={concept.title} 
              className="rounded-lg w-full max-w-2xl mx-auto" 
            />
          </div>
        )}
        
        {concept.keyPoints && (
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-3">Key Points</h3>
            <ul className="list-disc pl-6 space-y-2">
              {concept.keyPoints.map((point, index) => (
                <li key={index} className="text-gray-700 dark:text-gray-300">{point}</li>
              ))}
            </ul>
          </div>
        )}
        
        {concept.examples && (
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-3">Examples</h3>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              {concept.examples.map((example, index) => (
                <div key={index} className={index > 0 ? "mt-4 pt-4 border-t border-gray-200 dark:border-gray-600" : ""}>
                  <h4 className="font-bold">{example.title}</h4>
                  <p className="text-gray-700 dark:text-gray-300">{example.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {concept.tips && (
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-3">Investment Tips</h3>
            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
              <ul className="list-disc pl-6 space-y-2">
                {concept.tips.map((tip, index) => (
                  <li key={index} className="text-gray-700 dark:text-gray-300">{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
        
        {concept.relatedConcepts && (
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-3">Related Concepts</h3>
            <div className="flex flex-wrap gap-2">
              {concept.relatedConcepts.map((related, index) => (
                <span key={index} className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-gray-700 dark:text-gray-300">
                  {related}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConceptDetails;