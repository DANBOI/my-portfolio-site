<script lang="ts">
	import github from '$lib/images/github.svg';
	export let demoUrl: string;
	export let srcUrl: string;
	export let hasRemarks: boolean;
	export let small = false;

	$: remarksTxt = hasRemarks
		? 'デプロイメントの方式により、サーバー側は稼働するまで30秒程かかるので、少々お待ちください。'
		: '';
</script>

<div class="work-links">
	<a href={demoUrl} target="_blank" rel="noopener" class="link" title={remarksTxt}
		>{remarksTxt && '※'} View project</a
	>

	<a href={srcUrl} target="_blank" rel="noopener" title="Source code">
		<img src={github} alt="GitHub" loading="lazy" />
	</a>
</div>

{#if hasRemarks}
	<p class="work-remarks" class:small>※{remarksTxt}</p>
{/if}

<style>
	.work-links {
		display: inline-flex;
		align-items: center;
		gap: var(--gutter-xs);
	}

	.work-links img {
		block-size: 28px;
		inline-size: 28px;
	}

	/* Github icon */

	.work-links > a:last-child {
		transition: 0.3s transform ease-in;
	}

	.work-links > a:last-child:hover,
	.work-links > a:last-child:focus {
		transform: scale(1.1);
	}

	.work-remarks {
		margin-block-start: var(--gutter-mi);
		color: var(--color-500);
		font-size: 1rem;
	}

	.small {
		font-size: 0.8rem;
	}

	/* animation */
	.work-links,
	.work-remarks {
		--delay: 0.5s;
		animation: slide-up 1.5s cubic-bezier(0.16, 1, 0.3, 1) both;
		/* contoll this when scrolling to the section area by js later*/
		animation-play-state: running;
		animation-delay: calc(var(--delay) * 2);
	}

	@keyframes slide-up {
		from {
			transform: translateY(60px);
			opacity: 0;
		}

		to {
			transform: none;
			opacity: 1;
		}
	}

	/* Links */
	.link {
		position: relative;
		display: inline-block;
		font-weight: 600;
		font-size: var(--text-sm);
		padding: var(--gutter-na) 0;
		text-decoration: none;
		color: var(--important);
	}

	.link::after {
		content: '';
		width: 100%;
		height: 1px;
		margin-block-start: var(--gutter-na);
		position: absolute;
		bottom: -1px;
		left: 0;
		transition: 0.3s transform ease-in;
		background-color: black;
		transform-origin: left;
		transform: scaleX(0);
	}

	.link:hover::after,
	.link:focus::after {
		transform: scaleX(1);
	}
</style>
