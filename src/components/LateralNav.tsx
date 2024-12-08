import React from 'react';
import { X } from 'lucide-react';

interface LateralNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { label: 'Home', href: '#' },
  { label: 'Guides', href: '#guides' },
  { label: 'Card Frames', href: '#frames' },
  { label: 'Templates', href: '#templates' },
  { label: 'Tutorials', href: '#tutorials' },
  { label: 'Tools', href: '#tools' },
  { label: 'Support', href: '#support' },
];

export function LateralNav({ isOpen, onClose }: LateralNavProps) {
  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      <aside className={`
        fixed lg:static inset-y-0 left-0 w-64 bg-black
        transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        retro-border
      `}>
        <div className="p-4 flex justify-between items-center border-b-2 border-[#00ff00]">
          <h2 className="text-[#00ff00] text-xl">Navigation</h2>
          <button 
            onClick={onClose}
            className="lg:hidden retro-button"
          >
            <X size={20} />
          </button>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block text-[#00ff00] hover:text-[#ffff00] py-2"
                >
                  [→] {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t-2 border-[#00ff00]">
          <div className="text-center">
            <p className="text-[#00ff00] text-sm blink">©1995-2024</p>
          </div>
        </div>
      </aside>
    </>
  );
}