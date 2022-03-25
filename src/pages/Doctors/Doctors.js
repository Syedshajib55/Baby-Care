import React from 'react';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import Banner from './Banner/Banner';
import Servicess from './Servicess/Servicess';
import { Button, Typography } from '@mui/material';
import Doctor from './Doctor/Doctor';

const Doctors = () => {
    return (
        <div>
            <Banner></Banner>
            <Doctor></Doctor>
            <Servicess></Servicess>
            <AppointmentBanner></AppointmentBanner>
            <Typography className="text-center py-3" variant="h4" style={{ color: 'white' }}>
                            Our Doctors : 7
            </Typography>
        </div>
    );
};

export default Doctors;