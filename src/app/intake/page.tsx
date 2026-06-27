'use client';

import { useState } from 'react';
import { cn } from 'clsx';
import { AppSidebar } from '@/components/ui/AppSidebar';
import { DashboardCard } from '@/components/ui/DashboardCard';

export function IntakePage() {
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [clientName, setClientName] = useState('');
  const [exceptionType, setExceptionType] = useState('');
  const [dollarImpact, setDollarImpact] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="flex h-screen">
      <AppSidebar />
      <main className="flex-1 p-6">
        <DashboardCard title="Intake Form">
          <form onSubmit={handleSubmit}>
            <label>
              Invoice Number:
              <input
                type="text"
                value={invoiceNumber}
                onChange={(event) => setInvoiceNumber(event.target.value)}
                className="block py-2 px-4 border border-zinc-200 rounded-md"
              />
            </label>
            <label>
              Client Name:
              <input
                type="text"
                value={clientName}
                onChange={(event) => setClientName(event.target.value)}
                className="block py-2 px-4 border border-zinc-200 rounded-md"
              />
            </label>
            <label>
              Exception Type:
              <select
                value={exceptionType}
                onChange={(event) => setExceptionType(event.target.value)}
                className="block py-2 px-4 border border-zinc-200 rounded-md"
              >
                <option value="">Select an exception type</option>
                <option value="Missing Approval">Missing Approval</option>
                <option value="Payment Risk">Payment Risk</option>
                <option value="Missing Invoice">Missing Invoice</option>
                <option value="Disputed Amount">Disputed Amount</option>
              </select>
            </label>
            <label>
              Dollar Impact:
              <input
                type="number"
                value={dollarImpact}
                onChange={(event) => setDollarImpact(event.target.valueAsNumber)}
                className="block py-2 px-4 border border-zinc-200 rounded-md"
              />
            </label>
            <button
              type="submit"
              className="bg-zinc-900 text-white hover:bg-zinc-700 py-2 px-4 rounded-lg"
            >
              Submit
            </button>
          </form>
        </DashboardCard>
      </main>
    </div>
  );
}