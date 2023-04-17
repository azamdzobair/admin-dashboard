import React from 'react';
import list from '../data';
import Cards from './Cards';


const Productlist = ({ handleClick }) => {
    return (
        <section className='flex justify-center mt-20'>
            <div className='grid grid-cols-3 gap-8'>
                {
                    list.map((item) => (
                        <Cards item={item} key={item.id} handleClick={handleClick} />
                    ))
                }
            </div>
        </section>
    );
};

export default Productlist;