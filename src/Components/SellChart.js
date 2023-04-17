import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const SellChart = () => {

    const data = [
        {
            name: "Jan",
            sell: 40000,
        },
        {
            name: "Feb",
            sell: 30000,
        },
        {
            name: "Mar",
            sell: 50000,
        },
        {
            name: "Apr",
            sell: 60000,
        },
        {
            name: "May",
            sell: 70000,
        },
        {
            name: "Jun",
            sell: 20000,
        },
        {
            name: "Jul",
            sell: 35000,
        },
        {
            name: "Agu",
            sell: 65000,
        },
        {
            name: "Sep",
            sell: 48000,
        },
        {
            name: "Oct",
            sell: 10000,
        },
        {
            name: "Nov",
            sell: 10000,
        },
        {
            name: "Dec",
            sell: 30000,
        },
    ];

    return (
        <div className='flex justify-center mt-20'>
            <LineChart width={700} height={400} data={data} margin={{
                top: 50,

                left: 100,
                bottom: 25,
            }}>
                <Line type="monotone" dataKey="name" stroke="#8884d8" ></Line>
                <Line type="monotone" dataKey="sell" stroke="#82ca9d" />
                <XAxis dataKey="name" ></XAxis>
                <YAxis dataKey="sell" ></YAxis>
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default SellChart;