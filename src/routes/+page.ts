import type { PageLoad } from './$types';
// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;
export const load = (() => ({
	projects: [
		{
			title: 'イベントかんばん',
			description:
				'ユーザーはイベント情報を検索したり、投稿することができます。ユーザーログイン、サインアップ、およびイベント検索機能に加えて、イベントの作成、更新、削除も可能です。直感的なデザインと安全なユーザー認証機能により、誰でもコミュニティとつながり、エキサイティングなイベントを発見することが簡単になります。',
			stack: ['Nuxt3', 'Tailwindcss', 'Typescript', 'Django', 'PostgreSQL'],
			demoUrl: 'https://events-kanban-frontend.vercel.app/',
			srcUrl: 'https://github.com/DANBOI/my-events-kanban',
			imgUrl: 'events-kanban.png',
			featured: true
		},
		{
			title: 'レンタル・予約サイト',
			description:
				'お気に入りの目的地を検索してリストに追加したり、滞在先を予約したり、自分の物件を貸し出したりすることができます。高度なフィルター検索機能により好みを調整する事が可能。また、ソーシャルアカウント登録や場所の地図表示とカレンダー機能も充実しており、使いやすいユーザーエクスペリエンスを提供します。',
			stack: ['Next13', 'Tailwindcss', 'Typescript', 'Prisma', 'MongoDB'],
			demoUrl: 'https://my-booking-site.vercel.app/',
			srcUrl: 'https://github.com/DANBOI/my-booking-site',
			imgUrl: 'booking-site.png',
			featured: true
		},
		{
			title: 'データ・ダッシュボード',
			description:
				'フィクションのトレーディング会社向けに設計されたデータダッシュボードは、トランザクションデータテーブルやさまざまなチャートが含まれ、データの可視化によりユーザーの意思決定をサポートしていきます。また、現在のデータに基づいて、来年の売上予測を行うことができるラインチャートも搭載されており、計画を立てる上でも便利なツールとなります。',
			stack: ['React', 'Material UI', 'Typescript', 'Express.js', 'Mongoose'],
			demoUrl: 'https://data-dashboard-frontend.onrender.com',
			srcUrl: 'https://github.com/DANBOI/my-data-dashboard',
			imgUrl: 'data-dashboard.png',
			hasRemarks: true,
			featured: true
		},
		{
			title: 'メモ・ヒント共有アプリ',
			description:
				'ユーザーが興味を持つ特定のトピックについて、有用なヒントを検索、コピー、共有できるアプリです。Googleアカウントを使った簡単なサインアップで、ユーザーはすぐに自分のヒントを共有し、ログイン後に編集や削除などの管理も行えます。また、複数のハッシュタグを使用した包括的な検索機能を搭載しており、関連するヒントを見つけることが簡単で効率的です。',
			stack: ['Next13', 'Tailwindcss', 'Javascript', 'Next-Auth', 'Mongoose'],
			demoUrl: 'https://next13-handson.vercel.app/',
			srcUrl: 'https://github.com/DANBOI/next13-handson',
			imgUrl: 'next13-handson.png',
			featured: false
		},
		{
			title: 'MERN認証デモアプリ',
			description:
				'Bootstrap5、ReduxToolkitなどを採用し、JWT認証を行うMERNスタックのデモアプリです。',
			stack: ['React', 'Bootstrap5', 'ReduxToolkit', 'Express.js', 'Mongoose'],
			demoUrl: 'https://mern-practice-ntiy.onrender.com/',
			srcUrl: 'https://github.com/DANBOI/mern-practice',
			imgUrl: 'mern-practice.png',
			hasRemarks: true,
			featured: false
		},
		{
			title: 'React+MUI練習用ページ',
			description:
				'Material UI、React18を使用した練習用ページです。テーマ切り替えは可能です。',
			stack: ['React', 'Material UI', 'Javascript'],
			demoUrl: 'https://mui5-react-app.vercel.app/',
			srcUrl: 'https://github.com/DANBOI/mui5-react-app',
			imgUrl: 'mui5-react-app.png',
			featured: false
		},
		{
			title: 'TW練習用ページ',
			description: 'Tailwindcssの上達を目指して練習で作成したページです。',
			stack: ['Tailwindcss', 'HTML5'],
			demoUrl: 'https://danboi.github.io/tailwind-landing-page/',
			srcUrl: 'https://github.com/DANBOI/tailwind-landing-page',
			imgUrl: 'tailwind-landing-page.png',
			featured: false
		},
		{
			title: 'BT5練習用ページ',
			description: 'Bootstrap5新機能を練習するページです。',
			stack: ['Bootstrap5', 'HTML5'],
			demoUrl: 'https://danboi.github.io/bootstrap5-practice/',
			srcUrl: 'https://github.com/DANBOI/bootstrap5-practice',
			imgUrl: 'bootstrap5-practice.png',
			featured: false
		},
		{
			title: 'NODE-REST-API構築',
			description: 'Typescriptを使用したRestApi構築。',
			stack: ['Express.js', 'Typescript', 'Mongoose'],
			demoUrl: '',
			srcUrl: 'https://github.com/DANBOI/node-RestApi',
			imgUrl: 'placeholder.webp',
			featured: false
		},
		{
			title: 'ポートフォリオサイト',
			description: '今ご閲覧頂いている、私のポートフォリオサイトです。',
			stack: ['sveltekit', 'Typescript', 'CSS3'],
			demoUrl: '',
			srcUrl: 'https://github.com/DANBOI/my-portfolio-site',
			imgUrl: 'portfolio-site.png',
			featured: true
		}
	]
})) satisfies PageLoad;
