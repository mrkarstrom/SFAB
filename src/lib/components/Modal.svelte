<script>
	import showModal from '../../stores/showModal';
	function handleClick() {
		showModal.update(false)
	}
</script>

<div id="backdrop" on:click={handleClick} class="w-full h-full fixed opacity-[0.9] bg-black z-50">
	<div id="popup-modal" class="w-1/2 h-8 bg-secondary flex flex-col items-center justify-center">
		<h2>About Us</h2>
		<p>
			We believe circularity fashion doesn't need to exist only in fast virgin trends. <br />We all
			need to take responsibility to decrease the virgin production of things, the consumerism of
			this society doesn't help the earth or ourselves. <br />We are only, on average, using about
			10% of our wardrobes clothes, jewellery, shoes and bags. There was no alternative of a
			boutique platform to buy and sell mid to high end pieces, so we made one. <br />We encourage
			everyone to be part of circularity and if you can encourage and inspire someone else to do the
			same then we have an impactful movement.
		</p>
	</div>
</div>
