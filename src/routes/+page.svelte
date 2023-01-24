<script>
	import Saos from 'saos';
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
<div class="block">
	<Saos once={true} animation={'slide-in-bottom 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 500ms;'}>
			<AppWindow />
	</Saos>
</div>
<ArrowBlock --blockHeight="20rem" --circleColor="black" --arrowColor="black" />
<div class="block">
	<Saos once={true} animation={'slide-in-bottom 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 500ms;'}>
		<EasySteps />
	</Saos>
</div>
<ArrowBlock --blockHeight="20rem" --circleColor="black" --arrowColor="black" />
<Saos once={true} animation={'slide-in-bottom 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 500ms;'}>
	<Mission1 />
</Saos>
<ArrowBlock --blockHeight="20rem" --circleColor="black" --arrowColor="black" />

<Subscribe1 />
<!-- 
<style>
	.slide-in-bottom {
		-webkit-animation: slide-in-bottom 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 500ms;
		animation: slide-in-bottom 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 500ms;
	}
</style> -->
