'use client';

import { AppLayout } from '../layout';

export function Reports() {
  return (
    <AppLayout>
      <h1 className="font-bold text-zinc-900 tracking-tight text-2xl mb-4">
        Reports
      </h1>
      <button
        className="bg-zinc-900 text-white hover:bg-zinc-700 rounded-lg py-2 px-4"
        onClick={() => {
          // generate report
          console.log('Report generated');
        }}
      >
        Generate Report
      </button>
    </AppLayout>
  );
}