import React, { useEffect, useState } from 'react';
import styling from'../Cart/total.module.css';
const Total = ({finalPrice}) => {
    return (
       <div className={`${styling.mainTotal} rounded-t-full relative top-0 right-0`}>
        <h1 className='text-center text-2xl bungee mb-0 bg-gradient-to-r from-yellow-500 via-red-500 to-orange-500 bg-clip-text text-transparent drop-shadow-md'>SUMMARY</h1>
        <h1 className='text-center bungee mb-0 bg-gradient-to-r from-yellow-500 via-red-500 to-orange-500 bg-clip-text text-transparent drop-shadow-md'>---------------</h1>
            <div className='text-md text-[#fbfada]'>
            <p>Taxs: <span className='font-extrabold'> 30%</span></p>
            <p>service: <span className='font-extrabold'> 10%</span></p>
            <p>Totla price: <span className='font-extrabold'>{finalPrice}</span></p>
            </div>
            <div className='flex flex-col bungee text-sm text-[#fbfada]'>

                <button className='bg-green-500 cursor-pointer hover:bg-green-600 transition-all my-3 rounded-full px-3 py-2'>Confirm payment</button>
                <button className='bg-yellow-400 hover:bg-yellow-600 transition-all cursor-pointer my-3 rounded-full px-3 py-2'>Add Coupon</button>
            </div>
        </div>
    );
}

export default Total;
