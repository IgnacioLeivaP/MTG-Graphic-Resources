import React from 'react';

export function Sidebar() {
  return (
    <div className="space-y-6">
      <div className="retro-card">
        <h3 className="text-[#00ff00] text-xl mb-4">SEARCH</h3>
        <input
          type="text"
          placeholder="Search..."
          className="retro-input w-full"
        />
      </div>

      <div className="retro-card">
        <h3 className="text-[#00ff00] text-xl mb-4">ABOUT</h3>
        <p className="text-[#00ff00]">
          Welcome to MTG Graphic Resources! Est. 1995
        </p>
        <div className="mt-4">
          <div className="text-center">
            <p className="text-[#ffff00]">Hit Counter:</p>
            <div className="hit-counter">000012345</div>
          </div>
        </div>
      </div>

      <div className="retro-card">
        <h3 className="text-[#00ff00] text-xl mb-4">LINKS</h3>
        <ul className="space-y-2">
          {['Card Frames', 'Symbols', 'Templates', 'Tutorials'].map((item) => (
            <li key={item}>
              <a href="#" className="text-[#00ff00] hover:text-[#ffff00]">
                [→] {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="retro-card">
        <h3 className="text-[#00ff00] text-xl mb-4">ARCHIVE</h3>
        <ul className="space-y-2">
          {[
            { year: '2024', count: 15 },
            { year: '2023', count: 42 },
            { year: '2022', count: 38 }
          ].map((item) => (
            <li key={item.year}>
              <a href="#" className="text-[#00ff00] hover:text-[#ffff00] flex justify-between">
                <span>[→] {item.year}</span>
                <span>({item.count})</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="text-center">
        <img 
          src="https://images.unsplash.com/photo-1614850715649-1d0106293bd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
          alt="Best viewed with Netscape"
          className="inline-block retro-border"
        />
      </div>
    </div>
  );
}