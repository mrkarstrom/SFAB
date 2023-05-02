<script>
	import { fly } from 'svelte/transition';
	import { inview } from 'svelte-inview';
	import Title from '$lib/components/Title.svelte';

	let isInView;
	import { Swipe, SwipeItem } from 'svelte-swipe';
	const swipeConfig = {
		autoplay: false,
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
	class="flex h-[800px]
				lg:hidden"
	use:inview={{ unobserveOnEnter: true, rootMargin: '-10%' }}
	on:change={({ detail }) => {
		isInView = detail.inView;
	}}
>
	{#if isInView}
		<div in:fly={{ y: 500, duration: 1500 }}>
			<div class="h-full w-screen">
				<Swipe {...swipeConfig} bind:this={SwipeComp}>
					<SwipeItem>
						<div class="grid h-[800px] grid-rows-2 place-content-center grid-cols-1">
							<div
								id="top-box1"
								class="bg-secondary relative flex flex-col items-center justify-between h-full"
							>
								<Title>
									<p class="text-3xl mt-12">Our Mission</p>
								</Title>
								<p class="text-xl max-w-[70%] text-center mb-14">
									Making circular fashion exclusive, fun & rewarding.
								</p>
								<div class="pb-20 text-center">
									<h2 class="font-['Steelfish'] text-black pb-2 uppercase">Slowfashion</h2>
									<h6>Made in Sweden</h6>
								</div>
								<div
									id="button-container1"
									class="absolute left-[50%] -translate-x-1/2 bottom-0 bg-accent h-12 w-44 "
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
							<div
								id="Bottom1"
								class="w-full bg-cover bg-center h-full"
								style="background-image: url('https://github.com/mrkarstrom/sfab/blob/main/src/lib/images/small/active/woman-chair.jpg?raw=true')"
							/>
						</div>
					</SwipeItem>
					<SwipeItem>
						<div class="grid h-[800px] grid-rows-2 place-content-center grid-cols-1">
							<div
								id="top2"
								class="w-full bg-cover bg-center h-full"
								style="background-image: url('https://github.com/mrkarstrom/sfab/blob/main/src/lib/images/small/active/hand-hold-on-horses.jpg?raw=true')"
							/>
							<div
								id="bottom-box2"
								class="bg-secondary relative flex flex-col items-center justify-between h-full"
							>
								<p class="text-3xl mt-12">Our Mission</p>
								<p class="text-xl max-w-[70%] text-center mb-14">
									We believe circularity fashion doesn't need to exist only in fast trends.
								</p>
								<div class="pb-20 text-center">
									<h2 class="font-['Steelfish'] text-black pb-2 uppercase">Slowfashion</h2>
									<h6>Made in Sweden</h6>
								</div>
								<div
									id="button-container2"
									class="absolute left-[50%] -translate-x-1/2 bottom-0 bg-accent h-12 w-44 "
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
						</div></SwipeItem
					>
					<SwipeItem>
						<div class="grid h-[800px] grid-rows-2 place-content-center grid-cols-1">
							<div
								id="top-box3"
								class="bg-secondary relative flex flex-col items-center justify-between h-full"
							>
								<p class="text-3xl mt-12">Our Mission</p>
								<p class="text-xl max-w-[70%] text-center mb-14">
									We offer a simple to use, responsive, rewarding & trustworthy platform & we make
									circularity in fashion trendy
								</p>
								<div class="pb-20 text-center">
									<h2 class="font-['Steelfish'] text-black pb-2 uppercase">Slowfashion</h2>
									<h6>Made in Sweden</h6>
								</div>
								<div
									id="button-container3"
									class="absolute left-[50%] -translate-x-1/2 bottom-0 bg-accent h-12 w-44 "
								>
									<div class="grid grid-cols-2 h-full w-full p-0 m-0 align-middle">
										<div
											on:click={SwipeComp.goTo(1)}
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
											on:click={SwipeComp.goTo(0)}
											id="slide3-right-pointer"
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
							<div
								id="Bottom3"
								class="w-full bg-cover bg-center h-full"
								style="background-image: url('https://github.com/mrkarstrom/sfab/blob/main/src/lib/images/small/active/man-glass.jpg?raw=true')"
							/>
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
