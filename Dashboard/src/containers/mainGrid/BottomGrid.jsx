import React from 'react'

import { Grid } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BasicPie from '../../components/chart/PieChart';
import Cards from '../../components/card/Card';
import BarChartt from '../../components/chart/BarChart';




const BottomGrid = () => {
  return (
    <>
    <Grid container spacing={2} sx={{pl:'10px', mt:'30px'}}>
  <Grid size={4}>
    <Cards 

    chart={<BasicPie/>}>
        
    </Cards>
  </Grid>
  <Grid size={8}>
    <Cards
    chart={<BarChartt/>}>
        
    </Cards>
    
    
    
  </Grid>
 
</Grid>
    </>
  )
}

export default BottomGrid