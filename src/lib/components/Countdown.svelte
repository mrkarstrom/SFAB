<script>
	import { onMount } from 'svelte';
	let time = new Date();
	let d10;
	let d1;
	let h10;
	let h1;
	let m10;
	let m1;

	const goalDate = new Date('April 11 2023 02:00:00');

	$: diff = goalDate - time;
	$: d = Math.floor(diff / 1000 / 60 / 60 / 24);
	$: h = Math.floor(diff / 1000 / 60 / 60) % 24;
	$: m = Math.floor(diff / 1000 / 60) % 60;

	$: d10 = Math.floor(d / 10);
	$: d1 = Math.floor(d % 10);

	$: h10 = Math.floor(h / 10);
	$: h1 = Math.floor(h % 10);

	$: m10 = Math.floor(m / 10);
	$: m1 = Math.floor(m % 10);

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
	<p class="text-[2.3rem] whitespace-normal text-center leading-none ">Countdown to launch</p>
	<div class="grid grid-cols-3 grid-rows-1 gap-x-2 pb-10 w-full pl-4 pr-3 h-full">
		<div class="flex flex-col items-center">
			<div class="flex items-center space-x-1">
				<p
					class="font-['Digit'] min-w-[35px] text-center text-white text-[3rem] bg-secondary my-4 rounded-sm p-1.5 leading-none"
				>
					{d10}
				</p>
				<p
					class="font-['Digit'] min-w-[35px] text-center text-white text-[3rem] bg-secondary my-4 rounded-sm p-1.5 leading-none"
				>
					{d1}
				</p>
			</div>
			<small>DAYS</small>
		</div>
		<div class="flex flex-col items-center">
			<div class="flex items-center space-x-1">
				<p
					class="font-['Digit'] min-w-[35px] text-center text-white text-[3rem] bg-secondary my-4 rounded-sm p-1.5 leading-none"
				>
					{h10}
				</p>
				<p
					class="font-['Digit'] min-w-[35px] text-center text-white text-[3rem] bg-secondary my-4 rounded-sm p-1.5 leading-none"
				>
					{h1}
				</p>
			</div>
			<small>HOURS</small>
		</div>
		<div class="flex flex-col items-center">
			<div class="flex items-center space-x-1">
				<p
					class="font-['Digit'] min-w-[35px] text-center text-white text-[3rem] bg-secondary my-4 rounded-sm p-1.5 leading-none"
				>
					{m10}
				</p>
				<p
					class="font-['Digit'] min-w-[35px] text-center text-white text-[3rem] bg-secondary my-4 rounded-sm p-1.5 leading-none"
				>
					{m1}
				</p>
			</div>
			<small>MINUTES</small>
		</div>
	</div>
</div>
