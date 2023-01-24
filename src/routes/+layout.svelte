<script>
	import Footer from '$lib/components/Footer.svelte';
	import '../style.css';
	import TopbarPlain from '$lib/components/TopbarPlain.svelte';
</script>

<TopbarPlain />
<slot />
<Footer />
