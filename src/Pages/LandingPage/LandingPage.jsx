import React, { useEffect, useState } from "react";
import "./LandingPage.css";
import axios from "axios";
import { getSingleProduct } from "../../Components/Api";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Components/Context/CartContext";

const LandingPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const {dispatch}=useContext(CartContext)

  const getAllProduct = async () => {
    try {
      const res = await axios.get("https://api.escuelajs.co/api/v1/products");
      setData(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProduct();
  }, []);



  useEffect(() => {
    getSingleProduct();
  }, []);

  if (loading) {
    return <h2 className="loadings">Loading products...</h2>;
  }

  return (
    <div className="Landing">
      {/* <div className="api">
        {data.map((product) => (
          <div  onClick={() => navigate(`/product/${product.id}`)}className="card" key={product.id}>
            <img className="img" src={product.images[0]} alt={product.title} />
           
            <p>{product.title}</p>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <p>{product.id}</p>
            <button
              className="btn0"
        onClick={()=> dispatch({type:'ADD_TO_CART', payload:{id,name,priceRange, image}})}
            >
              Product Details{" "}
            </button>
          </div>
         
        ))}

      </div> */}
       <div className="api">
      {data.map((product) => (
  <div
    onClick={() => navigate(`/product/${product.id}`)}
    className="card"
    key={product.id}
  >
    <img
      className="img"
      src={product.images[0]}
      alt={product.title}
    />

    <p>{product.title}</p>
    <p>{product.description}</p>
    <p>${product.price}</p>

    <button
      className="btn0"
      onClick={(e) => {
       
        dispatch({
          type: "ADD_TO_CART",
          payload: {
            id: product.id,
            name: product.title,
            price: product.price,
            image: product.images[0]
          }
        });
      }}
    >
      Add to Cart
    </button>
  </div>
))}
</div>
    </div>
  );
};

export default LandingPage;
