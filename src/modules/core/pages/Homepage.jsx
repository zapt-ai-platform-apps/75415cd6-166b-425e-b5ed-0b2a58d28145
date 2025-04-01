import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  // Features for the homepage
  const features = [
    {
      title: "Learn Investment Concepts",
      description: "Understand the fundamentals of real estate investment with our comprehensive guides.",
      icon: (
        <svg className="h-12 w-12 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      link: "/concepts"
    },
    {
      title: "Calculate Your Potential",
      description: "Get personalized investment recommendations based on your financial situation.",
      icon: (
        <svg className="h-12 w-12 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      link: "/calculator"
    },
    {
      title: "Explore Markets",
      description: "Research real estate markets and regulations across different countries.",
      icon: (
        <svg className="h-12 w-12 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      link: "/markets"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-800 dark:to-blue-900 text-white py-20">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="mb-6">Start Your Real Estate Investment Journey</h1>
              <p className="text-xl mb-8 text-blue-100">
                Property Ladder helps beginners navigate the complex world of real estate investing with personalized guidance, market insights, and practical tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/calculator" className="btn-primary bg-white dark:bg-gray-200 text-blue-700 dark:text-blue-800 hover:bg-gray-100 dark:hover:bg-gray-300 cursor-pointer">
                  Calculate Your Investment
                </Link>
                <Link to="/concepts" className="btn-outline border-white text-white hover:bg-blue-500 dark:hover:bg-blue-800 cursor-pointer">
                  Learn Investment Basics
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-10">
              <img 
                src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwaW52ZXN0bWVudHxlbnwwfHx8fDE3NDM1MDMzNzZ8MA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Real estate investment" 
                className="rounded-lg shadow-2xl w-full h-auto"
                data-image-request="real estate investment"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container-custom">
          <h2 className="text-center mb-12">How Property Ladder Helps You</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card hover:shadow-lg transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{feature.description}</p>
                <Link to={feature.link} className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Real Estate Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-700">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwyfHxwZXJzb24lMjBhbmFseXppbmclMjByZWFsJTIwZXN0YXRlJTIwaW52ZXN0bWVudCUyMGNoYXJ0cyUyMGFuZCUyMGdyYXBoc3xlbnwwfHx8fDE3NDM1MDMzNzd8MA&ixlib=rb-4.0.3&q=80&w=1080" 
                alt="Real estate investment benefits" 
                className="rounded-lg shadow-lg w-full h-auto"
                data-image-request="person analyzing real estate investment charts and graphs"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="mb-6">Why Invest in Real Estate?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 dark:text-green-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h5 className="font-semibold">Steady Income</h5>
                    <p className="text-gray-600 dark:text-gray-300">Generate consistent passive income through rental properties.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 dark:text-green-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h5 className="font-semibold">Long-Term Appreciation</h5>
                    <p className="text-gray-600 dark:text-gray-300">Real estate typically increases in value over time, building equity.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 dark:text-green-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h5 className="font-semibold">Portfolio Diversification</h5>
                    <p className="text-gray-600 dark:text-gray-300">Add stability to your investment portfolio with tangible assets.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 dark:text-green-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h5 className="font-semibold">Tax Benefits</h5>
                    <p className="text-gray-600 dark:text-gray-300">Various tax deductions and strategies are available to property investors.</p>
                  </div>
                </li>
              </ul>
              <Link to="/concepts" className="btn-primary mt-8 inline-block cursor-pointer">
                Explore Investment Concepts
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 dark:bg-blue-800 text-white text-center">
        <div className="container-custom">
          <h2 className="mb-6">Ready to Start Your Investment Journey?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Take the first step toward building your real estate portfolio with Property Ladder's personalized guidance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/calculator" className="btn-primary bg-white dark:bg-gray-200 text-blue-700 dark:text-blue-800 hover:bg-gray-100 dark:hover:bg-gray-300 cursor-pointer">
              Calculate Your Investment Potential
            </Link>
            <Link to="/markets" className="btn-outline border-white text-white hover:bg-blue-700 dark:hover:bg-blue-700 cursor-pointer">
              Explore Market Opportunities
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;