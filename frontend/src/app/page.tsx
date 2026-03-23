"use client";

import { useState } from "react";
import Papa from "papaparse";
import EEGGraph from "../components/EEGGraph";
import PersonBarChart from "../components/PersonBarChart";

/* ===== PAGE ===== */
export default function Home() {
    const [data, setData] = useState<any[]>([]);
    const [personStats, setPersonStats] = useState<any[]>([]);
    const [selectedPatient, setSelectedPatient] = useState<string>("");
    const [state, setState] = useState("Idle");

    const handleFileUpload = (file: File) => {
        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            dynamicTyping: true,
            complete: (results: any) => {

                console.log("RAW:", results.data);

                // ✅ FIXED: support capital column names
                const rows = results.data.map((r: any, index: number) => ({
                    index,
                    person: r.person || r.Person || "User",
                    alpha: Number(r.alpha ?? r.Alpha) || 0,
                    beta: Number(r.beta ?? r.Beta) || 0,
                    gamma: Number(r.gamma ?? r.Gamma) || 0,
                    theta: Number(r.theta ?? r.Theta) || 0,
                }));

                console.log("PARSED:", rows);

                setData(rows);

                const persons = [...new Set(rows.map((r: any) => r.person))];

                const stats = persons.map((p: string) => {
                    const userData = rows.filter((r: any) => r.person === p);

                    const avg = (key: string) =>
                        (
                            userData.reduce((s: number, d: any) => s + d[key], 0) /
                            userData.length
                        ).toFixed(2);

                    return {
                        person: p,
                        alpha: Number(avg("alpha")),
                        beta: Number(avg("beta")),
                        gamma: Number(avg("gamma")),
                        theta: Number(avg("theta")),
                    };
                });

                setPersonStats(stats);

                const first = persons[0] || "";
                setSelectedPatient(first);

                // ✅ safe brain state
                if (rows.length > 0) {
                    const last = rows[rows.length - 1];
                    if (last.alpha > last.beta) setState("Relaxed");
                    else if (last.beta > last.alpha) setState("Focused");
                    else setState("Neutral");
                } else {
                    setState("No Data");
                }
            },
        });
    };

    return (
        <div className="p-6 space-y-6">

            {/* Upload */}
            <div className="card">
                <h2 className="text-lg mb-4 text-[#3B6F8E] font-semibold">
                    Upload EEG CSV
                </h2>

                <label className="upload-box">
                    <p className="text-sm text-gray-500">
                        Click or drag CSV file
                    </p>
                    <input
                        type="file"
                        accept=".csv"
                        className="hidden"
                        onChange={(e) =>
                            e.target.files && handleFileUpload(e.target.files[0])
                        }
                    />
                </label>
            </div>

            {/* Brain State */}
            <div className="card">
                <h2 className="text-lg text-[#3B6F8E]">Brain State</h2>
                <p className="text-xl font-bold text-[#56B79A]">{state}</p>
            </div>

            {/* EEG Graph (Users) */}
            <div className="card">
                <h2 className="text-lg mb-4 text-[#3B6F8E] font-semibold">
                    EEG Signals (Users)
                </h2>

                <EEGGraph
                    data={data}
                    onSelect={(p: string) => setSelectedPatient(p)}
                />
            </div>

            {/* Person Chart */}
            <div className="card">
                <h2 className="text-lg mb-4 text-[#3B6F8E] font-semibold">
                    Selected Person Signals
                </h2>

                <PersonBarChart
                    data={data.filter(
                        (d: any) => d.person === selectedPatient
                    )}
                />
            </div>
        </div>
    );
}