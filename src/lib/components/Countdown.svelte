<script>
	import { onMount } from 'svelte';
	let time = new Date();
	const goalDate = new Date('May 07 2023 00:00:00');

	$: diff = goalDate - time;
	$: d = Math.floor(diff / 1000 / 60 / 60 / 24);
	$: h = Math.floor(diff / 1000 / 60 / 60) % 24;
	$: m = Math.floor(diff / 1000 / 60) % 60;
	$: s = Math.floor(diff / 1000) % 60;

	$: days = d;
	$: hours = h < 10 ? '0' + h : h;
	$: minutes = m < 10 ? '0' + m : m;
	$: seconds = s < 10 ? '0' + s : s;

	onMount(() => {
		const interval = setInterval(() => {
			time = new Date();
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	});
</script>

<div class="w-full h-52 flex flex-col items-center justify-center">
	<p class="text-[2.5rem] whitespace-normal text-center w-60 leading-none ">Countdown to launch</p>
	<div class="grid grid-cols-3 grid-rows-1 gap-0 p-0 m-0 w-auto h-full">
		<div class="flex flex-col items-center">
			<h2 class="font-['Digit']">{days}</h2>
			<small>days</small>
		</div>
		<div class="flex flex-col items-center">
			<h2 class="font-['Digit']">{hours}</h2>
			<small>hours</small>
		</div>
		<div class="flex flex-col items-center">
			<h2 class="font-['Digit']">{minutes}</h2>
			<small>minutes</small>
		</div>
	</div>
</div>
