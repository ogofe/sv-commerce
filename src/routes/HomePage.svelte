<script>
	import ProductCard from "../components/product/ProductCard.svelte";
	import Searchbar from "../components/Searchbar.svelte";
	import cart, {products as store} from '../store';
	
	
	let myCart, products;
	cart.subscribe(val => {myCart = val})
	store.subscribe(val => {products = val})

	function addToCart({ detail }){

		cart.update(oldcart => {
			oldcart.push({
				id: detail.item.id,
				price: detail.item.price,
				name: detail.item.name,
				image: detail.item.image,
				qty: 1
			});
			return oldcart
		});
	}

	function search(text) {
		// body...
	}

</script>

<svelte:head>
	<title>Ecommerce Shop</title>
</svelte:head>

<div class="container">

	<h1 style="color: grey;"> Latest Entries </h1>

	<div class="banner"></div>

	<div class="d-flex flex-wrap">
		<div class="filter">
			<input type="text" placeholder="Filter">
		</div>

		<Searchbar on:input={search} style="flex-grow: 1;" />
	</div>

	<!-- 
	-->
	<div class="list">
		{#each products as item, idx}
			<ProductCard on:addtocart={addToCart} item={item} />
		{/each}
	</div>

</div>

<style>
	.flex-wrap{
		flex-wrap: wrap;
	}

	.banner{
		height: 200px;
		background: #9e9e9ec2;
		margin: 2rem 0;
		width: 100%;
		border-radius: 7px;
		border: none;
	}

	.filter{
		width: 100%;
		max-width: 300px;
		margin: 0;
		background: #fff;
		border-radius: 7px;
		border: 1px solid lavender;
		align-items: center;
		margin-right: 10px;
	}

	.filter input{
		font-size: 17px;
		padding: 12.5px 10px;
		background: transparent;
		border: none;
	}

	.cart-count{
		margin-top: 0;
	}

	.container{
		max-width: 1020px;
		margin: 0 auto;
		padding: 2rem 1rem;
		padding-bottom: 4rem;
	}

	.list{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}
</style>