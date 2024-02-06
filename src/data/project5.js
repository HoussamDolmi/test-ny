// Import images
import Image1 from '../images/Lingua Minds Academy/isolated_tablet_laptop_and_smartphone_composition.png';
import Image2 from '../images/Lingua Minds Academy/OWINHM1 2.png';
import Image3 from '../images/Lingua Minds Academy/jeune-femme-affaires-ayant-appel-video 2.png';
import Image4 from '../images/Healthy Bites Mobile/main.jpg';
import Image5 from '../images/Healthy Bites Website/responsive.jpg';
import Image6 from '../images/E-Gotex/E-gotex presentation.jpg';
import Image7 from '../images/ColorBox/ColorBox 1.jpg';
// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const singleProjectData = {
	ProjectHeader: {
		title: 'Lingua Minds Academy',
			publishDate: 'Feb 02, 2024',
			tags: 'Ux/Ui Design',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Lingua Minds Academy',
			img: Image1,
		},
		{
			id: 2,
			title: 'Lingua Minds Academy',
			img: Image2,
		},
		{
			id: 3,
			title: 'Lingua Minds Academy',
			img: Image3,
		},
	],
	ProjectInfo: {
		ClientHeading: 'About Client',
		CompanyInfo: [
			{
				id: 1,
				title: 'Name',
				details: 'Lingua Minds Academy',
			},
			{
				id: 2,
				title: 'Services',
				details: 'UX and UI Design ',
			},
			{
				id: 3,
				title: 'User Experience for Laptop',
				details: 'User Experience for Laptop',
				href: 'https://xd.adobe.com/view/1f0eb35a-ca48-4a04-9dc2-ad577ebc92f4-4a5d/?fullscreen'
			},
			{
				id: 4,
				title: 'User Experience for Tablette',
				details: 'Lingua Minds Academy Tablette',
				href: 'https://xd.adobe.com/view/fc8b511d-ab52-4dc2-9790-a959000399b4-a9d8/'
			},
			{
				id: 5,
				title: 'User Experience for Phone',
				details: 'Lingua Minds Academy Phone',
				href: 'https://xd.adobe.com/view/fd0972f6-bef9-42fd-bbea-21346874e94e-a85a/?fullscreen'
			},
			
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'The objective of Lingua Minds Academy is to revolutionize the landscape of language learning by providing a comprehensive, personalized, and engaging platform that empowers users to master new languages effectively. Through innovative features such as gamification, community building, personalized learning paths, accredited certifications, and a robust tutor development program, our aim is to create an ecosystem where learners can progress from beginners to proficient speakers while enjoying a supportive and dynamic learning experience. By offering recognized certifications, empowering tutors to grow professionally, and enabling users to choose their tutors based on individual preferences, Lingua Minds Academy seeks to become the premier destination for language education, catering to diverse learning styles and empowering learners to achieve fluency and cultural proficiency in their target languages.',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'Adobe Xd',
					'Adobe Photoshop',
                    'LottleFiles',
                    
					
				],
			},
		],
		ProjectDetailsHeading: 'Challenge',
		ProjectDetails: [
			{
				id: 1,
				details:
					'Establish a robust certification system within Lingua Minds Academy to provide users with recognized credentials upon completion of language courses. Collaborate with language proficiency testing organizations to ensure that the certifications align with international standards. This not only adds credibility to the platform but also gives learners a tangible achievement to showcase their language skills to potential employers or academic institutions.',
			},
			{
				id: 2,
				details:
					'Implement a comprehensive tutor development program on Lingua Minds Academy, allowing individuals to progress from novice to expert educators. Create a structured curriculum for tutors, including pedagogical training, language-specific teaching methodologies, and effective communication strategies. By investing in the professional growth of tutors, the platform ensures high-quality language instruction and fosters a community of skilled language educators.',
			},
			{
				id: 3,
				details:
					'Introduce a feature that allows users to choose their tutors based on individual preferences and learning styles. Implement a detailed profile system for tutors, showcasing their expertise, teaching methods, and student reviews. This empowers learners to make informed decisions when selecting a tutor, creating a personalized and effective learning experience that caters to their specific needs and goals.',
			},
			{
				id: 4,
				details:
					'Create a structured pathway for tutors, guiding them from introductory levels to advanced teaching roles. Implement a tiered system that rewards tutors for their experience, student success rates, and professional development achievements. This not only motivates tutors to excel in their roles but also ensures a consistent and high-quality learning experience for Lingua Minds Academy users at all levels.',
			},
		],
		SocialSharingHeading: 'Share This',
		SocialSharing: [
			{
				id: 1,
				name: 'Twitter',
				icon: <FiTwitter />,
				url: 'https://twitter.com/dolmi37',
			},
			{
				id: 2,
				name: 'Instagram',
				icon: <FiInstagram />,
				url: 'https://www.instagram.com/dolmi_houssam/',
			},
			{
				id: 3,
				name: 'Facebook',
				icon: <FiFacebook />,
				url: 'https://www.facebook.com/profile.php?id=100012247361454',
			},
			{
				id: 4,
				name: 'LinkedIn',
				icon: <FiLinkedin />,
				url: 'https://www.linkedin.com/in/dolmi-houssam-07565619b/',
			},
			{
				id: 5,
				name: 'Youtube',
				icon: <FiYoutube />,
				url: 'https://www.youtube.com/',
			},
		],
	},
	RelatedProject: {
		title: 'Related Projects',
		Projects: [
			{
				id: 1,
				title: 'Healthy Bites Mobile',
				img: Image4,
			},
			{
				id: 2,
				title: 'Healthy Bites Website',
				img: Image5,
			},
			{
				id: 3,
				title: 'E-Gotex',
				img: Image6,
			},
				{
				id: 4,
				title: 'ColorBox',
				img: Image7,
			},
		],
	},
};
