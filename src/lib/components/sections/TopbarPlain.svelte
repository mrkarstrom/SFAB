<script>
	import { currentLanguage } from '$lib/stores/langStore.js'
	export let title;
</script>

<div class="flex relative h-[40px] bg-secondary w-full items-center justify-center">
	<div />
	<p class="font-normal text-sm cursor-default ">
		{title}
	</p>

	<div class="absolute flex right-0 items-center mr-8 justify-center cursor-pointer">
		<select name="lang-switch" id="lang-switch" class="bg-secondary border-none focus:border-none" bind:value={$currentLanguage}>
			<option value="ENG">ENG</option>
			<option value="SV">SV</option>
		</select>
	</div>
</div>
