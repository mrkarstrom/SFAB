<script>
	import { fly } from 'svelte/transition';
	import Discover from '$lib/components/Discover.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import DownloadApp from '$lib/components/DownloadApp.svelte';
	import EasySteps from '$lib/components/EasySteps.svelte';
	import ArrowBlock from '$lib/components/ArrowBlock.svelte';
	import AppWindow from '$lib/components/AppWindow.svelte';
	import Mission1 from '$lib/components/Mission1.svelte';
	import Subscribe1 from '$lib/components/Subscribe1.svelte';

	let scroll;
</script>

<svelte:window bind:scrollY={scroll} />

<Hero />
<DownloadApp />
<ArrowBlock --blockHeight="14rem" --circleColor="black" --arrowColor="black" />

{#if scroll > 400}
	<div in:fly={{ y: 100, duration: 2000 }}>
		<AppWindow />
		<ArrowBlock --blockHeight="20rem" --circleColor="black" --arrowColor="black" />
	</div>
{/if}
{#if scroll > 2100}
	<div in:fly|once={{ y: 100, duration: 2000 }}>
		<EasySteps />
		<ArrowBlock --blockHeight="20rem" --circleColor="black" --arrowColor="black" />
	</div>
{/if}
{#if scroll > 3300}
	<div in:fly|once={{ y: 100, duration: 2000 }}>
		<Discover />
		<ArrowBlock --blockHeight="20rem" --circleColor="black" --arrowColor="black" />
	</div>
{/if}
{#if scroll > 4100}
	<div in:fly|once={{ y: 100, duration: 2000 }}>
		<Mission1 />
		<ArrowBlock --blockHeight="20rem" --circleColor="black" --arrowColor="black" />
	</div>
{/if}
{#if scroll > 4500}
	<div in:fly|once={{ y: 100, duration: 2000 }}>
		<Subscribe1 />
	</div>
{/if}
