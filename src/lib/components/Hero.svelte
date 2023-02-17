<script>
	import LinkbarHero from '$lib/components/LinkbarHero.svelte';
	import ArrowDown from '$lib/components/ArrowDown.svelte';
</script>

<div
	id="backdrop"
	class="hero h-[1000px]"
	style="background-image: url('https://github.com/mrkarstrom/sfab/blob/main/src/lib/images/hero-couple.png?raw=true')"
>
	<LinkbarHero />
	<div id="hero-text" class="flex flex-col items-center justify-center lg:mb-48">
		<h3 class="mb-1 text-white uppercase">Be the change</h3>
		<h1 class="mb-24 text-white font-['Steelfish'] uppercase ">Slowfashion</h1>
		<ArrowDown --arrowColor="white" --circleColor="white" />
	</div>
</div>
