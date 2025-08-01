const TRIANGLE =
	'M27.3398 5C31.1888 -1.66667 40.8113 -1.66667 44.6603 5L70.641 50C74.49 56.6667 69.6788 65 61.9808 65H10.0193C2.32125 65 -2.49 56.6667 1.359 50L27.3398 5Z';

const PENTAGON =
	'M37.0632 3.01785C42.4657 -0.620091 49.5343 -0.620097 54.9368 3.01784L70.3931 13.4258L85.0679 24.9094C90.1972 28.9233 92.3816 35.6459 90.5911 41.9081L85.4688 59.8242L79.0821 77.3294C76.8497 83.4481 71.1311 87.6029 64.6221 87.8352L46 88.5L27.378 87.8352C20.8689 87.6029 15.1503 83.4481 12.9179 77.3294L6.53116 59.8242L1.40887 41.9082C-0.381547 35.6459 1.80275 28.9233 6.9321 24.9094L21.6069 13.4258L37.0632 3.01785Z';

const SQUARE =
	'M40.8076 9.1924C45.8844 4.1156 54.1156 4.1156 59.1924 9.1924L90.8076 40.8076C95.8844 45.8844 95.8844 54.1156 90.8076 59.1924L59.1924 90.8076C54.1156 95.8844 45.8844 95.8844 40.8076 90.8076L9.1924 59.1924C4.1156 54.1156 4.1156 45.8844 9.1924 40.8076L40.8076 9.1924Z';

const FOUR_WINGED_STAR =
	'M39.7907 16.5280C44.4800 8.9364 55.5200 8.9364 60.2094 16.5280L67.6016 28.4954C68.5816 30.0820 69.9180 31.4184 71.5046 32.3984L83.4720 39.7907C91.0636 44.4800 91.0636 55.5200 83.4720 60.2093L71.5046 67.6015C69.9180 68.5816 68.5816 69.9180 67.6016 71.5046L60.2094 83.4719C55.5200 91.0636 44.4800 91.0636 39.7907 83.4719L32.3985 71.5046C31.4184 69.9180 30.0820 68.5816 28.4954 67.6015L16.5280 60.2093C8.9364 55.5200 8.9364 44.4800 16.5280 39.7907L28.4954 32.3984C30.0820 31.4184 31.4184 30.0820 32.3985 28.4954L39.7907 16.5280Z';

const TWELVE_WINGED_STAR =
	'M43.8869 8.6778C46.8656 4.4495 53.1344 4.4495 56.1131 8.6778C58.1937 11.6314 62.0884 12.6749 65.3670 11.1574C70.0608 8.9849 75.4898 12.1193 75.9552 17.2705C76.2803 20.8686 79.1314 23.7198 82.7295 24.0449C87.8807 24.5103 91.0151 29.9393 88.8426 34.6330C87.3251 37.9116 88.3687 41.8063 91.3222 43.8870C95.5505 46.8656 95.5505 53.1344 91.3222 56.1131C88.3687 58.1937 87.3251 62.0884 88.8426 65.3670C91.0151 70.0608 87.8807 75.4898 82.7295 75.9552C79.1314 76.2803 76.2803 79.1314 75.9552 82.7295C75.4898 87.8807 70.0608 91.0151 65.3670 88.8426C62.0884 87.3251 58.1937 88.3687 56.1131 91.3222C53.1344 95.5505 46.8656 95.5505 43.8870 91.3222C41.8063 88.3687 37.9116 87.3251 34.6330 88.8426C29.9393 91.0151 24.5103 87.8807 24.0449 82.7295C23.7198 79.1314 20.8686 76.2803 17.2705 75.9552C12.1193 75.4898 8.9849 70.0608 11.1574 65.3670C12.6749 62.0884 11.6314 58.1937 8.6778 56.1131C4.4495 53.1344 4.4495 46.8656 8.6778 43.8869C11.6314 41.8063 12.6749 37.9116 11.1574 34.6330C8.9849 29.9393 12.1193 24.5103 17.2705 24.0449C20.8686 23.7198 23.7198 20.8686 24.0449 17.2705C24.5103 12.1193 29.9393 8.9849 34.6330 11.1574C37.9116 12.6749 41.8063 11.6314 43.8869 8.6778Z';

const EIGHT_WINGED_STAR =
	'M45.0222 7.3969C47.4001 3.8634 52.5999 3.8634 54.9778 7.3969L60.5976 15.7477C61.9444 17.7490 64.3589 18.7492 66.7265 18.2864L76.6051 16.3552C80.7852 15.5381 84.4620 19.2149 83.6448 23.3949L81.7137 33.2735C81.2508 35.6411 82.2510 38.0556 84.2524 39.4025L92.6031 45.0222C96.1367 47.4001 96.1367 52.5999 92.6031 54.9778L84.2524 60.5975C82.2510 61.9444 81.2508 64.3589 81.7137 66.7265L83.6448 76.6051C84.4620 80.7851 80.7852 84.4619 76.6051 83.6448L66.7265 81.7136C64.3589 81.2508 61.9444 82.2509 60.5976 84.2523L54.9778 92.6031C52.5999 96.1366 47.4002 96.1366 45.0222 92.6031L39.4025 84.2523C38.0556 82.2509 35.6411 81.2508 33.2736 81.7136L23.3949 83.6448C19.2149 84.4619 15.5381 80.7851 16.3552 76.6051L18.2864 66.7265C18.7492 64.3589 17.7491 61.9444 15.7477 60.5975L7.3969 54.9778C3.8633 52.5999 3.8633 47.4001 7.3969 45.0222L15.7477 39.4025C17.7491 38.0556 18.7492 35.6411 18.2864 33.2735L16.3552 23.3949C15.5381 19.2149 19.2149 15.5381 23.3949 16.3552L33.2736 18.2863C35.6411 18.7492 38.0556 17.7491 39.4025 15.7477L45.0222 7.3969Z';

const POINTED_STAR =
	'M50.0000 0.0000L52.9166 35.3373L69.1342 3.8060L58.3058 37.5695L85.3553 14.6447L62.4305 41.6942L96.1940 30.8658L64.6627 47.0834L100.0000 50.0000L64.6627 52.9166L96.1940 69.1342L62.4305 58.3058L85.3553 85.3553L58.3058 62.4305L69.1342 96.1940L52.9166 64.6627L50.0000 100.0000L47.0834 64.6627L30.8658 96.1940L41.6942 62.4305L14.6447 85.3553L37.5695 58.3058L3.8060 69.1342L35.3373 52.9166L0.0000 50.0000L35.3373 47.0834L3.8060 30.8658L37.5695 41.6942L14.6447 14.6447L41.6942 37.5695L30.8658 3.8060L47.0834 35.3373L50.0000 0.0000Z';

const projects = [
	{
		name: 'diminshed Java compiler',
		description:
			'a fully functional for a mini-Java language, written from scratch using C. supports functions, classes, inheritance, and more.',
		status: 'featured',
		date: 'Jan - Apr 2025',
		category: 'systems',
		year: 2025,
	},
	{
		name: 'fingerprint generator',
		description:
			'a fingerprint generator based on Sfinge to generate fingerprints via a differentiable process, implemented using PyTorch, with a focus on realism.',
		date: 'May 2025 - Present',
		status: 'featured',
		category: 'ML',
		year: 2025,
	},
	{
		name: 'Resume Optim-AI-zer',
		description:
			'a local Ollama-powered resume optimization tool that analyzes resumes and job descriptions for maximum tailoring power, with a focus on ATS compatibility.',
		date: 'Jan 2025 - Present',
		status: 'featured',
		category: 'ML',
		year: 2025,
	},
	{
		name: 'Lazy3D',
		description:
			'a 3D model generator that uses ControlNet and Gemini Flash to generate 3D render images from user sketches, and TRELLIS for GLTF model generation.',
		status: 'featured',
		date: 'Apr 2025',
		category: 'ML',
		year: 2025,
	},
	{
		name: 'tldvuwen',
		fullName: 'the last data structures visualizer you will ever need',
		image: '/images/dsa-viz/dsa-viz-astar.gif',
		description:
			'Vite + raw data structures knowledge. a data structures visualizer that is actually interactive, and a pathfinder that I am especially proud of.',
		status: 'featured',
		link: 'https://visual-dsa-theta.vercel.app/',
		date: '01/2024 - present',
		imageAlt: 'a GIF of the A-star pathfinding algorithm on a grid',
		category: 'web',
		year: 2024,
	},
	{
		name: 'LegAI',
		fullName: 'LegAI',
		image: 'N/A',
		description:
			'an AI retrieval system for legal documents. per-case information retrieval with Chroma and Postgres, complete with a NextJS frontend. runner up for Morgan & Morgan AI challenge.',
		status: 'featured',
		link: '',
		date: '10/2023',
		category: 'ML',
		year: 2023,
	},
	{
		name: 'Cash Clams',
		fullName: 'Cash Clams',
		image: '/images/cash-clams/cash-clams.png',
		description:
			'ShellHacks hackathon submission. a finance literacy app that allows user to pick a theme, and develop 10 section courses on that very theme to learn finance concepts. includes a quiz module.',
		status: 'legacy',
		link: 'https://github.com/therealozp/cash-clams',
		date: '09/2023',
		imageAlt: 'a screenshot of the home page of the Cash Clams app.',
		category: 'web',
		year: 2023,
	},
	{
		name: 'ARIS',
		fullName: 'ARIS AR Toolkit',
		image: 'N/A',
		description:
			"a custom 3D editor for 3D models using ThreeJS that allows for scene editing. AR viewer created with Google's model-viewer.",
		status: 'featured',
		link: '',
		date: '06/2023 - present',
		category: 'web',
		year: 2023,
	},
	{
		name: 'ChanceMap',
		fullName: 'ChanceMap',
		image: '/images/chancemap/chancemap.png',
		description:
			'a social media for college students and high school students who are looking for extracurricular opportunities. 1000+ users in first iteration.',
		status: 'legacy',
		link: 'https://chancemap.com/',
		date: '06/2021 - 06/2022',
		imageAlt: 'a screenshot of the home page of the ChanceMap app.',
		category: 'web',
		year: 2021,
	},
	{
		name: 'Cureator',
		fullName: 'Cureator',
		image: '/images/cureator/Cureator.png',
		description:
			'a medicine and pharmacy finder for the Vietnamese market. includes local and international medicine, breakdowns of causes and common symptoms. made as a PWA with NextJS and custom backend with GraphQL and Go.',
		status: 'legacy',
		link: 'https://cureator.vercel.app/',
		date: '06/2021 - 10/2021',
		imageAlt: 'a design layout of multiple different screens of Cureator.',
		category: 'web',
		year: 2021,
	},
	{
		name: 'Excellaca',
		fullName: 'Excel Academy',
		image: '/images/excellaca/excellaca-mockup.png',
		description:
			'a learning platform that is made by students, for students. includes video courses, a discussion community, and other nifty features. 100+ weekly users when active.',
		status: 'legacy',
		link: 'https://excellaca.org',
		date: '06/2021 - 10/2022',
		imageAlt: 'a preview of the Excellaca website.',
		category: 'web',
		year: 2021,
	},
	{
		name: 'VSPACE Ed',
		fullName: 'VSPACE Education',
		image: '/images/vspace/vspace-img.png',
		description:
			'marketing website made for an educational institution that provides English courses to students of all abilities. 5000+ visits in first month launch of website. Framer Animations, Figma, and NextJS.',
		status: 'legacy',
		link: 'https://vspace.org.vn',
		date: '06/2021 - 10/2021',
		imageAlt: 'a snippet of the VSPACE marketing website.',
		category: 'web',
		year: 2021,
	},
	{
		name: 'Lexi',
		fullName: 'Lexi',
		image: '/images/lexi/landing.png',
		description:
			'a quiz app that helps you learn English vocabulary. 1000+ users in first month of launch.',
		status: 'legacy',
		link: 'https://lexi.vercel.app',
		date: '01/2021',
		imageAlt: 'a screenshot of the landing page of the Lexi app.',
		category: 'web',
		year: 2021,
	},
	{
		name: 'canvas notification API',
		description:
			'A simple API reminds you of upcoming due dates that sends email notificatins',
		year: '2023',
		status: 'legacy',
		tags: 'api',
		href: 'https://github.com/therealozp/canvas-notis-api',
	},
	{
		name: 'bank statement parser',
		description:
			'A simple Python script that parses bank statements for ease of management',
		year: '2023',
		status: 'legacy',
		tags: 'python',
		href: 'https://github.com/therealozp/statements_parser',
	},
];

export {
	TRIANGLE,
	PENTAGON,
	SQUARE,
	FOUR_WINGED_STAR,
	TWELVE_WINGED_STAR,
	EIGHT_WINGED_STAR,
	POINTED_STAR,
	projects,
};
