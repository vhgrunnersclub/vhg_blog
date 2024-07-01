// AboutSection.js
import React from 'react';
import Container from '@/components/container';

const AboutSection = () => {
  // Default image path
  const defaultImagePath = '/img/aboutsectionimage.jpg'; // Path to your local image

  return (
    <Container>
      <div className="flex flex-row items-center mb-16 mt-6 mr-0">
        <div
          className="relative aspect-square overflow-hidden rounded-md bg-gray-200" // Change bg color if needed
          style={{
            maxWidth: '100%',
            height: 'auto',
            maxHeight: '600px',
            marginRight: '3rem',
            minWidth: '300px'
          }}
        >
          <img
            src={defaultImagePath} // Use the local image path
            alt="About Us"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        <div className="prose flex-1" style={{ width: '100%' }}>
          <div
            className="flex flex-col lg:flex-row justify-between"
            style={{ columnGap: '2rem', width: '100%' }}
          >
            <div style={{ width: '100%' }}>
              <h2 className="text-lg">About Us</h2>
              <p>We are a small passionate team.</p>
              <p>
                We provide real-time connectivity to enable software
                providers and financial institutions to build integrated
                products for their small business customers.
              </p>
            </div>
            <div style={{ width: '100%' }}>
              <h2 className="text-lg">Our API Infrastructure</h2>
              <p>
                Our API infrastructure is leveraged by clients ranging from
                lenders to corporate card providers and business forecasting
                tools, with use cases including automatic reconciliation,
                business dashboarding, and loan decisioning.
              </p>
            </div>
          </div>

          <div className="mt-4">
            <a href="/contact"> {/* Change to an appropriate link */}
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Get in touch
              </button>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutSection;
