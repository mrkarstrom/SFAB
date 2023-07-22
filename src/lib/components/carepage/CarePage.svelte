<script>
	import ArrowBlock from '$lib/components/arrows/ArrowBlock.svelte';
	import CareHero from './CareHero.svelte';
	import GridSection1 from './GridSection1.svelte';
	import GridSection2 from './GridSection2.svelte';
	import GridSection3 from './GridSection3.svelte';
</script>

<main class="flex flex-col justify-center px-6 gap-4">
	<CareHero/>
	<GridSection1 />
	<ArrowBlock />
	<GridSection2 />
	<ArrowBlock />
	<GridSection3 />
</main>
