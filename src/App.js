import React from 'react';
//import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase/compat/app';

class App extends React.Component{

    constructor () {
      super();
      this.state = {
          products: [],
          loading:true
      }

      this.db = firebase.firestore();
    }
  componentDidMount() {
    // firebase
    // .firestore()
    // .collection('products')
    // .get()
    // .then((snapshot) => {
    //   console.log(snapshot);

    //   snapshot.docs.map((doc)=>{
    //     console.log(doc.data());
    //   });

    //   const products = snapshot.docs.map((doc) =>{
    //     const data = doc.data();

    //     data['id'] = doc.id;

    //     return data;
    //   });

    //   this.setState({
    //     products,
    //     loading: false
    //   })
    // })
    this.db
    .collection('products')
    .onSnapshot((snapshot) => {
      console.log(snapshot);

      snapshot.docs.map((doc)=>{
        console.log(doc.data());
      });

      const products = snapshot.docs.map((doc) =>{
        const data = doc.data();

        data['id'] = doc.id;

        return data;
      });

      this.setState({
        products,
        loading: false
      })
    })
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

  addProduct = () => {
    this.db
    .collection('products')
    .add({
      img : '',
      price : 900,
      qty : 3,
      titile : 'Washing Machine'
    })
    .then((docRef) => {
      console.log('Product has been added', docRef);
    })
    .catch((error) => {
      console.log('Error :', error);
    })
  }

  render() {
    const {products,loading} = this.state;
    return (
      <div className="App">
        <Navbar count = {this.getCartCount()} />
        <button onClick={this.addProduct} style = {{padding:20, fontSize:20}}>Add a product</button>
        <Cart 
        products = {products}
        onIncreaseQuantity = {this.handleIncreaseQuantity}
        onDecreaseQuantity = {this.handleDecreaseQuantity}
        onDeleteProduct = {this.handleDeleteProduct}
        />
        {loading && <h1>Loading Products...</h1>}
        <div style={{padding : 10 ,fontSize:20}}>TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
