// app/dashboard/analytics/page.tsx
import { SignedIn } from "@clerk/nextjs";

export default function AnalyticsPage() {
  return (
    <SignedIn>
      <div>
        <h1 className="text-4xl font-bold mb-8">Analytics</h1>
        <p className="text-xl text-gray-300 mb-10">
          Detailed performance metrics for your generated clips.
        </p>
        <div className="bg-gray-800/50 rounded-2xl p-8 glow">
          <p className="text-center text-gray-400">Analytics dashboard coming soon...</p>
        </div>
      </div>
    </SignedIn>
  );
}