"use client";

import { useEffect, useState, use } from "react";
import { User, Printer } from "lucide-react";

interface Teacher {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string | null;
  subject: string;
  join_date: string;
  image_url: string | null;
  date_of_birth: string | null;
  gender: string | null;
  address: string | null;
  qualification: string | null;
  experience_years: number | null;
  teacherid: string | null;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function TeacherProfilePage({
  params,
}: {
  params: Promise<{ teacherId: string }>;
}) {
  const { teacherId } = use(params);
  const [teacher, setTeacher] = useState<Teacher | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTeacher() {
      try {
        const res = await fetch(`/api/teachers?id=${teacherId}`);
        const json = await res.json();
        if (json.success) {
          setTeacher(json.data);
        } else {
          setError(json.error || "Teacher not found");
        }
      } catch (err) {
        setError("Failed to load teacher data");
      } finally {
        setLoading(false);
      }
    }
    fetchTeacher();
  }, [teacherId]);

  if (loading) {
    return (
      <div className="h-screen bg-white flex items-center justify-center">
        <p className="text-gray-400 text-sm">Loading...</p>
      </div>
    );
  }

  if (error || !teacher) {
    return (
      <div className="h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <User className="w-10 h-10 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500 text-sm">
            {error || "Teacher not found"}
          </p>
        </div>
      </div>
    );
  }

  const fullName = `${teacher.first_name} ${teacher.last_name}`;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8 print:bg-white print:p-0">
      {/* Print Button */}
      <button
        onClick={() => window.print()}
        className="fixed top-4 right-4 z-50 flex items-center gap-1.5 px-3 py-1.5 text-xs text-gray-500 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors print:hidden"
      >
        <Printer className="w-3.5 h-3.5" />
        Print
      </button>

      <div className="w-full max-w-4xl bg-white rounded-xl">
        {/* Top: Photo + Name */}
        <div className="text-center px-6 pt-6 pb-5 relative">
          <img
            src="/images/logo.png"
            alt="School"
            className="absolute top-5 right-5 h-8 hidden sm:block"
          />
          <div className="w-20 h-20 rounded-full border border-gray-200 overflow-hidden bg-gray-50 mx-auto mb-3">
            {teacher.image_url ? (
              <img
                src={teacher.image_url}
                alt={fullName}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400 text-2xl font-light">
                {teacher.first_name.charAt(0)}
              </div>
            )}
          </div>
          <h1 className="text-lg font-semibold text-gray-900">
            {fullName}
          </h1>
          <p className="text-[11px] text-gray-500 mt-0.5">
            Teacher · {teacher.subject}
          </p>
        </div>

        <hr className="border-gray-100 mx-6" />

        {/* Grid of sections */}
        <div className="grid grid-cols-2 gap-px bg-gray-100 mx-6 my-5 rounded-lg overflow-hidden">
          {/* Personal */}
          <div className="bg-white p-4">
            <h2 className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest mb-2.5">
              Personal
            </h2>
            <div className="space-y-1.5">
              {teacher.date_of_birth && (
                <Row label="Date of Birth" value={formatDate(teacher.date_of_birth)} />
              )}
              {teacher.gender && <Row label="Gender" value={teacher.gender} />}
            </div>
          </div>

          {/* Professional */}
          <div className="bg-white p-4">
            <h2 className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest mb-2.5">
              Professional
            </h2>
            <div className="space-y-1.5">
              {teacher.teacherid && <Row label="Teacher ID" value={teacher.teacherid} />}
              <Row label="Subject" value={teacher.subject} />
              {teacher.qualification && <Row label="Qualification" value={teacher.qualification} />}
              {teacher.experience_years !== null && (
                <Row label="Experience" value={`${teacher.experience_years} years`} />
              )}
              <Row label="Joined Since" value={formatDate(teacher.join_date)} />
            </div>
          </div>

          {/* Contact */}
          <div className="bg-white p-4">
            <h2 className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest mb-2.5">
              Contact
            </h2>
            <div className="space-y-1.5">
              <Row label="Email" value={teacher.email} />
              {teacher.phone && <Row label="Phone" value={teacher.phone} />}
            </div>
          </div>

          {/* Address */}
          <div className="bg-white p-4">
            <h2 className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest mb-2.5">
              Address
            </h2>
            {teacher.address ? (
              <p className="text-[11px] text-gray-700 leading-relaxed">
                {teacher.address}
              </p>
            ) : (
              <p className="text-xs text-gray-400">—</p>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 pb-4 text-center">
          <p className="text-[10px] text-gray-400">
            Sree Nandanam Public School · Confidential
          </p>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-start gap-4">
      <span className="text-xs text-gray-500">{label}</span>
      <span className="text-xs text-gray-700 text-right">{value}</span>
    </div>
  );
}
