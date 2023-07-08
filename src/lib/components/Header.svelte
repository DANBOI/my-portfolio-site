<script>
	import Button from './Button.svelte';
</script>

<header class="header">
	<div class="container">
		<div class="header-textbox">
			<h1>
				Hello,I'm Chen<br />
				a fullstack web developer
			</h1>

			<p class="header-text">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita labore error sint harum
				aut ipsa corrupti, laborum fugiat repellendus dolorem!
			</p>

			<div class="header-btns">
				<Button href="#contact" label="Contact me" />
				<Button href="#works" label="See my works" variant="secondary" />
			</div>
		</div>
	</div>
</header>

<style>
	.header {
		position: relative;
		min-block-size: calc(100vh + var(--radius));
		background-attachment: fixed;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		background-image: linear-gradient(#ffffffa2, #ffffffe6), url('$lib/images/hero-bg.webp');
	}

	.header-textbox {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}

	.header-text {
		font-size: var(--text-lg);
		font-weight: 400;
		max-inline-size: 745px;
		margin-block-start: var(--gutter-mi);
		margin-block-end: var(--gutter-md);
	}

	@media (max-width: 1200px) {
		.header-text {
			max-inline-size: 685px;
		}
	}

	@media (max-width: 845px) {
		.header-text {
			max-inline-size: 585px;
		}
	}

	.header-btns {
		display: inline-flex;
		gap: var(--gutter-xs);
	}

	@media (max-width: 400px) {
		.header-textbox {
			left: 0;
			text-align: center;
			padding-inline: 0.6rem;
		}
		.header-btns {
			flex-direction: column;
			width: 80%;
		}
	}
</style>
