<script>
	import { Swipe, SwipeItem } from 'svelte-swipe';
	import CountdownSmall from '$lib/components/sections/CountdownSmall.svelte';
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

<div
	id="block-container"
	class="w-full h-[650px] hidden flex-col relative justify-end items-center 
			sm:flex
			lg:hidden"
>
	<div
		id="swiper-and-countdown-container"
		class="w-[90vw] min-h-[820px] -translate-y-[90px] h-[820px] flex flex-col items-center justify-center absolute drop-shadow-lg z-20"
	>
		<div
			id="swiper-container"
			class="relative w-[700px] h-[700px] flex rounded-box overflow-hidden"
		>
			<button
				id="left-arrow"
				class="absolute w-12 h-12 left-10 top-1/2 -translate-y-1/2 z-10 hover:bg-slate-100 rounded-full"
				on:click={prevSlide}
			>
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
			</button>
			<Swipe {...swipeConfig} bind:this={SwipeComp}>
				<!-- Slide 1 Start -->
				<SwipeItem>
					<div
						id="swipe-1"
						class="w-[770px] h-[770px] bg-[url('/images/small/active/Card1-image.jpg?raw=true')] bg-contain"
					/>
				</SwipeItem>
				<SwipeItem>
					<div
						id="swipe-2"
						class="w-[770px] h-[770px] bg-[url('/images/small/active/Card2-image.jpg?raw=true')] bg-contain"
					/>
				</SwipeItem>
				<SwipeItem>
					<div
						id="swipe-2"
						class="w-[770px] h-[770px] bg-[url('/images/small/active/Card3-image.jpg?raw=true')] bg-contain"
					/>
				</SwipeItem>
				<SwipeItem>
					<div
						id="swipe-2"
						class="w-[770px] h-[770px] bg-[url('/images/small/active/Card4-image.jpg?raw=true')] bg-contain"
					/>
				</SwipeItem>
			</Swipe>

			<button
				id="right-arrow"
				class="absolute top-1/2 -translate-y-1/2 right-10 z-20"
				on:click={nextSlide}
			>
				<svg
					width="2.5rem"
					class="bounce-right"
					viewBox="0 0 64 64"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					stroke="#000000"
					><polyline points="44 40 52 32 44 24" /><line x1="52" y1="32" x2="12" y2="32" /></svg
				>
			</button>
		</div>
		<CountdownSmall />
	</div>
</div>
