<script>
	import LinkbarHero from '$lib/components/linkbar/LinkbarHero.svelte';
	import ArrowDown from '$lib/components/pointers/ArrowDown.svelte';
</script>

<div
	class="backdrop bg-no-repeat bg-center m-0 p-0 h-[800px] w-full overflow-x-hidden"
	style="background-image: url('https://yesweb.se/sfab/img/mockup/hero-couple.png') "
>
	<LinkbarHero />
	<div class="box flex flex-col mt-48 items-center justify-center">
		<h4 class="mb-1 text-white uppercase">Be the change</h4>
		<h1 class="mb-10 text-white font-['Steelfish'] uppercase ">Slowfashion</h1>
		<ArrowDown --arrowColor="white" --circleColor="white" />
	</div>
</div>

<style>
	:root {
		--hero-lines: '#fff';
	}

	/* Online */
	@font-face {
		font-family: 'Steelfish';
		src: url('steelfish-rg.otf');
		color: #000;
	}
</style>
