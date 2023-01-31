<script>
	import Card3 from './Card3.svelte';
	import Card4 from './Card4.svelte';
	import Card2 from './Card2.svelte';
	import Card1 from './Card1.svelte';
</script>

<div id="spacer" class="w-full h-[200px] flex justify-center items-center  ">
	<div class="relative items-center h-[400px] w-[950px] drop-shadow-xl -translate-y-[200px] ">
		<!-- Left Arrow Box -->
		<div
			id="left-arrow-box"
			class="absolute left-0 top-1/2 -translate-y-1/2  justify-center h-[90%] w-[70px] bg-secondary rounded-lg z-0"
		>
			<div class="flex items-center justify-center h-full w-full">
				<svg xmlns="http://www.w3.org/2000/svg" height="1rem" fill="black" viewBox="0 0 512 512">
					<path
						d="M109.3 288L480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288z"
					/></svg
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
				<svg xmlns="http://www.w3.org/2000/svg" height="1rem" fill="black" viewBox="0 0 512 512">
					<path
						d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
					/></svg
				>
			</div>
		</div>
	</div>
</div>
