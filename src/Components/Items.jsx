import Helmet from "./../Helmet/Helmet";

const Item = () => {
  const products = [
    {
      id: 1,
      name: "Yellow Tulips",
      type: "Tulips",
      image: "yellow-tulips.jpg",
      colors: ["#FFD700", "#FFA500"],
      price: 20,
      discountPrice: 5,
    },
    {
      id: 2,
      name: "Mini Sunflowers",
      type: "Sunflowers",
      image: "mini-sunflowers.jpg",
      colors: ["#FFC0CB", "#FF69B4"],
      price: 34,
      discountPrice: 9,
    },
    // أضف منتجات أخرى هنا
  ];

  return (
  <Helmet title='ab' >
      <div className="app-container">
      {/* القائمة الجانبية */}
      <header className="header">
        <div className="menu">
          <span>☰</span>
          <h1>Items</h1>
        </div>
        <div className="actions">
          <button>+ Add Item</button>
          <select>
            <option>Sales</option>
          </select>
        </div>
      </header>

      {/* البحث والأزرار */}
      <div className="search-container">
        <input type="text" placeholder="Search Flower Types" />
        <div className="discount-buttons">
          <button>Discount 10%</button>
          <button>Discount 20%</button>
          <button>Discount 30%</button>
        </div>
      </div>

      {/* شبكة المنتجات */}
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-type">{product.type}</p>
            <img
              src={`images/${product.image}`}
              alt={product.name}
              className="product-image"
            />
            <div className="product-colors">
              {product.colors.map((color, index) => (
                <span
                  key={index}
                  className="color-dot"
                  style={{ backgroundColor: color }}
                ></span>
              ))}
            </div>
            <div className="product-prices">
              <p className="product-discount-price">${product.discountPrice}</p>
              <p className="product-price">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Helmet>
  );
};

export default Item;
