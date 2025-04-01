import React from 'react';

const ConceptDetails = ({ concept }) => {
  if (!concept) return null;

  return (
    <div className="card">
      <h2 className="text-3xl font-bold mb-4">{concept.title}</h2>
      <div className="flex items-center mb-6">
        <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
          {concept.category}
        </span>
        {concept.level && (
          <span className={`text-sm font-medium px-2.5 py-0.5 rounded ${
            concept.level === 'Beginner' 
              ? 'bg-green-100 text-green-800' 
              : concept.level === 'Intermediate'
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-red-100 text-red-800'
          }`}>
            {concept.level}
          </span>
        )}
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-6">{concept.description}</p>
        
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
                <li key={index} className="text-gray-700">{point}</li>
              ))}
            </ul>
          </div>
        )}
        
        {concept.examples && (
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-3">Examples</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              {concept.examples.map((example, index) => (
                <div key={index} className={index > 0 ? "mt-4 pt-4 border-t" : ""}>
                  <h4 className="font-bold">{example.title}</h4>
                  <p className="text-gray-700">{example.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {concept.tips && (
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-3">Investment Tips</h3>
            <div className="bg-blue-50 p-4 rounded-lg">
              <ul className="list-disc pl-6 space-y-2">
                {concept.tips.map((tip, index) => (
                  <li key={index} className="text-gray-700">{tip}</li>
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
                <span key={index} className="bg-gray-200 px-3 py-1 rounded-full text-gray-700">
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