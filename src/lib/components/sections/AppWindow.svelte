<script>
	import Title from '$lib/components/Title.svelte';
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
				id="a-window-into-the-app"
				class="opacity-[var(--op)] w-full justify-center items-center flex"
			>
				<div id="box-wrapper" class="w-full h-auto bg-secondary flex flex-col">
					<div id="title-wrap">
						<div id="title-text" class="flex flex-row justify-between">
							<Title>
								<p class="text-4xl ml-6 py-6 font-normal">A WINDOW into the App</p>
							</Title>
							<div
								class="bounce-right flex flex-row items-center justify-center w-auto space-x-2 mr-6"
							>
								<h5>View All</h5>
								<svg
									width="40px"
									height="auto"
									viewBox="0 0 64 64"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									stroke="#000000"
									><polyline points="44 40 52 32 44 24" /><line
										x1="52"
										y1="32"
										x2="12"
										y2="32"
									/></svg
								>
							</div>
						</div>
					</div>

					<div id="Discover-card-slider" class="grid grid-rows-3 grid-cols-1 w-full lg:hidden">
						<div class="card p-4 w-full">
							<div id="title-text-small1" class="font-medium pb-6">
								<h4 class="text-4xl max-w-[430px] whitespace-normal font-normal ">
									DANCING in Dolce & Gabbana
								</h4>
							</div>
							<img
								src="https://github.com/mrkarstrom/sfab/blob/main/src/lib/images/small/active/desert-man.jpg?raw=true"
								alt="Desert Man"
								class="block hover:-translate-y-2 transition ease-in-out delay-150 md:hidden"
							/>
							<img
								src="https://github.com/mrkarstrom/sfab/blob/main/src/lib/images/large/active/desert-man.png?raw=true"
								alt="Desert Man"
								class="hidden hover:-translate-y-2 transition ease-in-out delay-150 
								md:block"
							/>
							<h5 class="pt-1.5">Sweden, Spring 2023</h5>
						</div>
						<div class="card p-4 w-full">
							<div id="title-text-small2" class="font-medium pb-6">
								<h4 class="text-4xl max-w-[430px] whitespace-normal font-normal ">
									STYLE & Fashion
								</h4>
							</div>
							<img
								src="https://github.com/mrkarstrom/sfab/blob/main/src/lib/images/small/active/woman-white-rose.jpg?raw=true"
								alt="Woman Rose"
								class="block hover:-translate-y-2 transition ease-in-out delay-150 md:hidden"
							/>
							<img
								src="https://github.com/mrkarstrom/sfab/blob/main/src/lib/images/large/active/woman-white-rose.svg?raw=true"
								alt="Woman Rose"
								class="hidden hover:-translate-y-2 transition ease-in-out delay-150 
								md:block"
							/>
							<h5 class="pt-1.5">Sweden, Summer 2023</h5>
						</div>
						<div class="card p-4 w-full">
							<div id="title-text-small3" class="font-medium pb-6">
								<h4 class="text-4xl max-w-[430px] whitespace-normal font-normal ">ONE Eye</h4>
							</div>
							<img
								src="https://github.com/mrkarstrom/sfab/blob/main/src/lib/images/woman-gray-coat.png?raw=true"
								alt="One Eye"
								class="hover:-translate-y-2 transition ease-in-out delay-150"
							/>
							<h5 class="pt-1.5">Stockholm, September 2023</h5>
						</div>
					</div>

					<div
						class="content-container hidden  grid-cols-2 h-auto 
								lg:grid"
					>
						<div class="left-side flex flex-col items-center w-full">
							<div class="DG-card h-auto p-4 w-full">
								<div id="title-text" class="font-medium leading-6 pb-1">
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
