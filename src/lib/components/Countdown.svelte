<script>
	import { onMount } from 'svelte';
	let time = new Date();
	const goalDate = new Date('May 07 2023 01:12:00');

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
	<p class="text-[2.5rem] whitespace-normal text-center leading-none ">Countdown to launch</p>
	<div class="grid grid-cols-3 grid-rows-1 gap-x-10 pb-10 m-0 w-[80%] h-full">
		<div class="flex flex-col items-center">
			<p
				class="font-['Digit'] min-w-[80px] text-center text-white text-[4rem] bg-secondary my-4 rounded-md p-2 leading-none"
			>
				{days}
			</p>
			<small>DAYS</small>
		</div>
		<div class="flex flex-col items-center">
			<p
				class="font-['Digit'] min-w-[80px] text-center text-white text-[4rem] bg-secondary my-4 rounded-md p-2 leading-none"
			>
				{hours}
			</p>
			<small>HOURS</small>
		</div>
		<div class="flex flex-col items-center">
			<p
				class="font-['Digit'] min-w-[80px] text-center text-white text-[4rem] bg-secondary my-4 rounded-md p-2 leading-none"
			>
				{minutes}
			</p>
			<small>MINUTES</small>
		</div>
	</div>
</div>
