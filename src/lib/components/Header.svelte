<script>
	import Button from './Button.svelte';
	import Navigation from './Navigation.svelte';
</script>

<header class="header">
	<Navigation />
	<div class="container">
		<div class="header-textbox">
			<h1>
				こんにちは、陳です<br />
				ウェブ開発をメインにしています
			</h1>

			<p class="header-text">
				フロントエンドからバックエンドまで、UXに富んだレスポンシブルで高性能なウェブアプリの開発を行ってきました
			</p>

			<div class="header-btns">
				<Button href="#contact" label="メッセージを送る" />
				<Button href="#featuredWorks" label="プロジェクトを見る" variant="secondary" />
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
