import React from 'react'

import { Grid } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Cards from '../../components/card/Card';


const TopGrid = () => {
  return (
    <>
    <Grid container spacing={32} sx={{pl:'10px', mt:'30px'}}>
  <Grid size={2}>
    <Cards icon={<FavoriteIcon sx={{color:'#CB3CFF'}}/>}
    
    title={"Save Products"}
    data={"50.8K"}
    titleSize={"20px"}
    dataSize={"35px"}
    />
  </Grid>
  <Grid size={2}>
    <Cards icon={<ShoppingCartIcon sx={{color:'#CB3CFF'}}/>}
    title={"Stock Products"}
    data={"23.6K"}
    titleSize={"20px"}
    dataSize={"35px"}
    />
  </Grid>
  <Grid size={2}>
    <Cards icon={<ShoppingBagIcon sx={{color:'#CB3CFF'}}/>}
    title={"Sale Products"}
    data={"756"}
    titleSize={"20px"}
    dataSize={"35px"}
    />
  </Grid>
  <Grid size={2}>
    <Cards icon={<AttachMoneyIcon sx={{color:'#CB3CFF'}}/>}
    title={"Average Revenue"}
    data={"2.3K"}
    titleSize={"20px"}
    dataSize={"35px"}
    />
  </Grid>
</Grid>
    </>
  )
}

export default TopGrid