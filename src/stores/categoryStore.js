import { writable } from 'svelte/store';

const categories = writable([
	{
		men: {
			suits: {
				link: 'https://yesweb.se/sfab/img/men/suits/suit-darkblue.jpg'
			},
			shirts: {
				link: 'https://yesweb.se/sfab/img/men/shirts/shirt-category.jpg'
			}
		},
		women: {
			suits: {
				link: 'https://yesweb.se/sfab/img/men/suits/suit-darkblue.jpg'
			},
			shirts: {
				link: 'https://yesweb.se/sfab/img/men/shirts/shirt-category.jpg'
			}
		}
	}
]);

export default menItems;
