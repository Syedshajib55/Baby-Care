import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Service from './../Service/Service';
import fluoride from './doctor1.png'
import cavity from './doctor2.png'
import whitening from './doctor3.png'
import Servicee from '../Servicee/Servicee';
const services = [
    {
        name: 'Emma Stone',
        description: 'Dermatologists',
        img: fluoride,
        address:'Los Angels'
    },
    {
        name: 'Sophia Ava',
        description: 'Ophthalmologists',
        img: cavity,
        address:'New York'
    },
    {
        name: 'Ahmed Aly',
        description: 'Cardiologists',
        img: whitening,
        address:'Florida'
    }
]

const Doctor = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Container>
        <h2 className="text-4xl text-center py-2">
                        Our Doctors
        </h2>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    services.map(service => <Servicee
                        key={service.name}
                        service={service}
                    ></Servicee>)
                }
        </Grid>
        </Container>
    </Box>
    );
};

export default Doctor;