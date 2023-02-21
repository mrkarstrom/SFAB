<script>
	import Card1 from './Card1.svelte';
	import Card2 from './Card2.svelte';
	import Card3 from './Card3.svelte';
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	let emblaApi;
	const embla = EmblaCarousel(emblaNode, options);

	const emblaConfig = {
		options: { loop: false }
	};

	const onInit = (event) => {
		emblaApi = event.detail;
		// Embla API is ready
	};
</script>

<div class="container mx-auto">
	<div
		class="embla overflow-hidden w-[900px] h-[400px]"
		use:emblaCarouselSvelte={emblaConfig}
		on:init={onInit}
	>
		<div class="embla__container flex">
			<div class="embla__slide flex-[0_0_100%] min-w-0 border-2 h-full"><Card1 /></div>
			<div class="embla__slide flex-[0_0_100%] min-w-0 h-full"><Card2 />></div>
			<div class="embla__slide flex-[0_0_100%] min-w-0 h-full"><Card3 /></div>
			<button class="embla__button embla__button--prev" onClick={embla.scrollPrev()} disabled="">
				<svg class="embla__button__svg" viewBox="137.718 -1.001 366.563 644">
					<path
						d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z"
					/>
				</svg></button
			>
			<button class="embla__button embla__button--next" onClick={embla.scrollNext()} disabled="">
				<svg class="embla__button__svg" viewBox="0 0 238.003 238.003">
					<path
						d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z"
					/>
				</svg>
			</button>
		</div>
	</div>
</div>

<style>
	.embla__slide {
		min-width: 0;
		position: relative;
	}
	.embla__button {
		-webkit-appearance: none;
		background-color: transparent;
		touch-action: manipulation;
		display: inline-flex;
		text-decoration: none;
		cursor: pointer;
		border: 0;
		padding: 0;
		margin: 0;
		z-index: 1;
		color: var(--background-site);
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		top: 50%;
		transform: translateY(-50%);
		cursor: pointer;
		width: 2rem;
		height: 2rem;
	}
	.embla__button--prev {
		left: 1.6rem;
	}
	.embla__button--next {
		right: 1.6rem;
	}
	.embla__button:disabled {
		opacity: 0.3;
	}
	.embla__button__svg {
		width: 65%;
		height: 65%;
	}
</style>
