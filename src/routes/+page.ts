import type { PageLoad } from './$types';
// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;
export const load = (() => ({
	projects: [
		{
			title: 'events-kanban',
			description: 'This is a test',
			stack: ['Nuxt3', 'Tailwindcss', 'Typescript', 'Django', 'PostgreSQL'],
			demoUrl: 'https://events-kanban-frontend.vercel.app/',
			srcUrl: 'https://github.com/DANBOI/my-events-kanban',
			imgUrl: 'events-kanban.png',
			featured: true
		},
		{
			title: 'booking-site',
			description: 'This is a test',
			stack: ['Next13', 'Tailwindcss', 'Typescript', 'Prisma', 'MongoDB'],
			demoUrl: 'https://my-booking-site.vercel.app/',
			srcUrl: 'https://github.com/DANBOI/my-booking-site',
			imgUrl: 'booking-site.png',
			featured: true
		},
		{
			title: 'data-dashboard',
			description: 'This is a test',
			stack: ['React', 'Material UI', 'Typescript', 'Express.js', 'Mongoose'],
			demoUrl: 'https://data-dashboard-frontend.onrender.com',
			srcUrl: 'https://github.com/DANBOI/my-data-dashboard',
			imgUrl: 'data-dashboard.png',
			featured: true
		},
		{
			title: 'next-post-app',
			description: 'This is a test',
			stack: ['Next13', 'Tailwindcss', 'Javascript', 'Next-Auth', 'Mongoose'],
			demoUrl: 'https://next13-handson.vercel.app/',
			srcUrl: 'https://github.com/DANBOI/next13-handson',
			imgUrl: 'next13-handson.png',
			featured: false
		},
		{
			title: 'MERN-Auth-demo',
			description: 'This is a test',
			stack: ['React', 'Bootstrap5', 'ReduxToolkit', 'Express.js', 'Mongoose'],
			demoUrl: 'https://mern-practice-ntiy.onrender.com/',
			srcUrl: 'https://github.com/DANBOI/mern-practice',
			imgUrl: 'mern-practice.png',
			featured: false
		},
		{
			title: 'mui5-react-front',
			description: 'This is a test',
			stack: ['React', 'Material UI', 'Javascript'],
			demoUrl: 'https://mui5-react-app.vercel.app/',
			srcUrl: 'https://github.com/DANBOI/mui5-react-app',
			imgUrl: 'mui5-react-app.png',
			featured: false
		},
		{
			title: 'static landing page',
			description: 'This is a test',
			stack: ['Tailwindcss', 'HTML5'],
			demoUrl: 'https://danboi.github.io/tailwind-landing-page/',
			srcUrl: 'https://github.com/DANBOI/tailwind-landing-page',
			imgUrl: 'tailwind-landing-page.png',
			featured: false
		},
		{
			title: 'Test8',
			description: 'This is a test',
			stack: ['Bootstrap5', 'HTML5'],
			demoUrl: 'https://danboi.github.io/bootstrap5-practice/',
			srcUrl: 'https://github.com/DANBOI/bootstrap5-practice',
			imgUrl: 'bootstrap5-practice.png',
			featured: false
		},
		{
			title: 'node-RestApi',
			description: 'This is a test',
			stack: ['Express.js', 'Typescript', 'Mongoose'],
			demoUrl: '',
			srcUrl: 'https://github.com/DANBOI/node-RestApi',
			imgUrl: 'placeholder.webp',
			featured: false
		},
		{
			title: 'portfolio-site',
			description: 'This is a test',
			stack: ['sveltekit', 'Typescript', 'CSS3'],
			demoUrl: '',
			srcUrl: 'https://github.com/DANBOI/my-portfolio-site',
			imgUrl: 'portfolio-site.png',
			featured: true
		}
	]
})) satisfies PageLoad;
