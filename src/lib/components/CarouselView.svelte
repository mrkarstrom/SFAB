<script>
	import itemsStore from '../../stores/itemsStore';
</script>

<section class="carousel carousel-center max-w-full p-4 space-x-4 bg-neutral ">
	{#each $itemsStore as item}
		<div class="carousel-item">
			<div class="card w-96 bg-base-100 shadow-xl">
				<figure>
					<img src={item.link} class="rounded-box w-48" alt={item.label} />
				</figure>
				<div class="card-body">
					<h2 class="card-title">
						{item.gender}
						<div class="badge badge-secondary">Price: {item.price}</div>
					</h2>
					<p>Color: {item.color}</p>
					<div class="card-actions justify-end">
						<div class="badge badge-outline">Price: {item.price}</div>
						/>
						<div class="badge badge-outline">Label: {item.label}</div>
					</div>
				</div>
			</div>
		</div>
	{/each}

	<div class="carousel-item">
		<img src="https://placeimg.com/1000/800/arch" class="rounded-box w-48" />
	</div>

	<div class="carousel-item">
		<img src="https://placeimg.com/1000/800/arch" class="rounded-box  w-48" />
	</div>

	<div class="carousel-item">
		<img src="https://placeimg.com/1000/800/arch" class="rounded-box  w-48" />
	</div>

	<div class="carousel-item">
		<img src="https://placeimg.com/1000/800/arch" class="rounded-box  w-48" />
	</div>

	<div class="carousel-item">
		<img src="https://placeimg.com/1000/800/arch" class="rounded-box  w-48" />
	</div>

	<div class="carousel-item">
		<img src="https://placeimg.com/1000/800/arch" class="rounded-box  w-48" />
	</div>

	<div class="carousel-item">
		<img src="https://placeimg.com/1000/800/arch" class="rounded-box  w-48" />
	</div>

	<div class="carousel-item">
		<img src="https://placeimg.com/1000/800/arch" class="rounded-box  w-48" />
	</div>
</section>
<!-- </div> -->
