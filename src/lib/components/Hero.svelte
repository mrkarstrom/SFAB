<script>
	import LinkbarHero from '$lib/components/LinkbarHero.svelte';
	import ArrowDown from '$lib/components/ArrowDown.svelte';
</script>

<div
	id="backdrop"
	class="flex flex-col items-center justify-start w-full bg-no-repeat bg-cover bg-center m-0 pt-48 relative h-[800px]"
	style="background-image: url('https://github.com/mrkarstrom/sfab/blob/main/src/lib/images/hero-couple.png?raw=true')"
>
	<LinkbarHero />
	<div class="hero-text flex flex-col items-center justify-center">
		<h4 class="mb-1 text-white uppercase">Be the change</h4>
		<h1 class="mb-10 text-white font-['Steelfish'] uppercase ">Slowfashion</h1>
		<ArrowDown --arrowColor="white" --circleColor="white" />
	</div>
</div>

<style>
	@font-face {
		font-family: 'Steelfish';
		src: url('./steelfish-rg.otf');
		color: #fff;
	}
</style>
