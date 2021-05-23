const initialState = {
    products: [
      { name: 'Nodels', category: 'food', price: 5.00, inStock: 10, image: 'https://www.loveandoliveoil.com/wp-content/uploads/2015/03/soy-sauce-noodlesH2.jpg' },
      { name: 'Pizza', category: 'food', price: 10.00, inStock: 10, image: 'https://alfaiomi.net/wp-content/uploads/2021/03/pizza.jpg' },
      { name: 'Shirt', category: 'clothing', price: 20.00, inStock: 20, image: 'https://media.gq-magazine.co.uk/photos/606582c873f794cfbd40fc68/master/w_1920,h_1280,c_limit/White%20tshirts_0003_Our%20legacy.jpg' },
      { name: 'Shoes', category: 'clothing', price: 18.00, inStock: 13, image: 'https://images-na.ssl-images-amazon.com/images/I/51q2t2DUpaL._AC_SL1001_.jpg' },
      { name: 'TV', category: 'electronics', price: 300, inStock: 30, image: 'https://images.philips.com/is/image/PhilipsConsumer/50PUT6604_56-IMS-en_AE?$jpglarge$&wid=960' },
      { name: 'Freezer', category: 'electronics', price: 150, inStock: 20, image: 'https://www.ocean.it/storage/temp/public/417/9a0/f97/1__1200.jpg' },
      { name: 'Mobile', category: 'electronics', price: 450, inStock: 5, image: 'https://dyw7ncnq1en5l.cloudfront.net/optim/news/15/151185/3900c96a-comment-huawei-adapte-sa-strategie-mobile-a-l-absence-des-services-google__908_512__0-68-1254-775.jpeg' },
     
    ],
    Product: [],
  };
  
  
  const products = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
      case 'ACTIVE':
        let Product = state.products.filter((product) =>
          product.category === payload ? product.category : null
        );
        return { ...state, Product };
      default:
        return state;
    }
  };
  
  export default products;
  