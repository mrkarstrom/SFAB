<script>
	import Card3 from './Card3.svelte';
	import Card4 from './Card4.svelte';
	import Card2 from './Card2.svelte';
	import Card1 from './Card1.svelte';
</script>

<div id="spacer" class="w-full h-[200px] flex justify-center items-center  ">
	<div
		class="relative items-center  drop-shadow-xl -translate-y-[200px] lg:h-[400px] lg:w-[950px] xl:h-[600px] xl:w-[1200px]"
	>
		<!--  Left Arrow Box -->
		<div
			id="left-arrow-box"
			class="absolute left-0 top-1/2 -translate-y-1/2  justify-center h-[90%] w-[70px] bg-secondary rounded-lg z-0"
		>
			<div class="flex items-center justify-center h-full w-full">
				<!-- arrow-left-svgrepo-com -->
				<svg
					width="2.5rem"
					class="bounce-left"
					viewBox="0 0 64 64"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					stroke="#000000"
					><polyline points="20 24 12 32 20 40" /><line x1="52" y1="32" x2="12" y2="32" /></svg
				>
			</div>
		</div>

		<!-- Carousel start -->
		<div class="carousel w-full h-full z-10">
			<!-- Slide 1 Start -->
			<div id="slide1" class="carousel-item items-center">
				<div class="flex items-center justify-center w-full h-full">
					<Card1 />
				</div>
			</div>
			<!-- Slide1 End -->

			<!-- Slide 2 Start -->
			<div id="slide2" class="carousel-item items-center">
				<div class="flex items-center justify-center w-full h-full">
					<Card2 />
				</div>
			</div>
			<!-- Slide2 End -->

			<!-- Slide 3 Start -->
			<div id="slide3" class="carousel-item items-center">
				<div class="flex items-center justify-center w-full h-full">
					<Card3 />
				</div>
			</div>
			<!-- Slide3 End -->

			<!-- Slide 4 Start -->
			<div id="slide4" class="carousel-item items-center">
				<div class="flex items-center justify-center w-full h-full">
					<Card4 />
				</div>
			</div>
			<!-- Slide4 End -->
		</div>
		<!-- Carousel end -->

		<!-- Right Arrow Box -->
		<div
			id="right-arrow-box"
			class="absolute right-0 top-1/2 -translate-y-1/2 justify-center h-[90%] w-[70px] bg-secondary rounded-lg z-0"
		>
			<div class="flex items-center justify-center h-full w-full">
				<svg
					width="2.5rem"
					class="bounce-right"
					viewBox="0 0 64 64"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					stroke="#000000"
					><polyline points="44 40 52 32 44 24" /><line x1="52" y1="32" x2="12" y2="32" /></svg
				>
			</div>
		</div>
	</div>
</div>
