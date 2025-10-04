import { createContext, useContext, useState, useEffect } from "react";
import useFetch from "../pages/useFetch";

const ProductContext = createContext();

// Custom hook
export const useProductContext = () => useContext(ProductContext);

// Provider component
export function ProductProvider({ children }) {
  const {
    data,
    loading: productLoading,
    error: productError,
  } = useFetch("https://inventroy-management-backend.vercel.app/api/inventory");

  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [productData, setProductData] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
  });

  // Sync fetched data into local state
  useEffect(() => {
    if (data) setProductData(data);
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Create new product
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://inventroy-management-backend.vercel.app/api/inventory",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to save product");
      }

      const newProduct = await response.json();

      setProductData((prev) => [...prev, newProduct]);

      // Reset form
      setFormData({
        name: "",
        category: "",
        price: "",
        stock: "",
      });
    } catch (error) {
      console.error("Error submitting product:", error);
    }
  };

  // Delete product
  const handleDelete = async (productId) => {
    try {
      const response = await fetch(
        `https://inventroy-management-backend.vercel.app/api/inventory/${productId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete product");
      }

      setProductData((prev) =>
        prev.filter((product) => product._id !== productId)
      );
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  // Open edit modal
  const handleUpdateClick = (product) => {
    setIsEditing(true);
    setEditingProduct(product);

    // Prefill form with product details
    setFormData({
      name: product.name,
      category: product.category,
      price: product.price,
      stock: product.stock,
    });

    // Open modal
    setShowModal(true);
  };

  // Update product
  const handleUpdateSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://inventroy-management-backend.vercel.app/api/inventory/${editingProduct._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update product");
      }

      const updatedProduct = await response.json();

      // Update state
      setProductData((prev) =>
        prev.map((p) => (p._id === updatedProduct._id ? updatedProduct : p))
      );

      // Reset
      setFormData({ name: "", category: "", price: "", stock: "" });
      setEditingProduct(null);
      setIsEditing(false);
      setShowModal(false);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://inventroy-management-backend.vercel.app/api/inventory?search=${searchTerm}`
      );
      if (!response.ok) throw new Error("Search failed");

      const results = await response.json();
      setProductData(results);
    } catch (err) {
      console.error("Error searching products:", err);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        productData,
        productLoading,
        productError,
        formData,
        handleDelete,
        handleChange,
        handleSubmit,
        handleUpdateClick,
        handleUpdateSubmit,
        isEditing,
        showModal,
        setShowModal,
        searchTerm,
        setSearchTerm,
        handleSearch,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
