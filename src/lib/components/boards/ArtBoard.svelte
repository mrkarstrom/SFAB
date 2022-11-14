<script>
	const categories = {
		basic: {
			trending: 'https://yesweb.se/sfab/img/women/suits/suit-black.jpg',
			newIn: 'https://yesweb.se/sfab/img/women/suits/suit-black.jpg',
			sell: 'https://yesweb.se/sfab/img/women/suits/suit-black.jpg',
			mostFavorited: 'https://yesweb.se/sfab/img/women/suits/suit-black.jpg'
		},
		holiday: {
			trending: 'https://yesweb.se/sfab/img/women/suits/suit-black.jpg',
			newIn: 'https://yesweb.se/sfab/img/women/suits/suit-black.jpg',
			sell: 'https://yesweb.se/sfab/img/women/suits/suit-black.jpg',
			mostFavorited: 'https://yesweb.se/sfab/img/women/suits/suit-black.jpg'
		},
		summer: {
			trending: 'https://yesweb.se/sfab/img/women/suits/suit-black.jpg',
			newIn: 'https://yesweb.se/sfab/img/women/suits/suit-black.jpg',
			sell: 'https://yesweb.se/sfab/img/women/suits/suit-black.jpg',
			mostFavorited: 'https://yesweb.se/sfab/img/women/suits/suit-black.jpg'
		},
		winter: {
			trending: 'https://yesweb.se/sfab/img/women/suits/suit-black.jpg',
			newIn: 'https://yesweb.se/sfab/img/women/suits/suit-black.jpg',
			sell: 'https://yesweb.se/sfab/img/women/suits/suit-black.jpg',
			mostFavorited: 'https://yesweb.se/sfab/img/women/suits/suit-black.jpg'
		}
	};
</script>

<div class="flex-col items-center hidden lg:flex justify-center w-full h-[400px]">
	<div class="artboard bg-secondary artboard-horizontal phone-6">
		<div class="wrapper grid grid-cols-3 grid-rows-2 gap-4 p-4 h-full">
			<div class="col-start-1 col-end-1 row-span-2">
				<div class="card w-auto h-full bg-base-100 shadow-xl image-full">
					<figure><img src={categories.basic.trending} alt="Shoes" /></figure>
					<div class="card-body">
						<button class="btn btn-primary">Trending</button>
					</div>
				</div>
			</div>
			<div class="col-start-2 row-start-1 row-end-1 col-span-2">
				<div class="card w-auto h-full bg-base-100 shadow-xl image-full">
					<figure><img src={categories.basic.newIn} alt="Shoes" /></figure>
					<div class="card-body">
						<h2 class="card-title">Shoes!</h2>
						<p>If a dog chews shoes whose shoes does he choose?</p>
						<div class="card-actions justify-end">
							<button class="btn btn-primary">Buy Now</button>
						</div>
					</div>
				</div>
			</div>
			<div class=" col-start-2 row-start-2">
				<div class="card w-auto h-full bg-base-100 shadow-xl image-full">
					<figure><img src={categories.basic.sell} alt="Shoes" /></figure>
					<div class="card-body">
						<h2 class="card-title">Shoes!</h2>
						<p>If a dog chews shoes whose shoes does he choose?</p>
						<div class="card-actions justify-end">
							<button class="btn btn-primary">Buy Now</button>
						</div>
					</div>
				</div>
			</div>
			<div class=" col-start-3 row-start-2">
				<div class="card w-auto h-full bg-base-100 shadow-xl image-full">
					<figure><img src={categories.basic.mostFavorited} alt="Shoes" /></figure>
					<div class="card-body">
						<h2 class="card-title">Shoes!</h2>
						<p>If a dog chews shoes whose shoes does he choose?</p>
						<div class="card-actions justify-end">
							<button class="btn btn-primary">Buy Now</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
