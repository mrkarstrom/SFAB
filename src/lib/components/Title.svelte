<script>
	import { fly } from 'svelte/transition';
	import { inview } from 'svelte-inview';
	let isInView;
</script>

<div
	use:inview={{ unobserveOnEnter: true, rootMargin: '5%' }}
	on:change={({ detail }) => {
		isInView = detail.inView;
	}}
>
	{#if isInView}
		<div in:fly={{ x: 50, duration: 2000, delay: 1000 }}>
			<slot />
		</div>
	{/if}
</div>
