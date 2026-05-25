"use client";

import { useEffect, useState, use } from "react";
import { User, Printer } from "lucide-react";

interface Student {
  id: string;
  admission_no: string;
  full_name: string;
  date_of_birth: string | null;
  gender: string | null;
  blood_group: string | null;
  parent_name: string | null;
  phone: string | null;
  email: string | null;
  address: string | null;
  emergency_contact: string | null;
  image_url: string | null;
  is_active: boolean;
  created_at: string;
  classes: { class_name: string; section: string | null } | null;
  academic_years: { name: string } | null;
  studentid: string | null;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function StudentProfilePage({
  params,
}: {
  params: Promise<{ studentId: string }>;
}) {
  const { studentId } = use(params);
  const [student, setStudent] = useState<Student | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchStudent() {
      try {
        const res = await fetch(`/api/students?id=${studentId}`);
        const json = await res.json();
        if (json.success) {
          setStudent(json.data);
        } else {
          setError(json.error || "Student not found");
        }
      } catch (err) {
        setError("Failed to load student data");
      } finally {
        setLoading(false);
      }
    }
    fetchStudent();
  }, [studentId]);

  if (loading) {
    return (
      <div className="h-screen bg-white flex items-center justify-center">
        <p className="text-gray-400 text-sm">Loading...</p>
      </div>
    );
  }

  if (error || !student) {
    return (
      <div className="h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <User className="w-10 h-10 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500 text-sm">
            {error || "Student not found"}
          </p>
        </div>
      </div>
    );
  }

  const cls = student.classes
    ? `${student.classes.class_name}${student.classes.section ? ` — ${student.classes.section}` : ""}`
    : "—";
  const academicYear = student.academic_years?.name || "—";

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
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
            {student.image_url ? (
              <img
                src={student.image_url}
                alt={student.full_name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400 text-2xl font-light">
                {student.full_name}
              </div>
            )}
          </div>
          <h1 className="text-lg font-semibold text-gray-900">
            {student.full_name}
          </h1>
          <p className="text-[11px] text-gray-500 mt-0.5">
            {cls} · {academicYear} · {student.is_active ? "Active" : "Inactive"}
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
              <Row label="Admission No." value={student.admission_no} />
              {student.date_of_birth && (
                <Row
                  label="Date of Birth"
                  value={formatDate(student.date_of_birth)}
                />
              )}
              {student.gender && <Row label="Gender" value={student.gender} />}
              {student.blood_group && (
                <Row label="Blood Group" value={student.blood_group} />
              )}
            </div>
          </div>

          {/* Academic */}
          <div className="bg-white p-4">
            <h2 className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest mb-2.5">
              Academic
            </h2>
            <div className="space-y-1.5">
              {student.studentid && (
                <Row label="Student ID" value={student.studentid} />
              )}
              <Row label="Class" value={cls} />
              <Row label="Year" value={academicYear} />
              <Row
                label="Status"
                value={student.is_active ? "Active" : "Inactive"}
              />
            </div>
          </div>

          {/* Guardian */}
          <div className="bg-white p-4">
            <h2 className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest mb-2.5">
              Guardian
            </h2>
            <div className="space-y-1.5">
              {student.parent_name && (
                <Row label="Name" value={student.parent_name} />
              )}
              {student.phone && <Row label="Phone" value={student.phone} />}
              {student.email && <Row label="Email" value={student.email} />}
              {student.emergency_contact && (
                <Row label="Emergency" value={student.emergency_contact} />
              )}
              {!student.parent_name && !student.phone && (
                <p className="text-xs text-gray-400">—</p>
              )}
            </div>
          </div>

          {/* Address */}
          <div className="bg-white p-4">
            <h2 className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest mb-2.5">
              Address
            </h2>
            {student.address ? (
              <p className="text-[11px] text-gray-700 leading-relaxed">
                {student.address}
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
