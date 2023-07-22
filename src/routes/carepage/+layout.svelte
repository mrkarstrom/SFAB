<script>
	import Subscribe from '$lib/components/sections/Subscribe1.svelte';
	import Footer from '$lib/components/sections/Footer.svelte';
	import TopbarPlain from '$lib/components/sections/TopbarPlain.svelte';
</script>

<TopbarPlain />
<slot />
<Subscribe />
<Footer />
