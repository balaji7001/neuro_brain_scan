"use client";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";

export default function PersonBarChart({ data }: any) {
    return (
        <div className="w-full h-[320px]">
            <ResponsiveContainer>
                <LineChart data={data}>
                    <XAxis dataKey="index" />
                    <YAxis />
                    <Tooltip />
                    <Legend />

                    <Line dataKey="alpha" stroke="#00FFC6" />
                    <Line dataKey="beta" stroke="#4DA6FF" />
                    <Line dataKey="gamma" stroke="#FF4D6D" />
                    <Line dataKey="theta" stroke="#FFA500" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}