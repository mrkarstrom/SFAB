<script>
	import { fly } from 'svelte/transition';
	import { inview } from 'svelte-inview';
	import Title from './Title.svelte';
	let isInView;
</script>

<div
	class="w-full h-auto flex justify-center items-center"
	use:inview={{ unobserveOnEnter: true, rootMargin: '-10%' }}
	on:change={({ detail }) => {
		isInView = detail.inView;
	}}
>
	{#if isInView}
		<div in:fly={{ y: 500, duration: 1500 }}>
			<div
				id="discover-container"
				class="h-full flex items-center w-full justify-center
												"
			>
				<div id="discover-box" class="px-10">
					<div id="discover-title" class="w-full lg:px-6 border-2 border-red-600">
						<Title>
							<p class="text-4xl font-normal text-black">DISCOVER in the app</p>
						</Title>
						<h5 class="mt-5 lg:w-[620px] whitespace-normal">
							Find your unique expression by matching pieces from SlowFashion's newly arrived items
							now available in the app.
						</h5>
					</div>
					<div
						id="image-container"
						class="flex flex-col justify-center items-center h-full w-full border-2 border-black
													md:grid
													md:gap-4
													md:grid-rows-1
													md:grid-cols-3
													md:h-96
													"
					>
						<div
							id="image-box1"
							class="relative aspect-square m-5 w-2/3 bg-[url('https://github.com/mrkarstrom/sfab/blob/main/src/lib/images/perfume.svg?raw=true')] bg-cover md:w-72
							md:m-0"
						>
							<div
								id="textbox1"
								class="flex flex-col flex-start items-center justify-center w-auto h-auto bg-accent mx-3 mt-2 py-2 px-4 rounded"
							>
								<p class="w-full font-semibold text-xs text-left">
									Michael Kors watches in beautiful gold
								</p>
								<p class="w-full font-thin text-xs text-left">
									It's easy to elevate any outfit and add a bit of flair
								</p>
							</div>
						</div>
						<div
							id="image-box2"
							class="relative w-2/3 m-5 aspect-square bg-[url('https://github.com/mrkarstrom/sfab/blob/main/src/lib/images/bag-watch-coat.svg?raw=true')] bg-cover  
							md:w-72
							md:m-0"
						>
							<div
								id="textbox2"
								class="flex flex-col flex-start items-center justify-center w-auto h-auto bg-accent mx-3 mt-2 py-2 px-4 rounded"
							>
								<p class="w-full font-semibold text-xs text-left">
									Prada exclusive bag decorated with sparkling metal accents
								</p>
								<p class="w-full font-thin text-xs text-left">
									Express your elegance and modernism
								</p>
							</div>
						</div>
						<div
							id="image-box3"
							class="relative w-2/3 m-5 aspect-square bg-[url('https://github.com/mrkarstrom/sfab/blob/main/src/lib/images/gucci-bag-black.svg?raw=true')] bg-cover 
							md:w-72
							md:m-0"
						>
							<div
								id="textbox3"
								class="flex flex-col flex-start items-center justify-center w-auto h-auto bg-accent mx-3 mt-2 py-2 px-4 rounded"
							>
								<p class="w-full font-semibold text-xs text-left">
									Exclusive leather GUCCI&reg; Bags
								</p>
								<p class="w-full font-thin text-xs text-left">
									Influential, Innovative, Progressive
								</p>
							</div>
							<!-- <img
								src="https://yesweb.se/sfab/img/mockup/gucci-bag-black.svg"
								alt="Gucci Bag"
								class="w-full"
							/> -->
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>
