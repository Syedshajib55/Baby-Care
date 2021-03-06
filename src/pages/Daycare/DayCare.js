import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import fluoride from './flouride.png'
import cavity from './cavity.png'
import whitening from './whitening.png'
import Sitting from './Sitting/Sitting';
const services = [
    {
        name: 'Avery Mila',
        img: fluoride,
        address:'Los Angels'
    },
    {
        name: 'Layla Aria',
        img: cavity,
        address:'New York'
    },
    {
        name: 'Grace Ellie',
        img: whitening,
        address:'Florida'
    }
]
const DayCare = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Container>
        <h2 className="text-4xl text-center py-2">
                        Our Baby Sitters
        </h2>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    services.map(service => <Sitting
                        key={service.name}
                        service={service}
                    ></Sitting>)
                }
            </Grid>
        </Container>
    </Box>
    );
};

export default DayCare;