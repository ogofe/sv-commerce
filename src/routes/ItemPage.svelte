<script>
	import {onMount} from 'svelte';
	import {products} from '../store';
	import ProductCard from '../components/product/ProductCard.svelte';

	export let params;
	let data, item, qty = 1, loading=true;
	products.subscribe(val => {data = val})

	$: (function getData() {
		console.log("getting data...")
		item = data.find(elem => elem.id === Number(params.id))
		console.log("getting data...", item)
	}())
	onMount(() => {
		loading = false
	})
	$: document.title = item.name;

</script>

{#if !loading}
<div class="container">

	<ul class="breadcrums">
		<li> <a href="/"> Store </a> </li>
		<li> {item.name} </li>
	</ul>

	<div class="item-detail">
		<div class="image-preview">
			<img class="img" src="{item.image}">
		</div>

		<div class="details">
			<h1 class="title"> {item.name} </h1>
			
			<h3 class="m-0"> ${item.price} </h3>

			<div class="d-flex">
				<h3> In stock </h3>
				<h3> x 23 </h3>
			</div>

			<div class="">
				<h3 class="m-0"> Colors </h3>
				<ul class="d-flex list flex-wrap">
					<li> Red </li>
					<li> Pink </li>
					<li> Orange </li>
					<li> Green </li>
					<li> Black </li>
					<li> Blue </li>
				</ul>
			</div>

			<div class="">
				<h3 class="m-0"> Sizes </h3>
				<ul class="d-flex list">
					<li> S </li>
					<li> M </li>
					<li> L </li>
					<li> XL </li>
					<li> XXL </li>
				</ul>
			</div>

			<div class="">
				<div class="d-flex qty-form">
					<button on:click={() => {qty = qty + 1}} class="add"> &plus; </button>
					<input type="number" value={qty} disabled="true" name="">
					<button on:click={() => {
						if (qty > 1){
							qty = qty - 1
						}
					}} class="sub"> &minus; </button>
				</div>

				<button class="cta"> Add to Cart </button>
			</div>

		</div>
	</div>

	<div>
		<h2> Description </h2>

		<p class="about"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
	</div>

	<hr>
	<h2 class="t-center"> Items Like This </h2>

	<div class="list d-flex">
		{#each data as item}
			<ProductCard {item} />
		{/each}
	</div>
</div>
{/if}

<style>
	.m-0{
		margin: 0;
	}

	.about{
		font-size: 18px;
		line-height: 1.5;
	}

	.qty-form{
		width: 100%;
		margin-top: 15px;
	}

	.breadcrums{
		display: flex;
		list-style: '\\';
		padding: 15px 0px;
		margin: 0;
	}

	.breadcrums li{
		padding: 0px 10px;
		font-weight: 600;
		font-size: 16px;
	}

	.breadcrums a{
		text-decoration: none;
	}

	.breadcrums li:first-child{
		list-style-type: none;
	}

	.list{
		list-style: none;
		padding: 0;
		margin: 5px 0;
		flex-wrap: wrap;
	}

	.list li{
		padding: 10px;
		border: 1px solid black;
	}

	.cta{
		width: 100%;
		padding: 12px;
		font-size: 18px;
		font-weight: 600;
	}

	.add, .sub{
		padding: 10px 15px;
		font-size: 18px;
		font-weight: 600;
	}

	.qty-form input{
		width: 70px !important;
		padding: 10px 15px;
		text-align: center;
	}

	input:disabled{
		color: #000 !important;
	}

	.container{
		max-width: 1020px;
		margin: 0 auto;
		padding: 1.2rem;
		padding-bottom: 4rem;
	}

	.item-detail{
		padding: 3rem 10px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.image-preview{
		width: 100%;
		flex-grow: 1;
		max-width: 380px;
		height: 380px;
		border: 2px solid #000;
	}

	.image-preview .img{
		width: 100%;
		height: 100%;
	}

	.title{
		margin-top: 0px;
	}

	.details{
		flex-grow: 1;
		padding: 0px;
		text-align: left;
		max-width: 420px;
		margin-left: auto;
	}

	@media screen and (max-width: 768px){
		.details{
			margin-left: 0;
			flex-grow: 0;
			padding: 0px auto;
			max-width: 420px;
			margin-top: 1.5rem;
		}
	}

</style>