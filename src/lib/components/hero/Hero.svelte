<script>
	import LinkbarHero from '$lib/components/linkbar/LinkbarHero.svelte';
</script>

<div class="hero min-h-screen" style="background-image: url(https://placeimg.com/1000/800/arch);">
	<div class="hero-overlay bg-opacity-60" />
	<div class="h-full w-content border-red-700">
		<LinkbarHero />
	</div>
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-md">
			<h1 class="mb-5 text-5xl font-bold">Hello there</h1>
			<p class="mb-5">
				Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
				quasi. In deleniti eaque aut repudiandae et a id nisi.
			</p>
			<button class="btn btn-primary">Get Started</button>
		</div>
	</div>
</div>
