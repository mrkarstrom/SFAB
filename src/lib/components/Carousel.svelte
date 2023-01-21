<script>
	import { flip } from 'svelte/animate';
	export let images;
	export let imageWidth = 500;
	export let imageSpacing = '5px';
	export let transitionSpeed = 500;

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

<div id="carousel-container">
	<div id="carousel-images">
		{#each images as image (image.id)}
			<img
				src={image.path}
				alt={image.id}
				id={image.id}
				style={`width: ${imageWidth}px; margin: 0 ${imageSpacing}`}
				animate:flip={{ duration: transitionSpeed }}
			/>
		{/each}
	</div>
	<button on:click={rotateLeft}>Left</button>
	<button on:click={rotateRight}>Right</button>
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
