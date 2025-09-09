import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../../redux/products/ProductSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state)=>state.products.searchTerm);

  const cartItem = useSelector((state) => state.cart.items);
  const itemCount = cartItem.reduce((total, item) => total + item.quantity, 0);


  return (
    <header className=" bg-white shadow-md sticky top-0">
      <div className=" py-4 shadow-md px-5">
        <ul className=" container mx-auto flex flex-wrap justify-between md:flex-row px-4 md:px-2 items-center">
          <div className=" flex gap-4 justify-center items-center">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">FAQs</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </div>
           <div className=" flex justify-center items-center gap-5">
          <form>
            <input type="text"
            placeholder="Search Product"
            className=" bg-zinc-100100 rounded-md border border-zinc-200 focus:outline py-3 px-3 w-full" 
            value={searchTerm}
            onChange={(e)=> dispatch(setSearchTerm(e.target.value))}
            />
          </form>
          <div className=" relative">
            <Link to="/CartPage">
                  <ShoppingCart size={20}/>
                  {itemCount > 0 && (<span className=" absolute -top-2 -right-5 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{itemCount}</span>)}
            </Link>
          </div>
        </div>
        </ul>
       
      </div>
    </header>
  );
};

export default NavBar;
