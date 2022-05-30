import { writable, readable } from 'svelte/store';

const cart = writable([]);

export const products = readable([
		{
			id: 1,
			name: "Footwear",
			price: 120.55,
			image: "/assets/footwear.jpg",
			imageCredit: { 
				artist: "Melvin Buezo",
				link: "https://www.pexels.com/photo/photo-of-sneakers-on-white-background-2529148/"
			}
		},
		{
			id: 2,
			name: "Clothing Pack",
			price: 120.55,
			image: "/assets/clothing-pack.jpg",
			imageCredit: { 
				artist: "Terje Sollie",
				link: "https://www.pexels.com/photo/pair-of-brown-leather-casual-shoes-on-table-298863/"
			}
		},
		{
			id: 3,
			name: "Pink Jacket",
			price: 120.55,
			image: "/assets/pink-jacket.jpg",
			imageCredit: { 
				artist: "Athena",
				link: "https://www.pexels.com/photo/woman-wearing-pink-overcoat-and-black-inner-top-2043590/"
			}
		},
		{
			id: 4,
			name: "Track Pants",
			price: 120.55,
			image: "/assets/track-pants.jpg",
			imageCredit: { 
				artist: "Wendel Moretti",
				link: "https://www.pexels.com/photo/woman-wearing-black-sport-1972115/"
			}
		},
	])

export default cart;

