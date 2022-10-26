<script>
</script>

<div class="categoryList flex items-center w-full bg-base-100 max-h-[30px] border-b-gray-400">
	<a href="/">
		<img
			class="flex flex-start h-[30px] pl-[13px]"
			src="https://yesweb.se/sfab/img/logo.png"
			alt="logo"
		/>
	</a>
	<div class="dropdownNav pl-[115px] pt-0">
		<label tabindex="0" class="lg:hidden">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h8m-8 6h16"
				/></svg
			>
		</label>
		<ul tabindex="0" class="menu menu-compact dropdownNav-content left-0 mt-[6px] bg-base-100 w-52">
			<li><a>Men</a></li>
			<li tabindex="0">
				<a class="justify-between">
					Women
					<svg
						class="fill-current"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg
					>
				</a>
				<ul class="p-2">
					<li><a>Submenu-1 1</a></li>
					<li><a>Submenu-1 2</a></li>
				</ul>
			</li>
			<li><a>Lookbook</a></li>
			<li><a>Brands A-Z</a></li>
			<li><a>Contact</a></li>
			<li><a>Sell</a></li>
		</ul>
		<!-- </div> -->
	</div>
	<div class="navbar-center w-full absolute justify-center hidden lg:flex">
		<!-- <ul class="menu-1 menu-horizontal1 p-0"> -->
		<ul class="menu menu-horizontal hover:bg-transparent p-0">
			<li><a href="/Men" class="focus:bg-transparent hover:bg-transparent">Men</a></li>
			<li tabindex="0">
				<a href="/Women" class="focus:bg-transparent hover:bg-transparent">
					Women
					<svg
						class="fill-current"
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg
					>
				</a>
				<ul class="p-2">
					<li><a href="#" class="focus:bg-transparent hover:bg-transparent">Submenu-1 1</a></li>
					<li><a href="#" class="focus:bg-transparent hover:bg-transparent">Submenu-1 2</a></li>
				</ul>
			</li>
			<li><a href="#" class="focus:bg-transparent hover:bg-transparent">Lookbook</a></li>
			<li><a href="#" class="focus:bg-transparent hover:bg-transparent">Brands A-Z</a></li>
			<li><a href="#" class="focus:bg-transparent hover:bg-transparent">Contact</a></li>
			<li><a href="#" class="focus:bg-transparent hover:bg-transparent">Sell</a></li>
		</ul>
	</div>
	<div class="navbar-end" />
</div>

<style>
	.dropdownNav {
		position: absolute;
		display: inline-block;
	}
	.dropdownNav > *:focus {
		outline: 2px solid transparent;
		outline-offset: 2px;
	}
	.dropdownNav .dropdownNav-content {
		visibility: hidden;
		position: absolute;
		z-index: 50;
		opacity: 0;
		transform-origin: top;
		--tw-scale-x: 0.95;
		--tw-scale-y: 0.95;
		transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))
			skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
			scaleY(var(--tw-scale-y));
		transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow,
			transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
		transition-property: color, background-color, border-color, text-decoration-color, fill, stroke,
			opacity, box-shadow, transform, filter, backdrop-filter;
		transition-property: color, background-color, border-color, text-decoration-color, fill, stroke,
			opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color,
			-webkit-backdrop-filter;
		transition-duration: 200ms;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}
	.dropdownNav.dropdownNav-open .dropdownNav-content,
	.dropdownNav.dropdownNav-hover:hover .dropdownNav-content,
	.dropdownNav:not(.dropdownNav-hover):focus .dropdownNav-content,
	.dropdownNav:not(.dropdownNav-hover):focus-within .dropdownNav-content {
		visibility: visible;
		opacity: 1;
	}
	.dropdownNav.dropdownNav-open .dropdownNav-content,
	.dropdownNav.dropdownNav-hover:hover .dropdownNav-content,
	.dropdownNav:not(.dropdownNav-hover):focus .dropdownNav-content,
	.dropdownNav:not(.dropdownNav-hover):focus-within .dropdownNav-content {
		visibility: visible;
		opacity: 1;
	}
	.dropdownNav.dropdownNav-open .dropdownNav-content,
	.dropdownNav.dropdownNav-hover:hover .dropdownNav-content,
	.dropdownNav:not(.dropdownNav-hover):focus .dropdownNav-content,
	.dropdownNav:not(.dropdownNav-hover):focus-within .dropdownNav-content {
		visibility: visible;
		opacity: 1;
	}
	.dropdownNav.dropdownNav-open .dropdownNav-content,
	.dropdownNav.dropdownNav-hover:hover .dropdownNav-content,
	.dropdownNav:not(.dropdownNav-hover):focus .dropdownNav-content,
	.dropdownNav:not(.dropdownNav-hover):focus-within .dropdownNav-content {
		visibility: visible;
		opacity: 1;
	}
	.dropdownNav.dropdownNav-open .dropdownNav-content,
	.dropdownNav.dropdownNav-hover:hover .dropdownNav-content,
	.dropdownNav:focus .dropdownNav-content,
	.dropdownNav:focus-within .dropdownNav-content {
		--tw-scale-x: 1;
		--tw-scale-y: 1;
		transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))
			skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
			scaleY(var(--tw-scale-y));
	}
	.dropdownNav.dropdownNav-open .dropdownNav-content,
	.dropdownNav.dropdownNav-hover:hover .dropdownNav-content,
	.dropdownNav:focus .dropdownNav-content,
	.dropdownNav:focus-within .dropdownNav-content {
		--tw-scale-x: 1;
		--tw-scale-y: 1;
		transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))
			skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
			scaleY(var(--tw-scale-y));
	}
	.dropdownNav.dropdownNav-open .dropdownNav-content,
	.dropdownNav.dropdownNav-hover:hover .dropdownNav-content,
	.dropdownNav:focus .dropdownNav-content,
	.dropdownNav:focus-within .dropdownNav-content {
		--tw-scale-x: 1;
		--tw-scale-y: 1;
		transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))
			skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
			scaleY(var(--tw-scale-y));
	}
	.dropdownNav.dropdownNav-open .dropdownNav-content,
	.dropdownNav.dropdownNav-hover:hover .dropdownNav-content,
	.dropdownNav:focus .dropdownNav-content,
	.dropdownNav:focus-within .dropdownNav-content {
		--tw-scale-x: 1;
		--tw-scale-y: 1;
		transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))
			skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
			scaleY(var(--tw-scale-y));
	}
</style>
