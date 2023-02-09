<script>
	import Title from './Title.svelte';
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
			<div
				id="wrapper"
				class="opacity-[var(--op)] hidden w-full justify-center items-center lg:flex"
			>
				<div id="box-wrapper" class="w-full h-auto bg-secondary flex flex-col">
					<div id="title-wrap">
						<div id="title-text" class="flex flex-row justify-between">
							<Title>
								<p class="text-4xl ml-16 py-6 font-normal">A WINDOW into the App</p>
							</Title>
							<!-- <p class="text-4xl ml-16 py-6 font-normal">A WINDOW into the App</p> -->
							<div
								class="bounce-right flex flex-row items-center justify-center w-auto space-x-3 mr-10"
							>
								<h5>View All</h5>
								<svg
									width="20px"
									height="20px"
									viewBox="0 0 20 20"
									version="1.1"
									xmlns="http://www.w3.org/2000/svg"
									><g id="layer1"
										><path
											d="M 14 7 L 17 10 L 0 10 L 0 11 L 17 11 L 14 14 L 15.5 14 L 19 10.5 L 15.5 7 L 14 7 z "
											style="fill:#222222; fill-opacity:1; stroke:none; stroke-width:0px;"
										/></g
									></svg
								>
							</div>
						</div>
					</div>
					<div class="content-container grid grid-cols-2 h-auto">
						<div class="left-side flex flex-col items-center w-full">
							<div class="DG-card h-auto p-4 w-full">
								<div class="title-text font-medium leading-6 pb-1">
									<h4 class="w-60 whitespace-normal pb-1 ">DANCING in Dolce & Gabbana</h4>
								</div>
								<img
									src="https://github.com/mrkarstrom/sfab/blob/main/src/lib/images/desert-man.png?raw=true"
									alt="Desert Man"
									class="hover:-translate-y-2 transition ease-in-out delay-150"
								/>
								<h6 class="pt-1.5">Sweden</h6>
								<h5>Spring 2023</h5>
							</div>
							<div class="WF-card h-auto w-[60%] pt-24 pb-10">
								<div class="title-text font-medium leading-6 pb-1">
									<h4 class="pb-1">WEEK Fashion</h4>
								</div>
								<img
									src="https://github.com/mrkarstrom/sfab/blob/main/src/lib/images/woman-white-rose.svg?raw=true"
									alt="Woman Rose"
									class="hover:-translate-y-2 transition ease-in-out delay-150"
								/>
								<h6 class="pt-1.5">Stockholm</h6>
								<h5>February 2023</h5>
							</div>
						</div>
						<div class="right-side grid grid-rows-2">
							<div class="SF-container flex justify-end pt-12 pr-4 w-full ">
								<div class="SF-card h-auto w-[60%]">
									<div class="title-text font-medium leading-6 pb-1">
										<h4 class="pb-1">STYLE & Fashion</h4>
									</div>
									<img
										src="https://github.com/mrkarstrom/sfab/blob/main/src/lib/images/face-cover-reading.jpg?raw=true"
										alt="Cover Reading"
										class="hover:-translate-y-2 transition ease-in-out delay-150"
									/>
									<h6 class="pt-1.5">Sweden</h6>
									<h5>Summer 2023</h5>
								</div>
							</div>
							<div class="OE-container flex flex-col items-center justify-start">
								<div class="OE-card h-auto w-[60%] -translate-y-14">
									<div class="title-text font-medium leading-6 pb-1">
										<h4 class="pb-1">ONE Eye</h4>
									</div>
									<img
										src="https://github.com/mrkarstrom/sfab/blob/main/src/lib/images/woman-gray-coat.png?raw=true"
										alt="One Eye"
										class="hover:-translate-y-2 transition ease-in-out delay-150"
									/>
									<h6 class="pt-1.5">Stockholm</h6>
									<h5>September 2023</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
	:root {
		--op: 1;
	}
</style>
