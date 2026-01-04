// app/dashboard/upload/page.tsx
import { SignedIn } from "@clerk/nextjs";
import VideoUploader from '@/components/VideoUploader';

export default function UploadPage() {
  return (
    <SignedIn>
      <div>
        <h1 className="text-4xl font-bold mb-8">Upload New Video</h1>
        <div className="max-w-4xl">
          <VideoUploader />
        </div>
        <p className="text-gray-400 mt-8">
          Select a video to start AI processing. We'll generate optimized clips with viral score prediction and multilingual dubbing.
        </p>
      </div>
    </SignedIn>
  );
}