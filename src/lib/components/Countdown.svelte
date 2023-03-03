<script>
	import { onMount } from 'svelte';
	let time = new Date();
	let goalDate = 'March 24 2023 02:26:00';
	const goalDay = new Date(`${goalDate}`);

	$: diff = goalDay - time;
	$: d = Math.floor(diff / 1000 / 60 / 60 / 24);
	$: h = Math.floor(diff / 1000 / 60 / 60) % 24;
	$: m = Math.floor(diff / 1000 / 60) % 60;
	$: s = Math.floor(diff / 1000) % 60;

	onMount(() => {
		const interval = setInterval(() => {
			time = new Date();
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	});
</script>

<div class="w-full h-full flex flex-col items-center justify-center border-2">
	<h3>Countdown to Launch</h3>
	<div class="grid grid-cols-3 grid-rows-1 w-full h-full">
		<div class="grid grid-cols-2 grid-rows-2">
			<div>0</div>
			<div>1</div>
			<div class="col-span-2">
				<h4>Days</h4>
			</div>
		</div>
		<div class="grid grid-cols-2 grid-rows-2">
			<div>0</div>
			<div>1</div>
			<div class="col-span-2">
				<h4>Hours</h4>
			</div>
		</div>
		<div class="grid grid-cols-2 grid-rows-2">
			<div>0</div>
			<div>1</div>
			<div class="col-span-2">
				<h4>Minutes</h4>
			</div>
		</div>
	</div>
	<!-- {d < 10 ? '0' + d : d}:{h < 10 ? '0' + h : h}:{m < 10 ? '0' + m : m}:{s < 10 ? '0' + s : s} -->
</div>
