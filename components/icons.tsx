
import React from 'react';
import { FileType, OperatingSystem } from '../types';

interface IconProps {
  className?: string;
}

export const FileIcon: React.FC<{ fileType: FileType; className?: string }> = ({ fileType, className = "w-6 h-6" }) => {
  switch (fileType) {
    case FileType.Image:
      return <ImageIcon className={className} />;
    case FileType.Video:
      return <VideoIcon className={className} />;
    case FileType.Audio:
        return <AudioIcon className={className} />;
    case FileType.Archive:
      return <ArchiveIcon className={className} />;
    case FileType.Document:
      return <DocumentIcon className={className} />;
    case FileType.Code:
        return <CodeIcon className={className} />;
    default:
      return <GenericFileIcon className={className} />;
  }
};

export const OSIcon: React.FC<{ os: OperatingSystem; className?: string }> = ({ os, className = "w-6 h-6" }) => {
    switch (os) {
        case OperatingSystem.Windows:
            return <WindowsIcon className={className} />;
        case OperatingSystem.macOS:
            return <AppleIcon className={className} />;
        case OperatingSystem.Linux:
            return <LinuxIcon className={className} />;
        case OperatingSystem.Android:
            return <AndroidIcon className={className} />;
        case OperatingSystem.iOS:
            return <AppleIcon className={className} />;
        default:
            return <DesktopIcon className={className} />;
    }
};

export const UploadIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
  </svg>
);

export const DownloadIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

export const QRIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.5 3.5h17v17h-17z" clipRule="evenodd" fill="currentColor" fillOpacity="0.1" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6h2v2H6zM16 6h2v2h-2zM6 16h2v2H6zM10 10h4v4h-4zM16 16h2v2h-2z" fill="currentColor" />
    </svg>
);

const GenericFileIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

const ImageIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const VideoIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

const AudioIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" />
    </svg>
);

const ArchiveIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
  </svg>
);

const DocumentIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const CodeIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
);

const WindowsIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M3 12.5V6.38L9.45 5l.02 7.5H3zm0 1.38V20l6.47-1.4L9.45 13.88H3zM10.82 5l10.18-2.23v9.72H10.82V5zm0 15.22L21 22.42V13.88H10.82v6.34z"/>
    </svg>
);

const AppleIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.25 14.75c-1.88 0-3.23-1.12-4.14-2.26-.9-.9-1.6-2.22-1.6-3.56 0-2.33 1.63-3.92 3.8-3.92 1.05 0 2.2.46 3.09.87l.1-.64c.1-.81-.54-1.29-1.39-1.29-.68 0-1.28.37-1.68.74l-.45-.63c.6-.55 1.54-.93 2.56-.93 1.7 0 2.94.94 2.94 2.72v5.33c0 .8-.2 1.36-.5 1.76-.3.39-.77.6-1.38.6zm-1.1-1.42c.63 0 1.13-.53 1.13-1.36V10.2c-.6-.33-1.3-.5-2.05-.5-.95 0-1.55.58-1.55 1.54 0 .97.62 1.77 1.6 2.65.52.46.87.78.87 1.1zM11.39 20c-3.15 0-5.54-2.18-5.54-5.4 0-3.3 2.39-5.43 5.54-5.43 3.19 0 5.55 2.14 5.55 5.43C16.94 17.82 14.58 20 11.39 20zm0-1.22c2.2 0 4.1-1.63 4.1-4.21 0-2.58-1.9-4.21-4.1-4.21-2.2 0-4.08 1.63-4.08 4.21 0 2.58 1.88 4.21 4.08 4.21z"/>
    </svg>
);

const LinuxIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-14h2v2h-2v-2zm-2 4h6v2H9v-2zm8 4H7v2h10v-2z" />
    </svg>
);

const AndroidIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M16.5 8c-.83 0-1.5-.67-1.5-1.5S15.67 5 16.5 5s1.5.67 1.5 1.5S17.33 8 16.5 8zm-9 0c-.83 0-1.5-.67-1.5-1.5S6.67 5 7.5 5s1.5.67 1.5 1.5S8.33 8 7.5 8zm8.5 3H7c-1.66 0-3 1.34-3 3v4.5c0 .83.67 1.5 1.5 1.5h13c.83 0 1.5-.67 1.5-1.5V14c0-1.66-1.34-3-3-3z"/>
    </svg>
);

const DesktopIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

export const Spinner: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
    <svg className={`${className} animate-spin`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
);
