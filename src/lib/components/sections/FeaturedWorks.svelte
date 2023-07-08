<script lang="ts">
	import workSrc from '$lib/images/work-mountains.webp';
	import WorkLinks from '../../components/WorkLinks.svelte';
	import { fly } from 'svelte/transition';
</script>

<section>
	<div class="container">
		<h2>Featured Works</h2>
		<div class="work-boxes">
			{#each new Array(3) as work (work.id)}
				<div class="work-box">
					<div class="work-textbox">
						<h3>project title</h3>
						<p class="work-text">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, recusandae!
						</p>
						<ol class="work-technologies">
							<li>Nextjs</li>
							<li>React</li>
							<li>tailwind css</li>
							<li>Mongoose</li>
						</ol>
						<WorkLinks />
					</div>
					<picture class="work-img">
						<img loading="lazy" src={workSrc} alt="a mountain work" />
					</picture>
				</div>
			{/each}
		</div>
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
		max-inline-size: 785px;
		transition: 0.6s all;
		box-shadow: var(--shadow);
	}

	.work-textbox {
		max-inline-size: 445px;
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
		/* contoll this when scrolling to the section area by js later*/
		animation-play-state: running;
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
</style>