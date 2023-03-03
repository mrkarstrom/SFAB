<script>
	import TopbarPlain from '$lib/components/TopbarPlain.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import DownloadApp from '$lib/components/DownloadApp.svelte';
	import EasySteps from '$lib/components/EasySteps.svelte';
	import ArrowBlock from '$lib/components/ArrowBlock.svelte';
	import AppWindow from '$lib/components/AppWindow.svelte';
	import Discover from '$lib/components/Discover.svelte';
	import Mission1 from '$lib/components/Mission1.svelte';
	import Subscribe1 from '$lib/components/Subscribe1.svelte';
	import Footer from '../lib/components/Footer.svelte';
	import { showModal } from './../stores/store.js';
	import Modal from '../lib/components/Modal.svelte';
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
<Footer />
<!-- TODO: Make modal from svelte.dev/examples/modal -->
{#if $showModal}
	<Modal />
{/if}
