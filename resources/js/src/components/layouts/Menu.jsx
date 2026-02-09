import React, { useState } from 'react';

const Menu = ({ children }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const toggleSidebar = () => {
        if (window.innerWidth >= 1024) {
            setIsCollapsed(!isCollapsed);
        } else {
            setIsMobileOpen(!isMobileOpen);
        }
    };

    return (
        <div className="flex h-screen overflow-hidden lg:p-3 p-0 bg-[#F1F3F7]">
            {/* Overlay Mobile */}
            <div 
                className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden transition-all ${
                    isMobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onClick={() => setIsMobileOpen(false)}
            ></div>

            {/* SIDEBAR */}
            <aside 
                className={`flex flex-col py-6 px-4 shrink-0 transition-all duration-300 ease-in-out
                    ${isCollapsed ? 'lg:w-[90px]' : 'lg:w-[260px]'} 
                    ${isMobileOpen ? 'fixed left-0 z-50 h-screen bg-[#F1F3F7] w-[280px]' : 'fixed -left-full lg:static lg:left-0'}
                `}
            >
                <div className="flex items-center gap-3 mb-10 px-2">
                    <img src="uim.webp" className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0" alt="logo" />
                    {!isCollapsed && <span className="font-extrabold text-xl tracking-tight">SIMAMT</span>}
                </div>

                <div className="flex-1 overflow-y-auto pr-1 custom-scroll">
                    <p className={`text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 px-3 ${isCollapsed ? 'hidden' : 'block'}`}>
                        Main Menu
                    </p>
                    <nav className="space-y-1">
                        <MenuItem icon="fa-house-chimney" label="Overview" isCollapsed={isCollapsed} active />
                        <MenuItem icon="fa-users" label="Students" isCollapsed={isCollapsed} />
                        <MenuItem icon="fa-comment-dots" label="Messages" isCollapsed={isCollapsed} badge="2" />
                    </nav>
                </div>

                <div className={`mt-auto pt-6 border-t border-gray-200 px-2 flex items-center gap-3 ${isCollapsed ? 'justify-center' : ''}`}>
                    <img src="https://ui-avatars.com/api/?name=Alfiansyah&background=000&color=fff" className="w-10 h-10 rounded-full shrink-0" alt="user" />
                    {!isCollapsed && (
                        <div>
                            <p className="text-[12px] font-extrabold text-black">Alfiansyah</p>
                            <p className="text-[10px] text-gray-400 font-bold">Student</p>
                        </div>
                    )}
                </div>
            </aside>

            {/* MAIN AREA */}
            <main className="flex-1 flex flex-col overflow-hidden transition-all duration-300 bg-white rounded-none lg:rounded-[40px_40px_0_0] shadow-sm relative">
                
                {/* Header (Pindahan dari Dashboard ke Layout agar Toggle Berfungsi) */}
                <header className="lg:px-10 px-6 py-8 flex justify-between items-center shrink-0">
                    <div className="flex items-center gap-4">
                        <button 
                            onClick={toggleSidebar} 
                            className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-xl text-black hover:bg-gray-200 transition-all"
                        >
                            <i className="fa-solid fa-bars-staggered"></i>
                        </button>

                        <div className="hidden sm:flex items-center gap-2 text-xs text-gray-400 font-bold uppercase tracking-wider">
                            <span>Techerly</span> <i className="fa-solid fa-chevron-right text-[8px]"></i>
                            <span>Students</span> <i className="fa-solid fa-chevron-right text-[8px]"></i>
                            <span className="text-black font-extrabold">Alfiansyah</span>
                        </div>
                    </div>

                    <div className="flex gap-4 lg:gap-6 text-gray-300">
                        <i className="fa-regular fa-bell text-lg cursor-pointer hover:text-black transition-colors"></i>
                        <i className="fa-solid fa-magnifying-glass text-lg cursor-pointer hover:text-black transition-colors"></i>
                    </div>
                </header>

                {/* Konten Halaman */}
                <div className="flex-1 overflow-y-auto lg:px-10 px-6 pb-10 custom-scroll">
                    {children}
                </div>
            </main>
        </div>
    );
};

const MenuItem = ({ icon, label, isCollapsed, badge, active }) => (
    <a href="#" className={`flex items-center gap-3 px-4 py-3 transition-all ${active ? 'bg-white shadow-sm rounded-xl text-black' : 'text-gray-400 hover:text-black'} ${isCollapsed ? 'justify-center px-0' : ''}`}>
        <i className={`fa-solid ${icon} text-lg`}></i>
        {!isCollapsed && <span className="text-[13px] font-bold flex-1">{label}</span>}
        {!isCollapsed && badge && <span className="bg-black text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">{badge}</span>}
    </a>
);

export default Menu;