// app/dashboard/page.tsx
import { SignedIn, useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function Dashboard() {
  const { user } = useUser();

  return (
    <SignedIn>
      <div>
        <h1 className="text-4xl font-bold mb-8">
          Welcome back, {user?.firstName || "Creator"}!
        </h1>

        {/* Credit Balance */}
        <div className="bg-gray-800/50 rounded-2xl p-8 glow mb-10">
          <h2 className="text-2xl font-semibold mb-4">Your Credit Balance</h2>
          <p className="text-6xl font-bold text-primary mb-2">300</p>
          <p className="text-gray-400 mb-6">Pro Plan • Renews Feb 1, 2026</p>
          <Link href="/dashboard/credits" className="bg-primary hover:bg-indigo-700 text-black font-bold py-4 px-8 rounded-xl glow transition-all">
            Add or Upgrade Credits
          </Link>
        </div>

        {/* Analytics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-gray-800/50 p-6 rounded-2xl glow">
            <p className="text-gray-400 mb-2">Videos Processed</p>
            <p className="text-4xl font-bold">24</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-2xl glow">
            <p className="text-gray-400 mb-2">Clips Generated</p>
            <p className="text-4xl font-bold">156</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-2xl glow">
            <p className="text-gray-400 mb-2">Avg Viral Score</p>
            <p className="text-4xl font-bold text-green-400">87%</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-2xl glow">
            <p className="text-gray-400 mb-2">Total Views</p>
            <p className="text-4xl font-bold">1.2M</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-gray-800/50 rounded-2xl p-8 glow">
          <h2 className="text-2xl font-semibold mb-6">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-4 border-b border-gray-700">
              <div>
                <p className="font-semibold">Podcast Episode #42</p>
                <p className="text-sm text-gray-400">12 clips generated • Avg Score 92%</p>
              </div>
              <span className="text-sm text-gray-500">2 hours ago</span>
            </div>
            <div className="flex justify-between items-center py-4 border-b border-gray-700">
              <div>
                <p className="font-semibold">Tech Review: AI Tools 2026</p>
                <p className="text-sm text-gray-400">8 clips generated • Avg Score 88%</p>
              </div>
              <span className="text-sm text-gray-500">1 day ago</span>
            </div>
          </div>
        </div>
      </div>
    </SignedIn>
  );
}