<script>
	import { fly } from 'svelte/transition';
	import TopbarPlain from '$lib/components/TopbarPlain.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import DownloadApp from '$lib/components/DownloadApp.svelte';
	import EasySteps from '$lib/components/EasySteps.svelte';
	import ArrowBlock from '$lib/components/ArrowBlock.svelte';
	import AppWindow from '$lib/components/AppWindow.svelte';
	import Mission1 from '$lib/components/Mission1.svelte';
	import Discover from '$lib/components/Discover.svelte';
	import Subscribe1 from '$lib/components/Subscribe1.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let scroll;
</script>

<svelte:window bind:scrollY={scroll} />
<!-- <h1 class="fixed left-[50%] top-[50%] translate-x-[50%] translate-y-[50%] z-100">{scroll}</h1> -->

<TopbarPlain />
<Hero />
<DownloadApp />

<ArrowBlock --blockHeight="14rem" --circleColor="black" --arrowColor="black" />
{#if scroll >= 590}
	<div class="block" transition:fly={{ y: 200, duration: 1500 }}>
		<AppWindow />
	</div>
{/if}
<ArrowBlock --blockHeight="20rem" --circleColor="black" --arrowColor="black" />
{#if scroll >= 2700}
	<div class="block" transition:fly={{ y: 200, duration: 1500 }}>
		<EasySteps />
	</div>
{/if}
<ArrowBlock --blockHeight="20rem" --circleColor="black" --arrowColor="black" />

{#if scroll >= 3900}
	<div class="block" transition:fly={{ y: 200, duration: 1500 }}>
		<Discover />
	</div>
{/if}
<ArrowBlock --blockHeight="20rem" --circleColor="black" --arrowColor="black" />
<Mission1 />
<ArrowBlock --blockHeight="20rem" --circleColor="black" --arrowColor="black" />
<Subscribe1 />
<Footer />
