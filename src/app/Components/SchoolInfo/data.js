// data.js
import React from "react";

export const TABS = [
  { key: "affiliation", label: "Affiliation / Core Values" },
  { key: "culture", label: "School Culture & Purpose" },
  { key: "vision", label: "Mission & Vision" },
  { key: "management", label: "Management" },
  { key: "faculty", label: "Faculty" },
];

export const CONTENT = {
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

  culture: {
    title: "School Culture & Purpose",
    html: (
      <>
        <section className="mb-6">
          <h4 className="text-xl font-semibold mb-2">School Culture</h4>

          <div className="mb-3">
            <p className="text-2xl font-medium mb-2">विद्या ददाति विनयम्</p>

            <p className="mb-3">
              Which means education should help in inculcating humanity, which will
              respect their fellow beings and relentlessly stand for justice and truth.
            </p>

            <p className="mb-2 font-semibold">
              We want to make the child overall smart and SMART stands for:
            </p>
            <ul className="pl-5 list-disc space-y-1 text-sm">
              <li>
                <strong>S</strong> - Sincere
              </li>
              <li>
                <strong>M</strong> - Morally Strong
              </li>
              <li>
                <strong>A</strong> - Ambitious
              </li>
              <li>
                <strong>R</strong> - Responsible
              </li>
              <li>
                <strong>T</strong> - Truthfulness
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h4 className="text-xl font-semibold mb-2">School Purpose</h4>
          <p>Every child of the school learns and we make sure everyone learns.</p>
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
          Holistic development of the students to become confident individuals and
          socially responsible citizens.
        </p>

        <h4 className="text-lg font-semibold mb-2">Vision</h4>
        <p className="mb-2">First choice CBSE school in our vicinity in terms of:</p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Academic Excellence</li>
          <li>Extra Curricular Activities</li>
          <li>
            Values Inculcation through trained engaged and motivated workforce with
            well-equipped infrastructure
          </li>
        </ol>
      </>
    ),
  },

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
