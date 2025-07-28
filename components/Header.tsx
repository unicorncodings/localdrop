
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="p-4 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-20 border-b border-slate-700/50">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl font-bold text-cyan-400 tracking-wider">
                    LocalDrop
                </h1>
                <p className="text-sm text-slate-400">WiFi File Share</p>
            </div>
        </header>
    );
};

export default Header;
