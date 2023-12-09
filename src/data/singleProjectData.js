// Import images
import Image1 from '../images/Healthy Bites Mobile/Healthy Bites 1.jpg';
import Image2 from '../images/Healthy Bites Mobile/Healthy Bites 2.jpg';
import Image3 from '../images/Healthy Bites Mobile/main.jpg';
import Image4 from '../images/Healthy Bites Website/laptop.jpg';
import Image5 from '../images/E-Gotex/E-Gotex Main.jpg';
import Image6 from '../images/ColorBox/ColorBox 3.jpg';
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
		title: 'Healthy Bites Mobile App ',
			publishDate: 'Oct 01, 2023',
			tags: 'UI/UX Design',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Healthy Bites Mobile App',
			img: Image1,
		},
		{
			id: 2,
			title: 'Healthy Bites Mobile App',
			img: Image2,
		},
		{
			id: 3,
			title: 'Healthy Bites Mobile App',
			img: Image3,
		},
	],
	ProjectInfo: {
		ClientHeading: 'About Client',
		CompanyInfo: [
			{
				id: 1,
				title: 'Name',
				details: 'Healthy Bites',
			},
			{
				id: 2,
				title: 'Services',
				details: 'UI and Ux Design',
			},
			{
				id: 3,
				title: 'User Experience',
				details: 'Healthy Bites User Experience',
			},
			{
				id: 4,
				title: 'website',
				details: 'https://Healthy Bites.com',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'The objective of Healthy Bites is to revolutionize the city`s approach to healthy eating by providing a comprehensive and user-friendly solution. Through the mobile app and website, our goal is to make nutritious meals easily accessible to health-conscious individuals across various platforms, promoting a seamless and engaging experience for users. With a focus on responsive design, we aim to ensure inclusivity and adaptability to diverse user needs and device types.',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'AdobeXD',
					'Adobe Photoshop',
					'LottieFiles',
					'MapBox',
					'Canva',
				],
			},
		],
		ProjectDetailsHeading: 'Challenge',
		ProjectDetails: [
			{
				id: 1,
				details:
					'The health-conscious market is often saturated with various food-related apps and services.Healthy Bites faces the challenge of distinguishing itself from competitors and establishing a unique value proposition. Effective market research and targeted marketing strategies will be crucial in creating awareness and enticing users to choose Healthy Bites for their nutritional needs.',
			},
			{
				id: 2,
				details:
					'Encouraging users to adopt the Healthy Bites mobile app and website is a critical challenge. Overcoming the initial resistance to change and habituation to existing platforms requires a well-designed onboarding process, clear communication of benefits, and perhaps incentives to motivate users. Sustaining user engagement is equally vital, necessitating continuous updates, user feedback integration, and the development of features that keep users actively involved in their health journey.',
			},
			{
				id: 3,
				details:
					'While responsive design is fundamental to Healthy Bites, ensuring flawless adaptation across various devices poses technical challenges. The diversity of screen sizes and resolutions on mobiles, tablets, and desktops demands meticulous testing and optimization. Addressing potential issues such as slow loading times, compatibility with different browsers, and maintaining a consistent user interface will be essential to guarantee a positive and uniform experience for all users.',
			},
			{
				id: 4,
				details:
					'Building a community around Healthy Bites and garnering support are key challenges. Establishing partnerships with local health and wellness influencers, collaborating with nutritionists for curated meal plans, and actively participating in community events can help create a sense of belonging and trust. Additionally, implementing responsive customer support channels and gathering user testimonials will be crucial in building credibility and fostering a supportive community around the Healthy Bites initiative.',
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
				id: 2,
				title: 'Healthy Bites Webiste',
				img: Image4,
			},
			{
				id: 3,
				title: 'E-gotex',
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
