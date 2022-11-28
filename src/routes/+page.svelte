<script>
	import Hero from '$lib/components/hero/Hero.svelte';
	import DownloadAppPromo1 from '$lib/components/boards/DownloadAppPromo1.svelte';
	// import EasySteps from '$lib/components/steps/EasySteps'
	import ArrowBlock from '$lib/components/pointers/ArrowBlock.svelte';
	import AppWindow from '$lib/components/appwindow/AppWindow.svelte';
	import Mission1 from '$lib/components/mission/Mission1.svelte';
</script>

<Hero />
<DownloadAppPromo1 --spacer-height="15rem" />
<ArrowBlock --blockHeight="18rem" --circleColor="#555" --arrowColor="#555" />
<AppWindow />
<ArrowBlock --blockHeight="18rem" --circleColor="#555" --arrowColor="#555" />
<!-- <EasySteps/> -->
<Mission1 />
<ArrowBlock --blockHeight="18rem" />
