'use client'
import React from 'react';

export default function ManagementTable({ rows }) {
  return (
    <div className="overflow-visible rounded-md border">
      <table className="min-w-full divide-y">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-medium">Sl. No.</th>
            <th className="px-4 py-2 text-left text-sm font-medium">Name</th>
            <th className="px-4 py-2 text-left text-sm font-medium">Designation</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y">
          {rows.map((r) => (
            <tr key={r.sn}>
              <td className="px-4 py-2 text-sm">{r.sn}</td>
              <td className="px-4 py-2 text-sm">{r.name}</td>
              <td className="px-4 py-2 text-sm">{r.designation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
