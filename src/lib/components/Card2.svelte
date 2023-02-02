<script>
	import * as animateScroll from 'svelte-scrollto';
</script>

<a
	class="flex items-center justify-center h-[90%] w-[70px] bg-inherit rounded-lg z-20"
	href="#slide1"
	on:click={() => animateScroll.scrollTo({ element: '#slide1', offset: -300 })}
/>

<div id="center-box" class="h-full w-[810px] gap-0 grid grid-rows-1 grid-cols-3 content-center ">
	<div
		id="left-box-part"
		class="bg-white flex flex-col items-center justify-between w-full h-full rounded-lg lg:pt-24 lg:pb-6 lg:rounded-lg"
	>
		<h6 class="hidden text-center w-32 whitespace-wrap pt-14 lg:flex">
			Give someone the opportunity to love what you don't use anymore.
		</h6>
		<button
			id="join-button"
			class="bg-accent flex items-center justify-center h-10 w-60 rounded-md uppercase text-primary hover:bg-black hover:text-white transition duration-300 hover:ease-in-out"
		>
			<h5>Join Slowfashion</h5>
		</button>
	</div>
	<div class="relative h-full w-full col-start-2 col-span-2 items-center overflow-y-hidden">
		<div class="absolute left-1/2 -translate-x-1/2 bottom-12">
			<img
				id="spinning-circle"
				src="https://github.com/mrkarstrom/sfab/blob/main/src/lib/images/Card2-spinner.png?raw=true"
				width="110px"
				alt=""
			/>
			<img
				class="z-10 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
				src="https://github.com/mrkarstrom/sfab/blob/main/src/lib/images/download-box-icon-beige.png?raw=true"
				width="40px"
				alt=""
			/>
		</div>
		<img
			src="https://github.com/mrkarstrom/sfab/blob/main/src/lib/images/Card2-image.jpeg?raw=true"
			alt=""
		/>
	</div>
</div>
<a
	class="flex items-center justify-center h-[90%] w-[70px] bg-inherit rounded-lg z-20"
	href="#slide3"
	on:click={() => animateScroll.scrollTo({ element: '#slide3', offset: -300 })}
/>

<style>
	#spinning-circle {
		animation-name: spinning-circle;
		animation-duration: 8s;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
	}

	@keyframes spinning-circle {
		0% {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg);
		}
		100% {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}
</style>
