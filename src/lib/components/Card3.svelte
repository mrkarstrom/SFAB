<script>
	import * as animateScroll from 'svelte-scrollto';
</script>

<a
	class="flex items-center justify-center h-[90%] w-[70px] bg-inherit rounded-lg z-20"
	href="#slide2"
	on:click={() => animateScroll.scrollTo({ element: '#slide2', offset: -300 })}
/>

<div id="center-box" class="h-full w-[810px] gap-0 grid grid-rows-1 grid-cols-3 content-center ">
	<div
		id="left-box-part"
		class="bg-white flex flex-col items-center justify-around w-full h-full rounded-lg "
	>
		<div
			id="textbox-1"
			class="items-center justify-center ml-8 mt-10 h-auto bg-accent py-1 px-2 rounded"
		>
			<p class="font-normal text-[13px]">Be a beautiful part of the circular movement</p>
		</div>
		<div
			id="textbox-2"
			class="items-center justify-center  h-auto bg-accent mr-auto mb-8 py-1 px-2 rounded"
		>
			<p class="font-normal text-[13px]">Discover your new fashion</p>
		</div>
	</div>

	<div class="h-full w-full col-start-2 col-span-2 items-center overflow-y-hidden">
		<div class="relative h-full w-full col-start-2 col-span-2 items-center overflow-y-hidden">
			<div class="absolute left-8 bottom-36">
				<img
					id="spinning-circle"
					src="https://github.com/mrkarstrom/sfab/blob/main/src/lib/images/Card3-spinner.png?raw=true"
					width="110px"
					alt=""
				/>
				<img
					class="z-10 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
					src="https://github.com/mrkarstrom/sfab/blob/main/src/lib/images/download-box-icon-card3.png?raw=true"
					width="40px"
					alt=""
				/>
			</div>
			<img
				src="https://github.com/mrkarstrom/sfab/blob/main/src/lib/images/Card3-image.jpeg?raw=true"
				alt=""
			/>
		</div>
	</div>
</div>
<a
	class="flex items-center justify-center h-[90%] w-[70px] bg-inherit rounded-lg z-20"
	href="#slide4"
	on:click={() => animateScroll.scrollTo({ element: '#slide4', offset: -300 })}
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
