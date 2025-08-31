import { Box, Stack } from '@mui/material'
import React from 'react'
import LinkButton from '../../components/Button/LinkButton'

const Contacts = () => {
  return (
    <Stack direction={'row'} spacing={5} mx={'60px'} mt={'40px'}>
      <Box>
        <p className=' text-red-500 uppercase text-sm font-bold mb-5  tracking-widest'>Information</p>
        <h1 className=' text-5xl font-bold'>Contact Us</h1>
        <p className=' mt-3'>As you might expect of a company that began as a high-end interiors contractor, we pay strict attention.</p>
        <h3 className=' text-3xl font-bold mt-5'>America</h3>
        <p className=' mt-2'>195 E Parker Square Dr, Parker, CO 801 </p>
        <p className=' mt-1'>+43 982-314-0958</p>
        <h3 className=' text-3xl font-bold mt-5'>France</h3>
        <p className=' mt-2'>109 Avenue Léon, 63 Clermont-Ferrand </p>
        <p className=' mt-1'>+12 345-423-9893</p>
      </Box>

      <Box>
        <form action="#">
          <input type="text" placeholder='Name' className=' border-1 border-gray-300 py-3 px-6 mr-6 ' />
          <input type="text" placeholder='Email' className=' border-1 border-gray-300 py-3 px-6 ml-6' />
          <textarea name="#" id="#" placeholder='Message'
          className=' border-1 border-gray-300 mt-5 w-full h-40'/>
          <LinkButton name={"send message"}
          className=" bg-black py-3 px-6 text-white leading-20 uppercase tracking-wider"/>
        </form>
      </Box>
    </Stack>
  )
}

export default Contacts