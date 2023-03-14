<script>
	import { fly } from 'svelte/transition';
	import { inview } from 'svelte-inview';
	import Title from './Title.svelte';
	let isInView;
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
				class=" flex items-center justify-center w-full h-full
												"
			>
				<div id="discover-box" class="flex flex-col items-center justify-center w-full h-full px-2">
					<div id="discover-text" class="w-full px-8">
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
						class="flex flex-col justify-center items-center h-full w-full
													lg:grid
													lg:gap-4
													lg:grid-rows-1
													lg:grid-cols-3
													lg:h-96
													"
					>
						<div class="card w-80 rounded-sm items-center m-4 lg:m-0">
							<div
								id="textbox1"
								class="absolute left-2 right-2 flex-col flex-start items-center justify-center h-auto bg-accent mx-3 mt-2 py-2 px-4 rounded 
								lg:flex
								"
							>
								<p class="w-full font-semibold text-xs text-left">
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
						<div class="card w-80 rounded-sm items-center m-4 lg:m-0">
							<div
								id="textbox2"
								class="absolute left-2 right-2 flex-col flex-start items-center justify-center h-auto bg-accent mx-3 mt-2 py-2 px-4 rounded 
								lg:flex
								"
							>
								<p class="w-full font-semibold text-xs text-left">
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
						<div class="card w-80 rounded-sm items-center m-4 lg:m-0">
							<div
								id="textbox3"
								class="absolute left-2 right-2 flex-col flex-start items-center justify-center h-auto bg-accent mx-3 mt-2 py-2 px-4 rounded 
								lg:flex
								"
							>
								<p class="w-full font-semibold text-xs text-left">
									Exclusive leather GUCCI&reg; Bags
								</p>
								<p class="w-full font-thin text-xs text-left">
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
