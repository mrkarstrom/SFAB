<script>
	import Hero from '$lib/components/hero/Hero.svelte';
	import Spacer from '$lib/components/spacers/Spacer.svelte';
	import CarouselView from '$lib/components/carousels/CarouselView.svelte';
	import CarouselBanner from '$lib/components/carousels/CarouselBanner.svelte';
	import Mission1 from '$lib/components/mission/Mission1.svelte';
</script>

<Hero />
<Spacer --spacer-height="14rem" />
<CarouselView />
<Spacer --spacer-height="4rem" />
<Mission1 />
<Spacer --spacer-height="4rem" />
<CarouselBanner />
