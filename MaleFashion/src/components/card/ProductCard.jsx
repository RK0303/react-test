import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Button, CardActions } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { CartContext } from '../../container/home/BestSeller';
import { Context } from '../../container/MainApp';
import MinimizeIcon from '@mui/icons-material/Minimize';



export default function ProductCard({image, name, className, price, product, actionButton}) {
  const {addCart, removeCart} = React.useContext(CartContext);
  const {cart, setCart} = React.useContext(Context);

  return (
    <Card sx={{ maxWidth: 280, textAlign:'center' ,boxShadow:'none',display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="image"
          sx={{maxHeight:'280px'}}
        />
        <CardContent>
          <Typography className={`${className}`} gutterBottom variant="h5" component="div" sx={{ fontSize:'25px', fontWeight:'500'}}>
            {name}
          </Typography>
          <Typography className={`${className}`} variant="body2" sx={{ color:'#0d0d0d', fontSize:'18px', fontWeight:'700' }}>
            ${price}
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
          {actionButton}
      </CardActions>
    </Card>
  );
}
