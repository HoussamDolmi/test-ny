// Import images
import Image1 from '../images/ColorBox/ColorBox 2.jpg';
import Image2 from '../images/ColorBox/ColorBox 4.jpg';
import Image3 from '../images/ColorBox/ColorBox 3.jpg';
import Image4 from '../images/Healthy Bites Mobile/main.jpg';
import Image5 from '../images/Healthy Bites Website/responsive.jpg';
import Image6 from '../images/E-Gotex/E-gotex presentation.jpg';
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
		title: 'ColorBOX',
			publishDate: 'Dec 10, 2022',
			tags: 'Branding',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'ColorBOX',
			img: Image1,
		},
		{
			id: 2,
			title: 'ColorBOX',
			img: Image2,
		},
		{
			id: 3,
			title: 'ColorBOX',
			img: Image3,
		},
	],
	ProjectInfo: {
		ClientHeading: 'About Client',
		CompanyInfo: [
			{
				id: 1,
				title: 'Name',
				details: 'ColorBOX',
			},
			{
				id: 2,
				title: 'Services',
				details: 'Branding and Graphic Design ',
			},
			
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'To establish ColorBOX as the premier electronic printing solution, recognized for cutting-edge technology, exceptional print quality, and environmental sustainability. Our objective is to consistently exceed client expectations, offering versatile printing services that cater to diverse industries while maintaining a commitment to eco-friendly practices, setting new standards in the electronic printing landscape.',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'Adobe Photoshop',
					'Adobe Illustrator',
                    'PowerPoint',
                    
					
				],
			},
		],
		ProjectDetailsHeading: 'Challenge',
		ProjectDetails: [
			{
				id: 1,
				details:
					'As ColorBOX strives to solidify its position as a leader in electronic printing, a key challenge lies in maintaining a delicate balance between innovation and consistency. The company faces the dynamic landscape of technological advancements, requiring a commitment to staying at the forefront of emerging trends in electronic printing. This challenge involves continuous investment in research and development to integrate the latest technologies, ensuring that ColorBOX remains a trailblazer in the industry.',
			},
			{
				id: 2,
				details:
					'Another facet of the challenge involves the intricate dance between customization and scalability. ColorBOX must navigate the diverse needs of clients across different industries, offering personalized printing solutions while maintaining the efficiency and scalability required for large-scale projects. Achieving this balance is essential to meet the unique demands of each client without compromising on the speed and reliability that have become synonymous with the ColorBOX brand.',
			},
			{
				id: 3,
				details:
					'Moreover, in an era of heightened environmental consciousness, ColorBOX faces the challenge of aligning its printing processes with sustainable practices. Striking a harmony between delivering top-tier print quality and adopting eco-friendly materials and processes is a critical challenge. Successfully integrating green initiatives into the core of operations is not only a market differentiator but also a testament to ColorBOX`s commitment to corporate social responsibility.',
			},
			{
				id: 4,
				details:
					'Lastly, as ColorBOX seeks to expand its client base and geographical reach, the challenge lies in effective marketing and communication. Articulating the unique value proposition of ColorBOX and building a strong brand presence in new markets require a strategic approach. Navigating cultural nuances and market-specific demands will be integral to successfully establishing ColorBOX as the go-to electronic printing solution globally.',
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
		],
	},
};
