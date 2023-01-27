<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/splide/dist/css/themes/splide-default.min.css';
	import Slide1 from './Slide1.svelte';
	import Slide2 from './Slide2.svelte';
	import Slide3 from './Slide3.svelte';
	import Slide4 from './Slide4.svelte';

	const goLeft = () => {
		getPrev();
	};

	const goRight = () => {
		getNext();
	};
</script>

<div id="spacer" class="w-full h-[400px] flex justify-center items-end lg:flex lg:h-[200px] ">
	<div
		id="wrapper"
		class="relative bottom-[10px] w-[930px] h-[395px] drop-shadow-xl lg:bottom-[50px] lg:flex "
	>
		<div id="box-wrap" class="flex items-center justify-center w-full h-full">
			<div
				on:click={goLeft}
				id="left-box-arrow"
				class="hidden lg:flex items-center justify-center h-[90%] w-[5rem] bg-secondary rounded-lg"
			>
				<svg xmlns="http://www.w3.org/2000/svg" height="1rem" fill="black" viewBox="0 0 512 512">
					<path
						d="M109.3 288L480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288z"
					/></svg
				>
			</div>
			<div class="w-full h-full overflow-hidden">
				<Splide
					options={{
						rewind: true,
						speed: 1300,
						easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
						hasTrack: false,
						keyboard: 'focus',
						arrows: false,
						autoplay: true,
						interval: 4000
					}}
					aria-label="My Favorite Images"
				>
					<SplideSlide>
						<Slide1 />
					</SplideSlide>
					<SplideSlide>
						<Slide2 />
					</SplideSlide>
					<SplideSlide>
						<Slide3 />
					</SplideSlide>
					<SplideSlide>
						<Slide4 />
					</SplideSlide>
				</Splide>
			</div>

			<div
				id="right-box-arrow"
				class="hidden lg:flex items-center justify-center h-[90%] w-[5rem] bg-secondary rounded-lg"
			>
				<svg xmlns="http://www.w3.org/2000/svg" height="1rem" fill="black" viewBox="0 0 512 512"
					><path
						d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
					/></svg
				>
			</div>
		</div>
	</div>
</div>

<style>
	.splide {
		arrowpath: 'M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z';
	}
</style>
