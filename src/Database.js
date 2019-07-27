export const Users = [
	{
		id: 1,
		name: {
			first: 'mangesh',
			last: 'kumar',
		},
		gender: 'male',
		username: 'kumarmangesh55', //unique
		password: 'mangesh@22',
		address: {
			postalCode: 411015,
			landmark: '',
		},
		phone: '9423575116',
		email: 'kumarmangesh55@gmail.com',
		aadharNo: 715491362326,
		itemsLeased: [
			{
				itemId: 1,
				leasedDate: new Date(),
				returnDate: new Date() + 200000,
				quantity: '2', //in terms of unit
				discount: 20, //percent
				totalPrice: 1000, //before discount
				finalPrice: 980, //after discount
			},
		],
		active: true,
		lastUpdated: new Date(),
	},
	{
		id: 2,
		name: {
			first: 'ashish',
			last: 'birajdar',
		},
		gender: 'male',
		username: 'ashish007', //unique
		password: 'ashish123',
		address: {
			postalCode: 411015,
			country: 'India',
		},
		phone: '8698821165',
		email: 'ashishbirajdar777@gmail.com',
		aadharNo: 154812168435,
		itemsLeased: [
			{
				itemId: 1,
				leasedDate: new Date(),
				returnDate: new Date() + 200000,
				quantity: '2', //in terms of unit
				discount: 20, //percent
				totalPrice: 1000, //before discount
				finalPrice: 980, //after discount
			},
			{
				itemId: 2,
				userId: 2,
				leasedDate: new Date(),
				returnDate: new Date() + 200000,
				quantity: '1', //in terms of unit
				discount: 10, //percent
				totalPrice: 1200, //before discount
				finalPrice: 980, //after discount
			},
		],
		active: true,
		lastUpdated: new Date(),
	},
]

export const Items = [
	{
		id: 1,
		type: 'Camera',
		name: 'Canon EOS 200D DSLR Camera ',
		description: [
			'Effective Pixels: 24.2 MP',
			'Sensor Type: CMOS',
			'WiFi Available',
			'1080p at 60p + Time-Lapse',
		],
		imgUrl: 'cannon.jpeg',
		pricePerUnit: 500,
		quantityLeft: 4, //in terms of unit
		unit: 'nos',
		active: 'true',
		leasedDays: '10',
		lastUpdated: new Date(),
	},
	{
		id: 1,
		type: 'Camera',
		name: 'Canon EOS 200D DSLR Camera ',
		description: [
			'Effective Pixels: 24.2 MP',
			'Sensor Type: CMOS',
			'WiFi Available',
			'1080p at 60p + Time-Lapse',
		],
		imgUrl: 'cannon.jpeg',
		pricePerUnit: 500,
		quantityLeft: 4, //in terms of unit
		unit: 'nos',
		active: 'true',
		leasedDays: '10',
		lastUpdated: new Date(),
	},
	{
		id: 2,
		type: 'Tripod',
		name: 'Perfect Nova Camera Stand ',
		description: [
			'Designed For: DSLR/SLR Camera, Mobile',
			'Load Capacity: 3000',
			'Height Range: 350.52 - 1049.02',
			'Material: Plastic',
		],
		imgUrl: 'tripod.jpeg',
		pricePerUnit: 2000,
		quantityLeft: 6, //in terms of unit
		unit: 'nos',
		active: 'true',
		leasedDays: '10',
		lastUpdated: new Date(),
	},
	{
		id: 2,
		type: 'Tripod',
		name: 'Perfect Nova Camera Stand ',
		description: [
			'Designed For: DSLR/SLR Camera, Mobile',
			'Load Capacity: 3000',
			'Height Range: 350.52 - 1049.02',
			'Material: Plastic',
			'Load Capacity: 3000',
			'Height Range: 350.52 - 1049.02',
			'Material: Plastic',
		],
		imgUrl: 'tripod.jpeg',
		pricePerUnit: 2000,
		quantityLeft: 6, //in terms of unit
		unit: 'nos',
		active: 'true',
		leasedDays: '10',
		lastUpdated: new Date(),
	},
]
