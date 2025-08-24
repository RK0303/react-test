import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Cards(props) {
    const {icon:Icon, title, data, titleSize, dataSize, chart,} = props
  return (
    <Card sx={{minWidth:'240px',minHeight:'130px', bgcolor:'#0B1739' }}>
      <CardContent>
        <Typography gutterBottom fontSize={titleSize} sx={{ color: 'white', display:'flex', justifyContent:'flex-start', alignItems:'center', gap:'5px' }}>
          {Icon}{title}
        </Typography>
        
        <Typography variant="body2" fontSize={dataSize} sx={{ color: 'white', display:'flex', justifyContent:'flex-start'}}>
          {data}
        </Typography>
        {chart}
      </CardContent>
    </Card>
  );
}