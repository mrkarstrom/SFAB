<script>
	import '../style.css';
	import TopbarPlain from '$lib/components/topbar/TopbarPlain.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	import HeaderMain from '$lib/components/HeaderMain.svelte';
</script>

<TopbarPlain />
<slot />
<Footer />
