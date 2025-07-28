
import React from 'react';
import { Device } from '../types';
import { OSIcon } from './icons';

interface DeviceListProps {
    devices: Device[];
}

const DeviceItem: React.FC<{ device: Device }> = ({ device }) => (
    <div className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors duration-200">
        <OSIcon os={device.os} className="w-8 h-8 text-slate-300 flex-shrink-0" />
        <div>
            <p className="font-semibold text-white">{device.name}</p>
            <p className="text-xs text-slate-400 font-mono">{device.ip}</p>
        </div>
    </div>
);

const DeviceList: React.FC<DeviceListProps> = ({ devices }) => {
    const otherDevices = devices.filter(d => !d.isSelf);
    
    return (
        <div className="bg-slate-800 rounded-lg p-4">
            <h3 className="font-bold text-white mb-3 px-1">Devices on Network ({otherDevices.length})</h3>
            <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                {otherDevices.length > 0 ? (
                    otherDevices.map(device => <DeviceItem key={device.id} device={device} />)
                ) : (
                    <div className="text-center text-slate-400 py-8">
                        <p>Searching for devices...</p>
                        <p className="text-sm mt-1">No other devices found yet.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DeviceList;
