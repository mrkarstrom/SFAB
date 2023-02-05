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

</script>

<TopbarPlain />
<Hero />
<DownloadApp />

<ArrowBlock --blockHeight="14rem" --circleColor="black" --arrowColor="black" />
<AppWindow />
<ArrowBlock --blockHeight="20rem" --circleColor="black" --arrowColor="black" />
<EasySteps />
<ArrowBlock --blockHeight="20rem" --circleColor="black" --arrowColor="black" />
<Discover />
<ArrowBlock --blockHeight="20rem" --circleColor="black" --arrowColor="black" />
<Mission1 />
<ArrowBlock --blockHeight="20rem" --circleColor="black" --arrowColor="black" />
<Subscribe1 />
<Footer />
