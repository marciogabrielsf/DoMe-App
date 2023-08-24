export const animations = {
	header: {
		from: {
			opacity: 0,
			translateY: -100,
		},
		animate: {
			opacity: 1,
			translateY: 0,
		},
		transition: {
			stiffness: 50,
		},
	},
	footer: {
		from: {
			opacity: 0,
			translateX: -100,
		},
		animate: {
			opacity: 1,
			translateX: 0,
		},
		transition: {
			delay: 500,
			stiffness: 40,
		},
	},
};
