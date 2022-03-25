import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../Servicess/chair.png';
import bg from '../Servicess/bg.png';
import { Typography, Button, Container } from '@mui/material';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';


const bannerBg = {
    background: `url(${bg})`,

}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}
const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 13, fontWeight: 300, color: 'gray' }}>
                        Our expert team are always happy to help with any queries you may have.
Contact us today and we will get back to you as soon as possible.
                        </Typography>
                        <Link className='resume-btn' style={{ backgroundColor: '#5CE7ED' }} to='appointment'>Get Appointment</Link>
                        {/* <Button  style={{ backgroundColor: '#5CE7ED' }}>Get Appointment</Button> */}
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter} >
                    <img style={{ width: '350px' }} src={chair} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Banner;