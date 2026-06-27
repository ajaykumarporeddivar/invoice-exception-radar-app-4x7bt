'use client';

import { useState } from 'react';
import { cn } from 'clsx';
import { AppSidebar } from '@/components/ui/AppSidebar';
import { DashboardCard } from '@/components/ui/DashboardCard';

export function ReportsPage() {
  const [reportType, setReportType] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="flex h-screen">
      <AppSidebar />
      <main className="flex-1 p-6">
        <DashboardCard title="Reports">
          <form onSubmit={handleSubmit}>
            <label>
              Report Type:
              <select
                value={reportType}
                onChange={(event) => setReportType(event.target.value)}
                className="block py-2 px-4 border border-zinc-200 rounded-md"
              >
                <option value="">Select a report type</option>
                <option value="Invoice Exceptions">Invoice Exceptions</option>
                <option value="Client Summary">Client Summary</option>
              </select>
            </label>
            <button
              type="submit"
              className="bg-zinc-900 text-white hover:bg-zinc-700 py-2 px-4 rounded-lg"
            >
              Generate Report
            </button>
          </form>
        </DashboardCard>
      </main>
    </div>
  );
}