// Import images
import Image1 from '../images/Healthy Bites Website/laptop.jpg';
import Image2 from '../images/Healthy Bites Website/laptop 2.jpg';
import Image3 from '../images/Healthy Bites Website/responsive.jpg';
import Image4 from '../images/E-Gotex/E-gotex presentation 2.jpg';
import Image5 from '../images/Healthy Bites Mobile/Healthy Bites 2.jpg';
import Image6 from '../images/ColorBox/ColorBox 2.jpg';
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
		title: 'Healthy Bistes Website',
			publishDate: 'Sep 10, 2023',
			tags: 'UI/UX Design/Frontend',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Healthy Bistes Website',
			img: Image1,
		},
		{
			id: 2,
			title: 'Healthy Bistes Website',
			img: Image2,
		},
		{
			id: 3,
			title: 'Healthy Bistes Website',
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
				details: 'UI/UX Design and Frontend',
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
			'The primary objective of the Healthy Bites website is to serve as a central hub for health-conscious individuals, offering an immersive and informative experience. Through a responsive design, the website aims to seamlessly guide visitors towards downloading the Healthy Bites mobile app. Beyond app acquisition, the website aspires to educate users about the initiative, showcase partnerships with local restaurants, and provide valuable insights into the project`s mission and values. By leveraging HTML, CSS, JavaScript, React.js, and Tailwind CSS, and complemented by meticulous UI/UX design in Adobe XD, the website seeks to offer an aesthetically pleasing and user-friendly interface that reflects the essence of Healthy Bites.',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'AdobeXD',
					'Adobe Photoshop',
					'React Js',
					'Tailwind Css',
                    'Html',
                    'Css',
                    'Java Script',
                    'Canva',
				],
			},
		],
		ProjectDetailsHeading: 'Challenge',
		ProjectDetails: [
			{
				id: 1,
				details:
					'The Healthy Bites website faces the challenge of optimizing user onboarding and navigation to seamlessly guide visitors through the diverse offerings. Clear pathways need to be established to educate users about the initiative, showcase partnerships with restaurants, and encourage app downloads. Striking the right balance between informative content and intuitive navigation, especially given the variety of information available, requires a strategic approach to keep users engaged and informed without overwhelming them.',
			},
			{
				id: 2,
				details:
					'Ensuring a consistent and visually appealing experience across various browsers and devices is a crucial challenge for the Healthy Bites website. The use of React.js and Tailwind CSS adds complexity and sophistication to the site`s design, but it also necessitates meticulous testing to guarantee seamless functionality on different platforms. Achieving true responsive design is essential to accommodate the myriad of screen sizes and resolutions, ensuring that visitors can access the website effortlessly and explore its features, regardless of the device they are using',
			},
			{
				id: 3,
				details:
					'The Healthy Bites website aims to engage visitors with interactive elements, such as restaurant profiles, nutritional information, and the app download process. The challenge lies in integrating these features seamlessly, providing a dynamic and engaging experience without sacrificing performance. Implementing interactive components with JavaScript requires careful optimization to maintain fast loading times and a smooth user experience. The website`s success hinges on finding the right balance between interactivity and performance to captivate and inform visitors effectively.',
			},
			{
				id: 4,
				details:
					'Keeping the Healthy Bites website up-to-date with the latest information about partner restaurants, nutritional offerings, and the mobile app requires an effective maintenance strategy. Regular updates to content and features must be executed without disrupting the user experience. Managing content changes and ensuring that the website remains a reliable source of information demands a streamlined process for maintenance. Additionally, coordinating updates with changes in the app`s features and offerings adds an extra layer of complexity, requiring careful planning to maintain a cohesive and synchronized digital presence for Healthy Bites.',
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
				id: 3,
				title: 'E-Gotex App',
				img: Image4,
			},
			{
				id: 1,
				title: 'Healthy Bites Mobile',
				img: Image5,
			},
			{
				id: 4,
				title: 'ColorBox',
				img: Image6,
			},
			
		],
	},
};
