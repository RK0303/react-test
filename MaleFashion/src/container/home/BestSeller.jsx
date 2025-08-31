import { Grid, Stack } from "@mui/material";
import ProductCard from "../../components/card/ProductCard";
import ProductsList from "../../components/card/ProductList";
import { createContext, useContext } from "react";
import { Context } from "../MainApp";

export const CartContext = createContext( );

const BestSeller = ({product}) => {
    const {cart, setCart} = useContext(Context);

  const addCart = (product) => {
     setCart([...cart, product])
  };
  const removeCart = (product) => {
    setCart(cart.filter((c)=> c.id !== product.id))
  };

  return (
    <Stack sx={{ my: "80px",}}>
      <h2 className=" text-3xl capitalize font-bold  text-center mb-10">
        best sellers
      </h2>
      <CartContext.Provider value={{addCart,removeCart}}>
      <ProductsList/>
      </CartContext.Provider>
    </Stack>
  );
};

export default BestSeller;
