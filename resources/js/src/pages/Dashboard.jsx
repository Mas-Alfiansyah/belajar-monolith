import React from 'react';

const Dashboard = () => {
    return (
        <>
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-1">
                    <h1 className="text-2xl lg:text-3xl font-extrabold tracking-tight text-black">Dashboard</h1>
                    <i className="fa-solid fa-chevron-down text-xs mt-2 text-gray-400"></i>
                </div>
                <p className="text-[14px] text-gray-400 font-medium">Take a look at your analytics.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                <div className="border border-gray-100 rounded-3xl p-6 relative overflow-hidden bg-white shadow-sm">
                    <div className="flex items-center gap-2 mb-4">
                        <i className="fa-solid fa-chart-line text-purple-500"></i>
                        <span className="text-sm font-bold">Growth</span>
                    </div>
                    <span className="text-2xl font-bold">+10%</span>
                    <p className="text-[10px] text-gray-400 mt-1">Students in total</p>
                    <div className="absolute bottom-0 right-0 w-24 h-16 bg-purple-50 opacity-50" style={{ clipPath: "polygon(0 100%, 20% 70%, 40% 85%, 60% 40%, 80% 60%, 100% 0, 100% 100%)" }}></div>
                </div>

                <div className="border border-gray-100 rounded-3xl p-6 bg-white shadow-sm">
                    <div className="flex justify-between items-center mb-4 text-sm font-bold">
                        <div className="flex items-center gap-2"><i className="fa-solid fa-wave-square text-blue-400"></i> Exams</div>
                        <span className="text-[10px] text-gray-300 underline">Check Exams</span>
                    </div>
                    <span className="text-2xl font-bold">19.32</span>
                    <p className="text-[10px] text-gray-400 mt-1">Average score</p>
                </div>

                <div className="border border-gray-100 rounded-3xl p-6 bg-white shadow-sm md:col-span-2 lg:col-span-1">
                    <div className="flex justify-between items-center mb-4 text-sm font-bold">
                        <div className="flex items-center gap-2"><i className="fa-regular fa-clock text-green-400"></i> Activity</div>
                        <span className="text-[10px] text-gray-300 underline">Check Status</span>
                    </div>
                    <div className="flex justify-between">
                        <div><span className="text-2xl font-bold">8</span><p className="text-[10px] text-green-500 font-bold">Present</p></div>
                        <div><span className="text-2xl font-bold">3</span><p className="text-[10px] text-red-400 font-bold">Absent</p></div>
                        <div><span className="text-2xl font-bold">12</span><p className="text-[10px] text-orange-300 font-bold">Events</p></div>
                    </div>
                </div>
            </div>

            {/* Assignments Summary */}
            <div className="mb-10">
                <h2 className="font-bold text-lg mb-4">Assignments</h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <StatBox icon="fa-magnifying-glass" color="purple" val="23/32" label="Not-checked" />
                    <StatBox icon="fa-rotate-right" color="orange" val="23/32" label="Not-delivered" border />
                    <StatBox icon="fa-xmark" color="yellow" val="23/32" label="Not-completed" />
                    <StatBox icon="fa-check" color="green" val="23/32" label="Completed" />
                </div>
            </div>

            {/* Table */}
            <section>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="font-bold text-lg">Last assignments</h2>
                    <button className="bg-gray-50 px-3 py-1 rounded-lg border border-gray-100 flex items-center gap-2">
                        <i className="fa-solid fa-sliders text-[10px]"></i>
                        <span className="text-[10px] font-bold">Filter</span>
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left min-w-[500px]">
                        <thead>
                            <tr className="text-[10px] text-gray-300 uppercase tracking-wider">
                                <th className="pb-4">Assignment name</th>
                                <th className="pb-4">Time</th>
                                <th className="pb-4 text-right">Status</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            <TableRow name="Equations & Expressions - Page 32" time="12h ago" status="Not-delivered" color="orange" />
                            <TableRow name="Algebra Practice - Page 43" time="23h ago" status="Complete" color="green" />
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
};

const StatBox = ({ icon, color, val, label, border }) => (
    <div className={`bg-[#F8F9FB] rounded-2xl p-4 flex items-center gap-4 ${border ? 'border border-orange-100' : ''}`}>
        <div className={`w-10 h-10 bg-${color}-50 text-${color}-400 rounded-xl flex items-center justify-center`}><i className={`fa-solid ${icon}`}></i></div>
        <div><p className="text-sm font-bold">{val}</p><p className="text-[10px] text-gray-400">{label}</p></div>
    </div>
);

const TableRow = ({ name, time, status, color }) => (
    <tr className="border-t border-gray-50">
        <td className="py-4 font-semibold text-gray-700">{name}</td>
        <td className="py-4 text-gray-400">{time}</td>
        <td className={`py-4 text-right text-${color}-400 font-medium text-xs`}>{status}</td>
    </tr>
);

export default Dashboard;