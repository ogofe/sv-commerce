
<div class="card">
    <div class="image-box">
        <a href="/item/{item.id}">
        <img src="{item.image}" alt="{item.name} image" class="img">
        </a>
    </div>

    <div class="card-body">
        <h3 class="card-title">{item.name}</h3>
        <h6 class="price">${item.price}</h6>
        <button class="cta" on:click|preventDefault="{sendToCart}"> Add to Cart </button>
    </div>
</div>

<script>
    import {createEventDispatcher} from 'svelte';
    export let item;
    
    const dispatch = createEventDispatcher();
    function sendToCart(event){
        dispatch('addtocart', {
            item: {
                ...item,
                qty: 1
            }
        })
    }
</script>

<style>

    .card{
        width: 100%;
        max-width: 230px;
        background-color: white;
        border: none;
        margin: 10px auto;
        border-radius: 7px;
    }

    .card-body{
        padding: 1rem;
    }

    .price{
        color: grey;
        margin: 0;
        margin-bottom: 5px;
        font-size: 17px;
    }

    .image-box{
        height: 230px;
    }

    .card-title{
        margin-bottom: 5px;
        margin-top: 0;
    }

    .img{
        width: 100%;
        height: 100%;
        border-radius: 5px 5px 0px 0px;
    }

    .cta{
        display: block;
        width: 100%;
        padding: 12px;
        border-radius: 7px;
        margin: 0;
        margin-top: 15px;
        border: none;
    }

    .card:hover{
        transition: .3s;
        transform: scale(1.02, 1.02);
    }

</style>