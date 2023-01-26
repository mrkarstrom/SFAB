<script>
	import { flip } from 'svelte/animate';
	import Slide1 from './Slide1.svelte';
	import Slide2 from './Slide2.svelte';
	import Slide3 from './Slide3.svelte';
	import Slide4 from './Slide4.svelte';

	let slide = 1;

	const rotateLeft = (e) => {
		if (slide <= 1) {
			slide = 4;
		} else {
			slide--;
		}
	};

	const rotateRight = (e) => {
		if (slide >= 4) {
			slide = 1;
		} else {
			slide++;
		}
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
			{#if slide === 1}
				<Slide1 />
			{/if}
			{#if slide === 2}
				<Slide2 />
			{/if}
			{#if slide === 3}
				<Slide3 />
			{/if}
			{#if slide === 4}
				<Slide4 />
			{/if}

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
