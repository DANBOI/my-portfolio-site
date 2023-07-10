<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';
	import WorkLinks from '$lib/components/WorkLinks.svelte';
	export let featuredProjects: any;

	let element: HTMLElement;
</script>

<section id="featuredWorks">
	<div class="container">
		<h2>プロジェクトピックアップ</h2>
		<IntersectionObserver threshold={0.3} {element} let:intersecting>
			<div class="work-boxes" bind:this={element}>
				{#each featuredProjects as { title, description, stack, demoUrl, srcUrl, imgUrl } (title)}
					<div class="work-box">
						<div class="work-textbox">
							<h3 class:intersecting>{title}</h3>
							<p class="work-text" class:intersecting>
								{description}
							</p>
							<ol class="work-technologies" class:intersecting>
								{#each stack as tech}
									<li>{tech}</li>
								{/each}
							</ol>
							<WorkLinks {demoUrl} {srcUrl} />
						</div>
						<picture class="work-img" class:transform={!intersecting} class:intersecting>
							<img loading="lazy" src="/src/lib/images/prjs/{imgUrl}" alt={title} />
						</picture>
					</div>
				{/each}
			</div>
		</IntersectionObserver>
	</div>
</section>

<style>
	.work-boxes {
		padding-block-start: var(--gutter-xl);
	}

	.work-box {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	@media (max-width: 1045px) {
		.work-boxes {
			max-inline-size: fit-content;
			margin-inline: auto;
		}

		.work-box {
			flex-direction: column-reverse;
			align-items: flex-start;
		}

		.work-img {
			margin-block-end: var(--gutter-md);
		}
	}

	.work-box:not(:last-child) {
		margin-block-end: var(--gutter-2xl);
	}

	@media (max-width: 1285px) {
		.work-box:not(:last-child) {
			margin-block-end: 8rem;
		}
	}

	.work-img,
	.work-textbox {
		flex-basis: 49%;
	}

	.work-img {
		max-inline-size: 800px;
		transition: 0.6s all;
		box-shadow: var(--shadow);
	}

	.work-textbox {
		max-inline-size: 600px;
	}

	@media (max-width: 885px) {
		h2 {
			margin-block-start: 45px;
		}
	}

	@media (max-width: 485px) {
		h2 {
			margin-block-start: 0;
		}
	}

	.work-text,
	.work-technologies {
		font-weight: 300;
	}
	.work-text {
		margin-block: var(--gutter-mi);
	}

	.work-technologies {
		list-style-position: inside;
		list-style-type: disc;
		margin-block-end: var(--gutter-xs);
	}

	/* animation */

	.work-img,
	.work-textbox h3,
	.work-text,
	.work-technologies {
		--delay: 0.5s;
		animation: slide-up 1.5s cubic-bezier(0.16, 1, 0.3, 1) both;
		animation-play-state: paused;
	}

	.intersecting {
		animation-play-state: running !important;
	}

	.work-img,
	.work-text {
		animation-delay: var(--delay);
	}

	.work-technologies {
		animation-delay: calc(var(--delay) * 1.5);
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

	.transform {
		transform: translateY(6rem);
		opacity: 0;
	}
</style>
