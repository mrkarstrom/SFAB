<script>
	import Title from './CareTitle.svelte';
	import Description from './CareDescription.svelte';
	n;
	import Button from './CareButton.svelte';
</script>

<div class="block">
	<slot {Title} {Description} {Button} />
</div>

<style>
	.block {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 400px;
		background-color: red;
		color: #fff;
		margin: 0px auto;
		border-radius: 8px;
		padding: 2rem;
	}
</style>
