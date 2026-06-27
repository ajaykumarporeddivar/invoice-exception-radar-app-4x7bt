'use client';

import { AppLayout } from '../layout';

export function InputExceptions() {
  return (
    <AppLayout>
      <h1 className="font-bold text-zinc-900 tracking-tight text-2xl mb-4">
        Input Exceptions
      </h1>
      <form>
        <label className="block mb-4">
          <span className="text-zinc-600">Invoice Number:</span>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-zinc-200 p-2 focus:border-zinc-500 focus:ring-zinc-500"
          />
        </label>
        <label className="block mb-4">
          <span className="text-zinc-600">Date:</span>
          <input
            type="date"
            className="mt-1 block w-full rounded-md border-zinc-200 p-2 focus:border-zinc-500 focus:ring-zinc-500"
          />
        </label>
        <label className="block mb-4">
          <span className="text-zinc-600">Amount:</span>
          <input
            type="number"
            className="mt-1 block w-full rounded-md border-zinc-200 p-2 focus:border-zinc-500 focus:ring-zinc-500"
          />
        </label>
        <label className="block mb-4">
          <span className="text-zinc-600">Status:</span>
          <select className="mt-1 block w-full rounded-md border-zinc-200 p-2 focus:border-zinc-500 focus:ring-zinc-500">
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
          </select>
        </label>
        <label className="block mb-4">
          <span className="text-zinc-600">Priority:</span>
          <select className="mt-1 block w-full rounded-md border-zinc-200 p-2 focus:border-zinc-500 focus:ring-zinc-500">
            <option value="High">High</option>
            <option value="Medium">Medium</option>
          </select>
        </label>
        <button
          type="submit"
          className="bg-zinc-900 text-white hover:bg-zinc-700 rounded-lg py-2 px-4"
        >
          Submit
        </button>
      </form>
    </AppLayout>
  );
}