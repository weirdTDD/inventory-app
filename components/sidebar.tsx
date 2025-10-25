"use client";

import { useState } from "react";
import { UserButton } from "@stackframe/stack";
import { BarChart3, Package, Plus, Settings, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Sidebar({ currentPath = "/dashboard" }: { currentPath: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
    { name: "Inventory", href: "/inventory", icon: Package },
    { name: "Add Products", href: "/add-products", icon: Plus },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  return (
    <>
      {/* Mobile top bar */}
      <div className="md:hidden flex items-center justify-between bg-purple-700 text-white p-4">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-6 h-6" />
          <span className="font-bold text-lg">Inventory Management</span>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 bg-purple-700 text-white w-72 min-h-screen p-6 z-20 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0`}
      >
        <div className="border-b border-gray-400 mb-12 py-6 text-center">
          <div className="flex items-center gap-3">
            <BarChart3 className="w-9 h-9" />
            <span className="text-2xl font-bold">Inventory Management</span>
          </div>
        </div>

        <nav>
          <div>
            {navigation.map((item, key) => {
              const isActive = currentPath === item.href;
              return (
                <Link
                  key={key}
                  href={item.href}
                  className={`flex items-center gap-3 p-3 mt-6 rounded-lg transition-colors ${
                    isActive ? "bg-purple-900 font-bold shadow-xl" : "hover:bg-purple-600"
                  }`}
                  onClick={() => setIsOpen(false)} // close menu on mobile
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-500 mx-6">
          <div className="flex items-center justify-between font-semibold">
            <UserButton showUserInfo />
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 z-10 md:hidden"
        ></div>
      )}
    </>
  );
}
