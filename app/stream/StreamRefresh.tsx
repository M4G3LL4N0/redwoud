"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function StreamRefresh({
  children,
  refreshInterval = 60000,
}: {
  children?: React.ReactNode;
  refreshInterval?: number;
}) {
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      router.refresh();
    }, refreshInterval);

    return () => clearInterval(interval);
  }, [router, refreshInterval]);

  return <>{children}</>;
}
