<script>
	import imageStore from '../../../stores/imageStore';
	import CTABasic from '$lib/components/CTABasic.svelte';
	const images = $imageStore;
</script>

<div class="spacer w-full h-[500px] flex justify-center items-end border-2 border-red-100 lg:flex">
	<div class="wrapper flex w-[92%] h-auto drop-shadow-xl lg:flex">
		<div class="box-wrap flex items-center justify-center w-full h-full">
			<div
				class="left-box-arrow h-[90%] w-[4rem] bg-secondary flex items-center justify-center rounded-lg"
			>
				<svg xmlns="http://www.w3.org/2000/svg" height="1rem" fill="black" viewBox="0 0 512 512"
					><!--! Font Awesome Free 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
					<path
						d="M109.3 288L480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288z"
					/></svg
				>
			</div>
			<div class="center-box h-full w-full grid grid-cols-3 max-w-4xl">
				<div
					class="left-box-part bg-white flex flex-col items-center justify-between pt-24 pb-6 w-full h-full rounded-lg"
				>
					<div class="download-icon w-32 flex flex-col items-center ">
						<img src="https://yesweb.se/sfab/img/mockup/download-app-icon.svg" alt="" />
						<h5 class="text-center font-semibold pt-10">Easy | Reliable | Advanced</h5>
					</div>
					<div>
						<CTABasic />
					</div>
				</div>
				<div
					class="col-span-2 col-start-2 bg-cover bg-center bg-no-repeat"
					style="background-image: url({images.aesteticPhone});"
				/>
			</div>
			<div
				class="right-box-arrow h-[90%] w-[4rem] bg-secondary flex items-center justify-center rounded-lg"
			>
				<svg xmlns="http://www.w3.org/2000/svg" height="1rem" fill="black" viewBox="0 0 512 512"
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
	:root {
		--lineFillColor: '#000';
		--arrowColor: '#000';
	}

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
