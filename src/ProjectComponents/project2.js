import ProjectGallery from '../components/project2/ProjectGallery';
import ProjectHeader from '../components/project2/ProjectHeader';
import ProjectInfo from '../components/project2/ProjectInfo';
import ProjectRelatedProjects from '../components/project2/ProjectRelatedProjects';
import { SingleProjectProvider } from '../context/project2';
import { motion } from 'framer-motion';
import video from '../images/Healthy Bites Website/Healthy Bites Video 2.mp4';

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
            
			muted
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