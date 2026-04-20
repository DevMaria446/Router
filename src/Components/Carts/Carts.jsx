import "./Carts.css";

import { FaNairaSign } from "react-icons/fa6";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { TbCurrencyNaira } from "react-icons/tb";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Components/Context/CartContext";
const Carts = () => {
  const { state, dispatch } = useContext(CartContext);
  const navigate = useNavigate();
  
  return (
    <>
      <div className="carts">
        <div className="carts-wrapper">
          <div className="carts-left">
            <div className="carts-left-up">
              <div className="carts-left-up-up">
                {/* <h1>Your Cart (1 item)</h1> */}
                <h1>Your Cart ({state.length} items)</h1>
              </div>
              <div className="carts-left-up-down">
                <p>Product</p>
                <p>Unit Price</p>
                <p>Total</p>
                <p
                // onClick={() =>
                //   dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
                // }
                >
                  Remove
                </p>
              </div>
            </div>
            {state.map((item) => (
              <div key={item.id} className="carts-left-down">
                <div className="carts-left-down-up">
                  <div className="carts-left-down-up-left">
                    <div className="carts-left-down-up-left-left">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="carts-left-down-up-left-right">
                      <p>{item.name}</p>
                      <p className="kg">{item.weight}</p>
                    </div>
                  </div>
                </div>

                <div className="carts-left-down-down">
                  <div className="carts-left-down-1">
                    <p>Quantity</p>
                    <div className="dis">
                      <div
                        onClick={() =>
                          dispatch({
                            type: "DECREASE_FROM_CART",
                            payload: item.id,
                          })
                        }
                        className="di"
                      >
                        <FaMinus />
                      </div>
                      <div className="di">{item.quantity}</div>
                      <div
                        onClick={() =>
                          dispatch({
                            type: "ADD_TO_CART",
                            payload: item,
                          })
                        }
                        className="di"
                      >
                        <FaPlus />
                      </div>
                    </div>
                    <button className="u"> Add more items</button>
                  </div>

                  <div className="carts-left-down-2">
                    <div className="carts-left-down-2-up">
                      <div className="yo">
                        <p>
                          <TbCurrencyNaira /> {item.price}
                        </p>
                        <p>
                          <TbCurrencyNaira /> {item.price * item.quantity}
                        </p>

                        <button
                          className="ye"
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: item.id,
                            })
                          }
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    <div className="carts-left-down-2-down">
                      <div className="yop">
                        <button
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: item.id,
                            })
                          }
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="carts-right">
            <div className="carts-right-middle">
              <h1>
                Subtotal: <FaNairaSign /> 900.00
              </h1>
              <div className="pii">
                <p className="pi">0.5kg</p>
              </div>
              <p>
                <MdCheckBoxOutlineBlank /> I have read the instruction above and{" "}
                <br />i agree Groceria's Return Policy
              </p>

              <div className="carts-right-middle-down">
                <button   onClick={() => navigate(`/checkout${item.id}`)}>Proceed to Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carts;
