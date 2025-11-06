import React from 'react';
import { Sparkles, Mic } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 w-full backdrop-blur-lg bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <div className="leading-tight">
            <p className="text-white font-semibold">AI Marketing Suite</p>
            <p className="text-xs text-white/60">Create. Refine. Grow.</p>
          </div>
        </div>
        <button
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-pink-500/20 hover:opacity-95 transition"
          aria-label="Open AI Marketing Coach"
        >
          <Mic className="h-4 w-4" />
          AI Coach
        </button>
      </div>
    </header>
  );
}
