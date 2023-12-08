import React from 'react';
const MainComponent = () => {
  const programsAndSoftwares = [
    { title: 'AdobeXd' },
    { title: 'Adobe Photoshop' },
    { title: 'Figma' },
    { title: 'Canva' },
    { title: 'ReactJs' },
    { title: 'Tailwind CSS' },
    { title: 'Html' },
    { title: 'CSS' },
    { title: 'Java Script' },
    { title: 'Docker' },
    { title: 'NodeJs' },
    { title: 'ExpressJs' },
    { title: '& More' },
    // Add more programs and softwares as needed
  ];

  return (
    <div>
      <div className="text-center mt-8">
        <h2 className="text-2xl font-bold dark:text-ternary-light dark:hover:text-primary-light">Programs & Softwares</h2>
        <div className="flex flex-wrap justify-center">
          {programsAndSoftwares.map((item, index) => (
            <div key={index} className="rounded-full overflow-hidden shadow-lg m-4 p-4 w-48 md:w-64 lg:w-48 dark:text-ternary-light dark:hover:text-primary-light hover:text-white hover:bg-orange-500  cursor-pointer">
              <h3 className="text-md  mb-2">{item.title}</h3>
              {/* Additional information about the program/software if needed */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainComponent;

