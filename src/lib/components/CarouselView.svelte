<script>
	import itemsStore from '../../stores/itemsStore';
</script>

<section class="carousel carousel-center max-h-[60%] max-w-full p-4 space-x-4 bg-neutral ">
	{#each $itemsStore as item}
		<div class="carousel-item lg:h-[500px] lg:w-[300px] h-96">
			<div class="card rounded-sm max-w-full bg-base-100 shadow-xl ">
				<figure class="mt-2 overflow-hidden">
					<img
						src={item.link}
						class="px-2 none-rounded object-cover object-center "
						alt={item.label}
					/>
				</figure>
				<div class="card-body">
					<h2 class="card-title">
						Category: {item.label} - {item.gender}
					</h2>
					<p>Color: {item.color}</p>
					<div class="badge badge-secondary">Add item</div>
					<div class="badge badge-outline">Price: {item.price}</div>
				</div>
			</div>
		</div>
	{/each}
</section>
<!-- </div> -->
