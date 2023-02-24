<script>
	import Card3 from './Card3.svelte';
	import Card4 from './Card4.svelte';
	import Card2 from './Card2.svelte';
	import Card1 from './Card1.svelte';
	import { Swipe, SwipeItem } from 'svelte-swipe';
	const swipeConfig = {
		autoplay: false,
		showIndicators: false,
		transitionDuration: 1500,
		defaultIndex: 0
	};
	let SwipeComp;

	function nextSlide() {
		SwipeComp.nextItem();
	}

	function prevSlide() {
		SwipeComp.prevItem();
	}
</script>

<div id="spacer" class="w-full h-[200px] flex justify-center items-center  ">
	<div
		class="flex items-center justify-center drop-shadow-xl -translate-y-[200px] w-[880px] 
				md:h-[400px] md:w-[850px]
				lg:h-[400px] lg:w-[950px] "
	>
		<!-- Left Arrow Box -->
		<button
			id="left-arrow-box"
			class="justify-center h-[90%] w-[70px] bg-secondary rounded-lg z-10"
			on:click={prevSlide}
		>
			<div class="flex items-center justify-center h-full w-full">
				<!-- arrow-left-svgrepo-com -->
				<svg
					width="2.5rem"
					class="bounce-left"
					viewBox="0 0 64 64"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					stroke="#000000"
					><polyline points="20 24 12 32 20 40" /><line x1="52" y1="32" x2="12" y2="32" /></svg
				>
			</div>
		</button>

		<!-- Carousel start -->
		<div class="w-[810px] h-full">
			<Swipe {...swipeConfig} bind:this={SwipeComp}>
				<!-- Slide 1 Start -->
				<SwipeItem>
					<div
						id="container-box"
						class="h-full w-[810px] gap-0 grid grid-rows-1 grid-cols-3 content-center"
					>
						<div
							id="left-box-part"
							class="bg-white flex flex-col items-center justify-between w-full h-full rounded-lg lg:pt-24 lg:pb-6 lg:rounded-lg"
						>
							<div
								class="w-full h-full flex flex-col items-center justify-center pt-12 lg:w-[90px] lg:h-[90px]"
							>
								<div class="relative flex items-center justify-center">
									<img
										id="rotating-circle"
										class="animate-spin"
										src="https://github.com/mrkarstrom/sfab/blob/main/src/lib/images/download-app-text-svg.svg?raw=true"
										width="120px"
										alt=""
									/>
									<img
										class="z-10 absolute"
										src="https://github.com/mrkarstrom/sfab/blob/main/src/lib/images/download-box-icon-svg.svg?raw=true"
										width="40px"
										alt=""
									/>
								</div>
								<h6 class="text-center whitespace-nowrap pt-14 lg:flex">
									Honest | Smooth | Desirable
								</h6>
							</div>
							<button
								id="join-button"
								class="bg-accent flex items-center justify-center h-10 w-60 rounded-md uppercase text-primary hover:bg-black hover:text-white transition duration-300 hover:ease-in-out z-20"
								on:click={nextSlide}
							>
								<h5>Join Slowfashion</h5>
							</button>
						</div>
						<div class="h-full w-full col-start-2 col-span-2 items-center overflow-y-hidden">
							<img
								src="https://github.com/mrkarstrom/sfab/blob/main/src/lib/images/Card1-image.jpeg?raw=true"
								alt=""
							/>
						</div>
					</div>
				</SwipeItem>
				<!-- Slide1 End -->
				<!-- Slide 2 Start -->
				<SwipeItem>
					<Card2 />
				</SwipeItem>
				<!-- Slide2 End -->

				<!-- Slide 3 Start -->
				<SwipeItem>
					<Card3 />
				</SwipeItem>
				<!-- Slide3 End -->

				<!-- Slide 4 Start -->
				<SwipeItem>
					<Card4 />
				</SwipeItem>
				<!-- Slide4 End -->
			</Swipe>
		</div>
		<!-- Carousel end -->

		<!-- Right Arrow Box -->

		<button
			id="right-arrow-box"
			class="justify-center h-[90%] w-[70px] bg-secondary rounded-lg z-10"
			on:click={nextSlide}
		>
			<div class="flex items-center justify-center h-full w-full">
				<svg
					width="2.5rem"
					class="bounce-right"
					viewBox="0 0 64 64"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					stroke="#000000"
					><polyline points="44 40 52 32 44 24" /><line x1="52" y1="32" x2="12" y2="32" /></svg
				>
			</div>
		</button>
	</div>
</div>

<style>
	.has-pointer-event {
		pointer-events: fill;
	}
</style>
