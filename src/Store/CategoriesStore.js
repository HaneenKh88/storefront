const initialState = {
    categories: [
      { name: 'food', displayName: 'Food', description: 'Choose your favorite food'},
      { name: 'electronics', displayName: 'Electronics', description: 'Choose your favorite electronics pices'},
      { name: 'clothing', displayName: 'Clothing', description: 'Choose your favorite clothes'},
    ],
    active: ''
  };
  
  const categories = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
      case 'ACTIVE':
        return { ...state, payload };
      default:
        return state;
    }
  };
  
  export default categories;
  
  export const Category = (name) => {
    return {
      type: 'ACTIVE',
      payload: name,
    };
  };

  