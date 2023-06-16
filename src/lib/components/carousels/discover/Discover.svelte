<script>
	import { fly } from 'svelte/transition';
	import { inview } from 'svelte-inview';
	import Title from '$lib/components/Title.svelte';
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
	id="discover-container"
	class="flex flex-col items-center justify-center w-full h-[600px]"
	use:inview={{ unobserveOnEnter: true, rootMargin: '-10%' }}
	on:change={({ detail }) => {
		isInView = detail.inView;
	}}
>
	{#if isInView}
		<div
			id="discover-frame-flying"
			in:fly={{ y: 500, duration: 1500 }}
			class="flex items-center justify-center w-full h-full pl-8"
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
					id="block-container1"
					class="w-[400px] h-[400px] flex flex-col justify-center items-center pt-8
						lg:hidden"
				>
					<div id="swiper" class="w-full h-full flex flex-col items-center justify-center">
						<div
							id="swiper-container"
							class="relative w-full flex items-center justify-center h-full"
						>
							<button
								id="left-arrow"
								class="absolute rounded bg-opacity-40 bg-white left-0 top-1/2 -translate-y-1/2 z-10
										md:-left-20
										md:bg-inherit"
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
							<Swipe {...swipeConfig} bind:this={SwipeComp}>
								<!-- Slide 1 Start -->
								<SwipeItem>
									<div
										id="image-box1"
										class="flex w-full h-full rounded-sm items-center justify-center 
									
									"
									>
										<img
											src="images/small/active/perfume.jpg?raw=true"
											alt="Perfume"
											class="object-cover aspect-square w-[400px] h-[400px]"
										/>
										<div
											id="textbox1"
											class="absolute top-2 left-2 right-2 flex-col flex-start items-center justify-center h-auto bg-accent py-2 px-4 rounded 
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
									</div>
								</SwipeItem>
								<SwipeItem>
									<div
										id="image-box2"
										class="flex w-full h-full rounded-sm items-center justify-center 
									
									"
									>
										<img
											src="images/small/active/bag-watch-coat.jpg?raw=true"
											alt="Bag, Watch, Coat"
											class="w-full h-full"
										/>
										<div
											id="textbox2"
											class="absolute top-2 left-2 right-2 flex-col flex-start items-center justify-center h-auto bg-accent py-2 px-4 rounded 
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
									</div>
								</SwipeItem>
								<SwipeItem>
									<div
										id="image-box3"
										class="flex w-full h-full rounded-sm items-center justify-center 
									
									"
									>
										<img
											src="images/small/active/gucci-bag-black.jpg?raw=true'"
											alt="Gucci Bag"
											class="w-full h-full"
										/>
										<div
											id="textbox3"
											class="absolute top-2 left-2 right-2 flex-col flex-start items-center justify-center h-auto bg-accent py-2 px-4 rounded 
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
									</div>
								</SwipeItem>
							</Swipe>
							<button
								id="right-arrow"
								class="absolute rounded bg-opacity-40 bg-white top-1/2 -translate-y-1/2 right-0 z-20
										md:-right-20
										md:bg-inherit"
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
					</div>
				</div>

				<!-- Large view starts here -->
				<div
					id="three-images-container"
					class="hidden h-full w-full max-w-[1300px] pt-6 pr-6 gap-4 grid-rows-1 grid-cols-3
							lg:grid"
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
							<img src="images/small/active/perfume.jpg?raw=true" alt="Perfume" />
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
							<p class="w-full font-thin text-xs text-left">Express your elegance and modernism</p>
						</div>
						<figure>
							<img src="images/small/active/bag-watch-coat.jpg?raw=true" alt="Bag, Watch, Coat" />
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
							<img src="images/small/active/gucci-bag-black.jpg?raw=true'" alt="Gucci Bag" />
						</figure>
					</div>
				</div>
			</div>
		</div>
		<!-- </div> -->
	{/if}
</div>
