<div class="w-full flex items-center justify-center  h-[var(--blockHeight)] bg-base-100 z-100 ">
	<div
		id="bounce-up-down"
		class="flex justify-center items-center border-[var(--circleColor)] border w-14 h-14 rounded-full "
	>
		<svg
			width="18px"
			height="15px"
			viewBox="0 0 16 16"
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			class="bi bi-arrow-down"
		>
			<path
				fill-rule="evenodd"
				d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
			/>
		</svg>
	</div>
	<p class="pl-5 text-md">scroll down</p>
</div>

<style>
	:root {
		--blockHeight: 12rem;
		--bgColor: '#fff';
		--arrowColor: #555;
		--circleColor: #555;
	}

	#bounce-up-down {
		animation: bounce-up-down 0.7s;
		animation-direction: alternate;
		animation-iteration-count: infinite;
	}

	@keyframes bounce-up-down {
		from {
			transform: translate3d(0, 20px, 0);
		}
		to {
			transform: translate3d(0, -20px, 0);
		}
	}
</style>
