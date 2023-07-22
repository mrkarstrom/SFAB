<script>
	import { currentLanguage } from '$lib/stores/langStore.js';
	import languages from '$lib/lang/languages.json';
</script>

<section class="flex items-center justify-center w-full h-screen bg-white">
	<div id="left" class="flex items-center justify-center flex-col min-w-[300px] w-[55%] bg-white ">
		<h1
			class="text-black font-['Steelfish'] text-7xl sm:text-8xl uppercase 
        lg:text-[5rem]
        "
		>
			<a href="/terms_and_conditions">Slowfashion</a>
		</h1>
		<h3
			class="p-4 text-black uppercase text-center whitespace-normal leading-[45px] text-[35px] 
			lg:text-xl"
		>
			{languages.slogan[$currentLanguage]}
		</h3>
		<h3
			class="pt-12 text-black text-center max-w-[350px] text-[35px] 
			lg:text-xl"
		>
			{languages.carepage.heroText[$currentLanguage]}
		</h3>
	</div>
	<div id="right" class="w-[45%] h-full bg-white">
		<img
			src="images/large/active/desert-man.png"
			class="object-center object-cover h-full w-full"
			alt=""
		/>
	</div>
</section>
