import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Service from './../Service/Service';
import fluoride from './fluoride.png'
import cavity from './cavity.png'
import whitening from './whitening.png'
const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a persons teeth to improve health and reduce the risk of cavities.',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'A cavity filling is when the dentist fills the opening in your tooth with some kind of material. The hope is to urge obviate your symptoms and make the tooth more aesthetically pleasing.',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: 'Teeth whitening is the process of using bleach or other materials to make teeth look whiter. The materials remove stains or other discoloration from the tooth surface.',
        img: whitening
    }
]

const Servicess = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Container>
            <Typography className='text-center text-4xl' sx={{ fontWeight: 500, m: 2, color: 'success.main' }} variant="h6" component="div">
                OUR SERVICES
            </Typography>
            <Typography className='text-center py-3' sx={{ fontWeight: 600, m: 2 }} variant="h4" component="div">
                Services We Provide
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    services.map(service => <Service
                        key={service.name}
                        service={service}
                    ></Service>)
                }
            </Grid>
        </Container>
    </Box>
    );
};

export default Servicess;