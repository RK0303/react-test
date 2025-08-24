import { Box, IconButton, } from '@mui/material';
import {InputBase} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';

const Topbar = () => {
  return (
      <Box sx={{display:'flex', justifyContent:'space-between', p:'2',pl:'15px' ,pt:'20px'}}>
        
        <Box sx={{display:'flex',borderRadius:'3px',backgroundColor:'#0B1739' }}>
          
          <InputBase sx={{ml:2,flex:1, color:'#AEB9E1'}} placeholder='Search'/>
          <IconButton type='button' sx={{p:1}}>
            <SearchIcon sx={{color:'#AEB9E1'}}/>
          </IconButton>
        </Box>

        <Box sx={{display:'flex'}}>
          <IconButton>
            <NotificationsIcon sx={{color:'#AEB9E1'}} />
          </IconButton>
            
          <IconButton>
            <SettingsIcon sx={{color:'#AEB9E1'}}/>
          </IconButton>

          <IconButton>
            <PersonIcon sx={{color:'#AEB9E1'}}/>
          </IconButton>
        </Box>

      </Box>
  )
}

export default Topbar