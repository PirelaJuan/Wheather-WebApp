import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const WeatherChart = ({ list }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (list && list.data) {
            // Map each day's date and temperature into data for the chart
            const chartData = list.data.map(day => ({
                date: day.valid_date,      // Using the valid_date as the x-axis
                temperature: day.temp       // Using the average temperature as the y-axis
            }));
            setData(chartData);
        }
    }, [list]);

    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" label={{ value: "Date", position: 'insideBottomRight', offset: -5 }} />
                <YAxis label={{ value: "Temperature (°C)", angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default WeatherChart;
