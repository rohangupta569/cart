import React from 'react';
//import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component{

    constructor () {
      super();
      this.state = {
          products: [
              {
                  price : 99,
                  title : 'Watch',
                  qty : 1 ,
                  img : 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=394&q=80',
                  id: 1
              },
              {
                  price : 999,
                  title : 'Mobile Phone',
                  qty : 10,
                  img : 'https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=819&q=80',
                  id: 2
              },
              {
                  price : 999,
                  title : 'Laptop',
                  qty : 4 ,
                  img : 'https://images.unsplash.com/photo-1542393545-10f5cde2c810?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
                  id: 3
              }
          ]
      }
  }
  handleIncreaseQuantity = (product) => {
      console.log('Heyy please inc the qty of', product);
      const {products} = this.state;
      const index = products.indexOf(product);

      products[index].qty += 1;

      this.setState({
          //products: products
          //Means the same as above
          products
      })
  }
  handleDecreaseQuantity = (product) => {
      console.log('Heyy please dec the qty of', product);
      const {products} = this.state;
      const index = products.indexOf(product);

      if(products[index].qty === 0){
          return;
      }

      products[index].qty -= 1;

      this.setState({
          products
      })
  }
  handleDeleteProduct = (id) => {
      const{ products } = this.state;

      const items = products.filter((item) => item.id !== id);//It will return us an array with not the id given in line 61

      this.setState({
          products: items
      })
  }

  getCartCount = () =>{
    const {products} = this.state;

    let count = 0;
    products.forEach((product)=>{
      count += product.qty;
    })
    return count;
  }

  getCartTotal = () => {
    const {products} = this.state;

    let cartTotal = 0;

    products.map((product)=>{
      cartTotal = cartTotal + product.qty*product.price;

      return '';
    })

    return cartTotal;
  }
  render() {
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar count = {this.getCartCount()} />
        <Cart 
        products = {products}
        onIncreaseQuantity = {this.handleIncreaseQuantity}
        onDecreaseQuantity = {this.handleDecreaseQuantity}
        onDeleteProduct = {this.handleDeleteProduct}
        />
        <div style={{padding : 10 ,fontSize:20}}>TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
