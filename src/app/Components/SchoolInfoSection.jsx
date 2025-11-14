'use client'
import React, { useRef, useState } from "react";
import * as XLSX from "xlsx";

/**
 * SchoolInfoWithDownloads.jsx
 * - Responsive sidebar (desktop) / accordion (mobile)
 * - Download PDF for content tabs
 * - Export Management & Faculty as Excel
 *
 * Edit content in the `content` object below.
 */

export default function SchoolInfoWithDownloads() {
  const tabs = [
    { key: "affiliation", label: "Affiliation / Core Values" },
    { key: "culture", label: "School Culture & Purpose" }, // Option A: contains both culture + purpose
    { key: "vision", label: "Mission & Vision" },
    { key: "management", label: "Management" },
    { key: "faculty", label: "Faculty" },
  ];

  // ---------------------------
  // Content (easy to edit)
  // ---------------------------
  const content = {
    affiliation: {
      title: "Affiliation",
      html: (
        <>
          <p className="mb-3">
            Affiliated to CBSE, New Delhi.
            <br />
            <strong>Affiliation No:</strong> 3430345
          </p>

          <h4 className="font-semibold mb-2">Core Values</h4>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Team Work</li>
            <li>Work Life Balance</li>
            <li>Positivity</li>
            <li>Community Services</li>
            <li>Inclusivity</li>
          </ol>
        </>
      ),
    },

    // Option A: both culture and purpose inside this tab
    culture: {
      title: "School Culture & Purpose",
      html: (
        <>
          <section className="mb-6">
            <h4 className="text-xl font-semibold mb-2">School Culture</h4>

            <div className="mb-3">
              <p className="text-2xl font-medium mb-2">विद्या ददाति विनयम्</p>

              <p className="mb-3">
                Which means education should help in inculcating humanity, which will respect
                their fellow beings and relentlessly stand for justice and truth.
              </p>

              <p className="mb-2 font-semibold">
                We want to make the child overall smart and SMART stands for:
              </p>
              <ul className="pl-5 list-disc space-y-1 text-sm">
                <li><strong>S</strong> - Sincere</li>
                <li><strong>M</strong> - Morally Strong</li>
                <li><strong>A</strong> - Ambitious</li>
                <li><strong>R</strong> - Responsible</li>
                <li><strong>T</strong> - Truthfulness</li>
              </ul>
            </div>
          </section>

          <section>
            <h4 className="text-xl font-semibold mb-2">School Purpose</h4>
            <p>
              Every child of the school learns and we make sure everyone learns.
            </p>
          </section>
        </>
      ),
    },

    vision: {
      title: "Mission & Vision",
      html: (
        <>
          <h4 className="text-lg font-semibold mb-2">Mission</h4>
          <p className="mb-4">
            Holistic development of the students to become confident individuals and socially responsible citizens.
          </p>

          <h4 className="text-lg font-semibold mb-2">Vision</h4>
          <p className="mb-2">
            First choice CBSE school in our vicinity in terms of:
          </p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Academic Excellence</li>
            <li>Extra Curricular Activities</li>
            <li>Values Inculcation through trained engaged and motivated workforce with well-equipped infrastructure</li>
          </ol>
        </>
      ),
    },

    // Management and Faculty will be rendered as tables; arrays below used for Excel export
    management: {
      title: "Management",
      rows: [
        { sn: 1, name: "Mr. Sanjay Kedia", designation: "President" },
        { sn: 2, name: "Mr. Maneesh Jain", designation: "Vice President" },
        { sn: 3, name: "Smt Kumud Agrawal", designation: "Vice President" },
        { sn: 4, name: "Sri Sushil Agrawal", designation: "Secretary" },
        { sn: 5, name: "Mr. Ramesh Agarwalla", designation: "Trustee" },
        { sn: 6, name: "Mr. R.K.Jhunjhunwala", designation: "Trustee" },
        { sn: 7, name: "Mr. M.P Agiwal", designation: "Trustee" },
        { sn: 8, name: "Mr. S.S Gadia", designation: "Trustee" },
        { sn: 9, name: "Mr. Deepak Dokania", designation: "Trustee" },
        { sn: 10, name: "Mr. Sanjeev Bandhan", designation: "Treasurer" },
        { sn: 11, name: "Sri Chandan Kauntia", designation: "Assistant Secretary" },
        { sn: 12, name: "Mr. B.Chandrashekar", designation: "Educationist" },
        { sn: 13, name: "Mrs. Meena Bagli", designation: "Educationist" },
        { sn: 14, name: "Dr. Parineeta Shukla", designation: "Member Of Secretary" },
        { sn: 15, name: "Smt Renu Badhan", designation: "Ladies Wing" },
        { sn: 16, name: "Smt Tripti Choudhary", designation: "Ladies Wing" },
        { sn: 17, name: "Smt Anchal Kharia", designation: "Ladies Wing" },
        { sn: 18, name: "Mrs. Kamaljeet Singh", designation: "Parent's Representative" },
        { sn: 19, name: "Mr. Anil Kumar Singh", designation: "Parent's Representative" },
        { sn: 20, name: "Mr. Gurpreet Singh", designation: "Teacher's Representative" },
        { sn: 21, name: "Mrs. Achala Srivastava", designation: "Teacher's Representative" },
      ],
    },

    faculty: {
      title: "Faculty",
      rows: [
        { sn: 1, name: "Mrs. (Dr.) Parineeta Shukla", qualification: "M.A, Ph.D, B.Ed" },
        { sn: 2, name: "Mrs. Achala Srivastava", qualification: "M.A, B.Ed, Library Science" },
        { sn: 3, name: "Miss. Loveleen Kaur", qualification: "B.A, B.Ed (Pursuing M.A)" },
        { sn: 4, name: "Mrs. Rekha Shivram Krishnan", qualification: "B.Sc, M.A, B.Ed" },
        { sn: 5, name: "Mrs. Jhuma Gupta", qualification: "B.Sc, B.Ed (Pursuing M.Sc)" },
        { sn: 6, name: "Mrs. Krishana Goswami", qualification: "B.Com, B.Ed" },
        { sn: 7, name: "Mrs. Ekta Jha", qualification: "Master In Computer Application" },
        { sn: 8, name: "Mrs. Cecilia David", qualification: "I.Com, NTT" },
        { sn: 9, name: "Mrs. Hariwinder Kaur", qualification: "B.Com, B.Ed" },
        { sn: 10, name: "Mr. Thomas Samuel", qualification: "B.Com, B.Ed" },
        { sn: 11, name: "Mrs. Sumita Sen", qualification: "B.Com, B.Ed" },
        { sn: 12, name: "Mr. Dilip Kumar", qualification: "BCA, MCA" },
        { sn: 13, name: "Mrs. Dolly Singh", qualification: "M.A, B.Ed" },
        { sn: 14, name: "Mr. Gurpreet Singh", qualification: "B.Com, M.Com, B.Ed, CTET" },
        { sn: 15, name: "Mrs. Nehal Singh", qualification: "B.Com, B.Ed" },
        { sn: 16, name: "Mrs. Arpita Chakraborty", qualification: "B.A, B.Ed" },
        { sn: 17, name: "Mrs. Monika Singh", qualification: "B.Tec, B.Ed" },
        { sn: 18, name: "Miss. Himani Sardar", qualification: "M.Com, B.Ed" },
        { sn: 19, name: "Mrs. Rinku Dubey", qualification: "M.Sc, B.Ed" },
        { sn: 20, name: "Mr. Rahul Kumar Gupta", qualification: "M.P.Ed, B.P.Ed" },
        { sn: 21, name: "Mrs. Paramita Sen Choudhary", qualification: "BCA, MBA (HR)" },
        { sn: 22, name: "Mrs. Moumita Sarkar", qualification: "B.A, B.Ed" },
        { sn: 23, name: "Mrs. Sharda Upadhaya", qualification: "B.Sc, B.Ed" },
        { sn: 24, name: "Mrs. Monika Chaturvedi", qualification: "M.Com, M.B.A" },
        { sn: 25, name: "Mrs. Supriya Saha", qualification: "B.Sc, B.Ed, B.F.A" },
        { sn: 26, name: "Mrs. Ankita Bhattacharya", qualification: "B.A, B.Ed" },
        { sn: 27, name: "Mrs. Reena Kumari", qualification: "B.A, B.Ed" },
        { sn: 28, name: "Mr. Krishna Kumar", qualification: "B.Sc, B.Ed (Pursuing M.Sc)" },
        { sn: 29, name: "Mrs. R. Hema", qualification: "M.Sc, M.Phil, NTT, PGDBI, B.Ed" },
        { sn: 30, name: "Mrs. Shipra Srivastava", qualification: "B.A, B.Ed" },
        { sn: 31, name: "Mrs. Archana Mishra", qualification: "M.A, B.Ed" },
        { sn: 32, name: "Mrs. Monalisa Roy Singh", qualification: "M.LIB.SCS" },
        { sn: 33, name: "Mrs. Arpita Chakraborty", qualification: "B.Com, NTT, D.El.Ed" },
        { sn: 34, name: "Mr. Sanjay Mahato", qualification: "Inter, NIS" },
        { sn: 35, name: "Mrs. Jyoti Singh", qualification: "B.A, D.El.Ed, B.Ed" },
        { sn: 36, name: "Mrs. Nisha Mediratta", qualification: "B.Com, NTT" },
        { sn: 37, name: "Mrs. Sweta Choudhary", qualification: "B.A, B.Ed" },
        { sn: 38, name: "Miss. K. Swati", qualification: "B.Sc, B.Ed" },
        { sn: 39, name: "Mrs. Anindita Bagchi", qualification: "M.Sc, B.Ed" },
        { sn: 40, name: "Miss. Roma Samantra", qualification: "M.Sc, B.Ed" },
        { sn: 41, name: "Mrs. Archana Mishra", qualification: "B.A, B.Ed" },
        { sn: 42, name: "Mrs. Ruby Mukherjee", qualification: "M.A, D.Ed" },
        { sn: 43, name: "Mrs. Swati Choubey", qualification: "M.A, B.Ed" },
        { sn: 44, name: "Mrs. Smeeta Dalal", qualification: "B.A, B.Ed" },
        { sn: 45, name: "Mrs. Mintuli Karmakar", qualification: "B.A, B.Ed" },
        { sn: 46, name: "Mrs. Sudipta Chatterjee", qualification: "M.A, B.Ed" },
        { sn: 47, name: "Mrs. Julie Kumari", qualification: "B.A, B.Ed" },
        { sn: 48, name: "Mr. Haripodo Mukhi", qualification: "B.Com, Bachelor Degree in Painting" },
      ],
    },
  };

  // ---------------------------
  // State + refs
  // ---------------------------
  const [activeTab, setActiveTab] = useState("affiliation");
  const contentRef = useRef(null);
  const managementRef = useRef(null);
  const facultyRef = useRef(null);

  // ---------------------------
  // Exports
  // ---------------------------

  // Download currently visible content as PDF (contentRef wrapper)
const handleDownloadPDF = async (tabKey) => {
  let html2pdf;

  try {
    html2pdf = (await import("html2pdf.js/dist/html2pdf.min.js")).default;

    let element;

    if (tabKey === "management") element = managementRef.current;
    else if (tabKey === "faculty") element = facultyRef.current;
    else element = contentRef.current;

    if (!element) {
      console.error("PDF ERROR: Element not found for:", tabKey);
      return;
    }

    const opt = {
      margin: 10,
      filename: `${tabKey}-${new Date().toISOString().slice(0, 10)}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "pt", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(opt).from(element).save();
  } catch (err) {
    console.error("PDF generation failed:", err);
  }
};


  // Export table (management or faculty) to Excel
  const handleExportExcel = (tableKey) => {
    let rows = [];
    if (tableKey === "management") rows = content.management.rows;
    else if (tableKey === "faculty") rows = content.faculty.rows;
    if (!rows || rows.length === 0) return;

    // convert to worksheet
    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, tableKey);
    XLSX.writeFile(workbook, `${tableKey}-${new Date().toISOString().slice(0, 10)}.xlsx`);
  };

  // ---------------------------
  // Render helpers
  // ---------------------------
  const renderContent = (key) => {
    if (key === "management") {
      return (
        <div ref={managementRef}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-semibold">{content.management.title}</h3>
            <div className="space-x-2">
              <button
                onClick={() => handleExportExcel("management")}
                className="px-3 py-1.5 rounded-md bg-green-600 text-white text-sm"
              >
                Export Excel
              </button>
              <button
                onClick={() => handleDownloadPDF("management")}
                className="px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm"
              >
                Download PDF
              </button>
            </div>
          </div>

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
                {content.management.rows.map((r) => (
                  <tr key={r.sn}>
                    <td className="px-4 py-2 text-sm">{r.sn}</td>
                    <td className="px-4 py-2 text-sm">{r.name}</td>
                    <td className="px-4 py-2 text-sm">{r.designation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }

    if (key === "faculty") {
      return (
        <div ref={facultyRef}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-semibold">{content.faculty.title}</h3>
            <div className="space-x-2">
              <button
                onClick={() => handleExportExcel("faculty")}
                className="px-3 py-1.5 rounded-md bg-green-600 text-white text-sm"
              >
                Export Excel
              </button>
              <button
                onClick={() => handleDownloadPDF("faculty")}
                className="px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm"
              >
                Download PDF
              </button>
            </div>
          </div>

          <div className="overflow-visible rounded-md border">
            <table className="min-w-full divide-y">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium">Sl. No.</th>
                  <th className="px-4 py-2 text-left text-sm font-medium">Name</th>
                  <th className="px-4 py-2 text-left text-sm font-medium">Qualification</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y">
                {content.faculty.rows.map((r) => (
                  <tr key={r.sn}>
                    <td className="px-4 py-2 text-sm">{r.sn}</td>
                    <td className="px-4 py-2 text-sm">{r.name}</td>
                    <td className="px-4 py-2 text-sm">{r.qualification}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }

    // default: other content (affiliation / culture / vision)
    return (
      <div ref={contentRef}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-semibold">{content[key].title}</h3>
          <div>
            <button
              onClick={() => handleDownloadPDF(key)}
              className="px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm"
            >
              Download PDF
            </button>
          </div>
        </div>

        <div className="prose max-w-none text-gray-700">{content[key].html}</div>
      </div>
    );
  };

  // ---------------------------
  // UI
  // ---------------------------
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-10">About RMS High School</h2>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar on large screens */}
          <div className="hidden lg:block space-y-3">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setActiveTab(t.key)}
                className={`w-full text-left px-5 py-3 rounded-lg border transition flex items-center justify-between
                  ${activeTab === t.key ? "bg-blue-600 text-white shadow" : "bg-white hover:bg-gray-50"}`}
              >
                <span className="text-sm font-medium">{t.label}</span>
                <span className="text-xs opacity-70"></span>
              </button>
            ))}
          </div>

          {/* Mobile accordion (buttons + content inline) */}
          <div className="lg:hidden space-y-4">
            {tabs.map((t) => (
              <div key={`mobile-${t.key}`} className="bg-white rounded-xl border">
                <button
                  onClick={() => setActiveTab(t.key === activeTab ? "" : t.key)}
                  className="w-full text-left px-4 py-3 flex items-center justify-between"
                >
                  <span className="font-medium">{t.label}</span>
                  <span className="text-sm">{activeTab === t.key ? "−" : "+"}</span>
                </button>

                {activeTab === t.key && (
                  <div className="px-4 pb-4">
                    {renderContent(t.key)}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Content area (desktop) */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow">
              {renderContent(activeTab)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

