import axios from "axios";

export const getSingleProduct = async (productId) => {
  try {
    const res = await axios.get(
      `https://api.escuelajs.co/api/v1/products/${productId}`,
    );
    console.log(res);
  } catch (error) {}
};
