import React from 'react';

const Cards = ({ item, handleClick }) => {
    const { name, seller, price, img } = item;
    return (
        <div className="">
            <div className="w-64">
                <img src={img} alt="Img" />
            </div>
            <div className="mt-8">
                <p>{name}</p>
                <p>{seller}</p>
                <p>Price - {price}$</p>
                <button onClick={() => handleClick(item)} >Add to Cart</button>
            </div>
        </div>
    )
}
export default Cards
