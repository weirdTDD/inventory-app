"use client";

import { useState, useEffect } from "react";
import { UserButton } from "@stackframe/stack";
import { BarChart3, Package, Plus, Settings, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Sidebar({ currentPath = "/dashboard" }: { currentPath: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive logic (check once + on resize)
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
    { name: "Inventory", href: "/inventory", icon: Package },
    { name: "Add Products", href: "/add-products", icon: Plus },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  return (
    <>
      {/* Mobile Header */}
      {isMobile && (
        <div className="flex items-center justify-between bg-purple-700 text-white p-4 md:hidden">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-6 h-6" />
            <span className="font-bold text-lg">Inventory</span>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none focus:ring-2 focus:ring-white rounded"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-purple-700 text-white p-6 z-40 transform transition-all duration-300 ease-in-out
        md:w-72 w-64
        ${isOpen || !isMobile ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="border-b border-purple-500 pb-6 mb-6">
          <div className="flex items-center gap-3">
            <BarChart3 className="w-8 h-8" />
            <span className="text-xl font-bold">Inventory System</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {navigation.map(({ name, href, icon: Icon }) => {
            const active = currentPath === href;
            return (
              <Link
                key={name}
                href={href}
                onClick={() => isMobile && setIsOpen(false)}
                className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
                  active
                    ? "bg-purple-900 text-white shadow-lg"
                    : "text-purple-100 hover:bg-purple-600 hover:text-white"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{name}</span>
              </Link>
            );
          })}
        </nav>

        {/* User Section */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t text-white border-purple-500">
          <UserButton showUserInfo />
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isMobile && isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-30 md:hidden backdrop-blur-sm transition-opacity duration-300"
        />
      )}
    </>
  );
}
