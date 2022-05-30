<script>
	import router from "page";
	import HomePage from './routes/HomePage.svelte';
	import CartPage from './routes/CartPage.svelte';
	import CheckoutPage from './routes/CheckoutPage.svelte';
	import AccountPage from './routes/AccountPage.svelte';
	import ItemPage from './routes/ItemPage.svelte';

	let page, params;

	router('/', () => (page = HomePage));
	router('/cart', () => (page = CartPage));
	router('/checkout', () => (page = CheckoutPage));
	router('/account', () => (page = AccountPage));
	router('/item/:id', (ctx, next) => {
		params = ctx.params;
		next()
	}, () => (page = ItemPage));

	router.start();
</script>


<main class="page">
	<div class="navbar">
		<h3 class="brand"> Svelte </h3>

		<div class="nav">
		  <a class="nav-link d-flex" href="/"> 
		  	<ion-icon class="icon" name="home"></ion-icon>
		  	<span class="nav-link-text"> Home </span>
		  </a>

		  <a class="nav-link d-flex" href="/cart"> 
		  	<ion-icon class="icon" name="cart"></ion-icon>
		  	<span class="nav-link-text"> Cart </span>
		  </a>

		  <a class="nav-link d-flex" href="/account"> 
		  	<ion-icon class="icon" name="person"></ion-icon>
		  	<span class="nav-link-text"> Account </span>
		  </a>

		</div>
		<!-- <ion-icon name="card"></ion-icon> -->

	</div>

  <svelte:component this="{page}" {params} />
</main>

<style>
	.page{
		width: 100%;
		background-color: rgba(224, 228, 231, .3);
		min-height: 100vh;
	}

	.nav-link{
		padding: 5px;
		margin: 0 10px;
		display: flex;
		justify-content: space-between	;
		align-items: center;
		text-decoration: none;
		color: grey;
		font-weight: 600;
		transition: .2s;
	}

	.nav-link:hover{
		color: #000;
		transition: .2s;
	}

	.nav-link:last-child{
		margin-right: 0;
	}

	.navbar{
		display: flex;
		align-content: center;
		justify-content: space-between;
		background-color: #fff;
		padding: 10px;
		position: sticky;
		top: 0;
		box-shadow: 0px -5px 10px 0px grey;
		border-left-width: 0px;
		margin: 0 auto;
		z-index: 100;
	}

	.nav{
		margin: 0;
		display: flex;
	}

	.brand{
		margin: 5px;
	}

	nav a{
		padding: 10px;
	}

	@media screen and (max-width: 475px){
		.nav-link-text{
			display: none;
		}
	}

</style>