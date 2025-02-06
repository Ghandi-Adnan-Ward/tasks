// import  { useState, } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../../Components/Navbar/Navbar";
// import Helmet from "../../Helmet/Helmet";
// import './CartPage.css'
// function CartPage() {
//   const [cart, setCart] = useState(() => {
//     return JSON.parse(localStorage.getItem("cart")) || [];
//   });

//   const navigate = useNavigate();

//   const removeFromCart = (index) => {
//     const updatedCart = [...cart];
//     updatedCart.splice(index, 1);
//     setCart(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   return (
//     <Helmet title="Cart">
//       <Navbar />
//       <h2>Shopping Cart</h2>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div className="cart-items">
//           {cart.map((item, index) => (
//             <div key={index} className="cart-item">
//               <h3>{item.userId}</h3>
//               <p>Price: ${item.price}</p>
//               <button onClick={() => removeFromCart(index)}>Remove</button>
//             </div>
//           ))}
//         </div>
//       )}
//       <button onClick={() => navigate("/")}>Continue Shopping</button>
//     </Helmet>
//   );
// }

// export default CartPage;
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Helmet from "../../Helmet/Helmet";
import "./CartPage.css";

function CartPage() {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  const increaseQuantity = (index) => {
    const updatedCart = cart.map((item, i) =>
      i === index ? { ...item, quantity: (item.quantity || 1) + 1 } : item
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (index) => {
    const updatedCart = cart.map((item, i) =>
      i === index && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCart(updatedCart);
  };

  return (
    <Helmet title="cart-container ">
      <Navbar />
      <h2 className=".h">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <h3>item name:{item.name}</h3>
              <p>Price: ${item.price}</p>
              <div >
                <button className="quantity-controls" onClick={() => decreaseQuantity(index)}>-</button>
                <span>{item.quantity || 1}</span>
                <button className="quantity-controls" onClick={() => increaseQuantity(index)}>+</button>
              </div>
              <button className="remove-button" onClick={() => removeFromCart(index)}>Remove</button>
            </div>
          ))}
        </div>
      )}
      <button className="continue-shopping" onClick={() => navigate("/")}>Continue Shopping</button>
    </Helmet>
  );
}

export default CartPage;
