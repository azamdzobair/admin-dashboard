import React from 'react';

const Featured = () => {
    return (
        <div className="flex justify-around mt-20">
            <div className="bg-green-400 px-10 py-10 rounded-3xl shadow-2xl">
                <span className="text-4xl font-extrabold">Revanue</span>
                <div className="featuredMoneyContainer">
                    <span className="text-2xl">$2,415</span>

                </div>
                <span className="text-lg">Compared to last month</span>
            </div>
            <div className="bg-green-500 px-10 py-10 rounded-3xl shadow-2xl">
                <span className="text-4xl font-extrabold">Sale</span>
                <div className="featuredMoneyContainer">
                    <span className="text-2xl">$9,415</span>

                </div>
                <span className="text-lg">Compared to last month</span>
            </div>
            <div className="bg-green-600 px-10 py-10 rounded-3xl shadow-2xl">
                <span className="text-4xl font-extrabold">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="text-2xl">$4,415</span>

                </div>
                <span className="text-lg">Compared to last month</span>
            </div>
        </div>
    );
}

export default Featured;