<script>
	import LinkbarHero from '$lib/components/linkbar/LinkbarHero.svelte';
	import ArrowDown from '$lib/components/pointers/ArrowDown.svelte';
	import DownloadAppPromo1 from '$lib/components/boards/DownloadAppPromo1.svelte';
</script>

<div
	class="backdrop relative h-[800px] w-full bg-gradient-to-r from-secondary via-[#5a554682] to-white"
>
	<LinkbarHero />
	<div class="box-wrapper h-64 w-full absolute top-64">
		<div class="box flex flex-col items-center justify-center">
			<p class="mb-3 text-xl text-white uppercase">Be the change</p>
			<h1 class="mb-16 text-7xl text-white font-['Steelfish'] uppercase ">Slowfashion</h1>
			<ArrowDown />
		</div>
	</div>
	<div class="wrapper w-full h-[96] justify-center items-center">
		<DownloadAppPromo1 />
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
