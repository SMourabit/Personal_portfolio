import React, { useState } from 'react';

function Portfolio() {
  const [tool, setTool] = useState(null); // Use null to initially hide the div
  const websites = [
    { link: 'https://soukaina203.github.io/M1/', techs: 'FrontEnd website using ReactJs TailwindCSS' },
    { link: 'https://soukaina203.github.io/cinema/', techs: 'FrontEnd website using ReactJs TailwindCSS' },
    {
      link: 'https://www.linkedin.com/in/soukaina-mourabit-253a33240/recent-activity/all/',
      techs: 'FullStack renting website using ReactJs TailwindCSS Laravel Mysql'
    }
  ];

 

  return (
    <div className='h-[63rem] md:h-[45rem] mt-5 p-6 animate-showUp md:mt-0 lg:h-[30rem] lg:mt-[-4rem]' id='Portfolio'>
      <h2 className='text-center text-[25px] font-bold mb-6 bg-gradient-to-r from-green-medium from-10% to-green-light to-60% text-transparent bg-clip-text '>Projects</h2>
      <div className='lg:flex lg:justify-center'>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:place lg:w-[59rem]'>
          {websites.map((e, i) => (
            <div key={e} className='bg-gray-300 rounded-lg overflow-hidden shadow-lg'>
              <img className='w-full h-48 ' src={`${i}.jpg`} alt='' />
              <div className='mt-4 p-2  rounded-lg animate-showUp'>
                {/* Content to be displayed when Tools button is clicked */}
                <p className='text-gray-800 font-semibold lg:text-[21px] ml-3'>
                  {websites[i].techs}
                </p>
              </div>
              <div className='p-4'>
                <a
                  href={e.link}
                  rel="noreferrer"
                  className='text-white bg-green-light  border border-gray-200 focus:ring-4 focus:outline-none
                    focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-1.5 text-center block w-full'
                  target="_blank"
                >
                  <div className="flex items-center justify-center">
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
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
