'use client';

export default function VideoUploader() {
  return (
    <div className="bg-gray-800/50 border-2 border-dashed border-gray-600 rounded-xl p-12 text-center">
      <svg className="mx-auto h-16 w-16 text-gray-400 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
      <p className="text-xl text-gray-300 mb-4">
        Drag & drop your video here, or click to browse
      </p>
      <p className="text-sm text-gray-500 mb-6">
        Supports MP4, MOV, AVI up to 2GB
      </p>
      <button className="bg-primary hover:bg-indigo-700 text-black font-semibold py-3 px-8 rounded-xl glow transition-all">
        Select File
      </button>
    </div>
  );
}