import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";

// layouts
import CustomerLayout from "./pages/layouts/CustomerLayout";
import ManagerLayout from "./pages/layouts/ManagerLayout";

// customer pages
import CustomerHome from "./pages/customer/CustomerHome";
import ProductRecommendation from "./pages/customer/ProductRecommendation";
import ProductDetail from "./pages/customer/ProductDetail";
import Cart from "./pages/customer/Cart";
import Wishlist from "./pages/customer/Wishlist";
import SearchResults from "./pages/customer/SearchResults"; // ✅ NEW

// manager pages
import Dashboard from "./pages/manager/Dashboard";
import Inventory from "./pages/manager/Inventory";
import Analytics from "./pages/manager/Analytics";
import Promotions from "./pages/manager/Promotions";
import AgentLogs from "./pages/manager/AgentLogs";

export default function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // 🛒 Add product to cart
  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // ❌ Delete product from cart
  const handleDeleteFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // ❤️ Add to wishlist (prevent duplicates)
  const handleAddToWishlist = (product) => {
    setWishlist((prevWishlist) => {
      if (!prevWishlist.some((item) => item.id === product.id)) {
        return [...prevWishlist, product];
      }
      return prevWishlist;
    });
  };

  // 🗑️ Delete from wishlist
  const handleDeleteFromWishlist = (id) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== id));
  };

  return (
    <div className="flex flex-col h-screen bg-black text-white">
      <Header />
      <div className="flex flex-1 overflow-auto">
        <Routes>
          {/* 🏠 Customer Home */}
          <Route
            path="/"
            element={
              <CustomerLayout>
                <CustomerHome
                  addToCart={handleAddToCart}
                  addToWishlist={handleAddToWishlist}
                />
              </CustomerLayout>
            }
          />

          {/* 🔍 Search Results */}
          <Route
            path="/search"
            element={
              <CustomerLayout>
                <SearchResults addToCart={handleAddToCart} />
              </CustomerLayout>
            }
          />

          {/* 🤖 Product Recommendations */}
          <Route
            path="/recommendations"
            element={
              <CustomerLayout>
                <ProductRecommendation
                  addToCart={handleAddToCart}
                  addToWishlist={handleAddToWishlist}
                />
              </CustomerLayout>
            }
          />

          {/* 📦 Product Detail Page */}
          <Route
            path="/product/:id"
            element={
              <CustomerLayout>
                {/* ✅ FIXED: added addToWishlist */}
                <ProductDetail
                  addToCart={handleAddToCart}
                  addToWishlist={handleAddToWishlist}
                />
              </CustomerLayout>
            }
          />

          {/* 🛒 Cart Page */}
          <Route
            path="/cart"
            element={
              <CustomerLayout>
                <Cart cart={cart} deleteFromCart={handleDeleteFromCart} />
              </CustomerLayout>
            }
          />

          {/* ❤️ Wishlist Page */}
          <Route
            path="/wishlist"
            element={
              <CustomerLayout>
                <Wishlist
                  wishlist={wishlist}
                  deleteFromWishlist={handleDeleteFromWishlist}
                />
              </CustomerLayout>
            }
          />

          {/* ⚙️ Manager Section */}
          <Route
            path="/manager"
            element={
              <ManagerLayout>
                <Dashboard />
              </ManagerLayout>
            }
          />
          <Route
            path="/manager/inventory"
            element={
              <ManagerLayout>
                <Inventory />
              </ManagerLayout>
            }
          />
          <Route
            path="/manager/analytics"
            element={
              <ManagerLayout>
                <Analytics />
              </ManagerLayout>
            }
          />
          <Route
            path="/manager/promotions"
            element={
              <ManagerLayout>
                <Promotions />
              </ManagerLayout>
            }
          />
          <Route
            path="/manager/agent-logs"
            element={
              <ManagerLayout>
                <AgentLogs />
              </ManagerLayout>
            }
          />
        </Routes>
      </div>
    </div>
  );
}
