<script>
	import Title from '$lib/components/Title.svelte';
	import { fly } from 'svelte/transition';
	import { inview } from 'svelte-inview';
	import CountdownSmall from '../CountdownSmall.svelte';
	let isInView;
</script>

<div
	use:inview={{ unobserveOnEnter: true, rootMargin: '-10%' }}
	on:change={({ detail }) => {
		isInView = detail.inView;
	}}
>
	{#if isInView}
		<div class="mb-40" in:fly={{ y: 500, duration: 1500 }}>
			<div class="w-full flex flex-row justify-center">
				<div class="w-full h-auto bg-white flex flex-col items-center justify-center">
					<div id="title-wrap" class="w-full ">
						<Title>
							<p class="text-4xl pb-12 pl-4 font-normal text-black">2 Easy STEPS</p>
						</Title>
					</div>

					<div
						id="two-steps"
						class="grid grid-rows-2 w-full grid-cols-1 h-full justify-items-center content-center pb-8
													lg:grid-cols-2
													lg:grid-rows-1  
													lg:max-w-[500px]
													"
					>
						<div
							id="box-one"
							class=" flex items-center justify-start h-full w-[300px] m-8 gap-4 border-b border-black
										lg:justify-between
										lg:items-center
										lg:pl-2
										lg:border-x
										lg:border-y-0
										lg:w-[250px]
										"
						>
							<div
								id="ring-one"
								class="border-black border min-w-[60px] min-h-[60px] rounded-full flex items-center justify-center"
							>
								<h4>1</h4>
							</div>
							<p class="text-lg whitespace-normal  hover:font-medium lg:w-40">
								Search for<br /> SLOWFASHION in App Store or Google Play.
							</p>
						</div>
						<div
							id="box-two"
							class=" flex items-center justify-start h-full w-[300px] gap-4 m-8 border-black
										lg:justify-between
										lg:items-center
										lg:border-y-0
										lg:w-[250px]
										lg:pl-2
										lg:border-r
										"
						>
							<div
								id="ring-two"
								class="border-black border min-w-[60px] min-h-[60px] rounded-full flex items-center justify-center"
							>
								<h4>2</h4>
							</div>
							<p class="text-lg hover:font-medium w-full lg:w-40">Install and start to explore.</p>
						</div>
					</div>
					<div
						id="download-app-container"
						class="w-full hidden flex-row items-center justify-center space-x-24 pl-40 
								lg:flex"
					>
						<div id="left-box" class="flex flex-col items-center justify-center space-y-20">
							<button
								id="download-button"
								class="transition duration-300 hover:ease-in-out rounded slide-in-right flex items-center justify-center text-black bg-secondary w-[14rem] h-[3.5rem] drop-shadow-[-8px_20px_10px_rgba(0,0,0,0.25)] border-black hover:bg-black hover:text-white hover:border-white"
							>
								<div
									id="dropbox-icon-container"
									class="flex items-center justify-center w-12 h-12 border rounded-full border-inherit"
								>
									<svg
										fill="currentColor"
										viewBox="0 0 24.00 24.00"
										width="30px"
										height="30px"
										id="inbox-in"
										data-name="Line Color"
										xmlns="http://www.w3.org/2000/svg"
										class="icon line-color"
										stroke="currentColor"
										><g id="SVGRepo_bgCarrier" stroke-width="0" /><g
											id="SVGRepo_tracerCarrier"
											stroke-linecap="round"
											stroke-linejoin="round"
										/><g id="SVGRepo_iconCarrier"
											><line
												id="secondary"
												x1="12"
												y1="3"
												x2="12"
												y2="12"
												style="fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width:0.8160000000000001;"
											/><polyline
												id="secondary-2"
												data-name="secondary"
												points="9 9 12 12 15 9"
												style="fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width:0.8160000000000001;"
											/><path
												id="primary"
												d="M8,5H6L4,15H7.38a1,1,0,0,1,.9.55l.44.9a1,1,0,0,0,.9.55h4.76a1,1,0,0,0,.9-.55l.44-.9a1,1,0,0,1,.9-.55H20L18,5H16"
												style="fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width:0.8160000000000001;"
											/><path
												id="primary-2"
												data-name="primary"
												d="M8.28,15.55l.44.9a1,1,0,0,0,.9.55h4.76a1,1,0,0,0,.9-.55l.44-.9a1,1,0,0,1,.9-.55H20v5a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V15H7.38A1,1,0,0,1,8.28,15.55Z"
												style="fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width:0.8160000000000001;"
											/></g
										></svg
									>
								</div>
								<h6 class="download-text pl-4 text-inherit">Download App</h6>
							</button>
							<div id="scan-me" class="flex items-center justify-between w-[230px]">
								<img
									src="https://github.com/mrkarstrom/sfab/blob/main/src/lib/images/QR.png?raw=true"
									alt="QR-code"
									style="object-fill"
									id="QR-code"
									class="w-20"
								/>
								<img
									src="https://github.com/mrkarstrom/sfab/blob/main/src/lib/images/scan-me.png?raw=true"
									alt="Scan-me"
									style="object-fill"
									id="scan-me-img"
									class="bounce-left w-36"
								/>
							</div>
						</div>

						<div id="right-box" class="w-auto lg:w-[480px] z-0 pt-10">
							<img
								class="object-fit"
								id="mobile-image"
								src="https://github.com/mrkarstrom/sfab/blob/main/src/lib/images/mobile-download2.jpeg?raw=true"
								alt="Mobile Phone"
							/>
						</div>
					</div>
				</div>
			</div>
			<div class="card rounded-none w-full pt-10 mx-auto lg:hidden">
				<img
					class="object-fit"
					id="mobile-image"
					src="https://github.com/mrkarstrom/sfab/blob/main/src/lib/images/mobile-download2.jpeg?raw=true"
					alt="Mobile Phone"
				/>
			</div>
			<div class="flex items-center justify-center max-h-[400px] max-w-full w-full lg:hidden">
				<CountdownSmall />
			</div>
		</div>
	{/if}
</div>
