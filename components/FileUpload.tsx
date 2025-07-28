
import React, { useRef, useState, useCallback } from 'react';
import { UploadIcon, Spinner } from './icons';

interface FileUploadProps {
    onUpload: (file: File) => void;
    isUploading: boolean;
}

const FileUpload: React.FC<FileUploadProps> = ({ onUpload, isUploading }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleFileSelect = (files: FileList | null) => {
        if (files && files.length > 0) {
            onUpload(files[0]);
        }
    };

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    const handleDragEnter = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    }, []);

    const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
    }, []);

    const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        handleFileSelect(e.dataTransfer.files);
    }, [onUpload]);

    return (
        <div className="mb-6">
            <div
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 cursor-pointer ${
                    isDragging ? 'border-cyan-400 bg-slate-700/50' : 'border-slate-600 hover:border-slate-500'
                }`}
                onClick={handleClick}
            >
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={(e) => handleFileSelect(e.target.files)}
                    className="hidden"
                    disabled={isUploading}
                />
                <div className="flex flex-col items-center justify-center gap-4">
                    {isUploading ? (
                        <>
                            <Spinner className="w-12 h-12 text-cyan-400" />
                            <p className="text-slate-300 font-semibold">Uploading...</p>
                        </>
                    ) : (
                        <>
                             <div className="p-3 bg-slate-700 rounded-full">
                                <UploadIcon className="w-8 h-8 text-cyan-400" />
                            </div>
                            <p className="text-slate-300">
                                <span className="font-semibold text-cyan-400">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-slate-500">Select any single file to share</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FileUpload;
