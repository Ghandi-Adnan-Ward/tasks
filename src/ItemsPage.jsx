/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import { Slide ,Roll, Zoom, Bounce, Flip} from "react-awesome-reveal";

import Navbar from "./Navbar";
import Helmet from "./Helmet/Helmet";
const products = [
  { id: 1, name: "Red Rose", type: "Bouquets",type1: "Bouquets", price: 20, image: "../public/8PBgPKYnVnhtARnm2lb8cWoawnT0jaJrNJTH4xEt.jpg", badge: "",
   colors:['red','green','blue']
     },
  { id: 2, name: "Echeveria", type: "Indoor Plants", price: 18, image: "../public/NMGeOEBlAhLMogMXif9NDkOvzfT6JOtlkOF6Vanf.jpg", badge: "" },
  { id: 3, name: "Yellow Tulips", type: "Tulips", price: 20, image: "../public/لقطة الشاشة 2024-12-30 174120.png", badge: "Sales" },
  { id: 4, name: "Bright Gerbera Daisy", type: "Congratulations", price: 12, image: "daisy.png", badge: "Sales" },
  { id: 5, name: "Eucalyptus", type: "Bouquets", price: 21, image: "eucalyptus.png", badge: "" },
  { id: 6, name: "Mini Sunflowers", type: "Sunflowers", price: 34, image: "sunflowers.png", badge: "Sales" },
  { id: 7, name: "Mini Sunflowers", type: "Sunflowers", price: 34, image: "sunflowers.png", badge: "Sales" },
  { id: 8, name: "Mini Sunflowers", type: "Sunflowers", price: 34, image: "sunflowers.png", badge: "Sales" },
  { id: 9, name: "Mini Sunflowers", type: "Sunflowers", price: 34, image: "sunflowers.png", badge: "Sales" },
  { id: 10, name: "Mini Sunflowers", type: "Sunflowers", price: 34, image: "sunflowers.png", badge: "Sales" },
  { id: 11, name: "Mini Sunflowers", type: "Sunflowers", price: 34, image: "sunflowers.png", badge: "Sales" },

];

function ItemsPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();

  // const handleAddItemClick = () => {
  //   navigate("/add-item");
  // };
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value); 
  };
  const renderDiscountButtons = () => {
    if(selectedCategory=='sales') {
         return (
            <div className="discount-buttons">
              <Bounce cascade>
                <button>Discount 10%</button>
                <button>Discount 20%</button>
                <button>Discount 30%</button>
            </Bounce>
           </div>
        );
      }
        else if(selectedCategory=='Bouquets') {
          return (
            <div className="discount-buttons">
              <Bounce cascade>
                <button>Romantic</button>
                <button>Sympathy</button>
                <button>Congratulations</button>
              </Bounce>
            </div>
          )
        }
        else if(selectedCategory=='Indoor Plants') {
          return (
            <div className="discount-buttons">
              <Bounce cascade damping={0.3}>
                <button>Succulents</button>
                <button>Low-Light</button>
                <button>Pet-Friendly</button>
              </Bounce>
            </div>
          )
        }
        else  
        return null; 
        }
  
  
   const closeSidebar = () => {
       if (isSidebarOpen) {
        setSidebarOpen(false);
         console.log('k')
       }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handlePrev = () => {
    console.log("Previous clicked");
  };
  
  const handleNext = () => {
    console.log("Next clicked");
  };
  
  return (
    <Helmet title='items'>
      <div className="app" onClick={closeSidebar}>
      <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
      <Slide direction="left" cascade damping={0.3} duration={1500}>

      <header className="header">
        <button className="add-item" onClick={()=>navigate('/add-item')}>
          <i className="fas fa-plus"></i> Add Item
        </button>
        <div className="form-group">
          <select name="category" onChange={handleCategoryChange}>
            <option value="">All Products</option>
            <option value="sales">sales</option>
            <option value="Bouquets">Bouquets</option>
            <option value="Indoor Plants">Indoor Plants</option>
          </select>
        </div>
      </header>

      <div className="search-container">
      <i className="fas fa-search search-icon"></i>
      <input
        type="text"
        placeholder="Search Flower Types"
        className="search-bar"
      />
    </div>
</Slide>
   
    {/* {selectedCategory === "sales" ? (
        <div className="discount-buttons">
           <button>Discount 10%</button>
          <button>Discount 20%</button>
          <button>Discount 30%</button>
        </div>
      )
    :selectedCategory === "Bouquets" ?
    (
      <div className="discount-buttons">
        <button>Romantic</button>
        <button>Sympathy</button>
        <button>Congratulations</button>
      </div>
    ) 
    : selectedCategory === "Indoor Plants" ?
    (
      <div className="discount-buttons">
        <button>Succulents</button>
        <button>Low-Light</button>
        <button>Pet-Friendly</button>
      </div>
    )
    :
    null
    }
     */}
 {renderDiscountButtons()}

      <div className="product-grid">
      <Slide direction="left" cascade damping={0.1} >
        {products.map((product) => (
        <div key={product.id} className="product-card">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-type">{product.type}</p>
          <div className="object-fit">
          <img src={`images/${product.image}`} alt={product.name} className="product-image" />
          
          <div className="product-colors">
            {product.colors &&
              product.colors.map((color, index) => (
                <i
                  key={index}
                  className="color-dot"
                  style={{ backgroundColor: color }}
                ></i>
              ))}
          </div>
          </div>

          <div className="product-details">
            <p className="product-type1">{product.type1}</p>
            <p className="product-price">${product.price}</p>
          </div>

          {product.badge && <span className="product-badge">{product.badge}</span>}
        </div>         
         ))}
      </Slide>
      </div>

      <div className="buttons-container">
        <button className="buttons prev" onClick={handlePrev}>
          &lt;
        </button>

        <button className="buttons next" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
    </Helmet>
  );
}

export default ItemsPage;
