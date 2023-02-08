<script>
	import { fly, fade } from 'svelte/transition';
	import { inview } from 'svelte-inview';

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
	import { browser } from '$app/environment';

	import Modal from 'svelte-simple-modal';
</script>

<TopbarPlain />
<Hero />
<DownloadApp />

<ArrowBlock --blockHeight="14rem" />
<AppWindow />
<ArrowBlock />
<EasySteps />
<ArrowBlock />
<Discover />
<ArrowBlock />
<Mission1 />
<ArrowBlock />
<Subscribe1 />

{#if browser}
	<Modal>
		<Footer />
	</Modal>
{/if}
