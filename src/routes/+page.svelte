<script>
	import Discover from '$lib/components/Discover.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import DownloadApp from '$lib/components/DownloadApp.svelte';
	import EasySteps from '$lib/components/EasySteps.svelte';
	import ArrowBlock from '$lib/components/ArrowBlock.svelte';
	import AppWindow from '$lib/components/AppWindow.svelte';
	import Mission1 from '$lib/components/Mission1.svelte';
	import Subscribe1 from '$lib/components/Subscribe1.svelte';
</script>

<Hero />
<DownloadApp />
<ArrowBlock --blockHeight="14rem" --circleColor="black" --arrowColor="black" />
<AppWindow />
<ArrowBlock --blockHeight="20rem" --circleColor="black" --arrowColor="black" />
<EasySteps />
<ArrowBlock --blockHeight="14rem" --circleColor="black" --arrowColor="black" />
<Discover />
<ArrowBlock --blockHeight="20rem" --circleColor="black" --arrowColor="black" />
<Mission1 />
<ArrowBlock --blockHeight="20rem" --circleColor="black" --arrowColor="black" />
<Subscribe1 />
