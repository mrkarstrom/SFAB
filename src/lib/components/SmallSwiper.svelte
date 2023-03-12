<script>
	import { Swipe, SwipeItem } from 'svelte-swipe';
	const swipeConfig = {
		autoplay: false,
		showIndicators: false,
		transitionDuration: 500,
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

<div class="w-[100vw] h-screen flex justify-center items-center">
	<div
		id="small-swiper"
		class="w-[90vw] h-screen flex items-center justify-center relative -translate-y-64 drop-shadow-lg rounded-box z-20
                                    lg:hidden"
	>
		<button id="left-arrow" class="absolute bg-inherit left-10 z-10" on:click={prevSlide}>
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

		<Swipe {...swipeConfig} bind:this={SwipeComp}>
			<!-- Slide 1 Start -->
			<SwipeItem>
				<div
					id="swipe1"
					class="w-full h-screen bg-cover bg-center rounded-box bg-[url('https://github.com/mrkarstrom/sfab/blob/main/src/lib/images/Card1-image.jpeg?raw=true')]"
				/>
			</SwipeItem>
			<SwipeItem>
				<div
					id="swipe2"
					class="w-full h-screen bg-cover bg-center rounded-box bg-[url('https://github.com/mrkarstrom/sfab/blob/main/src/lib/images/Card2-image.jpg?raw=true')]"
				/>
			</SwipeItem>
			<SwipeItem>
				<div
					id="swipe3"
					class="w-full h-screen bg-cover bg-center rounded-box bg-[url('https://github.com/mrkarstrom/sfab/blob/main/src/lib/images/Card3-image.jpg?raw=true')]"
				/>
			</SwipeItem>
			<SwipeItem>
				<div
					id="swipe4"
					class="w-full h-screen bg-cover bg-center rounded-box bg-[url('https://github.com/mrkarstrom/sfab/blob/main/src/lib/images/Card4-image.jpeg?raw=true')]"
				/>
			</SwipeItem>
		</Swipe>
		<button id="right-arrow" class="absolute bg-inherit right-10 z-10" on:click={nextSlide}>
			<div class="flex items-center justify-center h-full w-full">
				<!-- arrow-left-svgrepo-com -->
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
