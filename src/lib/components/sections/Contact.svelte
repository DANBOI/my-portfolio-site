<script lang="ts">
	import avatar from '$lib/images/chen-avatar.png';
	import Button from '../Button.svelte';
	import { PUBLIC_FORM_SUBMIT_URL, PUBLIC_FORM_SUBMIT_API_KEY } from '$env/static/public';

	let formData = {
		name: '',
		email: '',
		message: ''
	};

	let label = 'メール送信';

	const handleSubmit = async () => {
		label = '送信中...';
		const requestData = JSON.stringify({
			...formData,
			access_key: PUBLIC_FORM_SUBMIT_API_KEY
		});

		try {
			const response = await fetch(PUBLIC_FORM_SUBMIT_URL, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body: requestData
			});

			const result = await response.json();
			if (result.success) {
				label = '✔ 送信完了';
				// reset form states;
				setTimeout(() => {
					Object.keys(formData).forEach((key) => (formData[key as keyof typeof formData] = ''));
					label = 'メール送信';
				}, 2000);
			}
		} catch (error: any) {
			label = '❌ 送信失敗';
			alert('お手数ですが、画面をリフレッシュしてから再度お試しください。');
		}
	};
</script>

<section id="contact">
	<div class="container">
		<h2>連絡フォーム</h2>
		<div class="contact-content">
			<div class="contact-textbox">
				<strong class="about"> 私について &DownArrow; </strong>
				<p class="contact-text">
					フレームワークを駆使したモダンなフロントエンド開発とNode.jsを中心としたバックエンド開発、
					データベース設計やAPI構築に関する各種業務を全般に手掛けています。
				</p>
				<p class="contact-text">
					また英語や運動が大好きで、仕事以外は海外ドラマやドキュメンタリー、登山、ジョギング、サイクリングなどに当てはまれています。
				</p>
				<img src={avatar} alt="Chen" class="avatar" loading="lazy" />
			</div>
			<form on:submit|preventDefault={handleSubmit} class="contact-form">
				<div class="form-field">
					<label for="name"><span>・</span>お名前</label>
					<input type="text" name="name" id="name" bind:value={formData.name} required />
				</div>
				<div class="form-field">
					<label for="email"><span>・</span>メールアドレス</label>
					<input
						type="email"
						name="email"
						id="email"
						bind:value={formData.email}
						required
						inputmode="email"
					/>
				</div>
				<div class="form-field">
					<label for="message"><span>・</span>何でもいいので、お気軽にご連絡ください。</label>
					<textarea name="message" id="message" rows="5" bind:value={formData.message} required />
				</div>
				<div style:text-align="center">
					<Button type="submit" {label} variant="primary" />
				</div>
			</form>
		</div>
	</div>
</section>

<style>
	.contact-content {
		display: grid;
		grid-template-columns: minmax(245px, 35%) 1fr;
		margin-block: var(--gutter-xl);
		border: 1px solid var(--border);
		border-radius: var(--gutter-na);
	}

	@media (max-width: 1032px) {
		.contact-content {
			display: flex;
			flex-direction: column-reverse;
			max-inline-size: 845px;
			margin-inline: auto;
		}
	}

	.contact-textbox,
	.contact-form {
		padding: var(--gutter-lg) var(--gutter-sm);
	}

	.contact-textbox {
		background-color: var(--bg-color-accent);
	}

	.about {
		display: inline-flex;
		align-items: center;
		gap: var(--gutter-na);
		font-size: initial;
		padding: var(--gutter-na) var(--gutter-mi);
		border-radius: var(--gutter-sm);
		position: relative;
		z-index: 1;
		margin-block-end: var(--gutter-sm);
		color: var(--important);
	}

	.about::before,
	.about::after {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: inherit;
	}

	.about::before {
		background-color: var(--bg-color-primary);
		inset: 1px;
		z-index: -1;
	}

	.about::after {
		background-image: var(--gradient-border);
		z-index: -2;
	}

	.contact-text {
		margin-block-end: var(--gutter-sm);
		font-weight: 300;
	}

	.avatar {
		margin-inline-start: 80%;
		text-align: right;
		inline-size: 50px;
		block-size: 50px;
		border-radius: 50%;
	}

	.contact-form {
		background-color: var(--bg-color-secondary);
		border-top-right-radius: var(--gutter-na);
		border-bottom-right-radius: var(--gutter-na);
	}

	.form-field label,
	.form-field input,
	.form-field textarea {
		display: block;
		width: 100%;
	}

	.form-field label {
		color: var(--important);
	}

	.form-field input,
	.form-field textarea {
		font-size: var(--text-sm);
		color: var(--sub);
		border: none;
		outline: none;
		border-bottom: 1px solid var(--border);
		background-color: transparent;
	}

	.form-field input:focus,
	.form-field textarea:focus {
		border-color: #888;
	}

	.form-field input,
	.form-field textarea {
		margin-block-end: var(--gutter-sm);
		padding: var(--gutter-na);
		margin-inline: var(--gutter-na);
	}

	.form-field label {
		font-size: var(--text-sm);
		margin-block-end: var(--gutter-na);
		margin-inline-start: var(--gutter-na);
	}

	.form-field span {
		font-size: var(--text-lg);
		color: var(--color-500);
	}
</style>
