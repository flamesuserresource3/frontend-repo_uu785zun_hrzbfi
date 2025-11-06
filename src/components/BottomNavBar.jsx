import React from 'react';
import { Home, FolderVideo, Factory, Settings } from 'lucide-react';

export default function BottomNavBar() {
  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-30">
      <div className="mx-auto flex items-center gap-6 rounded-full border border-white/10 bg-white/10 backdrop-blur-xl px-5 py-3 text-white shadow-xl">
        <a href="#home" className="flex items-center gap-2 hover:text-white/90">
          <Home className="h-5 w-5" />
          <span className="text-sm hidden sm:inline">Home</span>
        </a>
        <a href="#creations" className="flex items-center gap-2 hover:text-white/90">
          <FolderVideo className="h-5 w-5" />
          <span className="text-sm hidden sm:inline">Creations</span>
        </a>
        <a href="#brand" className="flex items-center gap-2 hover:text-white/90">
          <Factory className="h-5 w-5" />
          <span className="text-sm hidden sm:inline">Brand</span>
        </a>
        <a href="#settings" className="flex items-center gap-2 hover:text-white/90">
          <Settings className="h-5 w-5" />
          <span className="text-sm hidden sm:inline">More</span>
        </a>
      </div>
    </nav>
  );
}
