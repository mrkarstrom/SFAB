<script>
	import { currentLanguage } from '$lib/stores/langStore.js'
	import languages from '$lib/lang/languages.json';
</script>

<div
	id="container-box2"
	class="h-full w-[810px] gap-0 grid grid-rows-1 grid-cols-3 content-center "
>
	<div
		id="left-box-part"
		class="bg-white flex flex-col items-center justify-between w-full h-full rounded-lg 
				lg:pt-24 lg:pb-6 lg:rounded-lg"
	>
		<h6 class="text-center w-32 whitespace-wrap flex">
			{languages.downloadApp.card2.title[$currentLanguage]}
		</h6>
		<button
			id="join-button"
			class="has-pointer-events bg-accent flex items-center justify-center h-10 w-60 rounded-md uppercase text-primary
				hover:bg-black hover:text-white transition duration-300 hover:ease-in-out"
		>
			<h5>{languages.downloadApp.card2.button[$currentLanguage]}</h5>
		</button>
	</div>
	<div class="relative h-full w-full col-start-2 col-span-2 items-center overflow-y-hidden">
		<div class="absolute left-1/2 -translate-x-1/2 bottom-16">
			<img
				id="spinning-circle"
				class="animate-spin"
				src="https://github.com/mrkarstrom/sfab/blob/main/src/lib/images/large/active/Card2-spinner.png?raw=true"
				width="110px"
				alt=""
			/>
			<img
				class="z-10 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
				src="https://github.com/mrkarstrom/sfab/blob/main/src/lib/images/large/active/download-box-icon-beige.png?raw=true"
				width="40px"
				alt=""
			/>
		</div>
		<img
			src="https://github.com/mrkarstrom/sfab/blob/main/src/lib/images/large/active/Card2-image.jpg?raw=true"
			alt=""
		/>
	</div>
</div>
