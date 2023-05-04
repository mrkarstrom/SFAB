<script>
	import Countdown from '$lib/components/sections/Countdown.svelte';
</script>

<div
	id="container-box-countdown"
	class="h-full w-auto lg:w-[810px] gap-0 grid grid-rows-1 grid-cols-3 content-center z-30"
>
	<div
		id="left-box-part"
		class="bg-white flex flex-col items-center justify-between w-full h-full rounded-lg pt-12"
	>
		<div class="flex flex-col items-center justify-center pt-2 w-[90px] h-[90px]">
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
			<h6 class="text-center whitespace-nowrap pt-4 ">Honest | Smooth | Desirable</h6>
		</div>
		<Countdown />
	</div>
	<div class="h-full w-full col-start-2 col-span-2 items-center overflow-y-hidden">
		<img
			src="https://github.com/mrkarstrom/sfab/blob/main/src/lib/images/small/active/Card1-image.jpg?raw=true"
			alt=""
			class="block md:hidden"
		/>
		<img
			src="https://github.com/mrkarstrom/sfab/blob/main/src/lib/images/large/active/Card1-image.jpeg?raw=true"
			alt=""
			class="hidden md:block"
		/>
	</div>
</div>
