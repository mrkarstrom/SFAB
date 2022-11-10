<script>
	import LinkbarHero from '$lib/components/linkbar/LinkbarHero.svelte';
	import ArrowDown from '$lib/components/pointers/ArrowDown.svelte';
</script>

<div class="hero min-h-screen bg-gradient-to-r from-secondary via-[#5a554682] to-white">
	<div class="hero-overlay bg-opacity-0" />
	<div class="h-full w-content border-red-700">
		<LinkbarHero />
	</div>
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-md flex flex-col justify-center items-center">
			<p class="mb-3 text-xl text-white uppercase">Be the change</p>
			<h1 class="mb-16 text-7xl text-white font-['Steelfish'] uppercase ">Slowfashion</h1>
			<ArrowDown />
		</div>
	</div>
</div>

<style>
	:root {
		--hero-lines: '#fff';
	}
	@font-face {
		font-family: 'Steelfish';
		src: url('../fonts/steelfish.rg-regular.otf');
	}
</style>
