<script>
	import { fly } from 'svelte/transition';
	import { inview } from 'svelte-inview';
	import Title from './Title.svelte';
	import Slide1 from './Slide1.svelte';
	import Slide2 from './Slide2.svelte';
	import Slide3 from './Slide3.svelte';
	import Slide4 from './Slide4.svelte';

	let isInView;
	import { Swipe, SwipeItem } from 'svelte-swipe';
	const swipeConfig = {
		autoplay: false,
		delay: 2000,
		showIndicators: true,
		transitionDuration: 1000,
		defaultIndex: 0
	};
	let SwipeComp;

	function nextSlide() {
		SwipeComp.nextItem();
	}

	function prevSlide() {
		SwipeComp.prevItem();
	}
</script>

<div
	use:inview={{ unobserveOnEnter: true, rootMargin: '-10%' }}
	on:change={({ detail }) => {
		isInView = detail.inView;
	}}
>
	{#if isInView}
		<div in:fly={{ y: 500, duration: 1500 }}>
			<div class="h-[400px] w-full">
				<Swipe {...swipeConfig} bind:this={SwipeComp}>
					<SwipeItem>
						<Slide1 />
					</SwipeItem>

					<SwipeItem>
						<Slide2 />
					</SwipeItem>

					<SwipeItem>
						<Slide3 />
					</SwipeItem>

					<SwipeItem>
						<Slide4 />
					</SwipeItem>
				</Swipe>
				<button type="button" on:click={prevSlide}>Prev</button>
				<button type="button" on:click={nextSlide}>Next</button>
			</div>
		</div>
	{/if}
</div>
