<script>
	import imageStore from '../../../stores/imageStore';
	import CTABasic from '$lib/components/cta/CTABasic.svelte';
	const images = $imageStore;
</script>

<div class="spacer relative hidden lg:flex justify-center items-end">
	<div class="wrapper hidden lg:flex z-100 absolute bottom-0 w-[92%] h-[32rem] drop-shadow-2xl">
		<div class="box-wrap flex items-center justify-center w-full h-full">
			<div class="left-box-arrow h-[90%] w-[4rem] bg-secondary flex items-center justify-center">
				<svg xmlns="http://www.w3.org/2000/svg" height="2rem" fill="gray" viewBox="0 0 512 512"
					><!--! Font Awesome Free 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
					<path
						d="M109.3 288L480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288z"
					/></svg
				>
			</div>
			<div class="box h-full w-full grid grid-cols-3 max-w-4xl">
				<div
					class="left-box-part bg-white flex flex-col items-center justify-between pt-20 pb-12 w-full h-full"
				>
					<div class="dropbox-icon relative w-16 h-16 border-2 rounded-full border-black">
						<div
							class="arrow-box absolute w-4 h-13 z-10 left-[50%] top-[40%] translate-x-[-50%] translate-y-[-100%] bg-white"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="1rem"
								height="1rem"
								fill="black"
								viewBox="0 0 384 512"
								><!--! Font Awesome Free 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
								<path
									d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
								/></svg
							>
						</div>
						<svg
							class="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
							xmlns="http://www.w3.org/2000/svg"
							width="2.3rem"
							viewBox="0 0 512 512"
							><!--! Font Awesome Free 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
							<path
								d="M121 32C91.6 32 66 52 58.9 80.5L1.9 308.4C.6 313.5 0 318.7 0 323.9V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V323.9c0-5.2-.6-10.4-1.9-15.5l-57-227.9C446 52 420.4 32 391 32H121zm0 64H391l48 192H387.8c-12.1 0-23.2 6.8-28.6 17.7l-14.3 28.6c-5.4 10.8-16.5 17.7-28.6 17.7H195.8c-12.1 0-23.2-6.8-28.6-17.7l-14.3-28.6c-5.4-10.8-16.5-17.7-28.6-17.7H73L121 96z"
							/></svg
						>
					</div>
					<div>
						<h3 class="text-3xl uppercase whitespace-normal text-center">Download App</h3>
						<p class="text-center p-5 whitespace-normal">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						</p>
					</div>
					<CTABasic />
				</div>
				<div
					class="col-span-2 col-start-2 bg-cover bg-center bg-no-repeat"
					style="background-image: url({images.aesteticPhone});"
				/>
			</div>
			<div class="right-box-arrow h-[90%] w-[4rem] bg-secondary flex items-center justify-center">
				<svg xmlns="http://www.w3.org/2000/svg" height="2rem" fill="gray" viewBox="0 0 512 512"
					><!--! Font Awesome Free 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
					<path
						d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
					/></svg
				>
			</div>
		</div>
	</div>
</div>

<style>
	.spacer {
		display: flex;
		flex-direction: row;
		align-items: center;
		align-self: stretch;
		margin-top: 1rem /* 16px */;
		margin-bottom: 1rem /* 16px */;
		height: var(--spacer-height); /* 192px */
		white-space: nowrap;
	}
	.spacer:before,
	.spacer:after {
		content: '';
		flex-grow: 1;
		height: 0.125rem /* 2px */;
		width: 100%;
	}
	.spacer:before,
	.spacer:after {
		content: '';
		flex-grow: 1;
		height: 0.125rem /* 2px */;
		width: 100%;
	}
	.spacer:before {
		background-color: #fff;
		--tw-bg-opacity: 0;
	}
	.spacer:after {
		background-color: #fff;
		--tw-bg-opacity: 0;
	}
	.spacer:not(:empty) {
		gap: 1rem /* 16px */;
	}
</style>
