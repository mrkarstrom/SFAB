<script>
	import LinkbarHero from '$lib/components/linkbar/LinkbarHero.svelte';
	import ArrowDown from '$lib/components/pointers/ArrowDown.svelte';
	import DownloadAppPromo1 from '$lib/components/boards/DownloadAppPromo1.svelte';
</script>

<div
	class="backdrop bg-no-repeat bg-center m-0 p-0 h-[800px] w-auto overflow-x-hidden" style="background-image: url('https://yesweb.se/sfab/img/mockup/hero-couple.png') "
>
	<LinkbarHero />
	<div class="box flex flex-col pt-56 opacity-100 items-center justify-center">
		<p class="mb-3 text-xl text-white uppercase">Be the change</p>
		<h1 class="mb-16 text-7xl text-white font-['Steelfish'] uppercase ">Slowfashion</h1>
		<ArrowDown />
	</div>
</div>

<style>
	:root {
		--hero-lines: '#fff';
	}
	@font-face {
		font-family: 'Steelfish';
		src: url('../fonts/steelfish-rg.otf');
	}
</style>
