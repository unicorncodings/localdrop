
import React from 'react';
import { Device } from '../types';
import { QRIcon, OSIcon } from './icons';

interface ConnectionInfoProps {
    device: Device;
}

const ConnectionInfo: React.FC<ConnectionInfoProps> = ({ device }) => {
    return (
        <div className="bg-slate-800 rounded-lg p-4 flex flex-col sm:flex-row items-center gap-4">
            <div className="flex-shrink-0 bg-slate-700 rounded-lg p-3">
                 <QRIcon className="w-16 h-16 text-cyan-400" />
            </div>
            <div className="text-center sm:text-left">
                <p className="text-slate-400 text-sm">Your Device</p>
                <h3 className="font-bold text-lg text-white flex items-center gap-2 justify-center sm:justify-start">
                    <OSIcon os={device.os} className="w-5 h-5" />
                    <span>{device.name}</span>
                </h3>
                <p className="font-mono text-cyan-400 bg-slate-900 px-2 py-1 rounded-md text-sm inline-block mt-1">
                    {device.ip}
                </p>
            </div>
        </div>
    );
};

export default ConnectionInfo;
