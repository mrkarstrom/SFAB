<script>
	import Card1 from './Card1.svelte';
	import Card2 from './Card2.svelte';
	import Card3 from './Card3.svelte';
	import Card4 from './Card4.svelte';
	import * as animateScroll from 'svelte-scrollto';
</script>

<div
	id="spacer"
	class="w-full h-[200px] flex justify-center items-center  border-4 border-red-700 "
>
	<div
		class="flex items-center h-[400px] w-[950px] drop-shadow-xl -translate-y-[200px] border-4 border-green-500"
	>
		<div class="carousel w-full h-full">
			<div id="slide1" class="carousel-item items-center">
				<a
					class="flex items-center justify-center h-[90%] w-[70px] bg-secondary rounded-lg"
					href="#slide4"
					on:click={() => animateScroll.scrollTo({ element: '#slide4', offset: -300 })}
				>
					<svg xmlns="http://www.w3.org/2000/svg" height="1rem" fill="black" viewBox="0 0 512 512">
						<path
							d="M109.3 288L480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288z"
						/></svg
					>
				</a>

				<Card1 />
				<a
					class="flex items-center justify-center h-[90%] w-[70px] bg-secondary rounded-lg"
					href="#slide2"
					on:click={() => animateScroll.scrollTo({ element: '#slide2', offset: -300 })}
				>
					<svg xmlns="http://www.w3.org/2000/svg" height="1rem" fill="black" viewBox="0 0 512 512">
						<path
							d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
						/></svg
					>
				</a>
			</div>
			<div id="slide2" class="carousel-item items-center">
				<a
					class="flex items-center justify-center h-[90%] w-[70px] bg-secondary rounded-lg"
					href="#slide1"
					on:click={() => animateScroll.scrollTo({ element: '#slide1', offset: -300 })}
				>
					<svg xmlns="http://www.w3.org/2000/svg" height="1rem" fill="black" viewBox="0 0 512 512">
						<path
							d="M109.3 288L480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288z"
						/></svg
					>
				</a>

				<Card1 />
				<a
					class="flex items-center justify-center h-[90%] w-[70px] bg-secondary rounded-lg"
					href="#slide3"
					on:click={() => animateScroll.scrollTo({ element: '#slide3', offset: -300 })}
				>
					<svg xmlns="http://www.w3.org/2000/svg" height="1rem" fill="black" viewBox="0 0 512 512">
						<path
							d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
						/></svg
					>
				</a>
			</div>
			<div id="slide3" class="carousel-item items-center">
				<a
					class="flex items-center justify-center h-[90%] w-[70px] bg-secondary rounded-lg"
					href="#slide1"
					on:click={() => animateScroll.scrollTo({ element: '#slide2', offset: -300 })}
				>
					<svg xmlns="http://www.w3.org/2000/svg" height="1rem" fill="black" viewBox="0 0 512 512">
						<path
							d="M109.3 288L480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288z"
						/></svg
					>
				</a>

				<Card3 />
				<a
					class="flex items-center justify-center h-[90%] w-[70px] bg-secondary rounded-lg"
					href="#slide4"
					on:click={() => animateScroll.scrollTo({ element: '#slide4', offset: -300 })}
				>
					<svg xmlns="http://www.w3.org/2000/svg" height="1rem" fill="black" viewBox="0 0 512 512">
						<path
							d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
						/></svg
					>
				</a>
			</div>
			<div id="slide4" class="carousel-item items-center">
				<a
					class="flex items-center justify-center h-[90%] w-[70px] bg-secondary rounded-lg"
					href="#slide3"
					on:click={() => animateScroll.scrollTo({ element: '#slide3', offset: -300 })}
				>
					<svg xmlns="http://www.w3.org/2000/svg" height="1rem" fill="black" viewBox="0 0 512 512">
						<path
							d="M109.3 288L480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288z"
						/></svg
					>
				</a>

				<Card4 />
				<a
					class="flex items-center justify-center h-[90%] w-[70px] bg-secondary rounded-lg"
					href="#slide1"
					on:click={() => animateScroll.scrollTo({ element: '#slide1', offset: -300 })}
				>
					<svg xmlns="http://www.w3.org/2000/svg" height="1rem" fill="black" viewBox="0 0 512 512">
						<path
							d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
						/></svg
					>
				</a>
			</div>
		</div>
	</div>
</div>
