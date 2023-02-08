<script>
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
			<div class="hidden w-full lg:flex flex-row justify-center">
				<div class="w-full h-auto bg-white flex flex-col">
					<div id="title-wrap">
						<div class="title flex flex-row justify-between">
							<p class="text-4xl ml-16 pb-16 font-normal text-black">2 Easy STEPS</p>
						</div>
					</div>
					<div id="two-steps-container" class="h-56 w-full flex items-center justify-center z-10">
						<div id="two-steps" class="grid grid-cols-2 lg:w-[600px] h-full ">
							<div
								id="box-one"
								class="border-black border-l flex items-end justify-center border-left pb-8 px-4 space-x-6 w-full"
							>
								<div
									id="ring-one"
									class="border-black border mb-4 w-16 h-16 p-0 rounded-full flex items-center justify-center"
								>
									<h4>1</h4>
								</div>
								<p class="text-lg whitespace-normal w-40 hover:font-medium">
									Search for SLOWFASHION in App Store or Google Play.
								</p>
							</div>
							<div
								id="box-two"
								class="border-black border-x flex items-end justify-center border-left pb-8 space-x-6 w-full"
							>
								<div
									id="ring-two"
									class="border-black border mb-4 w-16 h-16 p-0 rounded-full flex items-center justify-center"
								>
									<h4>2</h4>
								</div>
								<p class="text-lg whitespace-normal w-40 hover:font-medium pb-8">
									Install and start to explore.
								</p>
							</div>
						</div>
					</div>
					<div
						id="download-app-container"
						class="w-full flex flex-row items-center justify-center space-x-24 pl-40"
					>
						<div id="left-box" class="flex flex-col items-center justify-center space-y-20">
							<button
								id="download-button"
								class="rounded flex items-center justify-center bg-secondary w-[14rem] h-[3.5rem] drop-shadow-[-8px_20px_10px_rgba(0,0,0,0.25)]"
							>
								<div class="icon">
									<div
										id="dropbox-icon-container"
										class="flex items-center justify-center w-12 h-12 border rounded-full border-black"
									>
										<svg
											fill="#000000"
											viewBox="0 0 24.00 24.00"
											width="30px"
											height="30px"
											id="inbox-in"
											data-name="Line Color"
											xmlns="http://www.w3.org/2000/svg"
											class="icon line-color"
											stroke="#000000"
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
													style="fill: none; stroke: #000; stroke-linecap: round; stroke-linejoin: round; stroke-width:0.8160000000000001;"
												/><polyline
													id="secondary-2"
													data-name="secondary"
													points="9 9 12 12 15 9"
													style="fill: none; stroke: #000; stroke-linecap: round; stroke-linejoin: round; stroke-width:0.8160000000000001;"
												/><path
													id="primary"
													d="M8,5H6L4,15H7.38a1,1,0,0,1,.9.55l.44.9a1,1,0,0,0,.9.55h4.76a1,1,0,0,0,.9-.55l.44-.9a1,1,0,0,1,.9-.55H20L18,5H16"
													style="fill: none; stroke: #000000000; stroke-linecap: round; stroke-linejoin: round; stroke-width:0.8160000000000001;"
												/><path
													id="primary-2"
													data-name="primary"
													d="M8.28,15.55l.44.9a1,1,0,0,0,.9.55h4.76a1,1,0,0,0,.9-.55l.44-.9a1,1,0,0,1,.9-.55H20v5a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V15H7.38A1,1,0,0,1,8.28,15.55Z"
													style="fill: none; stroke: #000000000; stroke-linecap: round; stroke-linejoin: round; stroke-width:0.8160000000000001;"
												/></g
											></svg
										>
										<!-- <div
								id="arrow-box"
								class="absolute w-4 h-13 z-10 left-[50%] top-[48%] -translate-x-[50%] -translate-y-[100%] bg-secondary"
							>
								<svg
									class="arrow-down"
									xmlns="http://www.w3.org/2000/svg"
									width="1rem"
									height="1rem"
									fill="#000"
									viewBox="0 0 384 512"
									>
									<path
										d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
									/></svg
								>
							</div>
							<svg
								class="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]"
								width="35px"
								height="35px"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M2 12H7.5L8.6094 13.6641C9.1658 14.4987 10.1025 15 11.1056 15H12H12.8944C13.8975 15 14.8342 14.4987 15.3906 13.6641L16.5 12H22V18.5C22 19.0523 21.5523 19.5 21 19.5H3C2.44772 19.5 2 19.0523 2 18.5L2 12Z"
									stroke="#333333"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M22 12L19.4867 5.29775C19.1939 4.51715 18.4477 4 17.614 4H6.386C5.55231 4 4.80607 4.51715 4.51334 5.29775L2 12"
									stroke="#333333"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg> -->
									</div>
								</div>
								<h6 class="download-text pl-4 text-black">Download App</h6>
							</button>
							<div id="scan-me" class="w-56 flex items-center justify-center">
								<img
									src="https://github.com/mrkarstrom/sfab/blob/main/src/lib/images/QR.png?raw=true"
									alt="QR"
									class="w-20"
									id="QR-img"
								/>
								<img
									src="https://github.com/mrkarstrom/sfab/blob/main/src/lib/images/scan-me.png?raw=true"
									alt="Scan-me"
									style="object-fill"
									id="scan-me-img"
									class="bounce-left h-12"
								/>
							</div>
						</div>

						<div id="right-box" class="w-auto lg:w-[480px] z-0 pt-10">
							<img
								class="object-fit"
								id="mobile-image"
								src="https://yesweb.se/sfab/img/mockup/mobile-download2.jpeg"
								alt="Mobile Phone"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>
