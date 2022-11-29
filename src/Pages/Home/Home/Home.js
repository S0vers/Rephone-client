import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Advetisment from '../Advetisment/Advetisment';
import Banner from '../Banner/Banner';
import Catagory from '../Catagories/Catagory';
import ContactUs from '../ContactUs/ContactUs';
import WasteCount from '../WasteCount/WasteCount';

const Home = () => {
    const url = 'https://rephone-server.vercel.app/advertisements'
    const { data: advetisments, isLoading } = useQuery({
        queryKey: ['advetisments'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data
        }
    })
    if (isLoading) {
        return
    }
    return (
        <div>
            <Banner></Banner>
            <Catagory></Catagory>
            {advetisments.length > 0 &&
                <Advetisment advetisments={advetisments}></Advetisment>
            }
            <WasteCount></WasteCount>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;