<script>
	import { flip } from 'svelte/animate';
	export let imageWidth = 530;
	export let imageSpacing = '0px';
	export let transitionSpeed = 500;

	let images = [
		{ path: 'https://yesweb.se/sfab/img/mockup/aesthetic-phone2.jpeg', id: 'image1' },
		{ path: 'https://yesweb.se/sfab/img/mockup/aesthetic-phone2.jpeg', id: 'image2' },
		{ path: 'https://yesweb.se/sfab/img/mockup/aesthetic-phone2.jpeg', id: 'image3' },
		{ path: 'https://yesweb.se/sfab/img/mockup/aesthetic-phone2.jpeg', id: 'image4' },
		{ path: 'https://yesweb.se/sfab/img/mockup/aesthetic-phone2.jpeg', id: 'image5' }
	];

	const rotateLeft = (e) => {
		const transitioningImage = images[images.length - 1];
		document.getElementById(transitioningImage.id).style.opacity = 0;
		images = [images[images.length - 1], ...images.slice(0, images.length - 1)];
		setTimeout(() => {
			document.getElementById(transitioningImage.id).style.opacity = 1;
		}, transitionSpeed);
	};

	const rotateRight = (e) => {
		const transitioningImage = images[0];
		document.getElementById(transitioningImage.id).style.opacity = 0;
		images = [...images.slice(1, images.length), images[0]];
		setTimeout(() => {
			document.getElementById(transitioningImage.id).style.opacity = 1;
		}, transitionSpeed);
	};
</script>

<div id="spacer" class="w-full h-[400px] flex justify-center items-end lg:flex lg:h-[200px] ">
	<div
		id="wrapper"
		class="relative bottom-[10px] w-[930px] h-[395px] drop-shadow-xl lg:bottom-[50px] lg:flex"
	>
		<div id="box-wrap" class="flex items-center justify-center w-full h-full">
			<div
				on:click={rotateLeft}
				id="left-box-arrow"
				class="hidden lg:flex items-center justify-center h-[90%] w-[5rem] bg-secondary rounded-lg"
			>
				<svg xmlns="http://www.w3.org/2000/svg" height="1rem" fill="black" viewBox="0 0 512 512"
					><!--! Font Awesome Free 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
					<path
						d="M109.3 288L480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288z"
					/></svg
				>
			</div>
			<div
				id="center-box"
				class="h-full w-[50%] grid grid-rows-2 lg:grid-rows-1 lg:w-full lg:grid-cols-3 lg:max-w-4xl"
			>
				<div
					id="first-box-part"
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
				<div class="lg:col-span-2 lg:col-start-2">
					<div id="carousel-container">
						<div id="carousel-images">
							{#each images as image (image.id)}
								<img
									src={image.path}
									alt={image.id}
									id={image.id}
									style={`width: ${imageWidth}px; margin: 0 ${imageSpacing};`}
									animate:flip={{ duration: transitionSpeed }}
								/>
							{/each}
						</div>
					</div>
				</div>
			</div>
			<div
				on:click={rotateRight}
				class="right-box-arrow  hidden lg:flex items-center justify-center h-[90%] w-[5rem] bg-secondary rounded-lg"
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
	#carousel-container {
		width: 100%;
		position: relative;
		display: flex;
		flex-direction: column;
		overflow-x: hidden;
	}

	#carousel-images {
		display: flex;
		justify-content: center;
		flex-wrap: nowrap;
	}
</style>
