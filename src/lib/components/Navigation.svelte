<script lang="ts">
	let hidden = true;
	let btnLabel = 'メニュー';
	let navItems = [
		{
			label: 'トップへ',
			href: '/'
		},
		{
			label: 'テクニカルスキル',
			href: '#toolkit'
		},
		{
			label: 'プロジェクトピックアップ',
			href: '#featuredWorks'
		},
		{
			label: 'その他のプロジェクト',
			href: '#otherWorks'
		},
		{
			label: '連絡フォーム',
			href: '#contact'
		}
	];

	let FocusedElement: HTMLElement;
	let btnToggleNav: HTMLElement;

	const toggleNav = () => {
		hidden = !hidden;
		// Prevent screen from scrolling
		document.body.classList.toggle('lock-screen');

		// change text after transition
		if (hidden) btnLabel = 'メニュー';
		else setTimeout(() => (btnLabel = '閉じる'), 475);
	};

	const handleTab = (e: KeyboardEvent) => {
		if (e.key === 'Tab' && document.activeElement === FocusedElement) {
			e.preventDefault();
			btnToggleNav.focus();
		}
	};
</script>

<svelte:body on:keydown={(e) => e.key === 'Escape' && toggleNav()} on:keydown={handleTab} />

<div class="menu-btn-container">
	<div class="container">
		<button on:click={toggleNav} type="button" class="menu-btn" bind:this={btnToggleNav}
			>{btnLabel}</button
		>
	</div>
</div>

<nav class="nav" class:hidden>
	<ol class="nav-items">
		{#each navItems as navItem (navItem.label)}
			<li class="nav-item">
				<a href={navItem.href} bind:this={FocusedElement} on:click={toggleNav}>{navItem.label}</a>
			</li>
		{/each}
	</ol>
</nav>

<style>
	.menu-btn-container {
		position: fixed;
		width: 100%;
		top: var(--gutter-xs);
		left: 0;
		z-index: 4;
	}

	.menu-btn {
		display: block;
		margin-inline-start: auto;
		border: 1px solid var(--border-dark);
		width: 132px;
		padding-block: var(--gutter-na);
		border-radius: var(--gutter-lg);
		text-decoration: none;
		background-color: var(--bg-color-secondary);
		color: var(--important);
		cursor: pointer;
	}

	.menu-btn,
	.nav-items a {
		font-stretch: 125%;
		font-weight: 700;
	}

	.nav {
		min-block-size: 100vh;
		position: fixed;
		width: 100%;
		background-color: #8fc6f5;
		background-image: var(--gradient-nav);
		transition: 450ms var(--easing);
		z-index: 3;
	}

	.nav-items {
		position: absolute;
		top: 50%;
		left: 15%;
		transform: translateY(-50%) translateX(-15%);
		list-style-type: none;
	}

	.nav-item:not(:last-child) {
		margin-block-end: var(--gutter-xs);
	}

	.nav-item a {
		display: inline-block;
		font-size: 3.5rem;
		text-align: center;
		text-decoration: none;
		color: #fff;
	}

	.nav-item a::after {
		content: '';
		display: block;
		block-size: var(--gutter-na);
		width: 100%;
		transform: scale(0);
		transform-origin: left;
		background-color: white;
		transition: transform 250ms var(--easing);
	}

	.nav-item a:hover::after,
	.nav-item a:focus::after {
		transform: scale(1);
	}

	:global(.lock-screen) {
		overflow-y: hidden;
	}
</style>
