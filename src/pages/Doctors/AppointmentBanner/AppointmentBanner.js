import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../Servicess/doctor.png'
import bg from '../Servicess/chair.png'
import { Button, Typography } from '@mui/material';

const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175
}
const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: 400, marginTop: '-110px' }}
                        src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    textAlign: 'left'
                }}>
                    <Box>
                        <Typography variant="h6" sx={{ mb: 5 }} style={{ color: '#5CE7ED' }}>
                            Appointment
                        </Typography>
                        <Typography variant="h4" style={{ color: 'white' }}>
                            Make an Appointment Today
                        </Typography>
                        <Typography variant="h6" sx={{ my: 5 }} style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                        The Doctor’s Portal provides health organizations that strive for excellence and quality care, with a tool that allows physicians to measure themselves against key performance indicators set by the organization. This tool helps optimize physician practices in compliance with the organization’s guidelines, offering valuable statistics. 
                        </Typography>
                        <Button className='resume-btn' variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Learn More</Button>
                        
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;