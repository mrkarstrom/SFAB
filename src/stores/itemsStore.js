import { writable } from 'svelte/store';

const items = writable([
	{
		gender: 'Women',
		label: 'Suit',
		price: '€5500',
		color: 'Black',
		brand: 'Gucci',
		link: 'https://yesweb.se/sfab/img/women/suits/suit-black.jpg'
	},
	{
		gender: 'Women',
		label: 'Dress',
		price: '€8000',
		color: 'Red',
		brand: 'Prada',
		link: 'https://yesweb.se/sfab/img/women/dresses/dress-red.jpg'
	},
	{
		gender: 'Men',
		label: 'Suit',
		price: '€5400',
		color: 'Dark Blue',
		brand: 'Gucci',
		link: 'https://yesweb.se/sfab/img/men/suits/suit-darkblue.jpg'
	},
	{
		gender: 'Men',
		label: 'Pants',
		price: '€540',
		color: 'Blue',
		brand: 'Prada',
		link: 'https://yesweb.se/sfab/img/men/pants/pants-blue.jpg'
	}
]);

export default items;
