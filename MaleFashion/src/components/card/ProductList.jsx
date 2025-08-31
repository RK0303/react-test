import Products from '../../data/Products.json';
import {Button, Grid} from '@mui/material';
import ProductCard from './ProductCard';
import { useContext } from 'react';
import { Context } from '../../container/MainApp';
import { CartContext } from '../../container/home/BestSeller';
import AddIcon from '@mui/icons-material/Add';
import MinimizeIcon from '@mui/icons-material/Minimize';


export default function ProductsList() {


  const {cart, setCart} = useContext(Context);

  const {addCart, removeCart} = useContext(CartContext);

  
  return (
     <Grid justifyContent={'center'} container spacing={8}>
      {Products.map((product, index) => (
        <Grid key={index}>
          <ProductCard
            image={product.image}
            name={product.name}
            price={product.price}
            actionButton={ 
              cart.includes(product) ?
            <Button color='error' sx={{fontSize:'18px' }} onClick={()=> removeCart(product)} >
           Remove from <br />cart
          </Button> :
          <Button color='success' sx={{fontSize:'18px' }} onClick={() => addCart(product)}>
           <AddIcon fontSize='small'/> Add to cart
          </Button>
          } 
          />
         
        </Grid>
      ))}
    </Grid>
  );
}


