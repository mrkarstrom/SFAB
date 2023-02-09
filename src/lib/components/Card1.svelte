<script>
	import * as animateScroll from 'svelte-scrollto';
</script>

<a
	class="flex items-center justify-center h-[90%] w-[70px] bg-inherit rounded-lg z-20"
	href="#slide4"
	on:click={() => animateScroll.scrollTo({ element: '#slide4', offset: -300 })}
/>

<div id="center-box" class="h-full w-[810px] gap-0 grid grid-rows-1 grid-cols-3 content-center ">
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
	href="#slide2"
	on:click={() => animateScroll.scrollTo({ element: '#slide2', offset: -300 })}
/>
