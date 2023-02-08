<script>
	import { getContext } from 'svelte';
	import Popup from './Popup.svelte';
	const { open } = getContext('simple-modal');
	const showSurprise = () => open(Popup, { message: "It's a modal!" });
</script>

<div
	class="hidden lg:flex h-auto w-full active:text-gray-900 text-center 
	bg-white md:flex md:flex-col md:items-center md:justify-center md:h-[70px] "
>
	<ul
		class="block py-2 space-y-2 font-normal md:py-0 md:space-y-0 text-gray-500 w-full md:flex md:flex-row md:items-center md:justify-center md:space-x-7 "
	>
		<li>
			<a on:click={showSurprise} class="uppercase hover:text-gray-900 cursor-pointer">About us</a>
		</li>
		<li>
			<a href="#" class="uppercase hover:text-gray-900">Contact us</a>
		</li>
		<li>
			<a href="#" class="uppercase hover:text-gray-900">Product Care</a>
		</li>
		<li>
			<a href="#" class="uppercase hover:text-gray-900">App</a>
		</li>
	</ul>
</div>
<div
	class="footer-1-border flex flex-col items-center justify-center w-full b-0 h-[35px] uppercase bg-[#edc692] text-gray-800"
>
	&copy;Slowfashion 2023
</div>
