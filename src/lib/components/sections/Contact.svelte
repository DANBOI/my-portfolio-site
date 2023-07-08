<script>
	import avatar from '$lib/images/chen-avatar.png';
	import Button from '../Button.svelte';
</script>

<section id="contact">
	<div class="container">
		<h2>Send Message</h2>
		<div class="contact-content">
			<div class="contact-textbox">
				<strong class="about"> About me &DownArrow; </strong>
				<p class="contact-text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae autem necessitatibus
					expedita totam iure possimus quisquam.
				</p>
				<p class="contact-text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, repellat.
				</p>
				<img src={avatar} alt="Chen" class="avatar" loading="lazy" />
			</div>
			<form action="#" class="contact-form">
				<div class="form-field">
					<label for="name">Your Name</label>
					<input type="text" name="name" id="name" required />
				</div>
				<div class="form-field">
					<label for="email">Your Email</label>
					<input type="email" name="email" id="email" required inputmode="email" />
				</div>
				<div class="form-field">
					<label for="message"> Please let me know if I can help.</label>
					<textarea name="message" id="message" rows="5" required />
				</div>
				<div style:text-align="center">
					<Button label="Send" variant="primary" />
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
		background-color: #edf1f6;
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
</style>
