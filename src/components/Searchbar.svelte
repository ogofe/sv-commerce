<script>
	import {createEventDispatcher} from 'svelte';

	const dispatch = createEventDispatcher();

	function handleChange({ target }){
		dispatch('input', {
			text: target.value
		})
	}

	export let style;
	export let className;

</script>

<div class="searchbar {className ? className : "" }" {style}>
	<ion-icon class="search-icon" name="search"></ion-icon>
	<input class="search-input" type="search" placeholder="Search here..." on:input={handleChange} name="">
</div>

<style>

	.searchbar {
		display: flex;
		align-items: center;
		background: #fff;
		border-radius: 7px;
		border: 1px solid lavender;
	}

	.search-icon{
		padding: 0px 10px;
		font-size: 25px;
	}

	.search-input{
		width: 100%;
		flex-grow: 1;
		margin: 0;
		padding: 12.5px 10px;
		font-size: 17px;
		border-radius: 7px;
		border: none;
	}

	.search-input:focus-within{
		outline: none;
	}
	
</style>