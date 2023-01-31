<script>
	import Card1 from './Card1.svelte';
	import Card2 from './Card2.svelte';
	import Card3 from './Card3.svelte';
	import Card4 from './Card4.svelte';
	import * as animateScroll from 'svelte-scrollto';
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
			<div id="slide1" class="carousel-item items-center">
				<div class="flex items-center justify-center w-full h-full">
					<a
						class="flex items-center justify-center h-[90%] w-[70px] bg-inherit rounded-lg z-20"
						href="#slide4"
						on:click={() => animateScroll.scrollTo({ element: '#slide4', offset: -300 })}
					/>

					<div
						id="center-box"
						class="h-full w-[810px] gap-0 grid grid-rows-1 grid-cols-3 content-center "
					>
						<div
							id="left-box-part"
							class="bg-white flex flex-col items-center justify-between w-full h-full rounded-lg lg:pt-24 lg:pb-6 lg:rounded-lg"
						>
							<div
								id=" download-icon"
								class="w-full h-full flex flex-col items-center justify-center pt-12 lg:w-[90px] lg:h-[90px]"
							>
								<img
									src="https://yesweb.se/sfab/img/mockup/download-app-icon.svg"
									width="120px"
									alt=""
								/>
								<h6 class="hidden text-center whitespace-nowrap pt-14 lg:flex">
									Honest | Smooth | Desirable
								</h6>
							</div>
							<button
								id="join-button"
								class="bg-accent flex items-center justify-center h-10 w-60 rounded-md uppercase text-primary hover:bg-accent"
							>
								<h5>Join Slowfashion</h5>
							</button>
						</div>
						<div class="h-full w-full col-start-2 col-span-2 items-center overflow-y-hidden">
							<img src="src\lib\images\aesthetic-phone.png" alt="" />
						</div>
					</div>
					<a
						class="flex items-center justify-center h-[90%] w-[70px] bg-inherit rounded-lg z-20"
						href="#slide2"
						on:click={() => animateScroll.scrollTo({ element: '#slide2', offset: -300 })}
					/>
				</div>
			</div>
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
