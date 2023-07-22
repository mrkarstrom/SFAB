<script>
	import GridBlock from './GridBlock.svelte';
</script>

<GridBlock let:GB class="w-full h-[400px] bg-blue-400 px-10">
	<GB.Rectangle
		><img
			class="object-center object-cover h-full w-full rounded-sm"
			src="images/large/active/hero-couple.png"
			alt=""
		/></GB.Rectangle
	>
	<GB.Square
		><img
			class="object-center object-cover h-full w-full rounded-sm"
			src="images/large/active/coats-in-desert.png"
			alt=""
		/></GB.Square
	>
	<GB.Square
		><img
			class="object-center object-cover h-full w-full rounded-sm"
			src="images/large/active/coats-in-desert.png"
			alt=""
		/></GB.Square
	>
	<GB.Square
		><img
			class="object-center object-cover h-full w-full rounded-sm"
			src="images/large/active/coats-in-desert.png"
			alt=""
		/></GB.Square
	>
	<GB.Square
		><img
			class="object-center object-cover h-full w-full rounded-sm"
			src="images/large/active/coats-in-desert.png"
			alt=""
		/></GB.Square
	>
</GridBlock>
