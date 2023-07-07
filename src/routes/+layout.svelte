<script>
	import logo from '$lib/images/svelte-logo.svg';
	import Header from './Header.svelte';
	import './styles.css';
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<div class="corner">
		<a href="https://kit.svelte.dev">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>
	Chen@my portfolio powered by svelte
</footer>

<style>
	main {
		border-top: 1px solid var(--border);
		border-top-left-radius: var(--radius);
		border-top-right-radius: var(--radius);
		background-color: var(--bg-color-primary);
		transform: translateY(calc(-1 * var(--radius)));
	}

	@media (max-width: 1185px) {
		:root {
			--radius: 45px;
		}
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}
</style>
