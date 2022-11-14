<script>
	import '../style.css';
	import TopbarPlain from '$lib/components/topbar/TopbarPlain.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
</script>

<TopbarPlain />
<slot />
<Footer />
