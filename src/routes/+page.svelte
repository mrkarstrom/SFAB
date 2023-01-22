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
	import Footer from '$lib/components/Footer.svelte';
	let scroll;
</script>

<svelte:window bind:scrollY={scroll} />
<h1 class="fixed top-10 left-20">{scroll}</h1>
<Hero />
<DownloadApp />
<ArrowBlock --blockHeight="14rem" --circleColor="black" --arrowColor="black" />

{#if scroll > 200}
	<div in:fly={{ y: 200, duration: 2000 }}>
		<AppWindow />
		<ArrowBlock --blockHeight="20rem" --circleColor="black" --arrowColor="black" />
	</div>
{/if}
{#if scroll > 2010}
	<div in:fly|once={{ y: 200, duration: 2000 }}>
		<EasySteps />
		<ArrowBlock --blockHeight="20rem" --circleColor="black" --arrowColor="black" />
	</div>
{/if}
{#if scroll > 3210}
	<div in:fly|once={{ y: 200, duration: 2000 }}>
		<Discover />
		<ArrowBlock --blockHeight="20rem" --circleColor="black" --arrowColor="black" />
	</div>
{/if}
{#if scroll > 4050}
	<div in:fly|once={{ y: 100, duration: 2000 }}>
		<Mission1 />
		<ArrowBlock --blockHeight="20rem" --circleColor="black" --arrowColor="black" />
	</div>
{/if}
{#if scroll > 4000}
	<div in:fly|once={{ y: 100, duration: 2000 }}>
		<Subscribe1 />
	</div>
{/if}
{#if scroll > 4200}
	<div in:fly|once={{ y: 100, duration: 2000 }}>
		<Footer />
	</div>
{/if}
