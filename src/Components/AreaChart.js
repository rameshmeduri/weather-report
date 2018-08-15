import React from 'react';
import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from 'recharts';

const data = [
    { date: '15 August', time: 6 },
    { date: '15 August', time: 1 },
    { date: '16 August', time: 6 },
    { date: '16 August', time: 1 },
    { date: '17 August', time: 6 },
    { date: '17 August', time: 1 },
    { date: '18 August', time: 6 },
    { date: '18 August', time: 1 },
    { date: '19 August', time: 6 },
    { date: '19 August', time: 1 }
];

const AreaChartConnectNulls = () => (
    <ResponsiveContainer width="100%">
        <div className="mb-5">
            <ResponsiveContainer width="100%" height={200}>
                <AreaChart
                    data={data}
                    margin={{ top: 10, right: 0, left: -25, bottom: 0 }}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area
                        connectNulls={true}
                        type="monotone"
                        dataKey="time"
                        stroke="#3367d6"
                        fill="#3367d6"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    </ResponsiveContainer>
);

export default AreaChartConnectNulls;
