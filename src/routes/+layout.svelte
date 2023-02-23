<script>
	import '../style.css';
	import { showModal } from './../stores/store.js';
	import Modal from '../lib/components/Modal.svelte';
</script>

{#if $showModal}
<Modal/>
{/if}
<slot />
