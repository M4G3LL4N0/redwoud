import { useState } from 'react';

export function StreamRefresh() {
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    setRefreshing(true);
    // Trigger a manual fetch of the stream endpoint
    const fetch = async () => {
      const res = await fetch('/api/stream');
      if (res.ok) {
        const data = await res.json();
        // Simple optimistic update – could be integrated with state management
        console.log('Stream refreshed with', data);
      }
    };
    fetch();
    setTimeout(() => setRefreshing(false), 1200);
  };

  return (
    <button
      onClick={handleRefresh}
      className={`
        px-3 py-1.5 text-xs font-medium rounded-lg transition-all
        ${refreshing
          ? 'bg-amber-500/20 text-amber-300 cursor-wait hover:bg-amber-500/30'
          : 'bg-slate-800/50 text-amber-400 hover:bg-amber-500/10'}
      `}
    >
      {refreshing ? 'REFRESHING' : 'REFRESH'}
    </button>
  );
}
