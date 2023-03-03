<script>
	const currentYear = new Date().getFullYear();
	const newYearTime = new Date(`May 04 ${currentYear + 1} 00:00:00`);
	let days;
	let hours;
	let minutes;
	let seconds;

	function updateCountdown() {
		const currentTime = new Date();
		const diff = newYearTime - currentTime;

		const d = Math.floor(diff / 1000 / 60 / 60 / 24);
		const h = Math.floor(diff / 1000 / 60 / 60) % 24;
		const m = Math.floor(diff / 1000 / 60) % 60;
		const s = Math.floor(diff / 1000) % 60;

		let days = d;
		let hours = h < 10 ? '0' + h : h;
		let minutes = m < 10 ? '0' + m : m;
		let seconds = s < 10 ? '0' + s : s;
	}

	setInterval(updateCountdown, 1000);
</script>

<div class="w-full h-24">
	<div >
		<div>
			<h3 class="font-['Digit']">{days}</h3>
			<small>days</small>
		</div>
		<div>
			<h2 class="font-['Digit']">00</h2>
			<small>hours</small>
		</div>
		<div>
			<h2 id="minutes">00</h2>
			<small>minutes</small>
		</div>
		<div>
			<h2 id="seconds">00</h2>
			<small>seconds</small>
		</div>
	</div>
</div>
