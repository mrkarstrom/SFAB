<script>
	export let disabled = false;
</script>

<button {disabled}>
	<slot />
</button>

<style>
	button {
		width: 100%;
		background-color: green;
		padding: 12px;
		border-radius: 8px;
	}
</style>
