'use client'
import React from 'react';
import MissionVision from './MissionVision';
import ManagementTable from './ManagementTable';
import FacultyTable from './FacultyTable';

export default function ContentRenderer({ keyName, content, refs, onExportExcel }) {
  if (!keyName) return <div className="text-gray-500">Select a section to view</div>;

  if (keyName === 'management') {
    return (
      <div ref={refs.managementRef}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-semibold">{content.management.title}</h3>
          <div className="space-x-2">
            <button
              onClick={() => onExportExcel('management')}
              className="px-3 py-1.5 rounded-md bg-green-600 text-white text-sm"
            >
              Export Excel
            </button>
          </div>
        </div>
        <ManagementTable rows={content.management.rows} />
      </div>
    );
  }

  if (keyName === 'faculty') {
    return (
      <div ref={refs.facultyRef}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-semibold">{content.faculty.title}</h3>
          <div className="space-x-2">
            <button
              onClick={() => onExportExcel('faculty')}
              className="px-3 py-1.5 rounded-md bg-green-600 text-white text-sm"
            >
              Export Excel
            </button>
          </div>
        </div>
        <FacultyTable rows={content.faculty.rows} />
      </div>
    );
  }

  // default for affiliation / culture / vision
  return (
    <div ref={refs.contentRef}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-semibold">{content[keyName].title}</h3>
      </div>
      <MissionVision html={content[keyName].html} />
    </div>
  );
}
