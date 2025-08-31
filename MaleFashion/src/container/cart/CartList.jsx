import { useContext, useEffect, useState } from "react";
import { Context } from "../MainApp";

const CartList = () => {
  const { cart, setCart, product } = useContext(Context);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc,curr)=> acc + parseInt(curr.price), 0))
  
  }, [cart])
  

  return (
    <div className=" flex justify-center mt-16 ml-16 flex-col">
      <h1 className=" text-4xl font-bold mb-10">Cart list</h1>
       
        {cart.map((product) => (
          <>
         <div className=" flex  mb-5 items-center w-7xl">
            <div className=" mr-5">
              <img src={product.image} alt="" className=" w-40"/>
            </div>
            <div>
              <h3 className=" text-3xl capitalize font-semibold">{product.name}</h3>
              <p className=" text-2xl">price $:{product.price}</p>
            </div> 
            </div>
          </>
        ))}

        

      <h2 className=" text-3xl font-bold">Total Amount $:{total}</h2>
    </div>
  );
};

export default CartList;
