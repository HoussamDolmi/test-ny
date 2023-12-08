import ProjectGallery from '../components/project1/ProjectGallery';
import ProjectHeader from '../components/project1/ProjectHeader';
import ProjectInfo from '../components/project1/ProjectInfo';
import ProjectRelatedProjects from '../components/project1/ProjectRelatedProjects';
import { SingleProjectProvider } from '../context/SingleProjectContext';
import { motion } from 'framer-motion';
import video from '../images/Healthy Bites Mobile/Healthy Bites Video.mp4';

const ProjectSingle = () => {
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
			
			<SingleProjectProvider>
				<ProjectHeader />
				<ProjectGallery />
				<ProjectInfo />
				<div className="video-container">
          <video
            src={video}
            controls
            className="w-full"
          >
            Your browser does not support the video tag.
          </video>
		  </div>
				<ProjectRelatedProjects />
			</SingleProjectProvider>
		</motion.div>
	);
};

export default ProjectSingle;