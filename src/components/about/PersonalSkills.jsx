import React from 'react';

const PersonalSkills = () => {
  const softSkills = [
    'Communication',
    'Teamwork',
    'Adaptability',
    'Empathy',
    'Creativity',
    'Collaboration',
    // Add more soft skills as needed
  ];

  const hardSkills = [
    'Coding',
    'Design',
    'Wireframing',
    'Research',
    'Prototyping',
    'Graphic Design',
    // Add more hard skills as needed
  ];

  return (
    <div className="text-center mt-20">
      <h2 className="text-2xl font-bold dark:text-ternary-light dark:hover:text-primary-light">Personal Skills</h2>
      <div className="flex flex-wrap justify-around mt-8">
        <div className="w-full md:w-1/2 lg:w-1/2">
          <h2 className="text-xl font-bold mb-4 ml-2 dark:text-ternary-light dark:hover:text-primary-light">Soft Skills</h2>
          <div className="flex flex-wrap justify-center">
            {softSkills.map((skill, index) => (
              <div key={index} className="rounded-full overflow-hidden shadow-lg m-2 p-3 w-32 md:w-40 lg:w-34 dark:text-ternary-light dark:hover:text-primary-light hover:text-white hover:bg-orange-500 cursor-pointer">
                <h3 className="mb-1 text-md">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2">
          <h2 className="text-xl font-bold mb-4 ml-2 dark:text-ternary-light dark:hover:text-primary-light">Hard Skills</h2>
          <div className="flex flex-wrap justify-center">
            {hardSkills.map((skill, index) => (
              <div key={index} className="rounded-full overflow-hidden text-black shadow-lg m-2 p-3 w-32 md:w-40 lg:w-34 dark:text-ternary-light dark:hover:text-primary-light hover:text-white hover:bg-orange-500 text-white cursor-pointer">
                <h3 className="mb-1 text-md">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalSkills;

