<script>
	import { fly, fade } from 'svelte/transition';
	import Discover from '$lib/components/Discover.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import DownloadApp from '$lib/components/DownloadApp.svelte';
	import EasySteps from '$lib/components/EasySteps.svelte';
	import ArrowBlock from '$lib/components/ArrowBlock.svelte';
	import AppWindow from '$lib/components/AppWindow.svelte';
	import Mission1 from '$lib/components/Mission1.svelte';
	import Subscribe1 from '$lib/components/Subscribe1.svelte';

	let scroll;
	let showingPart1 = false;
</script>

<h2 class="fixed t-10 l-10 z-300">Y: {scroll}</h2>

<Hero />
<DownloadApp />
<ArrowBlock --blockHeight="14rem" --circleColor="black" --arrowColor="black" />

<svelte:window bind:scrollY={scroll} />
{#if scroll > 500}
	<div in:fly|once={{ y: 100, duration: 1500 }}>
		<AppWindow />
	</div>
{/if}
<ArrowBlock --blockHeight="20rem" --circleColor="black" --arrowColor="black" />
{#if scroll > 2300}
	<div in:fly|once={{ y: 100, duration: 1500 }}>
		<EasySteps />
	</div>
{/if}
<ArrowBlock --blockHeight="20rem" --circleColor="black" --arrowColor="black" />
{#if scroll > 3500}
	<div in:fly|once={{ y: 100, duration: 1500 }}>
		<Discover />
	</div>
{/if}
<ArrowBlock --blockHeight="20rem" --circleColor="black" --arrowColor="black" />
{#if scroll > 4400}
	<div in:fly|once={{ y: 100, duration: 1500 }}>
		<Mission1 />
	</div>
{/if}
<ArrowBlock --blockHeight="20rem" --circleColor="black" --arrowColor="black" />
<Subscribe1 />
