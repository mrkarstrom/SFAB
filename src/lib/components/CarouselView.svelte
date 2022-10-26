<script>
	import itemsStore from '../../stores/itemsStore';
</script>

<section class="carousel carousel-center max-w-full p-4 space-x-4 bg-neutral ">
	{#each $itemsStore as item}
		<div class="carousel-item ">
			<div class="card rounded-sm w-80 bg-base-100 shadow-xl ">
				<figure class="h-[60%] mt-2 overflow-hidden">
					<img
						src={item.link}
						class="px-2 none-rounded object-cover object-center "
						alt={item.label}
					/>
				</figure>
				<div class="card-body">
					<h2 class="card-title">
						Category: {item.gender}
					</h2>
					<p>Color: {item.color}</p>
					<div class="badge badge-secondary">Price: {item.price}</div>

					<div class="card-actions justify-end">
						<div class="badge badge-outline">Price: {item.price}</div>
						<div class="badge badge-outline">Label: {item.label}</div>
					</div>
				</div>
			</div>
		</div>
	{/each}
</section>
<!-- </div> -->
