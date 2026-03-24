"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface StreamRefreshProps {
  refreshInterval?: number;
  children?: React.ReactNode;
}

export default function StreamRefresh({
  refreshInterval = 60000,
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
