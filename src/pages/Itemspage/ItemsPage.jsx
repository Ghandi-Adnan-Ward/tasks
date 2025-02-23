/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Slide ,Roll, Zoom, Bounce, Flip} from "react-awesome-reveal";
import './Itemspage.css'
import Navbar from "../../Components/Navbar/Navbar";
import Helmet from "../../Helmet/Helmet";
import { useTranslation } from 'react-i18next';
import Cookies from "js-cookie";
import LanguagePrompt from "../LanguagePrompt/LanguagePrompt ";
import axios from 'axios';

// const products = [
//   { id: 1, name: "Red Rose", type: "Bouquets",type1: "Bouquets", price: 20, image: "../public/8PBgPKYnVnhtARnm2lb8cWoawnT0jaJrNJTH4xEt.jpg", badge: "",
//    colors:['red','green','blue']
//      },
//   { id: 2, name: "Echeveria", type: "Indoor Plants", price: 18, image: "../public/NMGeOEBlAhLMogMXif9NDkOvzfT6JOtlkOF6Vanf.jpg", badge: "" },
//   { id: 3, name: "Yellow Tulips", type: "Tulips", price: 20, image: "../public/لقطة الشاشة 2024-12-30 174120.png", badge: "Sales" },
//   { id: 4, name: "Bright Gerbera Daisy", type: "Congratulations", price: 12, image: "daisy.png", badge: "Sales" },
//   { id: 5, name: "Eucalyptus", type: "Bouquets", price: 21, image: "eucalyptus.png", badge: "" },
//   { id: 6, name: "Mini Sunflowers", type: "Sunflowers", price: 34, image: "sunflowers.png", badge: "Sales",   colors:['red','green','blue']
// },
//   { id: 7, name: "Mini Sunflowers", type: "Sunflowers", price: 34, image: "sunflowers.png", badge: "Sales" },
//   { id: 8, name: "Mini Sunflowers", type: "Sunflowers", price: 34, image: "sunflowers.png", badge: "Sales" },
//   { id: 9, name: "Mini Sunflowers", type: "Sunflowers", price: 34, image: "sunflowers.png", badge: "Sales" },
//   { id: 10, name: "Mini Sunflowers", type: "Sunflowers", price: 34, image: "sunflowers.png", badge: "Sales" },
//   { id: 11, name: "Mini Sunflowers", type: "Sunflowers", price: 34, image: "sunflowers.png", badge: "Sales" },

// ];

function ItemsPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const savedLanguage = Cookies.get("language");
  const [showPrompt, setShowPrompt] = useState(false);
  const[lan,setlan]=useState('')
  const[products,setproducts]=useState([])
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });
  const fetchData = async () => {
  
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setproducts(response.data)
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    
     }
  };
   useEffect(() => {
     fetchData()
   }, [])
   
  useEffect(() => {
    setlan(Cookies.get('language'))
    console.log(savedLanguage)
  }, [i18n])
  
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setlan(lang)
    // Cookies.remove("language"); 
    setShowPrompt(true)
    console.log(lang)
    // console.log(savedLanguage)
  };

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
                <button>{t('buttons.discount_10')}</button>
                <button>{t("buttons.discount_20")}</button>
                <button>{t("buttons.discount_30")}</button>
            </Bounce>
           </div>
        );
      }
        else if(selectedCategory=='Bouquets') {
          return (
            <div className="discount-buttons">
              <Bounce cascade>
                <button>{t("buttons.romantic")}</button>
                <button>{t("buttons.sympathy")}</button>
                <button>{t("buttons.congratulations")}</button>
              </Bounce>
            </div>
          )
        }
        else if(selectedCategory=='Indoor Plants') {
          return (
            <div className="discount-buttons">
              <Bounce cascade damping={0.3}>
                <button>{t("buttons.succulents")}</button>
                <button>{t("buttons.low_light")}</button>
                <button>{t("buttons.pet_friendly")}</button>
              </Bounce>
            </div>
          )
        }
        else  
        return null; 
        }
  
        // const addToCart = (product) => {
        //   setCart((prevCart) => [...prevCart, product]);
        // };
        const addToCart = (product) => {
          setCart((prevCart) => {
            const isProductInCart = prevCart.some((item) => item.id === product.id);
            if (!isProductInCart) {
              return [...prevCart, product];
            }
            return prevCart; // إذا كان المنتج موجودًا، لا نضيفه مرة أخرى
          });
        };
        
        const isInCart = (productId) => {
          return cart.some((item) => item.id === productId);
        };
        
   const closeSidebar = () => {
       if (isSidebarOpen) {
        setSidebarOpen(false);
         console.log('k')
       }
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handlePrev = () => {
    console.log("Previous clicked");
  };
  
  const handleNext = () => {
    console.log("Next clicked");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Helmet title='items'>
      <div className="app" onClick={closeSidebar}>
        {/* {savedLanguage && <div className="discount-buttons">
          <button onClick={() => changeLanguage('en')}>English</button>
          <button onClick={() => changeLanguage('ar')}>العربية</button>
          <button onClick={() => changeLanguage('es')}>Español</button>
          <button onClick={() => changeLanguage('de')}>Deutsch</button>
          <button onClick={() => changeLanguage('fr')}>Français</button>
        </div>} */}
        <div className="discount-buttons">
          <button onClick={() => changeLanguage('en')}>English</button>
          <button onClick={() => changeLanguage('ar')}>العربية</button>
          <button onClick={() => changeLanguage('es')}>Español</button>
          <button onClick={() => changeLanguage('de')}>Deutsch</button>
          <button onClick={() => changeLanguage('fr')}>Français</button>
        </div>
        <LanguagePrompt languane={lan} show={showPrompt}/>
      <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
      <Slide direction="left" cascade damping={0.3} duration={1500}>

      <header className="header">
        <button className="add-item" onClick={()=>navigate('/add-item')}>
          <i className="fas fa-plus"></i>{t('header.add_item')}
        </button>
        <div className="form-group">
          <select name="category" onChange={handleCategoryChange}>
            <option value="">{t('header.all_products')}</option>
            <option value="sales">{t('header.sales')}</option>
            <option value="Bouquets">{t('header.bouquets')}</option>
            <option value="Indoor Plants">{t('header.indoor_plants')}</option>
          </select>
        </div>
      </header>

      <div className="search-container">
      <i className="fas fa-search search-icon"></i>
      <input
        type="text"
        placeholder={t('header.search_placeholder')}
        className="search-bar"
      />
    </div>
</Slide>
   
 {renderDiscountButtons()}
 <button className="go-to-cart" onClick={() => navigate("/cart")}>
          {t("buttons.go_to_cart")}
        </button>
      <div className="product-grid">
      <Slide direction="left" cascade damping={0.1} >
        {products.map((product) => (
        <div key={product.id} className="product-card">
          <h3 className="product-name">{product.userId}</h3>
          <p className="product-type">{product.id}</p>
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
          <button 
  className={`buy-button ${isInCart(product.id) ? "added" : ""}`} 
  onClick={() => addToCart(product)}
>
  {isInCart(product.id) ? t("buttons.added_to_cart") : t("buttons.buy")}
</button>


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
