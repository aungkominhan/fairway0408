import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function ErrorPage() {
  return (
  <Box sx={{alignItems: "center"}}>
      <Card sx={{ minWidth: 275 }}>
      <CardContent>
      
      <Typography variant="body2">
            Something Went Wrong
         
        </Typography>
      </CardContent>
      <CardActions>
        <Link to="/">
        <Button size="small">Go Home</Button>
        </Link>
        
      </CardActions>
    </Card>
  </Box>
  );
}
