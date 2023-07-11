<script>
	let techIcons = [
		'nextjs',
		'react',
		'nuxtjs',
		'vue',
		'tailwindcss',
		'typescript',
		'expressjs',
		'django',
		'mongodb',
		'k8s'
	];
</script>

<section id="toolkit">
	<div class="container">
		<h2>テクニカルスキル</h2>
		<div class="skills-imgs">
			{#each techIcons.slice(0, 10) as tech}
				<img src="./techs/{tech}.svg" alt={tech} class="skills-img" loading="lazy" title={tech} />
			{/each}
		</div>
	</div>
</section>

<style>
	.skills-imgs {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		gap: var(--gutter-xl);
		padding-block-start: var(--gutter-xl);
	}

	.skills-img {
		block-size: 135px;
		inline-size: 135px;
	}

	@media (max-width: 1100px) {
		.skills-img {
			block-size: 100px;
			inline-size: 100px;
		}
	}

	@media (max-width: 810px) {
		.skills-img {
			block-size: 85px;
			inline-size: 85px;
		}
	}

	@media (max-width: 675px) {
		.skills-imgs {
			gap: var(--gutter-lg);
		}
		.skills-img {
			block-size: 70px;
			inline-size: 70px;
		}
	}

	@media (max-width: 340px) {
		.skills-img {
			block-size: 55px;
			inline-size: 55px;
		}
	}
</style>
