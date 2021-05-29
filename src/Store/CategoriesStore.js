const intialState = {
	
      categories: [
              { name: 'food', displayName: 'Food', description: 'Choose your favorite food'},
              { name: 'electronics', displayName: 'Electronics', description: 'Choose your favorite electronics pices'},
              { name: 'shirts', displayName: 'shirts', description: 'Choose your favorite clothes'},
            ],

	active: '',
};

const categories = (state = intialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'ACTIVE':
			const active = payload;
			const categories = state.categories;
			return { categories, active };

		default:
			return state;
	}
};

export default categories;

export const getCategory = (category) => {
	return {
		type: 'ACTIVE',
		payload: category,
	};
};