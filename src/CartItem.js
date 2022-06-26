import React from "react";

class CartItem extends React.Component {
    constructor () {
        super();
        this.state = {
            price : 999,
            title : 'Mobile Phone',
            qty : 1 ,
            img : ''
        }
        //this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    // we are using arrow function here so that we dont have to use .bind() here and arrow function will bind the value of *this* to the instance of the class (here CartItem)
    increaseQuantity = () => {
        //this.state.qty += 1;
        //console.log('this', this.state);
        //setState form 1
        // this.setState({
        //     qty: this.state.qty + 1
        // });

        //setState form 2 - if previous state required use this
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        });
    }
    render() {
        const {price , title , qty} = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={ { fontsize:25 } }>{title}</div>
                    <div style={ { color:'#777' } }> Price : {price}</div>
                    <div style={ { color:'#777f' } }> Qty : {qty}</div>
                    <div className="cart-item-actions">
                        {/*Buttons */}
                        <img  
                        alt = "increase" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/992/992651.png" 
                        onClick={this.increaseQuantity} 
                        />
                        <img  
                        alt = "decrease" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/992/992683.png"  
                        />
                        <img  
                        alt = "delete" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/3096/3096673.png"  
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
      height: 110,
      width: 110,
      borderRadius: 4,
      background :'#ccc'
    }
};
export default CartItem;
