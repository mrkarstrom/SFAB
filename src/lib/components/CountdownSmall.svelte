<script>
	import { onMount } from 'svelte';
	let time = new Date();
	let d10;
	let d1;
	let h10;
	let h1;
	let m10;
	let m1;

	const goalDate = new Date('May 07 2023 00:00:00');

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

<div class="w-full h-[250px] flex flex-col items-center justify-center py-24">
	<p class="text-[2.3rem] whitespace-normal text-center leading-none mb-8">Countdown to launch</p>
	<div class="grid grid-cols-3 grid-rows-1 gap-x-1 pb-10 w-[600px] pl-4 pr-3 h-full ">
		<div class="flex flex-col items-center">
			<div class="flex items-center mx-4">
				<p
					class="font-['Digit'] min-w-[5rem] text-center text-white text-[8rem] bg-secondary my-4 mx-1 rounded-sm p-2 leading-none"
				>
					{d10}
				</p>
				<p
					class="font-['Digit'] min-w-[5rem] text-center text-white text-[8rem] bg-secondary my-4 mx-1 rounded-sm p-2 leading-none"
				>
					{d1}
				</p>
			</div>
			<p class="text-[1.5rem]">DAYS</p>
		</div>
		<div class="flex flex-col items-center">
			<div class="flex items-center space-x-2">
				<p
					class="font-['Digit'] min-w-[5rem] text-center text-white text-[8rem] bg-secondary my-4 rounded-sm p-2 leading-none"
				>
					{h10}
				</p>
				<p
					class="font-['Digit'] min-w-[5rem] text-center text-white text-[8rem] bg-secondary my-4 rounded-sm p-2 leading-none"
				>
					{h1}
				</p>
			</div>
			<p class="text-[1.5rem]">HOURS</p>
		</div>
		<div class="flex flex-col items-center">
			<div class="flex items-center space-x-2">
				<p
					class="font-['Digit'] min-w-[5rem] text-center text-white text-[8rem] bg-secondary my-4 rounded-sm p-2 leading-none"
				>
					{m10}
				</p>
				<p
					class="font-['Digit'] min-w-[5rem] text-center text-white text-[8rem] bg-secondary my-4 rounded-sm p-2 leading-none"
				>
					{m1}
				</p>
			</div>
			<p class="text-[1.5rem]">MINUTES</p>
		</div>
	</div>
</div>
