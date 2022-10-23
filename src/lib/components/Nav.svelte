<script>
</script>

<div class="flex items-center w-full bg-base-100 max-h-[30px] border-b-gray-400">
	<!-- <div class="navbar-start"> -->
	<div class="relative pt-0.5 pl-4 pb-1 uppercase">Slowfashion</div>
	<div class="dropdownNav pl-32 pt-0">
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
		<ul tabindex="0" class="menu menu-compact dropdownNav-content mt-3 p-2 shadow bg-base-100 w-52">
			<li><a>Item 1</a></li>
			<li tabindex="0">
				<a class="justify-between">
					Parent
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
					<li><a>Submenu 1</a></li>
					<li><a>Submenu 2</a></li>
				</ul>
			</li>
			<li><a>Item 3</a></li>
		</ul>
		<!-- </div> -->
	</div>
	<!-- TODO -->
	<div class="navbar-center hidden lg:flex ">
		<ul class="menu menu-horizontal p-0">
			<li><a>Item 1</a></li>
			<li tabindex="0">
				<a>
					Parent
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
					<li><a>Submenu 1</a></li>
					<li><a>Submenu 2</a></li>
				</ul>
			</li>
			<li><a>Item 3</a></li>
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
