<script>
	import LinkbarHero from '$lib/components/linkbar/LinkbarHero.svelte';
</script>

<div class="hero min-h-screen" style="background-image: url(https://placeimg.com/1000/800/arch);">
	<div class="hero-overlay bg-opacity-0" />
	<div class="h-full w-content border-red-700">
		<LinkbarHero />
	</div>
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-md flex flex-col justify-center items-center">
			<p class="mb-3 text-xl text-white uppercase">Be the change</p>
			<h1 class="mb-16 text-7xl text-white font-['Steelfish'] uppercase ">Slowfashion</h1>
			<div
				class="circle-arrow flex justify-center items-center border-['var(--hero-lines)'] border w-16 h-16 rounded-full "
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="1rem" fill="white" viewBox="0 0 384 512"
					><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
					<path
						d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
					/></svg
				>
			</div>
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
