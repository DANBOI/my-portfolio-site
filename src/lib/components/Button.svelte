<script lang="ts">
	export let href = '';
	export let label: string;
	export let type: 'button' | 'submit' | 'reset' = 'button';
	export let variant: 'primary' | 'secondary' = 'primary';
	let btnModifier = variant === 'primary' ? 'btn-cta' : 'btn-secondary';
</script>

{#if href}
	<a {href} class="btn {btnModifier}">{label}</a>
{:else}
	<button {type} class="btn {btnModifier}">{label}</button>
{/if}

<style>
	.btn {
		font-size: 1.35rem;
		font-weight: 700;
		text-decoration: none;
		text-align: center;
		padding: 18px 60px;
		border-radius: var(--gutter-na);
		transition: 0.3s all ease-in-out;
		cursor: pointer;
	}

	@media (max-width: 700px) {
		.btn {
			padding: 16px 48px;
		}
	}

	@media (max-width: 485px) {
		.btn {
			font-size: 1.2rem;
			padding: 14px 38px;
		}
	}

	.btn-cta {
		color: var(--bg-color-primary);
		background-color: var(--important);
	}

	.btn-cta:hover,
	.btn-cta:focus {
		box-shadow: #07070733 0 0 0 var(--gutter-na);
	}

	.btn-secondary {
		border: 1px solid var(--border-dark);
		color: var(--important);
	}

	.btn-secondary:hover,
	.btn-secondary:focus {
		border-color: var(--important);
	}
</style>
