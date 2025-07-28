
import React, { useState } from 'react';
import { SharedFile } from '../types';
import { FileIcon, DownloadIcon, Spinner } from './icons';

interface FileBrowserProps {
    files: SharedFile[];
    onDownload: (file: SharedFile) => Promise<void>;
}

const formatBytes = (bytes: number, decimals = 2): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

const formatTimestamp = (timestamp: number): string => {
    const now = Date.now();
    const seconds = Math.floor((now - timestamp) / 1000);
    
    if (seconds < 60) return `${seconds}s ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
}

const FileItem: React.FC<{ file: SharedFile; onDownload: (file: SharedFile) => Promise<void> }> = ({ file, onDownload }) => {
    const [isDownloading, setIsDownloading] = useState(false);

    const handleDownload = async () => {
        setIsDownloading(true);
        try {
            await onDownload(file);
        } catch (error) {
            console.error("Download failed", error);
        } finally {
            setIsDownloading(false);
        }
    };
    
    return (
        <div className="flex items-center gap-4 p-3 bg-slate-800 rounded-lg hover:bg-slate-700/50 transition-colors duration-200">
            <div className="flex-shrink-0 text-cyan-400">
                <FileIcon fileType={file.type} className="w-10 h-10" />
            </div>
            <div className="flex-grow overflow-hidden">
                <p className="font-semibold text-white truncate" title={file.name}>{file.name}</p>
                <div className="flex items-center gap-x-2 text-sm text-slate-400">
                    <span>{formatBytes(file.size)}</span>
                    <span className="text-slate-600">&bull;</span>
                    <span>{formatTimestamp(file.timestamp)}</span>
                </div>
            </div>
            <button
                onClick={handleDownload}
                disabled={isDownloading}
                className="flex-shrink-0 p-2 rounded-full bg-cyan-500 text-white hover:bg-cyan-400 disabled:bg-slate-600 disabled:cursor-not-allowed transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-cyan-500"
                aria-label={`Download ${file.name}`}
            >
                {isDownloading ? <Spinner className="w-5 h-5" /> : <DownloadIcon className="w-5 h-5" />}
            </button>
        </div>
    );
};


const FileBrowser: React.FC<FileBrowserProps> = ({ files, onDownload }) => {
    return (
        <div>
            <h2 className="text-xl font-bold text-white mb-4 px-1">Received Files ({files.length})</h2>
            <div className="space-y-3 max-h-[calc(100vh-450px)] lg:max-h-[calc(100vh-250px)] overflow-y-auto pr-1">
                {files.length > 0 ? (
                    files.map(file => <FileItem key={file.id} file={file} onDownload={onDownload} />)
                ) : (
                    <div className="text-center py-16 px-4 bg-slate-800 rounded-lg">
                        <p className="text-slate-400">No files shared yet.</p>
                        <p className="text-sm text-slate-500 mt-1">Upload a file to get started!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FileBrowser;
