<script>
	import Hero from '$lib/components/Hero.svelte';
	import AppDownloadBlock from '$lib/components/AppDownloadBlock.svelte';
	import EasySteps from '$lib/components/EasySteps.svelte';
	import ArrowBlock from '$lib/components/ArrowBlock.svelte';
	import AppWindow from '$lib/components/AppWindow.svelte';
	import Mission1 from '$lib/components/Mission1.svelte';
	import BeInspired from '$lib/components/BeInspired.svelte';
	import Subscribe1 from '$lib/components/Subscribe1.svelte';
</script>

<div class="m-0 p-0">
<Hero />
<AppDownloadBlock --spacer-height="13rem" />
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
</div>
