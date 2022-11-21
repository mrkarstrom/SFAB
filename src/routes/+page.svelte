<script>
	import Hero from '$lib/components/hero/Hero.svelte';
	import DownloadAppPromo1 from '$lib/components/boards/DownloadAppPromo1.svelte';
	import Spacer from '$lib/components/spacers/Spacer.svelte';
	import ArrowBlock from '$lib/components/pointers/ArrowBlock.svelte';
	import CarouselView from '$lib/components/carousels/CarouselView.svelte';
	import CarouselBanner from '$lib/components/carousels/CarouselBanner.svelte';
	import Mission1 from '$lib/components/mission/Mission1.svelte';
</script>

<Hero />
<DownloadAppPromo1 --spacer-height="15rem" />
<ArrowBlock --blockHeight="18rem" />
<CarouselView />
<Spacer --spacer-height="4rem" />
<Mission1 />
<Spacer --spacer-height="4rem" />
<CarouselBanner />
