
import { SharedFile, Device, FileType, OperatingSystem } from '../types';

// --- MOCK DATABASE ---
let mockFiles: SharedFile[] = [
    { id: '1', name: 'mountain-trip.jpg', size: 4 * 1024 * 1024, type: FileType.Image, timestamp: Date.now() - 60000 },
    { id: '2', name: 'project-files.zip', size: 22 * 1024 * 1024, type: FileType.Archive, timestamp: Date.now() - 120000 },
    { id: '3', name: 'Company_Report_Q3.pdf', size: 2.5 * 1024 * 1024, type: FileType.Document, timestamp: Date.now() - 300000 },
];

let mockDevices: Device[] = [
    { id: 'self', name: 'My MacBook Pro', ip: '192.168.1.10', os: OperatingSystem.macOS, isSelf: true },
    { id: 'dev2', name: 'Galaxy S23', ip: '192.168.1.15', os: OperatingSystem.Android, isSelf: false },
    { id: 'dev3', name: 'DESKTOP-LISA', ip: '192.168.1.21', os: OperatingSystem.Windows, isSelf: false },
];
// --- END MOCK DATABASE ---

// Utility to simulate network delay
const delay = <T,>(data: T, ms = 500): Promise<T> => 
    new Promise(resolve => setTimeout(() => resolve(data), ms));

// Utility to get file type from filename
const getFileType = (filename: string): FileType => {
    const extension = filename.split('.').pop()?.toLowerCase() || '';
    if (['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'].includes(extension)) return FileType.Image;
    if (['mp4', 'mov', 'avi', 'mkv', 'webm'].includes(extension)) return FileType.Video;
    if (['mp3', 'wav', 'ogg', 'flac'].includes(extension)) return FileType.Audio;
    if (['zip', 'rar', '7z', 'tar.gz'].includes(extension)) return FileType.Archive;
    if (['pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'txt'].includes(extension)) return FileType.Document;
    if (['js', 'jsx', 'ts', 'tsx', 'html', 'css', 'json', 'py', 'go', 'rs'].includes(extension)) return FileType.Code;
    return FileType.Other;
};


export const api = {
    getFiles: async (): Promise<SharedFile[]> => {
        // Sort files by most recent first
        const sortedFiles = [...mockFiles].sort((a, b) => b.timestamp - a.timestamp);
        return delay(sortedFiles);
    },

    getDevices: async (): Promise<Device[]> => {
        // Simulate a device occasionally dropping off or re-joining
        if (Math.random() > 0.95 && mockDevices.length > 2) {
            mockDevices.pop();
        }
        return delay([...mockDevices]);
    },

    uploadFile: async (file: File): Promise<SharedFile> => {
        const newFile: SharedFile = {
            id: crypto.randomUUID(),
            name: file.name,
            size: file.size,
            type: getFileType(file.name),
            timestamp: Date.now()
        };
        // Simulate upload delay
        await delay(null, 1500);
        mockFiles.push(newFile);
        return newFile;
    },

    // In a real app, this would stream the file from the server
    downloadFile: async (file: SharedFile): Promise<void> => {
        console.log(`Initiating download for ${file.name}`);
        // Simulate network delay for download
        await delay(null, 1000);
        
        // Create a dummy file blob to simulate the download
        const dummyContent = `This is a mock file for "${file.name}" of size ${file.size} bytes.`;
        const blob = new Blob([dummyContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = file.name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
};
