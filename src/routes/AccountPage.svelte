<script>
	import ProfilePage from './account/ProfilePage.svelte';
	import PaymentsPage from './account/PaymentsPage.svelte';
	import OrdersPage from './account/OrdersPage.svelte';

	let page = ProfilePage;

	const pages = {
		profile: ProfilePage,
		orders: OrdersPage,
		payments: PaymentsPage
	}

	function toggleNav(argument) {
		let nav = document.querySelector('.nav-pane');
		nav.classList.toggle('close');
	}

	function logout() {
		alert("You are now logged out, please sign in again.")
	}

	function navigate({ target }) {
		let nav = target.dataset.nav
		page = pages[nav]
	}
	
</script>


<main>

	<div class="container">
		<div class="d-flex" style="border-bottom: 1px solid grey;">
			<h1> Your Account </h1>
		</div>

		<div class="">
			<button on:click={toggleNav} class="toggle"> Toggle </button>
			<div class="viewbox">
				<div class="nav-pane">

					<ul class="nav-list">
						<li> <a class="nav-link" on:click={navigate}
						 data-nav="profile" href="#profile"> Profile </a> </li>

						<li> <a class="nav-link" on:click={navigate}
						 data-nav="orders" href="#orders"> My orders </a> </li>

						<li> <a class="nav-link" on:click={navigate}
						 data-nav="payments" href="#payments"> Payments </a> </li>

						<li> <a class="nav-link" on:click={navigate}
						 data-nav="logout" href="#logout"> Logout </a> </li>

					</ul>
				</div>
				
				<div class="content-view">
					<svelte:component this={page} />
				</div>
			</div>

		</div>
	</div>

</main>


<style>

	.toggle{
		padding: 10px 15px;
		border: 1px solid lavender;
	}
	
	.viewbox{
		display: flex;
		height: 100vh;
	}

	.container{
		max-width: 1020px;
		margin: 0 auto;
		overflow-y: hidden;
		padding: 1.2rem;
		padding-bottom: 4rem;
	}

	.nav-pane {
		width: 200px;
		background: #e8e8e87a;
		min-height: 100%;
		transition: .3s;
	}

	.close{
		visibility: collapse;
		width: 0px;
		transition: .3s;
	}

	.nav-list{
		list-style: none;
		padding: 1rem;
	}

	.nav-list li{
		padding: 10px;
		border-bottom: 1px solid lavender;
		margin: 15px 0px;
	}

	.nav-link{
		width: 100%;
		display: block;
		text-decoration: none;
		font-size: 18px;
		font-weight: 600;
	}

	.content-view{
		/*position: fixed;
		left: inherit;
		top: inherit;*/
		padding: 1rem;
		min-height: 100%;
		flex-grow: 1;
	}

</style>