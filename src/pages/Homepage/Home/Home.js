import React from 'react';
import useAuth from '../../../hooks/useAuth';
import LimitedOffer from '../../LimitedOffer/LimitedOffer';
import BestSellers from '../BestSellers/BestSellers';
import Brand from '../Brand/Brand';
import Feature from '../Feature/Feature';
import Hero from '../Hero/Hero';
import Review from '../Review/Review';
import TeamMember from '../TeamMember/TeamMember';

const Home = () => {
    const { isLoading } = useAuth()
    return (
        <div>
            {
                isLoading ?
                    <h2 className='text-4xl text-red-500 text-center font-medium pt-30'>Loading...</h2>
                    : <div>
                        <Hero></Hero>
                        <LimitedOffer></LimitedOffer>
                        <BestSellers></BestSellers>
                        <TeamMember></TeamMember>
                        <Review></Review>
                        <Feature></Feature>
                        <Brand></Brand>
                    </div>
            }
        </div>
    );
};

export default Home;