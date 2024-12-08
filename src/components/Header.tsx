import React from 'react';
import { Menu } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="bg-black border-b-2 border-[#00ff00] py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <button 
            className="lg:hidden retro-button"
            onClick={onMenuClick}
          >
            <Menu size={24} />
          </button>
          
          <div className="marquee w-full">
            <span className="text-[#00ff00] text-xl">
              ★★★ Welcome to MTG Graphic Resources - Your #1 Source for Magic: The Gathering Graphics Since 1995! ★★★
            </span>
          </div>
        </div>
        
        <div className="mt-4 text-center">
          <h1 className="text-4xl text-[#00ff00] mb-2">MTG Graphic Resources</h1>
          <div className="under-construction h-6 w-full"></div>
          <p className="text-[#ffff00] blink mt-2">⚠ SITE UNDER CONSTRUCTION ⚠</p>
        </div>
      </div>
    </header>
  );
}