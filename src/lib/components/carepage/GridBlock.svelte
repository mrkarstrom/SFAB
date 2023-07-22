<script>
	import Rectangle from './Rectangle.svelte';
	import Square from './Square.svelte';

	const GB = {
		Rectangle,
		Square,
	};
</script>

<div class="grid-container grid grid-cols-3 grid-rows-2 gap-4">
	<slot {GB} />
</div>
