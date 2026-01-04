// components/DashboardSidebar.tsx
'use client';

import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Upload Video", href: "/dashboard/upload" },
  { name: "Analytics", href: "/dashboard/analytics" },
  { name: "Credits", href: "/dashboard/credits" },
  { name: "Settings", href: "/dashboard/settings" },
];

export default function DashboardSidebar() {
  const pathname = usePathname();
  const { user } = useUser();

  return (
    <aside className="w-64 bg-gray-900 border-r border-gray-800 h-screen fixed left-0 top-0 flex flex-col">
      {/* Logo Header */}
      <div className="p-6 border-b border-gray-800">
        <img 
          src="/logo.jpg" 
          alt="DenimForge Logo" 
          className="h-10 glow" 
        />
      </div>

      {/* Navigation */}
      <div className="flex-1 p-4">
        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block py-3 px-4 rounded-lg transition-all ${
                pathname === item.href
                  ? "bg-primary/20 text-primary glow font-semibold"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* User Profile & Sign Out */}
      <div className="p-6 border-t border-gray-800">
        <div className="flex items-center space-x-4 mb-4">
          <UserButton 
            afterSignOutUrl="/" 
            appearance={{
              elements: {
                avatarBox: "h-10 w-10 glow",
                userPreviewMainIdentifier: "text-white font-semibold",
                userPreviewSecondaryIdentifier: "text-gray-400 text-sm",
              },
            }}
          />
          <div>
            <p className="font-semibold text-white">
              {user?.fullName || "User"}
            </p>
            <p className="text-sm text-gray-400">
              {user?.primaryEmailAddress?.emailAddress || "Sign in"}
            </p>
          </div>
        </div>
        <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition-all">
          Sign Out
        </button>
      </div>
    </aside>
  );
}