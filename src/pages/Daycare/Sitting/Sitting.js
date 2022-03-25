import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Sitting = (props) => {
    const { name, description, img, address } = props.service;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                <CardMedia
                    component="img"
                    style={{ width: 'auto', height: '400px', margin: '0 auto' }}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    
                    <Typography className='text-center' variant="h5" component="div">
                        {name}
                    </Typography>
                    
                    <Typography className='text-center py-2' variant="body2" color="text.secondary">
                       Address :  {address}
                    </Typography>
                    <button className='resume-btn'>Available Baby sitter</button>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Sitting;