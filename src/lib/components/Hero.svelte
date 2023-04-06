<script>
	import LinkbarHero from '$lib/components/LinkbarHero.svelte';
	import ArrowDown from '$lib/components/ArrowDown.svelte';
</script>

<div
	id="hero-backdrop"
	class="grid relative w-full place-items-center bg-top bg-cover bg-no-repeat h-[650px] 
	lg:h-[1000px]"
	style="background-image: url('https://github.com/mrkarstrom/sfab/blob/main/src/lib/images/hero-couple.png?raw=true')"
>
	<!-- flex flex-col items-center justify-start w-[1440px] bg-no-repeat bg-cover bg-center m-0 pt-48 -->

	<LinkbarHero />
	<div
		id="hero-text"
		class="flex flex-col w-full items-center justify-center 
								lg:pb-48"
	>
		<h3
			class="mb-1 mt-14 text-white uppercase text-center whitespace-normal w-52 leading-[45px] text-[35px] lg:text-xl"
		>
			Be the change
		</h3>
		<h1
			class="mb-24 text-white font-['Steelfish'] text-[6.5rem] uppercase 
		lg:text-[6rem]
		"
		>
			<!-- https://github.com/mrkarstrom/sfab/blob/main/src/routes/TAC/TAC.pdf?raw=true -->
			<a href="/tac">Slowfashion</a>
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
