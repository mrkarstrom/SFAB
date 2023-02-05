<script>
	import { fly } from 'svelte/transition';
	import { inview } from 'svelte-inview';

	let isInView;
</script>

<div
	use:inview={{ unobserveOnEnter: true, rootMargin: '-10%' }}
	on:change={({ detail }) => {
		isInView = detail.inView;
	}}
>
	{#if isInView}
		<div in:fly={{ y: 500, duration: 1500 }}>
			<div id="discover-container" class="w-full h-auto hidden lg:flex justify-center">
				<div id="discover-box" class="px-20 w-full">
					<div id="discover-title">
						<p class="text-4xl font-normal text-black">DISCOVER in the app</p>
						<h5 class="mt-5 lg:w-[620px] whitespace-normal">
							Find your unique expression by matching pieces from SlowFashion's newly arrived items
							now available in the app.
						</h5>
					</div>
					<div class="image-container grid grid-cols-3 gap-4 h-96 pt-8">
						<div id="image-box1" class="relative">
							<div
								id="textbox1"
								class="absolute top-2 items-center justify-center w-[90%] h-auto bg-accent mx-3 py-2 px-4 rounded"
							>
								<p class="font-semibold text-xs">Michael Kors watches in beautiful gold</p>
								<p class="font-thin text-[10px]">
									It's easy to elevate any outfit and add a bit of flair
								</p>
							</div>
							<img src="https://yesweb.se/sfab/img/mockup/perfume.svg" alt="Perfume" />
						</div>
						<div id="image-box2" class="relative">
							<div
								id="textbox2"
								class="absolute top-2 items-center justify-center w-[90%] h-auto bg-accent mx-3 py-2 px-4 rounded"
							>
								<p class="font-semibold text-xs">
									Prada exclusive bag decorated with sparkling metal accents
								</p>
								<p class="font-thin text-[10px]">Express your elegance and modernism</p>
							</div>
							<img src="https://yesweb.se/sfab/img/mockup/bag-watch-coat.svg" alt="Prada Bag" />
						</div>
						<div id="image-box3" class="relative">
							<div
								id="textbox3"
								class="absolute top-2 items-center justify-center w-[90%] h-auto bg-accent mx-3 py-2 px-4 rounded"
							>
								<p class="font-semibold text-xs">Exclusive leather GUCCI&reg; Bags</p>
								<p class="font-thin text-[10px]">Influential, Innovative, Progressive</p>
							</div>
							<img src="https://yesweb.se/sfab/img/mockup/gucci-bag-black.svg" alt="Gucci Bag" />
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>
