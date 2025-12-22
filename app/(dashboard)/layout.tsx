"use client";

import { useEffect } from 'react';
import { useTabStore } from '@/lib/store/tabs';
import { usePageStore } from '@/lib/store/pageStore';
import { Sidebar } from "@/components/app/Sidebar";
import { Header } from "@/components/app/Header";
import { DashboardTabs } from "@/components/app/DashboardTabs";
import { LoadingSpinner } from '@/components/app/LoadingSpinner';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const activeTabId = useTabStore((state) => state.activeTabId);
  const hasHydrated = useTabStore((state) => state._hasHydrated);
  const { loadState, currentState, clearAllStates } = usePageStore();
  const { reset: resetTabs } = useTabStore();

  useEffect(() => {
    if (hasHydrated && activeTabId) {
      loadState(activeTabId);
    }
  }, [hasHydrated, activeTabId, loadState]);

  if (!hasHydrated) {
    return <LoadingSpinner />;
  }

  return (
    <div className="flex h-screen flex-col">
      <Header isLoggedIn={true} />
      <div className="flex flex-1 overflow-hidden">
        <div className="relative bg-sidebar">
          <Sidebar />
        </div>
        <div className="flex flex-1 flex-col overflow-hidden">
          <main className="flex-1 overflow-auto p-6">
            {activeTabId && !currentState ? <LoadingSpinner /> : children}
          </main>
          <DashboardTabs />
        </div>
      </div>
    </div>
  );
}
