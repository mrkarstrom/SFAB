<script>
	import { showModal } from '../../stores/store';

	const handleClick = () => {
		showModal.set(true);
	};
</script>

<div
	class="flex flex-row items-center justify-center h-auto w-full active:text-gray-900 text-center  bg-white 
		md:flex-col 
		md:items-center 
		md:justify-center 
		md:h-[70px] "
>
	<ul
		class="flex flex-col py-2 space-y-2 font-normal items-center justify-center text-black w-full
				md:py-0 
				md:space-y-0  
				md:flex-row 
			"
	>
		<li class="w-32">
			<a
				on:click={handleClick}
				href="#aboutus"
				id="#aboutus"
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
