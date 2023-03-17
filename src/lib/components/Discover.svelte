<script>
	import { fly } from 'svelte/transition';
	import { inview } from 'svelte-inview';
	import Title from './Title.svelte';
	import { Swipe, SwipeItem } from 'svelte-swipe';
	const swipeConfig = {
		autoplay: false,
		showIndicators: false,
		transitionDuration: 1500,
		defaultIndex: 0
	};
	let isInView;
	let SwipeComp;

	function nextSlide() {
		SwipeComp.nextItem();
	}

	function prevSlide() {
		SwipeComp.prevItem();
	}
</script>

<div
	class="flex flex-col items-center justify-center w-full h-full"
	use:inview={{ unobserveOnEnter: true, rootMargin: '-10%' }}
	on:change={({ detail }) => {
		isInView = detail.inView;
	}}
>
	{#if isInView}
		<div
			in:fly={{ y: 500, duration: 1500 }}
			class="flex flex-col items-center justify-center w-full h-full"
		>
			<div
				id="discover-container"
				class=" flex items-center justify-center w-full h-full md:px-24
												"
			>
				<div id="discover-box" class="flex flex-col items-center justify-center w-full h-full px-2">
					<div id="discover-text" class="w-full">
						<Title>
							<p class="text-4xl font-normal text-black">DISCOVER in the app</p>
						</Title>
						<h5 class="mt-5 lg:w-[620px] whitespace-normal">
							Find your unique expression by matching pieces from SlowFashion's newly arrived items
							now available in the app.
						</h5>
					</div>

					<!-- Swiper-outer starts here -->
					<div
						id="swiper-container"
						class="relative card-body w-full flex flex-start min-h-[400px] border-2
														lg:hidden
					"
					>
						<button
							id="left-arrow"
							class="absolute -left-10 top-1/2 -translate-y-1/2 z-10"
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
								><polyline points="20 24 12 32 20 40" /><line
									x1="52"
									y1="32"
									x2="12"
									y2="32"
								/></svg
							>
						</button>

						<!-- Swiper-inner starts here -->
						<Swipe {...swipeConfig} bind:this={SwipeComp}>
							<!-- Slide 1 Start -->
							<SwipeItem>
								<div id="image-box1" class="card w-full h-full rounded-sm items-center m-4">
									<div
										id="textbox1"
										class="absolute left-2 right-2 flex-col flex-start items-center justify-center h-auto bg-accent mx-1 mt-2 py-2 px-4 rounded 
								lg:mx-1
								lg:px-2
								xl:mx-3
								"
									>
										<p
											class="w-full font-semibold text-xs text-left
											xl:text-sm
											"
										>
											Michael Kors watches in beautiful gold
										</p>
										<p class="w-full font-thin text-xs text-left lg:flex">
											It's easy to elevate any outfit and add a bit of flair
										</p>
									</div>
									<figure>
										<img
											src="https://github.com/mrkarstrom/sfab/blob/main/src/lib/images/perfume.svg?raw=true"
											alt="Perfume"
										/>
									</figure>
								</div>
							</SwipeItem>
							<SwipeItem>
								<div
									id="image-box2"
									class="card max-w-80 min-w-[380px] rounded-sm items-center m-4 
									lg:min-w-full
									lg:m-0"
								>
									<div
										id="textbox2"
										class="absolute left-2 right-2 flex-col flex-start items-center justify-center h-auto bg-accent mx-1 mt-2 py-2 px-4 rounded 
								lg:mx-1
								lg:px-2
								xl:mx-3
								"
									>
										<p
											class="w-full font-semibold text-xs text-left
										xl:text-sm"
										>
											Prada exclusive bag decorated with sparkling metal accents
										</p>
										<p class="w-full font-thin text-xs text-left">
											Express your elegance and modernism
										</p>
									</div>
									<figure>
										<img
											src="https://github.com/mrkarstrom/sfab/blob/main/src/lib/images/bag-watch-coat.svg?raw=true"
											alt="Bag, Watch, Coat"
										/>
									</figure>
								</div>
							</SwipeItem>
							<SwipeItem>
								<div
									id="image-box3"
									class="card max-w-80 min-w-[380px] rounded-sm items-center m-4 
									lg:min-w-full
									lg:m-0"
								>
									<div
										id="textbox3"
										class="absolute left-2 right-2 flex-col flex-start items-center justify-center h-auto bg-accent mx-1 mt-2 py-2 px-4 rounded 
								lg:mx-1
								lg:px-2
								xl:mx-3
								"
									>
										<p
											class="w-full font-semibold text-xs text-left 
											xl:text-sm"
										>
											Exclusive leather GUCCI&reg; Bags
										</p>
										<p
											class="w-full font-thin text-xs text-left
											"
										>
											Influential, Innovative, Progressive
										</p>
									</div>
									<figure>
										<img
											src="https://github.com/mrkarstrom/sfab/blob/main/src/lib/images/gucci-bag-black.svg?raw=true'"
											alt="Gucci Bag"
										/>
									</figure>
								</div>
							</SwipeItem>
						</Swipe>
						<!-- Swiper-inner ends here -->

						<button
							id="right-arrow"
							class="absolute top-1/2 -translate-y-1/2 -right-10 z-20"
							on:click={nextSlide}
						>
							<svg
								width="2.5rem"
								class="bounce-right"
								viewBox="0 0 64 64"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								stroke="#000000"
								><polyline points="44 40 52 32 44 24" /><line
									x1="52"
									y1="32"
									x2="12"
									y2="32"
								/></svg
							>
						</button>
					</div>
					<!-- Swiper-outer ends here -->

					<!-- Large view starts here -->
					<div
						id="three-images-container"
						class="justify-center items-center h-full w-full max-w-[1300px] pt-8 hidden
													lg:grid
													lg:gap-4
													lg:grid-rows-1
													lg:grid-cols-3
													"
					>
						<div
							id="image-box1"
							class="card max-w-80 min-w-[380px] rounded-sm items-center m-4 
									lg:min-w-full
									lg:m-0
									"
						>
							<div
								id="textbox1"
								class="absolute left-2 right-2 flex-col flex-start items-center justify-center h-auto bg-accent mx-1 mt-2 py-2 px-4 rounded 
								lg:mx-1
								lg:px-2
								xl:mx-3
								"
							>
								<p
									class="w-full font-semibold text-xs text-left
											xl:text-sm
											"
								>
									Michael Kors watches in beautiful gold
								</p>
								<p class="w-full font-thin text-xs text-left lg:flex">
									It's easy to elevate any outfit and add a bit of flair
								</p>
							</div>
							<figure>
								<img
									src="https://github.com/mrkarstrom/sfab/blob/main/src/lib/images/perfume.svg?raw=true"
									alt="Perfume"
								/>
							</figure>
						</div>
						<div
							id="image-box2"
							class="card max-w-80 min-w-[380px] rounded-sm items-center m-4 
									lg:min-w-full
									lg:m-0"
						>
							<div
								id="textbox2"
								class="absolute left-2 right-2 flex-col flex-start items-center justify-center h-auto bg-accent mx-1 mt-2 py-2 px-4 rounded 
								lg:mx-1
								lg:px-2
								xl:mx-3
								"
							>
								<p
									class="w-full font-semibold text-xs text-left
										xl:text-sm"
								>
									Prada exclusive bag decorated with sparkling metal accents
								</p>
								<p class="w-full font-thin text-xs text-left">
									Express your elegance and modernism
								</p>
							</div>
							<figure>
								<img
									src="https://github.com/mrkarstrom/sfab/blob/main/src/lib/images/bag-watch-coat.svg?raw=true"
									alt="Bag, Watch, Coat"
								/>
							</figure>
						</div>
						<div
							id="image-box3"
							class="card max-w-80 min-w-[380px] rounded-sm items-center m-4 
									lg:min-w-full
									lg:m-0"
						>
							<div
								id="textbox3"
								class="absolute left-2 right-2 flex-col flex-start items-center justify-center h-auto bg-accent mx-1 mt-2 py-2 px-4 rounded 
								lg:mx-1
								lg:px-2
								xl:mx-3
								"
							>
								<p
									class="w-full font-semibold text-xs text-left 
											xl:text-sm"
								>
									Exclusive leather GUCCI&reg; Bags
								</p>
								<p
									class="w-full font-thin text-xs text-left
											"
								>
									Influential, Innovative, Progressive
								</p>
							</div>
							<figure>
								<img
									src="https://github.com/mrkarstrom/sfab/blob/main/src/lib/images/gucci-bag-black.svg?raw=true'"
									alt="Gucci Bag"
								/>
							</figure>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>
