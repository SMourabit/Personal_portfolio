import React, { useState } from 'react';

function Portfolio() {
  const [tool, setTool] = useState(null); // Use null to initially hide the div
  const websites = [
    {link:'https://soukaina203.github.io/M1/',techs:'FrontEnd website using ReactJs TailwindCSS'},
    {link:'https://soukaina203.github.io/cinema/',techs:'FrontEnd website using ReactJs TailwindCSS'},
    {link:'https://www.linkedin.com/in/soukaina-mourabit-253a33240/recent-activity/all/',
    techs:'FullStack renting website using ReactJs TailwindCSS Laravel Mysql'}
  ];

  const toggleTool = (index) => {
    if (tool === index) {
      // Clicking the same button again should hide the div
      setTool(null);
    } else {
      setTool(index);
    }
  };

  return (
    <div className='h-[69rem]  mt-5 p-6 animate-showUp' id='Portfolio'>
      <h2 className='text-center text-[25px] font-bold mb-6 '>Projects</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {websites.map((e, i) => (
          <div key={e} className='bg-gray-300 rounded-lg overflow-hidden shadow-lg'>
            <img className='w-full h-48 ' src={`${i}.jpg`} alt='' />
            <div className='p-4'>
              <a
                href={e.link}
                className='text-white bg-green-light ml-3 border border-gray-200 focus:ring-4 focus:outline-none
                focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-1.5 text-center inline-flex items-center '
              >
                Go Live
                <svg
                  className='w-4 h-4 ml-2 inline-block'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 14 10'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M1 5h12m0 0L9 1m4 4L9 9'
                  />
                </svg>
              </a>
              <button
                className='text-white bg-green-light ml-3 border border-gray-200 
                 font-medium rounded-lg text-sm px-4 py-1.5 text-center inline-flex items-center '
                onClick={() => toggleTool(i)}
              >
                Tools
              </button>
              {tool === i && (
                <div className='mt-4 p-2 bg-gray-100 rounded-lg animate-showUp'>
                  {/* Content to be displayed when Tools button is clicked */}
                  <p className='text-gray-800'>
                   {websites[i].techs}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
