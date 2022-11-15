<script>
	import Hero from '$lib/components/hero/Hero.svelte';
	import Spacer from '$lib/components/spacers/Spacer.svelte';
	import ArtBoard from '$lib/components/boards/ArtBoard.svelte';
	import CarouselView from '$lib/components/carousels/CarouselView.svelte';
	import CarouselBanner from '$lib/components/carousels/CarouselBanner.svelte';
</script>

<Hero />
<Spacer --spacer-height="14rem" />
<ArtBoard />
<Spacer --spacer-height="4rem" />
<CarouselView />
<Spacer --spacer-height="4rem" />
<CarouselBanner />
