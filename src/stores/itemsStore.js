import { writable } from 'svelte/store';

const items = writable([
	{
		gender: 'Men',
		label: 'Suit',
		price: '€5400',
		color: 'Dark Blue',
		link: 'https://yesweb.se/sfab/img/men/suits/suit-darkblue.jpg'
	},
	{
		gender: 'Men',
		label: 'Pants',
		price: '€540',
		color: 'Blue',
		link: 'https://yesweb.se/sfab/img/men/suits/suit-darkblue.jpg'
	}
]);

export default items;
