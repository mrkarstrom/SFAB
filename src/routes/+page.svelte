<script>
	import TopbarPlain from '$lib/components/sections/TopbarPlain.svelte';
	import Hero from '$lib/components/sections/Hero.svelte';
	import DownloadApp from '$lib/components/carousels/header/DownloadApp.svelte';
	import SmallSwiper from '$lib/components/carousels/header/SmallSwiper.svelte';
	import EasySteps from '$lib/components/sections/EasySteps.svelte';
	import ArrowBlock from '$lib/components/arrows/ArrowBlock.svelte';
	import AppWindow from '$lib/components/sections/AppWindow.svelte';
	import Discover from '$lib/components/carousels/discover/Discover.svelte';
	import Mission1 from '$lib/components/carousels/mission/Mission1.svelte';
	import Subscribe1 from '$lib/components/sections/Subscribe1.svelte';
	import Footer from '$lib/components/sections/Footer.svelte';
	import MissionSmall from '$lib/components/carousels/mission/MissionSmall.svelte';
	import SubscribeSmall from '$lib/components/sections/SubscribeSmall.svelte';
	
	import languages from '$lib/lang/languages.json';
	import { currentLanguage } from '$lib/stores/langStore.js'
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
