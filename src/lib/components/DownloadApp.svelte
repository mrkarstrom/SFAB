<script>
	import { fly } from 'svelte/transition';
	import { inview } from 'svelte-inview';
	import Title from './Title.svelte';
	// import Slide1 from './Slide1.svelte';
	// import Slide2 from './Slide2.svelte';
	// import Slide3 from './Slide3.svelte';
	// import Slide4 from './Slide4.svelte';

	let isInView;
	import { Swipe, SwipeItem } from 'svelte-swipe';
	const swipeConfig = {
		autoplay: false,
		delay: 3000,
		showIndicators: false,
		transitionDuration: 1000,
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
		class="relative items-center  drop-shadow-xl -translate-y-[200px] md:h-[400px] lg:h-[400px] lg:w-[950px] xl:h-[600px] xl:w-[1200px]"
	>
		<!--  Left Arrow Box -->
		<div
			id="left-arrow-box"
			class="absolute left-0 top-1/2 -translate-y-1/2  justify-center h-[90%] w-[70px] bg-secondary rounded-lg z-0"
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
		</div>

		<!-- Carousel start -->
		<div class="w-full h-full z-10">
			<Swipe {...swipeConfig} bind:this={SwipeComp}>
				<!-- Slide 1 Start -->
				<SwipeItem>
					<div id="slide1" class="items-center">
						<div class="flex items-center justify-center w-full h-full">
							<a
								class="flex items-center justify-center h-[360px] border-2 w-[70px] bg-inherit rounded-lg z-20"
								on:click={swipeConfig.goTo(2)}
							/>

							<div
								id="center-box"
								class="h-full w-[810px] gap-0 grid grid-rows-1 grid-cols-3 content-center "
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
										<h6 class="hidden text-center whitespace-nowrap pt-14 lg:flex">
											Honest | Smooth | Desirable
										</h6>
									</div>
									<button
										id="join-button"
										class="bg-accent flex items-center justify-center h-10 w-60 rounded-md uppercase text-primary hover:bg-black hover:text-white transition duration-300 hover:ease-in-out"
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
							<a
								class="flex items-center justify-center h-[90%] w-[70px] bg-inherit rounded-lg z-20"
								on:click={nextSlide}
							/>
						</div>
					</div>
				</SwipeItem>
				<!-- Slide1 End -->

				<!-- Slide 2 Start -->
				<SwipeItem>
					<div id="slide2" class="items-center">
						<div class="flex items-center justify-center w-full h-full">
							<a
								class="flex items-center justify-center h-[90%] w-[70px] bg-inherit rounded-lg z-20"
								on:click={prevSlide}
							/>

							<div
								id="center-box"
								class="h-full w-[810px] gap-0 grid grid-rows-1 grid-cols-3 content-center "
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
										<h6 class="hidden text-center whitespace-nowrap pt-14 lg:flex">
											Honest | Smooth | Desirable
										</h6>
									</div>
									<button
										id="join-button"
										class="bg-accent flex items-center justify-center h-10 w-60 rounded-md uppercase text-primary hover:bg-black hover:text-white transition duration-300 hover:ease-in-out"
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
							<a
								class="flex items-center justify-center h-[90%] w-[70px] bg-inherit rounded-lg z-20"
								on:click={nextSlide}
							/>
						</div>
					</div>
				</SwipeItem>
				<!-- Slide2 End -->

				<!-- Slide 3 Start -->
				<div id="slide2" class="items-center">
					<div class="flex items-center justify-center w-full h-full">
						<a
							class="flex items-center justify-center h-[90%] w-[70px] bg-inherit rounded-lg z-20"
							on:click={prevSlide}
						/>

						<div
							id="center-box"
							class="h-full w-[810px] gap-0 grid grid-rows-1 grid-cols-3 content-center "
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
									<h6 class="hidden text-center whitespace-nowrap pt-14 lg:flex">
										Honest | Smooth | Desirable
									</h6>
								</div>
								<button
									id="join-button"
									class="bg-accent flex items-center justify-center h-10 w-60 rounded-md uppercase text-primary hover:bg-black hover:text-white transition duration-300 hover:ease-in-out"
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
						<a
							class="flex items-center justify-center h-[90%] w-[70px] bg-inherit rounded-lg z-20"
							on:click={nextSlide}
						/>
					</div>
				</div>
				<!-- Slide3 End -->

				<!-- Slide 4 Start -->
				<div id="slide2" class="items-center">
					<div class="flex items-center justify-center w-full h-full">
						<a
							class="flex items-center justify-center h-[90%] w-[70px] bg-inherit rounded-lg z-20"
							on:click={prevSlide}
						/>

						<div
							id="center-box"
							class="h-full w-[810px] gap-0 grid grid-rows-1 grid-cols-3 content-center "
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
									<h6 class="hidden text-center whitespace-nowrap pt-14 lg:flex">
										Honest | Smooth | Desirable
									</h6>
								</div>
								<button
									id="join-button"
									class="bg-accent flex items-center justify-center h-10 w-60 rounded-md uppercase text-primary hover:bg-black hover:text-white transition duration-300 hover:ease-in-out"
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
						<a
							class="flex items-center justify-center h-[90%] w-[70px] bg-inherit rounded-lg z-20"
							on:click={nextSlide}
						/>
					</div>
				</div>
				<!-- Slide4 End -->
			</Swipe>
		</div>
		<!-- Carousel end -->

		<!-- Right Arrow Box -->
		<div
			id="right-arrow-box"
			class="absolute right-0 top-1/2 -translate-y-1/2 justify-center h-[90%] w-[70px] bg-secondary rounded-lg z-0"
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
		</div>
	</div>
</div>

<style>
	.has-pointer-event {
		pointer-events: fill;
	}
</style>
