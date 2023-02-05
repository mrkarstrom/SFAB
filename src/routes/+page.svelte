<script>
	import { fly } from 'svelte/transition';
	import * as animateScroll from 'svelte-scrollto';
	import TopbarPlain from '$lib/components/TopbarPlain.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import DownloadApp from '$lib/components/DownloadApp.svelte';
	import EasySteps from '$lib/components/EasySteps.svelte';
	import ArrowBlock from '$lib/components/ArrowBlock.svelte';
	import AppWindow from '$lib/components/AppWindow.svelte';
	import Discover from '$lib/components/Discover.svelte';
	import Mission1 from '$lib/components/Mission1.svelte';
	import Subscribe1 from '$lib/components/Subscribe1.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { blockA } from '../stores/blocks';
	import { blockB } from '../stores/blocks';
	import { blockC } from '../stores/blocks';
	import { blockD } from '../stores/blocks';
	let scroll;
</script>

<svelte:window bind:scrollY={scroll} />
<!-- <h1 class="fixed left-[50%] top-[50%] translate-x-[50%] translate-y-[50%] z-100">{scroll}</h1> -->

<TopbarPlain />
<Hero />
<DownloadApp />

<ArrowBlock --blockHeight="14rem" --circleColor="black" --arrowColor="black" />
{#if scroll >= 600}
	{#if $blockA === true}
		<div class="block" transition:fly={{ y: 800, duration: 1500 }}>
			<AppWindow />
		</div>
	{:else}
		<AppWindow />
	{/if}
{/if}
<ArrowBlock --blockHeight="20rem" --circleColor="black" --arrowColor="black" />
{#if scroll >= 2500}
	{#if $blockB === true}
		<div class="block" transition:fly={{ y: 600, duration: 1500 }}>
			<EasySteps />
		</div>
	{:else}
		<EasySteps />
	{/if}
{/if}
<ArrowBlock --blockHeight="20rem" --circleColor="black" --arrowColor="black" />

{#if scroll >= 3900}
	{#if $blockC === true}
		<div class="block" transition:fly|once={{ y: 600, duration: 1500 }}>
			<Discover />
		</div>
		{($blockB = false)}
	{:else}
		<Discover />
	{/if}
{/if}
<ArrowBlock --blockHeight="20rem" --circleColor="black" --arrowColor="black" />
{#if scroll >= 4200}
	{#if $blockD === true}
		<div class="block" transition:fly={{ y: 600, duration: 1500 }}>
			<Mission1 />
			{($blockC = false)}
		</div>
	{:else}
		<Mission1 />
	{/if}
{/if}
<ArrowBlock --blockHeight="20rem" --circleColor="black" --arrowColor="black" />
{($blockD = false)}
<Subscribe1 />
<Footer />
