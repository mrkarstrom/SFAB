<script>
	import { fly } from 'svelte/transition';
	import Slide1 from './Slide1.svelte';
	import Slide2 from './Slide2.svelte';
	import Slide3 from './Slide3.svelte';
	import Slide4 from './Slide4.svelte';

	let slider = 1;

	const rotateLeft = (e) => {
		if (slider <= 1) {
			slider = 4;
		} else {
			slider--;
		}
	};

	const rotateRight = (e) => {
		if (slider >= 4) {
			slider = 1;
		} else {
			slider++;
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
			{#if slider === 1}
				<div
					class="w-full h-full"
					in:fly={{ x: -200, duration: 1000 }}
					out:fly={{ x: 200, duration: 1000 }}
				>
					<Slide1 />
				</div>
			{/if}
			{#if slider === 2}
				<div
					class="w-full h-full"
					in:fly={{ x: -200, duration: 1000 }}
					out:fly={{ x: 200, duration: 1000 }}
				>
					<Slide2 />
				</div>
			{/if}
			{#if slider === 3}
				<div
					class="w-full h-full"
					in:fly={{ x: -200, duration: 1000 }}
					out:fly={{ x: 200, duration: 1000 }}
				>
					<Slide3 />
				</div>
			{/if}
			{#if slider === 4}
				<div
					class="w-full h-full"
					in:fly={{ x: -200, duration: 1000 }}
					out:fly={{ x: 200, duration: 1000 }}
				>
					<Slide4 />
				</div>
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
