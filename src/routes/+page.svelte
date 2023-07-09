<script>
	import ToolkitSection from '$lib/components/sections/Toolkit.svelte';
	import FeaturedWorksSection from '$lib/components/sections/FeaturedWorks.svelte';
	import OtherWorksSection from '$lib/components/sections/OtherWorks.svelte';
	import ContactSection from '$lib/components/sections/Contact.svelte';

	export let data;
	$: featuredProjects = data.projects.filter((prj) => prj.featured).slice(0, 3);
	$: otherProjects = data.projects.filter((prj) => !prj.featured).slice(0, 4);
</script>

<svelte:head>
	<title>Chen's Portfolio</title>
	<meta name="description" content="chen's portfolio" />
</svelte:head>

<ToolkitSection />
<FeaturedWorksSection {featuredProjects} />
<OtherWorksSection {otherProjects} />
<ContactSection />
