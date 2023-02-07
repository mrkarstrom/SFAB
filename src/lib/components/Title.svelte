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
		<div in:fly={{ x: 50, duration: 1500, delay: 1000 }}>
			<p class="text-4xl ml-16 py-6 font-normal">A WINDOW into the App</p>
		</div>
	{/if}
</div>
