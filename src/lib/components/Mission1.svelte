<script>
	import { fly } from 'svelte/transition';
	import { inview } from 'svelte-inview';
	import Title from './Title.svelte';

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

<div
	class="hidden lg:flex"
	use:inview={{ unobserveOnEnter: true, rootMargin: '-10%' }}
	on:change={({ detail }) => {
		isInView = detail.inView;
	}}
>
	{#if isInView}
		<div in:fly={{ y: 500, duration: 1500 }}>
			<div class="h-[28rem] w-screen">
				<Swipe {...swipeConfig} bind:this={SwipeComp}>
					<SwipeItem>
						<div class="h-[28rem] grid grid-rows-1 grid-cols-2">
							<div
								id="left-side1"
								class="w-full bg-cover bg-center h-full"
								style="background-image: url('https://github.com/mrkarstrom/sfab/blob/main/src/lib/images//woman-chair.png?raw=true')"
							/>
							<div
								id="right-side1"
								class="bg-secondary flex flex-col items-center justify-between h-full"
							>
								<Title>
									<p class="text-2xl mt-12">Our Mission</p>
								</Title>
								<p class="max-w-[70%] text-center mb-20">
									Making circular fashion exclusive, fun & rewarding.
								</p>
								<div class="pb-8 text-center">
									<h2 class="font-['Steelfish'] text-black pb-2 uppercase">Slowfashion</h2>
									<h6>Made in Sweden</h6>
								</div>
								<div
									class="button-container absolute left-[50%] bottom-0 bg-accent h-10 w-32 lg:w-44 lg:h-12 "
								>
									<div class="grid grid-cols-2 h-full w-full p-0 m-0 align-middle">
										<div
											on:click={SwipeComp.goTo(2)}
											id="slide1-left-pointer"
											class="has-pointer-event cursor-pointer w-full h-full flex flex-col items-center justify-center"
										>
											<svg
												width="21px"
												height="21px"
												viewBox="0 0 21 21"
												xmlns="http://www.w3.org/2000/svg"
												><g
													fill="none"
													fill-rule="evenodd"
													stroke="currentColor"
													stroke-linecap="round"
													stroke-linejoin="round"
													transform="translate(3 6)"
													><path d="m4.499.497-3.999 4.002 4 4.001" /><path d="m13.5 4.5h-13" /></g
												></svg
											>
										</div>
										<div
											on:click={nextSlide}
											id="slide1-right-pointer"
											class="has-pointer-events cursor-pointer w-full h-full flex flex-col items-center justify-center"
										>
											<svg
												width="21px"
												height="21px"
												viewBox="0 0 21 21"
												xmlns="http://www.w3.org/2000/svg"
												><g
													fill="none"
													fill-rule="evenodd"
													stroke="currentColor"
													stroke-linecap="round"
													stroke-linejoin="round"
													transform="translate(4 6)"
													><path d="m9.5.497 4 4.002-4 4.001" /><path d="m.5 4.5h13" /></g
												></svg
											>
										</div>
									</div>
								</div>
							</div>
						</div>
					</SwipeItem>
					<SwipeItem>
						<div class="h-[28rem] grid grid-rows-1 grid-cols-2">
							<div
								id="left-side2"
								class="bg-secondary flex flex-col items-center justify-between h-full"
							>
								<p class="text-2xl mt-12">Our Mission</p>
								<p class="max-w-[70%] text-center mb-20">
									We believe circularity fashion doesn't need to exist only in fast trends.
								</p>
								<div class="pb-8 text-center">
									<h2 class="font-['Steelfish'] text-black pb-2 uppercase">Slowfashion</h2>
									<h6>Made in Sweden</h6>
								</div>
								<div
									class="button-container absolute right-[50%] bottom-0 bg-accent h-10 w-32 lg:w-44 lg:h-12"
								>
									<div class="grid grid-cols-2 h-full w-full p-0 m-0 align-middle">
										<div
											on:click={prevSlide}
											id="slide2-left-pointer"
											class="has-pointer-event cursor-pointer w-full h-full flex flex-col items-center justify-center"
										>
											<svg
												width="21px"
												height="21px"
												viewBox="0 0 21 21"
												xmlns="http://www.w3.org/2000/svg"
												><g
													fill="none"
													fill-rule="evenodd"
													stroke="currentColor"
													stroke-linecap="round"
													stroke-linejoin="round"
													transform="translate(3 6)"
													><path d="m4.499.497-3.999 4.002 4 4.001" /><path d="m13.5 4.5h-13" /></g
												></svg
											>
										</div>
										<div
											on:click={nextSlide}
											id="slide2-right-pointer"
											class="has-pointer-event cursor-pointer w-full h-full flex flex-col items-center justify-center"
										>
											<svg
												width="21px"
												height="21px"
												viewBox="0 0 21 21"
												xmlns="http://www.w3.org/2000/svg"
												><g
													fill="none"
													fill-rule="evenodd"
													stroke="currentColor"
													stroke-linecap="round"
													stroke-linejoin="round"
													transform="translate(4 6)"
													><path d="m9.5.497 4 4.002-4 4.001" /><path d="m.5 4.5h13" /></g
												></svg
											>
										</div>
									</div>
								</div>
							</div>
							<div
								id="right-side2"
								class="w-full bg-cover bg-center lg:h-full"
								style="background-image: url('https://github.com/mrkarstrom/sfab/blob/main/src/lib/images/hand-hold-on-horses.svg?raw=true')"
							/>
						</div>
					</SwipeItem>
					<SwipeItem>
						<div class="h-[28rem] grid grid-rows-1 grid-cols-2">
							<div
								id="left-side3"
								class="w-full bg-cover bg-center lg:h-full"
								style="background-image: url('https://github.com/mrkarstrom/sfab/blob/main/src/lib/images/man-glass.svg?raw=true')"
							/>
							<div
								id="right-side3"
								class="bg-secondary flex flex-col items-center justify-between h-full"
							>
								<p class="text-2xl mt-12">Our Mission</p>
								<p class="max-w-[70%] text-center mb-20">
									We offer a simple to use, responsive, rewarding & trustworthy platform & we make
									circularity in fashion trendy
								</p>
								<div class="pb-8 text-center">
									<h2 class="font-['Steelfish'] text-black pb-2 uppercase">Slowfashion</h2>
									<h6>Made in Sweden</h6>
								</div>
								<div
									class="button-container absolute left-[50%] bottom-0 bg-accent h-10 w-32 lg:w-44 lg:h-12"
								>
									<div class="grid grid-cols-2 h-full w-full p-0 m-0 align-middle">
										<div
											on:click={prevSlide}
											id="slide3-left-pointer"
											class="has-pointer-event cursor-pointer w-full h-full flex flex-col items-center justify-center"
										>
											<svg
												width="21px"
												height="21px"
												viewBox="0 0 21 21"
												xmlns="http://www.w3.org/2000/svg"
												><g
													fill="none"
													fill-rule="evenodd"
													stroke="currentColor"
													stroke-linecap="round"
													stroke-linejoin="round"
													transform="translate(3 6)"
													><path d="m4.499.497-3.999 4.002 4 4.001" /><path d="m13.5 4.5h-13" /></g
												></svg
											>
										</div>
										<div
											on:click={SwipeComp.goTo(0)}
											id="slide3-right-pointer"
											class="has-pointer-event cursor-pointer w-full h-full flex flex-col items-center justify-center"
										>
											<svg
												width="21px"
												height="21px"
												viewBox="0 0 21 21"
												xmlns="http://www.w3.org/2000/svg"
												><g
													fill="none"
													fill-rule="evenodd"
													stroke="currentColor"
													stroke-linecap="round"
													stroke-linejoin="round"
													transform="translate(4 6)"
													><path d="m9.5.497 4 4.002-4 4.001" /><path d="m.5 4.5h13" /></g
												></svg
											>
										</div>
									</div>
								</div>
							</div>
						</div>
					</SwipeItem>
				</Swipe>
			</div>
		</div>
	{/if}
</div>

<style>
	.has-pointer-event {
		pointer-events: fill;
	}
</style>
