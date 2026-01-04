// app/dashboard/settings/page.tsx
import { SignedIn } from "@clerk/nextjs";

export default function SettingsPage() {
  return (
    <SignedIn>
      <div>
        <h1 className="text-4xl font-bold mb-8">Settings</h1>
        <div className="bg-gray-800/50 rounded-2xl p-8 glow">
          <h2 className="text-2xl font-semibold mb-6">Brand Voice & Language</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-400 mb-2">Default Voice</label>
              <select className="w-full bg-gray-900 border border-gray-700 rounded-lg p-4">
                <option>English (US) - Natural</option>
                <option>English (UK)</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-400 mb-2">Primary Language</label>
              <select className="w-full bg-gray-900 border border-gray-700 rounded-lg p-4">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
          </div>
          <button className="mt-8 bg-primary hover:bg-indigo-700 py-4 px-8 rounded-xl glow">
            Save Settings
          </button>
        </div>
      </div>
    </SignedIn>
  );
}