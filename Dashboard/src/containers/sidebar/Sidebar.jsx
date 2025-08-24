import { Box, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { Sidebar as ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import StarIcon from '@mui/icons-material/Star';
import PersonIcon from '@mui/icons-material/Person';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ExtensionIcon from '@mui/icons-material/Extension';
import LockIcon from '@mui/icons-material/Lock';
import SettingsIcon from '@mui/icons-material/Settings';
import './sidebar.css'

const Sidebar = () => {
  return (
    <div>
      <Box>
        <ProSidebar className='sidebar' >
          <Menu className='menu'>
            <MenuItem className='menuitem'><HomeFilledIcon sx={{fontSize:'18px'}}/> Dashboard </MenuItem>
            <MenuItem className='menuitem'><StarIcon /> Features </MenuItem>
            <MenuItem className='menuitem'><PersonIcon/> Users </MenuItem>
            <MenuItem className='menuitem'><AttachMoneyIcon/> Pricing </MenuItem>
            <MenuItem className='menuitem'><ExtensionIcon sx={{fontSize:'18px'}}/> Intergrations</MenuItem>
            <SubMenu className='submenu' icon={<LockIcon sx={{fontSize:'18px'}}/>} label="Authentication">
              <MenuItem className='menuitem'> Login </MenuItem>
              <MenuItem className='menuitem'> Signup </MenuItem>
             </SubMenu>
            <MenuItem className='menuitem'><SettingsIcon/> Settings </MenuItem>
              
          </Menu>
        </ProSidebar>;
      </Box>
    </div>
  )
}

export default Sidebar