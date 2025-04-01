import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Investment Concepts', href: '/concepts' },
    { name: 'Investment Calculator', href: '/calculator' },
    { name: 'Markets & Regulations', href: '/markets' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="https://images.unsplash.com/photo-1492496913980-501348b61469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw3fHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBidWlsZGluZyUyMHdpdGglMjBnYXJkZW4lMkMlMjByZWFsJTIwZXN0YXRlJTIwaW52ZXN0bWVudCUyMGNvbmNlcHR8ZW58MHx8fHwxNzQzNTAzMzc2fDA&ixlib=rb-4.0.3&q=80&w=1080" 
                src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=48&height=48" 
                alt="Property Ladder Logo" 
                className="h-10 w-10 mr-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-12">How Property Ladder Helps You</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card hover:shadow-lg transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <Link to={feature.link} className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Real Estate Section */}
      <section className="py-16 bg-gray-100">
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
                  <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h5 className="font-semibold">Steady Income</h5>
                    <p className="text-gray-600">Generate consistent passive income through rental properties.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h5 className="font-semibold">Long-Term Appreciation</h5>
                    <p className="text-gray-600">Real estate typically increases in value over time, building equity.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h5 className="font-semibold">Portfolio Diversification</h5>
                    <p className="text-gray-600">Add stability to your investment portfolio with tangible assets.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h5 className="font-semibold">Tax Benefits</h5>
                    <p className="text-gray-600">Various tax deductions and strategies are available to property investors.</p>
                  </div>
                </li>
              </ul>
              <Link to="/concepts" className="btn-primary mt-8 inline-block">
                Explore Investment Concepts
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="container-custom">
          <h2 className="mb-6">Ready to Start Your Investment Journey?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Take the first step toward building your real estate portfolio with Property Ladder's personalized guidance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/calculator" className="btn-primary bg-white text-blue-700 hover:bg-gray-100">
              Calculate Your Investment Potential
            </Link>
            <Link to="/markets" className="btn-outline border-white text-white hover:bg-blue-700">
              Explore Market Opportunities
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;