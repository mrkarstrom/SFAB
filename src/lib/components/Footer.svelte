<script>
	import { showModal } from '../../stores/store';
</script>

<div
	class="flex h-auto w-full active:text-gray-900 text-center 
bg-white md:flex md:flex-col md:items-center md:justify-center md:h-[70px] "
>
	<ul
		class="block py-2 space-y-2 font-normal md:py-0 md:space-y-0 text-black w-full md:flex md:flex-row md:items-center md:justify-center"
	>
		<li class="w-32">
			<a
				on:click={() => {
					showModal.set(true);
				}}
				class="uppercase hover:font-semibold cursor-pointer">About us</a
			>
		</li>
		<li class="w-32">
			<a href="#" class="uppercase hover:font-semibold">Contact us</a>
		</li>
		<li class="w-32">
			<a href="#" class="uppercase hover:font-semibold ">Product Care</a>
		</li>
		<li class="w-32">
			<a href="#" class="uppercase hover:font-semibold">App</a>
		</li>
	</ul>
</div>
<div
	class="footer-1-border flex flex-col items-center justify-center w-full b-0 h-[35px] uppercase bg-[#edc692] text-gray-800"
>
	&copy;Slowfashion 2023
</div>
