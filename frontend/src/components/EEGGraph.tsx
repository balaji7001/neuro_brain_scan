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

export default function EEGGraph({ data, onSelect }: any) {

    const persons = [...new Set(data.map((d: any) => d.person))];

    return (
        <div className="w-full h-[320px]">
            <ResponsiveContainer>
                <LineChart>
                    <XAxis dataKey="index" />
                    <YAxis />
                    <Tooltip />
                    <Legend />

                    {persons.map((p: string, index: number) => (
                        // @ts-ignore
                        <Line
                            key={p}
                            data={data.filter((d: any) => d.person === p)}
                            dataKey="alpha"
                            name={p}
                            stroke={`hsl(${index * 100}, 70%, 50%)`}
                            strokeWidth={2}
                            dot={false}
                            onClick={() => onSelect(p)}
                        />
                    ))}
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}