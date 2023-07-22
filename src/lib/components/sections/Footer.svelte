<script>
	const d = new Date();
	let currentYear = d.getFullYear();
</script>

<input type="checkbox" id="my-modal" class="modal-toggle" />
<div class="modal">
	<div class="modal-box relative max-w-[85%] md:max-w-[70%]">
		<label for="my-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
		<h2 class="p-4">About Us</h2>
		<p class="p-4 whitespace-normal lg:text-xl xl:text-2xl">
			We believe in circularity - Fashion doesn't need to exist only in fast virgin trends. We all
			need to take responsibility to decrease the virgin production of things, the consumerism of
			this society doesn't help the earth or ourselves.<br /> We are only, on average, using about 10%
			of our wardrobes clothes, jewellery, shoes and bags. There was no alternative of a boutique platform
			to buy and sell mid to high end pieces, so we made one. We encourage everyone to be part of circularity
			and if you can encourage and inspire someone else to do the same then we have an impactful movement.
		</p>
	</div>
</div>

<div
	class="flex flex-row items-center justify-center h-auto w-full active:text-gray-900 text-center  bg-white 
		md:flex-col 
		md:items-center 
		md:justify-center 
		md:h-[70px] "
>
	<ul
		class="flex flex-col py-0 text-[25px] items-center justify-center text-black w-full
				md:py-2 
				md:space-x-4
				md:flex-row 
				lg:font-normal
				lg:text-lg
				lg:py-2 
				lg:space-x-4
			"
	>
		<li class="w-full lg:w-24 text-center py-2 md:py-0">
			<label for="my-modal" class="uppercase hover:font-semibold cursor-pointer">about us</label>
		</li>
		<li class="w-full lg:w-32 text-center py-2 md:py-0">
			<a href="/" class="uppercase hover:font-semibold">Contact us</a>
		</li>
		<li class="w-full lg:w-36 text-center py-2 md:py-0">
			<a href="/carepage" class="uppercase hover:font-semibold ">Product Care</a>
		</li>
		<li class="w-full lg:w-20 text-center py-2 md:py-0">
			<a href="/" class="uppercase hover:font-semibold">App</a>
		</li>
	</ul>
</div>
<div
	class="flex flex-col items-center justify-center w-full b-0 h-[60px] lg:h-[35px] uppercase bg-[#edc692] text-gray-800"
>
	&copy;Slowfashion {currentYear}
</div>
