<script lang="ts">
	import WorkLinks from '$lib/components/WorkLinks.svelte';
	export let otherProjects: any;
</script>

<section id="otherWorks">
	<div class="container">
		<h2>その他のプロジェクト</h2>
		<div class="other-works-boxes">
			{#each otherProjects as { title, description, demoUrl, srcUrl, imgUrl }, index}
				<article class="other-works-box" class:featured-other-works={index === 0}>
					<picture class="other-works-illustration" class:visually-hidden={index !== 0}>
						<img src="/src/lib/images/prjs/{imgUrl}" alt={title} loading="lazy" />
					</picture>
					<div class="other-works-textbox">
						<div>
							<svelte:element this={index === 0 ? 'h3' : 'h4'}> {title} </svelte:element>
							<p class="other-works-text">
								{description}
							</p>
						</div>
						<WorkLinks {demoUrl} {srcUrl} />
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.other-works-boxes {
		display: flex;
		flex-flow: row wrap;
		gap: 3.5%;
		margin-block-start: var(--gutter-xl);
	}

	.other-works-box {
		flex-basis: 31%;
		border: 1px solid var(--border);
		padding: var(--gutter-md) var(--gutter-sm);
		border-radius: var(--gutter-na);
		background-color: var(--bg-color-secondary);
	}

	.other-works-textbox {
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.other-works-text {
		font-size: var(--text-sm);
		margin-block: var(--gutter-xs);
	}

	@media (max-width: 985px) {
		.other-works-boxes {
			max-inline-size: 685px;
			margin-inline: auto;
			justify-content: center;
			gap: 4%;
		}

		.other-works-box:nth-of-type(2),
		.other-works-box:nth-of-type(3) {
			flex-basis: 48%;
		}

		.other-works-box:last-child {
			display: none;
		}
	}

	@media (max-width: 650px) {
		.other-works-box:nth-child(2),
		.other-works-box:nth-child(3),
		.other-works-box:last-child {
			flex-basis: 100%;
		}

		.featured-other-works {
			margin-block-end: 0;
		}

		.other-works-box:not(:last-child) {
			margin-block-end: var(--gutter-xs);
		}

		.other-works-box:last-child {
			display: block;
		}
	}

	/* first child */
	.featured-other-works {
		flex-basis: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-block-end: 44.8px;
	}

	@media (max-width: 985px) {
		.featured-other-works {
			margin-block-end: 24.4px;
			flex-direction: column-reverse;
			gap: var(--gutter-lg);
		}
	}

	.featured-other-works .other-works-textbox {
		flex-basis: 44%;
	}

	.featured-other-works h3 {
		margin-block-start: var(--gutter-xs);
	}

	.featured-other-works .other-works-illustration {
		flex-basis: 50%;
	}

	.other-works-illustration img {
		border-radius: var(--gutter-na);
	}

	.featured-other-works .other-works-text {
		font-size: var(--text-md);
	}
</style>
