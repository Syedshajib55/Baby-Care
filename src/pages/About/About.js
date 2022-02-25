import React from 'react';
import TeamMember from '../Homepage/TeamMember/TeamMember';

const About = () => {
    return (
        <div>
            <div className='bg-gray-700 bg-opacity-95 bg-blend-overlay flex items-center justify-center' style={{ backgroundImage: 'url(https://image.freepik.com/free-photo/front-car-lights-night-road_1303-17091.jpg)', width: '100%', height: '250px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center bottom' }}>
                <h2 className='md:text-6xl text-5xl px-5 text-center py-10  text-white font-semibold'>About Us</h2>
            </div>
            <div className="md:container md:mx-auto px-5 lg:px-0 py-10">
                <div className="about-box">
                    <img src="https://img.freepik.com/free-photo/pretty-sister-spending-time-with-her-baby-brother-sitting-floor-bedroom-beautiful-young-babysitter-playing-with-little-boy-indoors-holding-stuffed-toy-duck-infancy-childcare-motherhood_344912-7.jpg?size=626&ext=jpg" alt="" />
                    <img src="https://img.freepik.com/free-photo/pretty-sister-spending-time-with-her-baby-brother-sitting-floor-bedroom-beautiful-young-babysitter-playing-with-little-boy-indoors-holding-stuffed-toy-duck-infancy-childcare-motherhood_344912-7.jpg?size=626&ext=jpg" alt="" />
                    <p className='mt-8 text-xl mb-5'>Babycare was found back in 2012 when there were only a few eCommerce sites operating in Bangladesh. During that time, the eCommerce ecosystem was mainly focusing on B2B or C2C customers. Babycare is the first ever Bangladeshi website specialized in baby care products, for the best care you can get for your baby. At Babycare, huge range of imported premium baby care items available at your convenience! Babycare runs it’s operation through the website: www.babycarebd.com
                    In 2018, Babycare was listed as a “Private Limited Company” under the companies’ act 1994.
Babycare is currently providing services in all over the country while providing nationwide home delivery and Pick up from Courier is available for outside Dhaka customers. </p>
                    {/* <p>We are a car saleing company who sales modern new updated cars from the top class renowned companys cars like Audi,
                         Lamborgini, Bugati, Nissan, Toyota, Alion etc.One model would be the exclusive high-end V12 model that represented 
                         the best that Lamborghini could achieve, that was the Murcielago. The other would be a slightly toned-down V10 version 
                         of that with unique styling and features, and that was the Gallardo, which debuted in 2003. Following the strategy, 
                         these two models have since been replaced by the Aventador and the Huracan respectively In this way, the Murcielago 
                         name became symbolic if not prophetic for Lamborghini. Though it was the Diablo that signaled a new era for Lamborghini, it was the Murcielago that was to set the bar for the Lamborghini models to come. You can still see much of its style in the Gallardo, and even in the Aventador and Huracan.</p> */}
                    {/* <h4 className='my-3 font-semibold'>We started our journey in 14th January 1999</h4> */}
                </div>
                <TeamMember></TeamMember>
            </div>
        </div>
    );
};

export default About;