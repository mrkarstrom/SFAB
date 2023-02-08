<script>
	import { fly } from 'svelte/transition';
	import { inview } from 'svelte-inview';
	import Title from './Title.svelte';
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
							<Title>
								<p class="text-4xl ml-16 pb-16 font-normal text-black">2 Easy STEPS</p>
							</Title>
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
							<Title>
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
										</div>
									</div>
									<h6 class="download-text pl-4 text-black">Download App</h6>
								</button>
							</Title>

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
