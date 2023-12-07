// ProjectSingle.jsx
import React, { lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProjectSingle = () => {
  const { projectId } = useParams();

  // Dynamically import the corresponding project component based on project ID
  const ProjectComponent = lazy(() => import(`../ProjectComponents/project${projectId}`));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.6,
        delay: 0.15,
      }}
      className="container mx-auto mt-5 sm:mt-10"
    >
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectComponent />
      </Suspense>
    </motion.div>
  );
};

export default ProjectSingle;

