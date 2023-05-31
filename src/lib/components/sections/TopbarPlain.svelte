<script>
	import { currentLanguage } from '$lib/stores/langStore.js'
	import languages from '$lib/lang/languages.json';
</script>

<div class="flex relative h-[40px] bg-secondary w-full items-center justify-center">
	<div />
	<p class="font-normal text-sm cursor-default ">
		{languages.headerTitle[$currentLanguage]}
	</p>


	<div class="absolute hidden right-0 items-center mr-8 justify-center cursor-pointer md:flex">
		<select name="lang-switch" id="lang-switch" class="w-full cursor-pointer font-normal max-w-xs bg-inherit border-none outline-none focus:outline-none" bind:value={$currentLanguage}>
			<option value="ENG">ENG</option>
			<option value="SV" >SV</option>
		</select>
	</div>
</div>
