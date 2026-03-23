(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Myself/NeuroTester/frontend/src/components/EEGGraph.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EEGGraph
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Myself/NeuroTester/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Myself/NeuroTester/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Myself/NeuroTester/frontend/node_modules/recharts/es6/chart/LineChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Myself/NeuroTester/frontend/node_modules/recharts/es6/cartesian/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Myself/NeuroTester/frontend/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Myself/NeuroTester/frontend/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Myself/NeuroTester/frontend/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Myself/NeuroTester/frontend/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Myself/NeuroTester/frontend/node_modules/recharts/es6/component/Legend.js [app-client] (ecmascript)");
"use client";
;
;
;
function EEGGraph(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "f8372fcf8ea0644fae4912617ce98a44fda163a5bbdb2d0091ebe652aeae1ad3") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f8372fcf8ea0644fae4912617ce98a44fda163a5bbdb2d0091ebe652aeae1ad3";
    }
    const { data, onSelect } = t0;
    let t1;
    if ($[1] !== data) {
        t1 = new Set(data.map(_EEGGraphDataMap));
        $[1] = data;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== t1) {
        t2 = [
            ...t1
        ];
        $[3] = t1;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const persons = t2;
    let t3;
    let t4;
    let t5;
    let t6;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
            dataKey: "index"
        }, void 0, false, {
            fileName: "[project]/Myself/NeuroTester/frontend/src/components/EEGGraph.tsx",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {}, void 0, false, {
            fileName: "[project]/Myself/NeuroTester/frontend/src/components/EEGGraph.tsx",
            lineNumber: 40,
            columnNumber: 10
        }, this);
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {}, void 0, false, {
            fileName: "[project]/Myself/NeuroTester/frontend/src/components/EEGGraph.tsx",
            lineNumber: 41,
            columnNumber: 10
        }, this);
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {}, void 0, false, {
            fileName: "[project]/Myself/NeuroTester/frontend/src/components/EEGGraph.tsx",
            lineNumber: 42,
            columnNumber: 10
        }, this);
        $[5] = t3;
        $[6] = t4;
        $[7] = t5;
        $[8] = t6;
    } else {
        t3 = $[5];
        t4 = $[6];
        t5 = $[7];
        t6 = $[8];
    }
    let t7;
    if ($[9] !== data || $[10] !== onSelect || $[11] !== persons) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-[320px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChart"], {
                    children: [
                        t3,
                        t4,
                        t5,
                        t6,
                        persons.map({
                            "EEGGraph[persons.map()]": (p, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                    data: data.filter({
                                        "EEGGraph[persons.map() > data.filter()]": (d_0)=>d_0.person === p
                                    }["EEGGraph[persons.map() > data.filter()]"]),
                                    dataKey: "alpha",
                                    name: p,
                                    stroke: `hsl(${index * 100}, 70%, 50%)`,
                                    strokeWidth: 2,
                                    dot: false,
                                    onClick: {
                                        "EEGGraph[persons.map() > <Line>.onClick]": ()=>onSelect(p)
                                    }["EEGGraph[persons.map() > <Line>.onClick]"]
                                }, p, false, {
                                    fileName: "[project]/Myself/NeuroTester/frontend/src/components/EEGGraph.tsx",
                                    lineNumber: 56,
                                    columnNumber: 54
                                }, this)
                        }["EEGGraph[persons.map()]"])
                    ]
                }, void 0, true, {
                    fileName: "[project]/Myself/NeuroTester/frontend/src/components/EEGGraph.tsx",
                    lineNumber: 55,
                    columnNumber: 65
                }, this)
            }, void 0, false, {
                fileName: "[project]/Myself/NeuroTester/frontend/src/components/EEGGraph.tsx",
                lineNumber: 55,
                columnNumber: 44
            }, this)
        }, void 0, false, {
            fileName: "[project]/Myself/NeuroTester/frontend/src/components/EEGGraph.tsx",
            lineNumber: 55,
            columnNumber: 10
        }, this);
        $[9] = data;
        $[10] = onSelect;
        $[11] = persons;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    return t7;
}
_c = EEGGraph;
function _EEGGraphDataMap(d) {
    return d.person;
}
var _c;
__turbopack_context__.k.register(_c, "EEGGraph");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Myself/NeuroTester/frontend/src/components/PersonBarChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PersonBarChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Myself/NeuroTester/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Myself/NeuroTester/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Myself/NeuroTester/frontend/node_modules/recharts/es6/chart/LineChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Myself/NeuroTester/frontend/node_modules/recharts/es6/cartesian/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Myself/NeuroTester/frontend/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Myself/NeuroTester/frontend/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Myself/NeuroTester/frontend/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Myself/NeuroTester/frontend/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Myself/NeuroTester/frontend/node_modules/recharts/es6/component/Legend.js [app-client] (ecmascript)");
"use client";
;
;
;
function PersonBarChart(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "cf0a58f8f419522b23a8e85f2fe9231e9e3717e15589ad1aa3b067d043eef7e7") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cf0a58f8f419522b23a8e85f2fe9231e9e3717e15589ad1aa3b067d043eef7e7";
    }
    const { data } = t0;
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
            dataKey: "index"
        }, void 0, false, {
            fileName: "[project]/Myself/NeuroTester/frontend/src/components/PersonBarChart.tsx",
            lineNumber: 25,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {}, void 0, false, {
            fileName: "[project]/Myself/NeuroTester/frontend/src/components/PersonBarChart.tsx",
            lineNumber: 26,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {}, void 0, false, {
            fileName: "[project]/Myself/NeuroTester/frontend/src/components/PersonBarChart.tsx",
            lineNumber: 27,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {}, void 0, false, {
            fileName: "[project]/Myself/NeuroTester/frontend/src/components/PersonBarChart.tsx",
            lineNumber: 28,
            columnNumber: 10
        }, this);
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
            dataKey: "alpha",
            stroke: "#00FFC6"
        }, void 0, false, {
            fileName: "[project]/Myself/NeuroTester/frontend/src/components/PersonBarChart.tsx",
            lineNumber: 29,
            columnNumber: 10
        }, this);
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
            dataKey: "beta",
            stroke: "#4DA6FF"
        }, void 0, false, {
            fileName: "[project]/Myself/NeuroTester/frontend/src/components/PersonBarChart.tsx",
            lineNumber: 30,
            columnNumber: 10
        }, this);
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
            dataKey: "gamma",
            stroke: "#FF4D6D"
        }, void 0, false, {
            fileName: "[project]/Myself/NeuroTester/frontend/src/components/PersonBarChart.tsx",
            lineNumber: 31,
            columnNumber: 10
        }, this);
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
            dataKey: "theta",
            stroke: "#FFA500"
        }, void 0, false, {
            fileName: "[project]/Myself/NeuroTester/frontend/src/components/PersonBarChart.tsx",
            lineNumber: 32,
            columnNumber: 10
        }, this);
        $[1] = t1;
        $[2] = t2;
        $[3] = t3;
        $[4] = t4;
        $[5] = t5;
        $[6] = t6;
        $[7] = t7;
        $[8] = t8;
    } else {
        t1 = $[1];
        t2 = $[2];
        t3 = $[3];
        t4 = $[4];
        t5 = $[5];
        t6 = $[6];
        t7 = $[7];
        t8 = $[8];
    }
    let t9;
    if ($[9] !== data) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-[320px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChart"], {
                    data: data,
                    children: [
                        t1,
                        t2,
                        t3,
                        t4,
                        t5,
                        t6,
                        t7,
                        t8
                    ]
                }, void 0, true, {
                    fileName: "[project]/Myself/NeuroTester/frontend/src/components/PersonBarChart.tsx",
                    lineNumber: 53,
                    columnNumber: 65
                }, this)
            }, void 0, false, {
                fileName: "[project]/Myself/NeuroTester/frontend/src/components/PersonBarChart.tsx",
                lineNumber: 53,
                columnNumber: 44
            }, this)
        }, void 0, false, {
            fileName: "[project]/Myself/NeuroTester/frontend/src/components/PersonBarChart.tsx",
            lineNumber: 53,
            columnNumber: 10
        }, this);
        $[9] = data;
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    return t9;
}
_c = PersonBarChart;
var _c;
__turbopack_context__.k.register(_c, "PersonBarChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Myself/NeuroTester/frontend/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Myself/NeuroTester/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Myself/NeuroTester/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Myself/NeuroTester/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Myself/NeuroTester/frontend/node_modules/papaparse/papaparse.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$src$2f$components$2f$EEGGraph$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Myself/NeuroTester/frontend/src/components/EEGGraph.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$src$2f$components$2f$PersonBarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Myself/NeuroTester/frontend/src/components/PersonBarChart.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Home() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(26);
    if ($[0] !== "1d0479767952f3e87235f15a74ef33317454c7d8f3ca2a887d925ab47bb3ff51") {
        for(let $i = 0; $i < 26; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1d0479767952f3e87235f15a74ef33317454c7d8f3ca2a887d925ab47bb3ff51";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [, setPersonStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [selectedPatient, setSelectedPatient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Idle");
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "Home[handleFileUpload]": (file)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].parse(file, {
                    header: true,
                    skipEmptyLines: true,
                    dynamicTyping: true,
                    complete: (results)=>{
                        console.log("RAW:", results.data);
                        const rows = results.data.map(_HomeHandleFileUploadAnonymousResultsDataMap);
                        console.log("PARSED:", rows);
                        setData(rows);
                        const persons = [
                            ...new Set(rows.map(_HomeHandleFileUploadAnonymousRowsMap))
                        ];
                        const stats = persons.map({
                            "Home[handleFileUpload > <anonymous> > persons.map()]": (p)=>{
                                const userData = rows.filter({
                                    "Home[handleFileUpload > <anonymous> > persons.map() > rows.filter()]": (r_1)=>r_1.person === p
                                }["Home[handleFileUpload > <anonymous> > persons.map() > rows.filter()]"]);
                                const avg = {
                                    "Home[handleFileUpload > <anonymous> > persons.map() > avg]": (key)=>(userData.reduce({
                                            "Home[handleFileUpload > <anonymous> > persons.map() > avg > userData.reduce()]": (s, d)=>s + d[key]
                                        }["Home[handleFileUpload > <anonymous> > persons.map() > avg > userData.reduce()]"], 0) / userData.length).toFixed(2)
                                }["Home[handleFileUpload > <anonymous> > persons.map() > avg]"];
                                return {
                                    person: p,
                                    alpha: Number(avg("alpha")),
                                    beta: Number(avg("beta")),
                                    gamma: Number(avg("gamma")),
                                    theta: Number(avg("theta"))
                                };
                            }
                        }["Home[handleFileUpload > <anonymous> > persons.map()]"]);
                        setPersonStats(stats);
                        const first = persons[0] || "";
                        setSelectedPatient(first);
                        if (rows.length > 0) {
                            const last = rows[rows.length - 1];
                            if (last.alpha > last.beta) {
                                setState("Relaxed");
                            } else {
                                if (last.beta > last.alpha) {
                                    setState("Focused");
                                } else {
                                    setState("Neutral");
                                }
                            }
                        } else {
                            setState("No Data");
                        }
                    }
                });
            }
        })["Home[handleFileUpload]"];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const handleFileUpload = t2;
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-lg mb-4 text-[#3B6F8E] font-semibold",
            children: "Upload EEG CSV"
        }, void 0, false, {
            fileName: "[project]/Myself/NeuroTester/frontend/src/app/page.tsx",
            lineNumber: 97,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-500",
            children: "Click or drag CSV file"
        }, void 0, false, {
            fileName: "[project]/Myself/NeuroTester/frontend/src/app/page.tsx",
            lineNumber: 104,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "card",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "upload-box",
                    children: [
                        t4,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "file",
                            accept: ".csv",
                            className: "hidden",
                            onChange: {
                                "Home[<input>.onChange]": (e)=>e.target.files && handleFileUpload(e.target.files[0])
                            }["Home[<input>.onChange]"]
                        }, void 0, false, {
                            fileName: "[project]/Myself/NeuroTester/frontend/src/app/page.tsx",
                            lineNumber: 111,
                            columnNumber: 70
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Myself/NeuroTester/frontend/src/app/page.tsx",
                    lineNumber: 111,
                    columnNumber: 36
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Myself/NeuroTester/frontend/src/app/page.tsx",
            lineNumber: 111,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-lg text-[#3B6F8E]",
            children: "Brain State"
        }, void 0, false, {
            fileName: "[project]/Myself/NeuroTester/frontend/src/app/page.tsx",
            lineNumber: 120,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] !== state) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "card",
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl font-bold text-[#56B79A]",
                    children: state
                }, void 0, false, {
                    fileName: "[project]/Myself/NeuroTester/frontend/src/app/page.tsx",
                    lineNumber: 127,
                    columnNumber: 36
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Myself/NeuroTester/frontend/src/app/page.tsx",
            lineNumber: 127,
            columnNumber: 10
        }, this);
        $[8] = state;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-lg mb-4 text-[#3B6F8E] font-semibold",
            children: "EEG Signals (Users)"
        }, void 0, false, {
            fileName: "[project]/Myself/NeuroTester/frontend/src/app/page.tsx",
            lineNumber: 135,
            columnNumber: 10
        }, this);
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    let t9;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = ({
            "Home[<EEGGraph>.onSelect]": (p_0)=>setSelectedPatient(p_0)
        })["Home[<EEGGraph>.onSelect]"];
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    let t10;
    if ($[12] !== data) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "card",
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$src$2f$components$2f$EEGGraph$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    data: data,
                    onSelect: t9
                }, void 0, false, {
                    fileName: "[project]/Myself/NeuroTester/frontend/src/app/page.tsx",
                    lineNumber: 151,
                    columnNumber: 37
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Myself/NeuroTester/frontend/src/app/page.tsx",
            lineNumber: 151,
            columnNumber: 11
        }, this);
        $[12] = data;
        $[13] = t10;
    } else {
        t10 = $[13];
    }
    let t11;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-lg mb-4 text-[#3B6F8E] font-semibold",
            children: "Selected Person Signals"
        }, void 0, false, {
            fileName: "[project]/Myself/NeuroTester/frontend/src/app/page.tsx",
            lineNumber: 159,
            columnNumber: 11
        }, this);
        $[14] = t11;
    } else {
        t11 = $[14];
    }
    let t12;
    if ($[15] !== data || $[16] !== selectedPatient) {
        let t13;
        if ($[18] !== selectedPatient) {
            t13 = ({
                "Home[data.filter()]": (d_0)=>d_0.person === selectedPatient
            })["Home[data.filter()]"];
            $[18] = selectedPatient;
            $[19] = t13;
        } else {
            t13 = $[19];
        }
        t12 = data.filter(t13);
        $[15] = data;
        $[16] = selectedPatient;
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    let t13;
    if ($[20] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "card",
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$src$2f$components$2f$PersonBarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    data: t12
                }, void 0, false, {
                    fileName: "[project]/Myself/NeuroTester/frontend/src/app/page.tsx",
                    lineNumber: 185,
                    columnNumber: 38
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Myself/NeuroTester/frontend/src/app/page.tsx",
            lineNumber: 185,
            columnNumber: 11
        }, this);
        $[20] = t12;
        $[21] = t13;
    } else {
        t13 = $[21];
    }
    let t14;
    if ($[22] !== t10 || $[23] !== t13 || $[24] !== t7) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Myself$2f$NeuroTester$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 space-y-6",
            children: [
                t5,
                t7,
                t10,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/Myself/NeuroTester/frontend/src/app/page.tsx",
            lineNumber: 193,
            columnNumber: 11
        }, this);
        $[22] = t10;
        $[23] = t13;
        $[24] = t7;
        $[25] = t14;
    } else {
        t14 = $[25];
    }
    return t14;
}
_s(Home, "pkcfX59dO2yLlyUm5HVsE44cP28=");
_c = Home;
function _HomeHandleFileUploadAnonymousRowsMap(r_0) {
    return r_0.person;
}
function _HomeHandleFileUploadAnonymousResultsDataMap(r, index) {
    return {
        index,
        person: r.person || r.Person || "User",
        alpha: Number(r.alpha ?? r.Alpha) || 0,
        beta: Number(r.beta ?? r.Beta) || 0,
        gamma: Number(r.gamma ?? r.Gamma) || 0,
        theta: Number(r.theta ?? r.Theta) || 0
    };
}
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Myself_NeuroTester_frontend_src_eceb0f59._.js.map