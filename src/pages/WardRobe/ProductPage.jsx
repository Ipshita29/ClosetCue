import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./ProductPage.css";

const ProductPage = () => {
  const { productId } = useParams();
  const [addedToWardrobe, setAddedToWardrobe] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  // Mock product data
  const product = {
    id: productId,
    name: "Classic White Sneakers",
    brand: "Comfort Steps",
    price: 89.99,
    description: "Versatile white sneakers made from sustainable materials. Perfect for casual wear and comfortable enough for all-day use.",
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11"],
    colors: ["White", "Black", "Navy"],
    category: "footwear"
  };

  const handleAddToWardrobe = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select size and color before adding to wardrobe");
      return;
    }

    // Simulate API call
    setAddedToWardrobe(true);
    setTimeout(() => {
      setAddedToWardrobe(false);
    }, 3000);
  };

  return (
    <div className="product-page">
      <div className="product-page__container">
        {/* Breadcrumb */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <ol className="breadcrumb__list">
            <li className="breadcrumb__item">
              <Link to="/" className="breadcrumb__link">Home</Link>
            </li>
            <li className="breadcrumb__item">
              <span className="breadcrumb__separator" aria-hidden="true">/</span>
            </li>
            <li className="breadcrumb__item">
              <Link to="/wardrobe" className="breadcrumb__link">Wardrobe</Link>
            </li>
            <li className="breadcrumb__item">
              <span className="breadcrumb__separator" aria-hidden="true">/</span>
            </li>
            <li className="breadcrumb__item">
              <span className="breadcrumb__current" aria-current="page">Product</span>
            </li>
          </ol>
        </nav>

        <div className="product-card">
          <div className="product-card__grid">
            {/* Product Image */}
            <div className="product-image-section">
              <div className="product-image-section__placeholder">
                <span className="product-image-section__text">Product Image</span>
              </div>
            </div>

            {/* Product Details */}
            <div className="product-details">
              <h1 className="product-details__title">{product.name}</h1>
              <p className="product-details__brand">{product.brand}</p>
              <p className="product-details__price">${product.price}</p>
              <p className="product-details__description">{product.description}</p>

              {/* Size Selection */}
              <div className="selection-section">
                <h3 className="selection-section__title">Size</h3>
                <div className="selection-section__options">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`selection-option selection-option--size ${
                        selectedSize === size ? 'selection-option--selected' : ''
                      }`}
                      aria-pressed={selectedSize === size}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div className="selection-section">
                <h3 className="selection-section__title">Color</h3>
                <div className="selection-section__options">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`selection-option selection-option--color ${
                        selectedColor === color ? 'selection-option--selected' : ''
                      }`}
                      aria-pressed={selectedColor === color}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to Wardrobe Button */}
              <button
                onClick={handleAddToWardrobe}
                disabled={addedToWardrobe}
                className={`add-to-wardrobe-btn ${
                  addedToWardrobe ? 'add-to-wardrobe-btn--added' : ''
                }`}
                aria-live="polite"
              >
                {addedToWardrobe ? (
                  <>
                    <svg className="add-to-wardrobe-btn__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Added to Wardrobe!
                  </>
                ) : (
                  <>
                    <svg className="add-to-wardrobe-btn__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    + Add to Wardrobe
                  </>
                )}
              </button>

              {/* Quick Info */}
              <div className="quick-info">
                <div className="quick-info__item">
                  <svg className="quick-info__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Items added to wardrobe appear in your collection instantly
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;