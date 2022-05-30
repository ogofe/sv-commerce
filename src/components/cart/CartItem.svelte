<script>
	import {createEventDispatcher} from 'svelte';

	const dispatch = createEventDispatcher();
	export let item;

	function decrement(){
		dispatch('decrement', {
			item
		})
	}

	function increment(){
		dispatch('increment', {
			item
		})
	}

	function remove(){
		dispatch('remove', {
			item
		})
	}
</script>


<div class="cart-item">
	<div class="img-box">
		<img src="{item.image}">
	</div>

	<div class="details">
		<div class="d-flex">
			<h4 class="m-0"> {item.name} </h4>
			<h4 class="m-0"> ${item.price} </h4>
		</div>
		
		<div class="qty-box">
			<button on:click={decrement}> &minus; </button>
			<input type="number" disabled value="{item.qty}" />
			<button on:click={increment}> &plus; </button>
			<button on:click={remove} class="remove"> &times; </button>
		</div>

	</div>
</div>

<style>
	
	.qty-box{
		margin-top: 10px;
		display: flex;
		max-width: 200px;
	}

	.qty-box input{
		width: 100%;
		max-width: 50px;
		text-align: center;
		margin: 0;
	}

	.remove{
		background: red;
		color: #fff;
		margin-left: 20px !important;
	}

	.qty-box button{
		margin: 0;
		padding: 5px 10px;
		font-size: 14px;
		font-weight: 600;
		border-radius: 5px;
		border: none;
	}

	.img-box{
		width: 70px;
		height: 70px;
	}

	.img-box img{
		width: 100%;
		border-radius: 7px;
		height: 100%;
	}

	.details{
		width: 100%;
		margin-left: 15px;
		flex-grow: 1;
	}

	.cart-item{
		background: #ffffff7a;
		border-radius: 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px;
		margin: 15px 0px;
	}

</style>