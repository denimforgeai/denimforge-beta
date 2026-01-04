// app/dashboard/credits/page.tsx
import { SignedIn } from "@clerk/nextjs";

export default function CreditsPage() {
  return (
    <SignedIn>
      <div>
        <h1 className="text-4xl font-bold mb-8">Manage Credits</h1>
        <div className="bg-gray-800/50 rounded-2xl p-8 glow mb-10">
          <h2 className="text-2xl font-semibold mb-4">Current Balance</h2>
          <p className="text-6xl font-bold text-primary mb-2">300 Credits</p>
          <p className="text-gray-400 mb-6">Pro Plan • Renews Feb 1, 2026</p>
        </div>

        <h2 className="text-3xl font-bold mb-6">Add Credits or Upgrade</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-800/50 p-8 rounded-2xl glow">
            <h3 className="text-2xl font-bold mb-4">Add 100 Credits</h3>
            <p className="text-4xl font-bold text-primary mb-6">$10</p>
            <button className="w-full bg-primary hover:bg-indigo-700 py-4 rounded-xl glow">
              Add Credits
            </button>
          </div>
          <div className="bg-gray-800/50 p-8 rounded-2xl glow">
            <h3 className="text-2xl font-bold mb-4">Upgrade to Pro</h3>
            <p className="text-4xl font-bold text-primary mb-6">$30/mo</p>
            <ul className="text-gray-400 mb-6 space-y-2">
              <li>• 300+ credits/month</li>
              <li>• Analytics & Viral Score</li>
              <li>• Priority processing</li>
            </ul>
            <button className="w-full bg-primary hover:bg-indigo-700 py-4 rounded-xl glow">
              Upgrade
            </button>
          </div>
          <div className="bg-gray-800/50 p-8 rounded-2xl glow">
            <h3 className="text-2xl font-bold mb-4">Agency Plan</h3>
            <p className="text-4xl font-bold text-primary mb-6">$70/mo</p>
            <ul className="text-gray-400 mb-6 space-y-2">
              <li>• Unlimited credits</li>
              <li>• White-label</li>
              <li>• Team accounts</li>
            </ul>
            <button className="w-full bg-primary hover:bg-indigo-700 py-4 rounded-xl glow">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </SignedIn>
  );
}