"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export interface StreamRefreshProps {
  refreshInterval?: number;
  children?: React.ReactNode;
}

export default function StreamRefresh({
  refreshInterval = process.env.NEXT_PUBLIC_REFRESH_INTERVAL 
    ? parseInt(process.env.NEXT_PUBLIC_REFRESH_INTERVAL) 
    : 300000, // Matches feed's cache TTL of 5 minutes
  children,
}: StreamRefreshProps) {
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      router.refresh();
    }, refreshInterval);

    return () => clearInterval(interval);
  }, [router, refreshInterval]);

  return <>{children}</>;
}
