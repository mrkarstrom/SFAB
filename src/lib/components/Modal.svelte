<script>
	import { showModal } from '../../stores/store';

	const handleClick = () => {
		showModal.set(false);
	};
</script>

<div
	id="backdrop"
	on:click={handleClick}
	class="w-full h-full fixed bottom-0 left-0  opacity-[0.9] bg-black z-30"
>
	<div class="w-full h-full flex items-center justify-center">
		<div
			id="popup-modal"
			on:click={handleClick}
			class="relative h-auto bg-white flex flex-col items-center justify-center rounded p-6 opacity-100 z-50 w-[80%]"
		>
			<div class="absolute right-4 top-4 hover:cursor-pointer">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="stroke-current flex-shrink-0 h-10 w-10"
					fill="none"
					viewBox="0 0 24 24"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1"
						d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
			</div>
			<h2 class="p-4">About Us</h2>
			<p class="p-4  whitespace-normal lg:text-xl xl:text-2xl 2xl:text-4xl">
				We believe circularity fashion doesn't need to exist only in fast virgin trends. We all need
				to take responsibility to decrease the virgin production of things, the consumerism of this
				society doesn't help the earth or ourselves.<br /> We are only, on average, using about 10% of
				our wardrobes clothes, jewellery, shoes and bags. There was no alternative of a boutique platform
				to buy and sell mid to high end pieces, so we made one. We encourage everyone to be part of circularity
				and if you can encourage and inspire someone else to do the same then we have an impactful movement.
			</p>
		</div>
	</div>
</div>
