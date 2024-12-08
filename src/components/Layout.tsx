import React, { useState } from 'react';
import { Header } from './Header';
import { LateralNav } from './LateralNav';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      <div className="relative flex flex-col">
        <Header onMenuClick={() => setIsNavOpen(!isNavOpen)} />
        
        <div className="flex">
          <LateralNav isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
          <div className="flex-1 p-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}