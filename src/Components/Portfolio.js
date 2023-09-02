import React from 'react';

function Portfolio() {
  const websites = [
    'https://soukaina203.github.io/M1/',
    'https://soukaina203.github.io/cinema/',
    'https://www.linkedin.com/in/soukaina-mourabit-253a33240/recent-activity/all/'
  ];

  return (
    <div className='h-[60rem] p-6 bg-purple-500'>
      <h2 className='text-center text-3xl font-bold mb-6'>Portfolio</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {websites.map((e,i) => (
            <div key={e} className='bg-gray-300 rounded-lg overflow-hidden shadow-lg'>
            <img
              className="w-full h-48 object-cover object-center"
              src={`${i}.jpg`}
              alt="Project Image"
            />
            <div className="p-4">
              <a
                href={e}
                className="block text-center text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 py-2 rounded-md transition duration-300"
              >
                Go Live
                <svg
                  className="w-4 h-4 ml-2 inline-block"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
