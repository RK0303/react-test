import { Box, Stack } from '@mui/material'
import React from 'react'
import LinkButton from '../../components/Button/LinkButton'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Hero = () => {
  return (
    <Stack sx={{
        backgroundImage:'url("/hero-1.jpg")',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundPosition:'center',
        height:'100vh',
        width:'100%',
    }}>
        
        <Box sx={{
            position:'absolute',
            top:'15rem',
            left:'5rem'
        }}>
            <p className=' text-red-500 uppercase text-sm font-bold mb-5  tracking-widest'>summer collection</p>
            <h1 className=' text-5xl font-bold capitalize   leading-15 tracking-wider'>Fall - winter <br />
             collections 2030</h1>
            <p className=' leading-6 mt-2'>A specialist  label creating luxury essentials. Ethically crafted <br /> with an unwavering commitment to exceptional quality.</p>
            <LinkButton name={"SHOP NOW"} icon={<ArrowRightAltIcon/>} colors={"red"} 
            className=" bg-black text-white py-4 px-10 leading-30" />
        </Box>
    </Stack>
  )
}

export default Hero