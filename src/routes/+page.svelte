<script>
	import Hero from '$lib/components/hero/Hero.svelte';
	import DownloadAppPromo1 from '$lib/components/boards/DownloadAppPromo1.svelte';
	import EasySteps from '$lib/components/steps/EasySteps.svelte';
	import ArrowBlock from '$lib/components/pointers/ArrowBlock.svelte';
	import AppWindow from '$lib/components/appwindow/AppWindow.svelte';
	import Mission1 from '$lib/components/mission/Mission1.svelte';
	import BeInspired from '$lib/components/boards/BeInspired.svelte';
	import Subscribe1 from '$lib/components/newsletter/Subscribe1.svelte';
</script>

<Hero />
<DownloadAppPromo1 --spacer-height="15rem" />
<ArrowBlock --blockHeight="18rem" --circleColor="black" --arrowColor="black" />
<AppWindow />
<ArrowBlock --blockHeight="20rem" --circleColor="black" --arrowColor="black" />
<EasySteps />
<ArrowBlock --blockHeight="20rem" --circleColor="black" --arrowColor="black" />
<Mission1 />
<ArrowBlock --blockHeight="20rem" />
<BeInspired />
<ArrowBlock --blockHeight="20rem" />
<Subscribe1 />
