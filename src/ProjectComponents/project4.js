import ProjectGallery from '../components/project4/ProjectGallery';
import ProjectHeader from '../components/project4/ProjectHeader';
import ProjectInfo from '../components/project4/ProjectInfo';
import ProjectRelatedProjects from '../components/project4/ProjectRelatedProjects';
import { SingleProjectProvider } from '../context/project4';
import { motion } from 'framer-motion';
import { FiArrowDownCircle } from 'react-icons/fi';

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
                <a
						download="ColorBOX Presentation.pptx"
						href="/files/ColorBOX Presentation.pptx"
						className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-orange-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-orange-50 focus:ring-1 focus:ring-orange-900 hover:bg-orange-500 text-gray-500 hover:text-white duration-500"
						aria-label="Download Presentation"
					>
						<FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
						<span className="text-sm sm:text-lg font-general-medium duration-100">
							Presentation
						</span>
					</a>
				<ProjectRelatedProjects />
			</SingleProjectProvider>
		</motion.div>
	);
};

export default ProjectSingle;