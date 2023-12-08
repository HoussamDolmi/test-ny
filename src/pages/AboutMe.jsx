import AboutMeBio from '../components/about/AboutMeBio';
import PersonalSkills from '../components/about/PersonalSkills';
import AboutClients from '../components/about/programs';
import { AboutMeProvider } from '../context/AboutMeContext';
import { motion } from 'framer-motion';

const About = () => {
	return (
		<AboutMeProvider>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<AboutMeBio />
			</motion.div>

			{/** Counter without paddings */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
			>
				
			</motion.div>
			<AboutClients />
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
				
			>

				<PersonalSkills />
			</motion.div>
			
		</AboutMeProvider>
	);
};

export default About;
