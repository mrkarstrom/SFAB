<script>
	import LinkbarHero from '$lib/components/LinkbarHero.svelte';
	import ArrowDown from '$lib/components/ArrowDown.svelte';
</script>

<div
	id="hero-backdrop"
	class="grid relative w-100 place-items-center bg-top bg-cover bg-no-repeat h-[700px] 
	lg:h-[1000px]"
	style="background-image: url('https://github.com/mrkarstrom/sfab/blob/main/src/lib/images/hero-couple.png?raw=true')"
>
	<!-- flex flex-col items-center justify-start w-[1440px] bg-no-repeat bg-cover bg-center m-0 pt-48 -->

	<LinkbarHero />
	<div id="hero-text" class="flex flex-col items-center justify-center pb-48
								lg:
		">
		<h3
			class="mb-1 mt-10 text-white uppercase text-center whitespace-normal w-52 leading-[50px] text-[40px] lg:text-xl"
		>
			Be the change
		</h3>
		<h1
			class="mb-24 text-white font-['Steelfish'] text-[7rem] uppercase 
		lg:text-[6rem]
		"
		>
			Slowfashion
		</h1>
		<div class="hidden lg:flex">
			<ArrowDown --arrowColor="white" --circleColor="white" />
		</div>
	</div>
</div>

<style>
	#hero-backdrop > * {
		grid-column-start: 1;
		grid-row-start: 1;
	}
</style>
