<script>
	import TopbarPlain from '$lib/components/TopbarPlain.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import DownloadApp from '$lib/components/DownloadApp.svelte';
	import SmallSwiper from '$lib/components/SmallSwiper.svelte';
	import EasySteps from '$lib/components/EasySteps.svelte';
	import ArrowBlock from '$lib/components/ArrowBlock.svelte';
	import AppWindow from '$lib/components/AppWindow.svelte';
	import Discover from '$lib/components/Discover.svelte';
	import Mission1 from '$lib/components/Mission1.svelte';
	import Subscribe1 from '$lib/components/Subscribe1.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import MissionSmall from '$lib/components/MissionSmall.svelte';
	import SubscribeSmall from '$lib/components/SubscribeSmall.svelte';
</script>

<TopbarPlain />
<Hero />
<DownloadApp />
<SmallSwiper />
<ArrowBlock --blockHeight="14rem" />
<AppWindow />
<ArrowBlock />
<EasySteps />
<ArrowBlock --blockHeight="10rem" />
<Discover />
<ArrowBlock />
<MissionSmall />
<Mission1 />
<ArrowBlock />
<SubscribeSmall />
<Subscribe1 />
<Footer />
