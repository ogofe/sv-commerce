<script>
	import cart from '../store';
	import CartItem from '../components/cart/CartItem.svelte';
	let myCart;

	cart.subscribe(value => {
		myCart = value;
	});

	function remove({detail}) {
		cart.update(oldcart => {
			oldcart.splice(oldcart.indexOf(detail.item), 1)
			return oldcart
		});
	}

	function getCartItem(item){
		let idx, cartItem;
		idx = myCart.indexOf(item);
		cartItem = myCart.find(i => i.id === item.id)
		return {cartItem, idx}
	}

	function increment({ detail }){
		let {cartItem, idx} = getCartItem(detail.item);
		cartItem.qty ++
		cart.update(oldcart => {
			oldcart[idx] = cartItem;
			return oldcart;
		});
	}

	function decrement({ detail }){
		let {cartItem, idx} = getCartItem(detail.item);
		if(cartItem.qty > 1)
			cartItem.qty ++
		cart.update(oldcart => {
			oldcart[idx] = cartItem;
			return oldcart;
		});
	}
</script>


<main>

	<div class="container">
		<div class="d-flex title-bar">
			<h1> Your Cart </h1>
			<h1> {myCart.length} </h1>
		</div>

		<div class="mt-2">
			{#if myCart.length > 0}

			<div class="list">
				{#each myCart as item}
					<CartItem {item} on:increment={increment} on:decrement={decrement} on:remove={remove} />
				{/each}
			</div>

			<div class="d-flex cta-wrapper">
				<a class="no-decor t-center cta-shopping" href="/"> Continue Shopping </a>
				<a class="no-decor t-center cta-checkout" href="/checkout"> Go to Checkout </a>
			</div>
			
			{:else}
				<div class="d-flex" style="height: 350px; align-items: center; justify-content: center;">
					<h1 style="color: grey;"> Your cart is empty </h1>
				</div>
			{/if}
		</div>
	</div>

</main>


<style>
	.no-decor{
		text-decoration: none;
	}

	.title-bar{
		border-bottom: 1px solid #bdbdbd3d;
		color: grey;
		font-size: 12px;
	}

	input:disabled{
		color: #000;
	}

	.cta-wrapper{
		width: 100%;
		padding: 20px 0px;
		display: flex;
		justify-content: space-evenly;
	}

	.cta-shopping {
		margin-right: 10px;
		width: calc(100% - 10px);
		display: block;
		color: #fff;
		background: cornflowerblue;
		font-size: 17px;
		font-weight: 600;
		border: none;
		border-radius: 7px;
		padding: 15px 10px;
	}

	.cta-checkout {
		margin-left: 10px;
		width: calc(100% - 10px);
		display: block;
		color: #fff;
		background: #ff8100;
		font-size: 17px;
		font-weight: 600;
		border: none;
		border-radius: 7px;
		padding: 15px 10px;
	}
	
	.container{
		max-width: 1020px;
		margin: 0 auto;
		padding: 1.2rem;
		padding-bottom: 4rem;
	}

	.list{
		padding: 1.5rem 0px;
	}

	@media screen and (max-width: 430px){
		.cta-wrapper{
			flex-wrap: wrap;
		}

		.cta-wrapper a {
			margin: 10px 0;
		}
	}
</style>