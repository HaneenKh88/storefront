const intialState = {

	products: [
		{
			id: 1,
			categoryAssociation: 'ELECTRONICS',
			name: 'TV',
      description: 'Choose your favorite electronics pices',
			price: '300$',
      stock: 30,
			inventoryCount: 0,
			img: 'https://images.philips.com/is/image/PhilipsConsumer/50PUT6604_56-IMS-en_AE?$jpglarge$&wid=960',
		},
		{
			id: 2,
			categoryAssociation: 'FOOD',
			name: 'Nodels',
      description: 'Choose your favorite food',
			price: '5$',
      stock: 20,
			inventoryCount: 0,
			img: 'https://www.loveandoliveoil.com/wp-content/uploads/2015/03/soy-sauce-noodlesH2.jpg',
		},
		{
			id: 3,
			categoryAssociation: 'FOOD',
			name: 'Pizza',
      description: 'Choose your favorite food',
			price: '10$',
      stock: 20,
			inventoryCount: 0,
			img: 'https://alfaiomi.net/wp-content/uploads/2021/03/pizza.jpg',
		},
		{
			id: 4,
			categoryAssociation: 'ELECTRONICS',
			name: 'Freezer',
      description: 'Choose your favorite electronics pices',
			price: '150$',
      stock: 25,
			inventoryCount: 0,
			img: 'https://www.ocean.it/storage/temp/public/417/9a0/f97/1__1200.jpg',
		},
		{
			id: 5,
			categoryAssociation: 'ELECTRONICS',
			name: 'Mobile',
      description: 'Choose your favorite electronics pices',
			price: '450$',
      stock: 100,
			inventoryCount: 0,
			img: 'https://dyw7ncnq1en5l.cloudfront.net/optim/news/15/151185/3900c96a-comment-huawei-adapte-sa-strategie-mobile-a-l-absence-des-services-google__908_512__0-68-1254-775.jpeg',
		},
		{
			id: 6,
			categoryAssociation: 'CLOTHES',
			name: 'Shirt',
      description: 'Choose your favorite clothes',
			price: '20$',
      stock: 150,
			inventoryCount: 0,
			img: 'https://media.gq-magazine.co.uk/photos/606582c873f794cfbd40fc68/master/w_1920,h_1280,c_limit/White%20tshirts_0003_Our%20legacy.jpg',
		},
		{
			id: 7,
			categoryAssociation: 'CLOTHES',
			name: 'Shoes',
      description: 'Choose your favorite clothes',
			price: '10$',
      stock: 80,
			inventoryCount: 0,
			img: 'https://images-na.ssl-images-amazon.com/images/I/51q2t2DUpaL._AC_SL1001_.jpg',
		},
	
	],
	TotalInventoryCount: 0,
	cartProducts: [],
	show: false,
};

const products = (state = intialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'INCREMENT':
			const TotalInventoryCount = state.TotalInventoryCount + 1;
			const products = state.products.map((product) => {
				if (payload === product.id) {
					return {
						id: payload,
						categoryAssociation: product.categoryAssociation,
						name: product.name,
						description: product.description,
						price: product.price,
            stock: product.stock -1,
						inventoryCount: product.inventoryCount+1, 
						img: product.img,
					};
				} else {
					return product;
				}
			});
			return {
				products,
				TotalInventoryCount,
				cartProducts: state.cartProducts,
				show: state.show,
			};

		case 'ADD_CART':
			const product = state.products.find((product) => product.id === payload);

			const cartProducts = [...state.cartProducts, product];

			const prev = state.cartProducts.find((product) => product.id === payload);

			const index = cartProducts.indexOf(prev);

			if (index !== -1) cartProducts.splice(index, 1);

			return {
				products: state.products,
				TotalInventoryCount: state.TotalInventoryCount,
				cartProducts,
				show: state.show,
			};

		case 'DELETE':
			const productsDelete = state.cartProducts.filter(
				(product) => product.id !== payload,
			);

			const sum = productsDelete.reduce((acc, product) => {
				acc += product.inventoryCount;
				return acc;
			}, 0);

			const InventoryCount = sum;

			const newProducts = state.products.map((product) => {
				if (payload === product.id) {
					return {
						id: payload,
						categoryAssociation: product.categoryAssociation,
						name: product.name,
						description: product.description,
						price: product.price,
						inventoryCount: 0,
						img: product.img,
					};
				} else {
					return product;
				}
			});

			return {
				products: newProducts,
				TotalInventoryCount: InventoryCount,
				cartProducts: productsDelete,
				show: state.show,
			};

		case 'SHOW':
			return {
				products: state.products,
				TotalInventoryCount: state.TotalInventoryCount,
				cartProducts: state.cartProducts,
				show: payload,
			};

		default:
			return state;
	}
};

export default products;

export const increment = (id) => {
	return {
		type: 'INCREMENT',
		payload: id,
	};
};

export const getCartProducts = (id) => {
	return {
		type: 'ADD_CART',
		payload: id,
	};
};

export const handleItemShow = (boolean) => {
	return {
		type: 'SHOW',
		payload: boolean,
	};
};

export const deleteCart = (id) => {
	return {
		type: 'DELETE',
		payload: id,
	};
};


