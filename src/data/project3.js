// Import images
import Image1 from '../images/E-Gotex/E-Gotex Main.jpg';
import Image2 from '../images/E-Gotex/E-gotex presentation 2.jpg';
import Image3 from '../images/E-Gotex/E-gotex presentation.jpg';
import Image4 from '../images/Healthy Bites Mobile/Healthy Bites 1.jpg';
import Image5 from '../images/Healthy Bites Website/laptop.jpg';
import Image6 from '../images/ColorBox/ColorBox 1.jpg';
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
		title: 'E-gotex Mobile App',
			publishDate: 'Nov 10, 2023',
			tags: 'UI/UX Design',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'E-Gotex App',
			img: Image1,
		},
		{
			id: 2,
			title: 'E-Gotex App',
			img: Image2,
		},
		{
			id: 3,
			title: 'E-Gotex App',
			img: Image3,
		},
	],
	ProjectInfo: {
		ClientHeading: 'About Client',
		CompanyInfo: [
			{
				id: 1,
				title: 'Name',
				details: 'E-Gotex Mobile App',
			},
			{
				id: 2,
				title: 'Services',
				details: 'UI and UX Design ',
			},
			{
				id: 3,
				title: 'User Experience',
				details: 'E-Gotex User Experience',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'The core objective of the E-gotex app is to revolutionize the online marketplace by providing a user-friendly platform specifically tailored for buying and selling used products at highly affordable prices. E-gotex aims to empower individuals to easily create their markets within the app, fostering a dynamic and diverse ecosystem where users can engage in sustainable consumption. By prioritizing accessibility and simplicity, the app seeks to redefine the second-hand marketplace, offering a seamless experience for both sellers and buyers and promoting the circular economy by extending the lifespan of products.',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'AdobeXD',
					'Adobe Photoshop',
					'Figma',
                    
					
				],
			},
		],
		ProjectDetailsHeading: 'Challenge',
		ProjectDetails: [
			{
				id: 1,
				details:
					'A significant challenge for the E-gotex app is establishing and maintaining user trust in the authenticity and quality of used products. Overcoming skepticism about second-hand purchases requires robust verification processes, clear communication of product conditions, and a reliable user rating system. Implementing transparent and secure transaction procedures will be crucial in building a trustworthy environment that encourages users to confidently participate in buying and selling within the app.',
			},
			{
				id: 2,
				details:
					'The E-gotex app`s objective to accommodate a wide range of used products introduces the challenge of efficiently managing diverse product categories. From electronics to fashion, furniture, and more, maintaining a well-organized and easily navigable marketplace demands a thoughtful categorization system and effective search functionalities. Balancing the breadth of available items with a user-friendly interface is essential to ensure that users can easily discover and explore the products they are interested in.',
			},
			{
				id: 3,
				details:
					'E-gotex`s mission to provide affordable products for everyone requires addressing accessibility challenges. Ensuring the app is user-friendly for individuals with varying technical proficiency is crucial. Additionally, catering to a diverse user base with different linguistic and cultural backgrounds necessitates thoughtful localization strategies. Striving for inclusivity in design and functionality will be vital to reaching a broad audience and fostering a sense of community within the app.',
			},
			{
				id: 4,
				details:
					'As the E-gotex app gains popularity and attracts a growing user base, scalability becomes a critical challenge. The platform must be robust enough to handle increased traffic, a growing number of listings, and expanding markets. Balancing scalability with maintaining a seamless and responsive user experience requires ongoing optimization and strategic planning. Ensuring that the app`s infrastructure can adapt to evolving demands and potential global expansion is key to the long-term success of E-gotex.',
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
				id: 4,
				title: 'ColorBOX',
				img: Image6,
			},
		],
	},
};
