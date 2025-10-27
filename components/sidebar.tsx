"use client";

import { useState, useEffect } from "react";
import { UserButton } from "@stackframe/stack";
import { BarChart3, Package, Plus, Settings, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Sidebar({ currentPath = "/dashboard" }: { currentPath: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive behavior
  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsOpen(false); // Close sidebar when switching to desktop
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: BarChart3, id: "dashboard" },
    { name: "Inventory", href: "/inventory", icon: Package, id: "inventory" },
    { name: "Add Products", href: "/add-products", icon: Plus, id: "add-products" },
    { name: "Settings", href: "/settings", icon: Settings, id: "settings" },
  ];

  return (
    <>
      {/* Mobile top bar - hide when sidebar is open */}
      {(!isOpen || !isMobile) && (
        <div className="md:hidden flex items-center justify-between bg-purple-700 text-white p-4 z-30">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-6 h-6" />
            <span className="font-bold text-lg">Inventory Management</span>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none focus:ring-2 focus:ring-white rounded"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 bg-purple-700 text-white h-full p-6 z-40 transform transition-transform duration-300 ease-in-out
          md:w-72 w-64
          ${isOpen || !isMobile ? "translate-x-0" : "-translate-x-full"}`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Header */}
        <div className="border-b border-purple-500 pb-6 mb-6">
          <div className="flex items-center gap-3">
            <BarChart3 className="w-8 h-8" />
            <span className="text-xl font-bold">Inventory Management</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1">
          <ul className="space-y-2">
            {navigation.map((item) => {
              const isActive = currentPath === item.href;
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                      isActive 
                        ? "bg-purple-900 text-white font-semibold shadow-lg" 
                        : "text-purple-100 hover:bg-purple-600 hover:text-white"
                    }`}
                    onClick={() => isMobile && setIsOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* User section */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-purple-500">
          <div className="flex items-center justify-between">
            <UserButton showUserInfo />
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && isMobile && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/80 bg-opacity-40 z-30 md:hidden"
          aria-hidden="true"
        />
      )}
    </>
  );
}