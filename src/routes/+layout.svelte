<script>
	import logo from '$lib/images/svelte-logo.svg';
	import Header from '../lib/components/Header.svelte';
	import './styles.css';
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<div class="corner">
		<hr />
		<a href="https://kit.svelte.dev">
			<img src={logo} alt="SvelteKit" />
		</a>
		<hr />
	</div>
	Chen @ my portfolio powered by svelte
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
		display: flex;
		align-self: stretch;
		justify-content: space-between;
		align-items: center;
		gap: var(--gutter-xs);
		height: 3em;
	}

	.corner hr {
		flex-basis: 80%;
		opacity: 0.3;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.corner img {
		width: 3em;
		height: 3em;
		object-fit: contain;
	}
</style>
