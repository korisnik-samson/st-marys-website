'use client'

import React, { useState } from 'react'
import { usePathname } from "next/navigation";
import { navBarItems } from "@/constants";
import Link from "next/link";
import { Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavigationBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const pathname = usePathname();

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/"
        if (href.startsWith("/#")) return pathname === "/"

        return pathname === href
    }

    return (
        <nav className="fixed top-5 left-100 right-100 z-100 bg-white/80 backdrop-blur-md shadow-lg border rounded-2xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo goes here */}
                    <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
                        <Heart className='h-8 w-8 text-purple-600 mr-2' />
                        <span className="text-xl font-bold text-gray-900">St. Mary's Anglican Church</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navBarItems.map((item) => (
                            <Link key={item.href} href={item.href}
                                className={`font-medium transition-colors ${
                                    isActive(item.href) ? "text-purple-600" : "text-gray-700 hover:text-purple-600"
                                }`}>
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden border-t bg-white/90 backdrop-blur-md rounded-b-2xl">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navBarItems.map((item) => (
                                <Link key={item.href} href={item.href}
                                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                                        isActive(item.href)
                                            ? "text-purple-600 bg-purple-50"
                                            : "text-gray-700 hover:text-purple-600 hover:bg-gray-50"
                                    }`}
                                    onClick={() => setIsMenuOpen(false)}>
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default NavigationBar;