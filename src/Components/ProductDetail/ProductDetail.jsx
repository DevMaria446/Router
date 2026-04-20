import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";
import { BsFillStarFill } from "react-icons/bs";
import axios from "axios";
import "./ProductDetail.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProduct = async () => {
    const res = await axios.get(
      `https://api.escuelajs.co/api/v1/products/${id}`,
    );
    console.log(res.data);
    setProduct(res.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      {/* <div className='register'>v</div>  */}

      <div className="all-hero1">
        <div className="hero-wrapper">
          <div className="hero1-left">
            <div className="left-up">
              <p>Designed by Mariagoretti Nnadi</p>
              <p>
                <BsFillStarFill style={{color: 'blue'}}/> 
                4.5 (89 reviews)
              </p>
              <div className="divs">
                <div className="hy">.</div>
                <div className="h"></div>
                <div className="hi"></div>
                <div className="hu"></div>
              </div>
            </div>
            <div className="left-down">
              <div className="side">
                <div className="circle">
                  <FaChevronLeft />
                </div>
              </div>
              <div className="imgi">
                <img className="imagess" src={product.images[0]} alt="" />
              </div>
              <div className="side">
                <div className="circle">
                  {" "}
                  <FaChevronRight />
                </div>
              </div>
            </div>
          </div>
          <div className="hero1-right">
            <div className="right-up">
              <h1>{product?.title}</h1>
              <p> {product.description}</p>

              <p>Test</p>
              <div className="right-up-line">.</div>
            </div>
            <div className="right-center">
              {/* <p> ${product.price}</p> */}
              <h1>${product.price}</h1>
              <p>COLOR</p>
              <select className="fruits">
                <option value="apple">GREEN</option>
                <option value="banana">PINK</option>
                <option value="orange">ORANGE</option>
              </select>
              <p>QUANTITY</p>
              <div className="right-center-down">
                <select className="numb">
                  <option value="apple" >01</option>
                  <option value="banana">02</option>
                  <option value="orange">03</option>
                </select>
                <button   className="btn7">ADD TO CART </button>
              </div>
              <div className="right-up-line1"></div>
            </div>
            <div className="right-down">
              <p>DETAILS</p>
              <p>DELIVERY</p>
              <p>RETURN</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
