import type { PageLoad } from './$types';
// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;
export const load = (() => ({
	projects: [
		{
			title: 'Test1',
			description: 'This is a test',
			stack: ['Nextjs', 'Tailwindcss', 'Typescript', 'React'],
			demoUrl: 'https://test1.com',
			srcUrl: 'https://test1.com',
			imgUrl: 'work-mountains.webp',
			featured: true
		},
		{
			title: 'Test2',
			description: 'This is a test',
			stack: ['Nextjs', 'Tailwindcss', 'Typescript', 'React'],
			demoUrl: 'https://test2.com',
			srcUrl: 'https://test2.com',
			imgUrl: 'work-mountains.webp',
			featured: false
		},
		{
			title: 'Test3',
			description: 'This is a test',
			stack: ['Nuxtjs', 'Tailwindcss', 'Typescript', 'Vue'],
			demoUrl: 'https://test3.com',
			srcUrl: 'https://test3.com',
			imgUrl: 'work-mountains.webp',
			featured: true
		},
		{
			title: 'Test4',
			description: 'This is a test',
			stack: ['Nextjs', 'Tailwindcss', 'Typescript', 'React'],
			demoUrl: 'https://test4.com',
			srcUrl: 'https://test4.com',
			imgUrl: 'work-mountains.webp',
			featured: false
		},
		{
			title: 'Test5',
			description: 'This is a test',
			stack: ['Nextjs', 'Tailwindcss', 'Typescript', 'React'],
			demoUrl: 'https://test5.com',
			srcUrl: 'https://test5.com',
			imgUrl: 'work-mountains.webp',
			featured: false
		},
		{
			title: 'Test6',
			description: 'This is a test',
			stack: ['Nextjs', 'Tailwindcss', 'Typescript', 'React'],
			demoUrl: 'https://test6.com',
			srcUrl: 'https://test6.com',
			imgUrl: 'work-mountains.webp',
			featured: false
		},
		{
			title: 'Test7',
			description: 'This is a test',
			stack: ['sveltekit', 'Tailwindcss', 'Typescript', 'svelte'],
			demoUrl: 'https://test7.com',
			srcUrl: 'https://test7.com',
			imgUrl: 'work-mountains.webp',
			featured: true
		},
		{
			title: 'Test8',
			description: 'This is a test',
			stack: ['Nextjs', 'Tailwindcss', 'Typescript', 'React'],
			demoUrl: 'https://test8.com',
			srcUrl: 'https://test8.com',
			imgUrl: 'work-mountains.webp',
			featured: false
		},
		{
			title: 'Test9',
			description: 'This is a test',
			stack: ['Nextjs', 'Tailwindcss', 'Typescript', 'React'],
			demoUrl: 'https://test9.com',
			srcUrl: 'https://test9.com',
			imgUrl: 'work-mountains.webp',
			featured: false
		},
		{
			title: 'Test10',
			description: 'This is a test',
			stack: ['Nextjs', 'Tailwindcss', 'Typescript', 'React'],
			demoUrl: 'https://test10.com',
			srcUrl: 'https://test10.com',
			imgUrl: 'work-mountains.webpm',
			featured: false
		}
	]
})) satisfies PageLoad;
