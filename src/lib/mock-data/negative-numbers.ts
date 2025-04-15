import type { ZineData } from '$lib/types/zine'

export const negativeNumbersZine: ZineData = {
	title: 'Negative Numbers',
	author: 'Joy',
	panels: [
		{
			id: '1',
			width: 'width-full',
			height: 'half',
			'background-img': {
				src: 'https://picsum.photos/800/400',
				alt: 'A classroom with students learning about negative numbers'
			},
			texts: [
				{
					text: 'In math class, we learned about negative numbers.',
					type: 'normal',
					text_position: 'top-outer-left'
				}
			]
		},
		{
			id: '2',
			width: 'width-full',
			height: 'half',
			'background-img': {
				src: 'https://picsum.photos/800/400',
				alt: 'A number line showing negative and positive numbers'
			},
			texts: [
				{
					text: 'Negative numbers are less than zero.',
					type: 'normal',
					text_position: 'top-outer-left'
				}
			]
		},
		{
			id: '3',
			width: 'width-half',
			height: 'half',
			'background-img': {
				src: 'https://picsum.photos/400/400',
				alt: 'Temperature thermometer showing negative temperatures'
			},
			texts: [
				{
					text: "Like when it's -5°C outside!",
					type: 'explosive',
					text_position: 'bottom-outer-right'
				}
			]
		},
		{
			id: '4',
			width: 'width-full',
			height: 'half',
			'background-img': {
				src: 'https://picsum.photos/800/400',
				alt: 'A bank account statement showing negative balance'
			},
			texts: [
				{
					text: 'Or when your bank account is -$50.',
					type: 'shout',
					text_position: 'top-outer-right'
				}
			]
		},
		{
			id: '5',
			width: 'width-full',
			height: 'half',
			'background-img': {
				src: 'https://picsum.photos/800/400',
				alt: 'A submarine diving below sea level'
			},
			texts: [
				{
					text: 'Or when a submarine is -100 meters below sea level.',
					type: 'normal',
					text_position: 'bottom-outer-left'
				}
			]
		},
		{
			id: '6',
			width: 'width-full',
			height: 'half',
			'background-img': {
				src: 'https://picsum.photos/800/400',
				alt: 'A person climbing down a ladder'
			},
			texts: [
				{
					text: 'Going down is like using negative numbers.',
					type: 'normal',
					text_position: 'top-outer-left'
				}
			]
		},
		{
			id: '7',
			width: 'width-full',
			height: 'half',
			'background-img': {
				src: 'https://picsum.photos/800/400',
				alt: 'A person climbing up a ladder'
			},
			texts: [
				{
					text: 'Going up is like using positive numbers.',
					type: 'normal',
					text_position: 'bottom-outer-right'
				}
			]
		},
		{
			id: '8',
			width: 'width-full',
			height: 'half',
			'background-img': {
				src: 'https://picsum.photos/800/400',
				alt: 'A number line with arrows showing movement'
			},
			texts: [
				{
					text: 'Moving left on a number line is negative.',
					type: 'normal',
					text_position: 'top-outer-left'
				},
				{
					text: 'Moving right is positive!',
					type: 'explosive',
					text_position: 'bottom-inner-right'
				}
			]
		},
		{
			id: '9',
			width: 'width-full',
			height: 'half',
			'background-img': {
				src: 'https://picsum.photos/800/400',
				alt: 'A person walking backwards and forwards'
			},
			texts: [
				{
					text: 'Walking backwards is like -2 steps.',
					type: 'normal',
					text_position: 'top-outer-left'
				},
				{
					text: 'Walking forwards is +2 steps!',
					type: 'shout',
					text_position: 'bottom-outer-right'
				}
			]
		},
		{
			id: '10',
			width: 'width-half',
			height: 'half',
			'background-img': {
				src: 'https://picsum.photos/400/400',
				alt: 'A person jumping up and down'
			},
			texts: [
				{
					text: 'Jumping up is positive!',
					type: 'explosive',
					text_position: 'top-outer-right'
				},
				{
					text: 'Landing back down is negative.',
					type: 'whisper',
					text_position: 'bottom-outer-left'
				}
			]
		},
		{
			id: '11',
			width: 'width-half',
			height: 'half',
			'background-img': {
				src: 'https://picsum.photos/400/400',
				alt: 'A person bouncing a ball'
			},
			texts: [
				{
					text: "When a ball bounces up, that's positive!",
					type: 'shout',
					text_position: 'top-outer-left'
				},
				{
					text: "When it falls back down, that's negative.",
					type: 'whisper',
					text_position: 'bottom-outer-right'
				}
			]
		},
		{
			id: '12',
			width: 'width-full',
			height: 'half',
			'background-img': {
				src: 'https://picsum.photos/800/400',
				alt: 'A person climbing stairs'
			},
			texts: [
				{
					text: 'Climbing up stairs is positive!',
					type: 'normal',
					text_position: 'top-outer-left'
				}
			]
		},
		{
			id: '13',
			width: 'width-full',
			height: 'half',
			'background-img': {
				src: 'https://picsum.photos/800/400',
				alt: 'A person going down stairs'
			},
			texts: [
				{
					text: 'Going down stairs is negative.',
					type: 'normal',
					text_position: 'bottom-outer-right'
				}
			]
		},
		{
			id: '14',
			width: 'width-full',
			height: 'half',
			'background-img': {
				src: 'https://picsum.photos/800/400',
				alt: 'A person standing at zero on a number line'
			},
			texts: [
				{
					text: 'And standing still is zero!',
					type: 'explosive',
					text_position: 'top-outer-right'
				}
			]
		}
	]
}
