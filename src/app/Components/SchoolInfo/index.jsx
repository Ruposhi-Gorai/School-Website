'use client'
import React, { useRef, useState } from 'react';
import Tabs from './Tabs';
import ContentRenderer from './ContentRenderer';
import { TABS, CONTENT } from './data';
import * as XLSX from 'xlsx';

export default function SchoolInfo() {
  const [activeTab, setActiveTab] = useState('affiliation');
  const contentRef = useRef(null);
  const managementRef = useRef(null);
  const facultyRef = useRef(null);

  const handleExportExcel = (tableKey) => {
    const rows = tableKey === 'management' ? CONTENT.management.rows : CONTENT.faculty.rows;
    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, tableKey);
    XLSX.writeFile(workbook, `${tableKey}-${new Date().toISOString().slice(0,10)}.xlsx`);
  };

  const downloadSectionPDF = async () => {
    let element = null;
    if (activeTab === 'management') element = managementRef.current;
    else if (activeTab === 'faculty') element = facultyRef.current;
    else element = contentRef.current;

    if (!element) {
      console.error('No element found to export');
      return;
    }

    try {
      const mod = await import('html2pdf.js');
      const html2pdf = mod.default || mod;
      await html2pdf()
        .set({
          margin: 12,
          filename: `${activeTab}-section.pdf`,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true },
          jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' },
        })
        .from(element)
        .save();
    } catch (err) {
      console.error('PDF generation error', err);
    }
  };

  const downloadFullPDF = async () => {
    try {
      const wrapper = document.createElement('div');
      wrapper.style.padding = '20px';
      // clone nodes if present
      if (contentRef.current) wrapper.appendChild(contentRef.current.cloneNode(true));
      if (managementRef.current) wrapper.appendChild(managementRef.current.cloneNode(true));
      if (facultyRef.current) wrapper.appendChild(facultyRef.current.cloneNode(true));
      document.body.appendChild(wrapper);

      const mod = await import('html2pdf.js');
      const html2pdf = mod.default || mod;
      await html2pdf()
        .set({
          margin: 12,
          filename: `school-info-full.pdf`,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true },
          jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' },
        })
        .from(wrapper)
        .save();

      document.body.removeChild(wrapper);
    } catch (err) {
      console.error('PDF generation error', err);
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-10">About RMS High School</h2>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <Tabs tabs={TABS} active={activeTab} onChange={(k) => setActiveTab(k)} />

          {/* content column */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow">
              <div className="flex items-center justify-end gap-3 mb-4">
                <button onClick={downloadSectionPDF} className="px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm">
                  Download This Section
                </button>

                <button onClick={downloadFullPDF} className="px-3 py-1.5 rounded-md bg-indigo-600 text-white text-sm">
                  Download Full School Info
                </button>

                <button onClick={() => handleExportExcel('management')} className="px-3 py-1.5 rounded-md bg-green-600 text-white text-sm">
                  Export Management Excel
                </button>

                <button onClick={() => handleExportExcel('faculty')} className="px-3 py-1.5 rounded-md bg-green-600 text-white text-sm">
                  Export Faculty Excel
                </button>
              </div>

              <ContentRenderer
                keyName={activeTab}
                content={CONTENT}
                refs={{ contentRef, managementRef, facultyRef }}
                onExportExcel={handleExportExcel}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
