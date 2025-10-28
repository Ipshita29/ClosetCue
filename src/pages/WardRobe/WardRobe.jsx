import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Wardrobe.css";

const Wardrobe = () => {
  const [wardrobeItems, setWardrobeItems] = useState({
    tops: [
      {
        id: 1,
        name: "White Cotton T-Shirt",
        image: "/images/white-tshirt.jpg",
        category: "tops",
        color: "White",
        brand: "Basic Wear",
        addedDate: "2024-01-15"
      },
      {
        id: 2,
        name: "Striped Button-Down",
        image: "/images/striped-shirt.jpg",
        category: "tops",
        color: "Blue/White",
        brand: "Classic Co",
        addedDate: "2024-01-10"
      },
      {
        id: 3,
        name: "Black Polo Shirt",
        image: "/images/black-polo.jpg",
        category: "tops",
        color: "Black",
        brand: "Sport Style",
        addedDate: "2024-01-08"
      }
    ],
    bottoms: [
      {
        id: 4,
        name: "Dark Wash Jeans",
        image: "/images/dark-jeans.jpg",
        category: "bottoms",
        color: "Blue",
        brand: "Denim Co",
        addedDate: "2024-01-12"
      },
      {
        id: 5,
        name: "Chino Pants",
        image: "/images/chino-pants.jpg",
        category: "bottoms",
        color: "Beige",
        brand: "Casual Wear",
        addedDate: "2024-01-05"
      }
    ],
    outerwear: [
      {
        id: 6,
        name: "Black Leather Jacket",
        image: "/images/leather-jacket.jpg",
        category: "outerwear",
        color: "Black",
        brand: "Urban Style",
        addedDate: "2024-01-18"
      },
      {
        id: 7,
        name: "Denim Jacket",
        image: "/images/denim-jacket.jpg",
        category: "outerwear",
        color: "Light Blue",
        brand: "Vintage Co",
        addedDate: "2024-01-03"
      }
    ],
    footwear: [
      {
        id: 8,
        name: "White Sneakers",
        image: "/images/white-sneakers.jpg",
        category: "footwear",
        color: "White",
        brand: "Comfort Steps",
        addedDate: "2024-01-20"
      },
      {
        id: 9,
        name: "Brown Leather Boots",
        image: "/images/leather-boots.jpg",
        category: "footwear",
        color: "Brown",
        brand: "Heritage Footwear",
        addedDate: "2024-01-07"
      }
    ],
    accessories: [
      {
        id: 10,
        name: "Silver Watch",
        image: "/images/silver-watch.jpg",
        category: "accessories",
        color: "Silver",
        brand: "Time Masters",
        addedDate: "2024-01-14"
      },
      {
        id: 11,
        name: "Leather Belt",
        image: "/images/leather-belt.jpg",
        category: "accessories",
        color: "Brown",
        brand: "Classic Accessories",
        addedDate: "2024-01-09"
      }
    ]
  });

  const categories = [
    {
      name: "Tops",
      key: "tops",
      description: "Shirts, t-shirts, blouses, and more",
      icon: "👕",
      color: "blue"
    },
    {
      name: "Bottoms",
      key: "bottoms",
      description: "Pants, jeans, skirts, and shorts",
      icon: "👖",
      color: "green"
    },
    {
      name: "Outerwear",
      key: "outerwear",
      description: "Jackets, coats, and sweaters",
      icon: "🧥",
      color: "purple"
    },
    {
      name: "Footwear",
      key: "footwear",
      description: "Shoes, sneakers, and boots",
      icon: "👟",
      color: "orange"
    },
    {
      name: "Accessories",
      key: "accessories",
      description: "Jewelry, bags, hats, and more",
      icon: "🕶️",
      color: "pink"
    }
  ];

  const getRecentItems = () => {
    return Object.values(wardrobeItems)
      .flat()
      .sort((a, b) => new Date(b.addedDate) - new Date(a.addedDate))
      .slice(0, 6);
  };

  return (
    <div className="wardrobe-container">
      <div className="wardrobe__inner-container">
        {/* Header Section */}
        <div className="wardrobe-header">
          <h1 className="wardrobe-title">My Wardrobe</h1>
          <p className="wardrobe-subtitle">
            Organize and manage your clothing collection. Browse by category or add new items 
            to build your perfect wardrobe with ClosetCue.
          </p>
        </div>

        {/* Quick Actions - Moved right below header */}
        <div className="quick-actions quick-actions--top">
          <p className="quick-actions__text">
            Can't find what you're looking for?
          </p>
          <Link to="/products" className="browse-button">
            <svg className="browse-button__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Browse Products
          </Link>
        </div>

        {/* Category Grid */}
        <div className="category-grid">
          {categories.map((category) => (
            <Link
              key={category.key}
              to={`/wardrobe/${category.key}`}
              className="category-card"
              tabIndex={0}
            >
              <div className="category-card__header">
                <div className="category-card__icon">{category.icon}</div>
              </div>
              <h3 className="category-card__title">{category.name}</h3>
              <p className="category-card__description">{category.description}</p>
              <div className="category-card__link">
                Explore Category
                <svg className="category-card__arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Recent Additions Section */}
        <div className="recent-section">
          <div className="recent-section__header">
            <h2 className="recent-section__title">Recently Added</h2>
            <Link to="/wardrobe/add" className="add-button">
              <svg className="add-button__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add New Item
            </Link>
          </div>
          
          <div className="recent-grid">
            {getRecentItems().map((item) => (
              <div 
                key={item.id} 
                className="recent-item"
                tabIndex={0}
              >
                <div className="recent-item__image">
                  <div className="recent-item__image-placeholder">
                    {item.name.split(' ')[0]}
                  </div>
                </div>
                <p className="recent-item__name">{item.name}</p>
                <p className="recent-item__brand">{item.brand}</p>
                <p className="recent-item__date">
                  {new Date(item.addedDate).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wardrobe;