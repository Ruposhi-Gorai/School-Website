'use client'
import React from "react";

export default function WhyChooseUs() {
  const points = [
    {
      title: "Progressive Learning",
      desc: "RMS High School nurtures a student-centered, inquiry-based learning environment. Through interactive methods, experiential activities, and tech-integrated classrooms, we foster curiosity, creativity, and confidence in every learner.",
    },
    {
      title: "Academic Excellence",
      desc: "RMS High School is built on a strong foundation of academic brilliance. With a future-focused curriculum and innovative teaching methods, we empower students to excel academically and grow globally.",
    },
    {
      title: "Holistic Growth",
      desc: "We believe in nurturing the mind, body, and spirit. RMS High School promotes self-awareness, creativity, responsible citizenship, and a balanced lifestyle, preparing students for life—not just exams.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Why Choose R.M.S HIGH SCHOOL, JSR?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
