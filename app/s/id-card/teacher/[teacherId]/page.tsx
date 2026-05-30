"use client";

import { useEffect, useState, use } from "react";

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
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// SVG Icons
const Icon = {
  User: () => <svg viewBox="0 0 24 24"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" /></svg>,
  Id: () => <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM6 10h2v2H6zm0 4h8v2H6zm10 0h2v2h-2zm-6-4h8v2h-8z" /></svg>,
  Calendar: () => <svg viewBox="0 0 24 24"><path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z" /></svg>,
  Phone: () => <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>,
  Clock: () => <svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm0 18a8 8 0 110-16 8 8 0 010 16zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" /></svg>,
  Pin: () => <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>,
  Mail: () => <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>,
  World: () => <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>,
  Building: () => <svg viewBox="0 0 24 24"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" /></svg>,
  Heart: () => <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>,
  Check: () => <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" /></svg>,
  Shield: () => <svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 14l-3-3 1.41-1.41L11 12.17l4.59-4.58L17 9l-6 6z" /></svg>,
  Lock: () => <svg viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" /></svg>,
  Warn: () => <svg viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" /></svg>,
  List: () => <svg viewBox="0 0 24 24"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" /></svg>,
  Star: () => <svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>,
  Logo: () => <svg viewBox="0 0 24 24"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 12.08L5.08 11 12 7.31 18.92 11 12 15.08z" /></svg>
};

export default function TeacherProfilePage({
  params,
}: {
  params: Promise<{ teacherId: string }>;
}) {
  const { teacherId } = use(params);
  const [teacher, setTeacher] = useState<Teacher | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastScanned, setLastScanned] = useState<string>("");

  useEffect(() => {
    setLastScanned(new Date().toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" }));
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
      <div className="min-h-screen bg-[#f0f4f3] font-sans">
        <div className="max-w-[1040px] mx-auto px-5 py-7 lg:pb-12">
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-5 items-start">
            <aside className="flex flex-col gap-3.5">
              <div className="bg-white rounded-[14px] border border-[#e0ebe8] overflow-hidden">
                <div className="h-[120px] bg-[#1aaa85]"></div>
                <div className="p-5">
                  <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto -mt-10 mb-3 animate-pulse border-4 border-white"></div>
                  <div className="h-5 bg-gray-200 rounded w-3/5 mx-auto mb-2 animate-pulse"></div>
                  <div className="h-3.5 bg-gray-200 rounded w-4/5 mx-auto mb-4 animate-pulse"></div>
                  <div className="h-9 bg-gray-200 rounded-full mb-3 animate-pulse"></div>
                  <div className="flex gap-1.5 flex-wrap justify-center mb-4">
                    <div className="h-6 w-[60px] bg-gray-200 rounded-full animate-pulse"></div>
                    <div className="h-6 w-[40px] bg-gray-200 rounded-full animate-pulse"></div>
                    <div className="h-6 w-[70px] bg-gray-200 rounded-full animate-pulse"></div>
                  </div>
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-10 bg-gray-100 rounded-lg mb-2 animate-pulse"></div>
                  ))}
                </div>
              </div>
            </aside>
            <main className="flex flex-col gap-4">
              <div className="bg-white rounded-[14px] border border-[#e0ebe8] p-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-[72px] bg-gray-100 rounded-lg animate-pulse"></div>
                  ))}
                </div>
              </div>
              <div className="h-[160px] bg-gray-200 rounded-[14px] animate-pulse"></div>
              <div className="h-12 bg-gray-200 rounded-lg animate-pulse"></div>
            </main>
          </div>
        </div>
      </div>
    );
  }

  if (error || !teacher) {
    return (
      <div className="min-h-screen bg-[#f0f4f3] flex items-start justify-center pt-20">
        <div className="max-w-[480px] w-full mx-5 bg-white rounded-[14px] border border-[#ffd0d0] p-9 text-center">
          <div className="w-14 h-14 bg-[#fff0f0] rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="w-7 h-7 fill-[#c0392b]"><Icon.Warn /></div>
          </div>
          <h2 className="text-lg font-bold text-[#0d1f1a] mb-2">Teacher record not found</h2>
          <p className="text-[13px] text-[#6b8480] leading-relaxed">
            The ID in this QR code could not be verified. Please contact school administration.
          </p>
        </div>
      </div>
    );
  }

  const fullName = `${teacher.first_name} ${teacher.last_name}`;
  const school = {
    name: "Sree Nandanam Public School",
    address: "Near KSRTC Depot, Kurumkutty, Parassala, Thiruvananthapuram, Kerala",
    phone: "+91 97454 33356 / +91 97454 33357",
    email: "sreenandadnamschools@gmail.com",
    website: "https://sreenandanamschools.com",
  };

  // Support inactive status check if present in database (fallback to verified if not explicitly inactive)
  const expired = (teacher as any).is_active === false || (teacher as any).status === "inactive";

  return (
    <div className="min-h-screen bg-[#f0f4f3] text-[#0d1f1a] font-sans selection:bg-[#1aaa85] selection:text-white pb-12">
      <style dangerouslySetInnerHTML={{
        __html: `
        .fade-in { animation: fadeIn 0.4s ease both; }
        @keyframes fadeIn { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
        .delay-1 { animation-delay: 0.05s; }
        .delay-2 { animation-delay: 0.12s; }
        .delay-3 { animation-delay: 0.18s; }
        .delay-4 { animation-delay: 0.24s; }
        
        .profile-hero::before {
          content: ''; position: absolute; bottom: -30px; left: -20px;
          width: 120px; height: 120px; border-radius: 50%;
          background: rgba(255,255,255,0.08);
        }
        .profile-hero::after {
          content: ''; position: absolute; top: -20px; right: -10px;
          width: 80px; height: 80px; border-radius: 50%;
          background: rgba(255,255,255,0.06);
        }
        
        .school-card::before {
          content: ''; position: absolute; bottom: -40px; right: -20px;
          width: 160px; height: 160px; border-radius: 50%;
          background: rgba(255,255,255,0.07);
        }
        .school-card::after {
          content: ''; position: absolute; top: -30px; left: 40%;
          width: 100px; height: 100px; border-radius: 50%;
          background: rgba(255,255,255,0.05);
        }
      `}} />



      {/* TOP NAV */}
      <nav className="bg-[#1aaa85] px-4 md:px-8 h-[58px] flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-2.5">
          <div className="w-[38px] h-[38px] bg-white/20 rounded-[10px] flex items-center justify-center overflow-hidden p-0.5">
            <img src="/images/logo.png" alt="School Logo" className="w-full h-full object-contain" />
          </div>
          <div>
            <div className="text-[13px] md:text-[15px] font-bold text-white tracking-wide">{school.name}</div>
            <div className="text-[11px] text-white/70 font-normal hidden md:block">Teacher Verification Portal</div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 bg-white/15 border border-white/25 rounded-full px-3 py-1.5">
          <div className="w-3.5 h-3.5 fill-white"><Icon.Shield /></div>
          <span className="text-xs font-semibold text-white">Verified</span>
        </div>
      </nav>

      {/* PAGE WRAP */}
      <div className="max-w-[1040px] mx-auto px-3 md:px-5 pt-4 md:pt-7">

        {expired && (
          <div className="flex items-center gap-2.5 bg-[#fff8ec] border border-[#f5c842] rounded-lg px-4 py-3 mb-4 fade-in">
            <div className="w-4 h-4 fill-[#b06000] shrink-0"><Icon.Warn /></div>
            <span className="text-[13px] text-[#b06000] font-semibold">
              This ID card is no longer active. Please contact school administration.
            </span>
          </div>
        )}

        {/* LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-4 md:gap-5 items-start">

          {/* SIDEBAR */}
          <aside className="flex flex-col gap-3.5">
            <div className="bg-white rounded-[14px] border border-[#e0ebe8] overflow-hidden fade-in delay-1">
              <div className="profile-hero bg-[#1aaa85] pt-6 px-5 pb-[52px] relative overflow-hidden">
                <div className="flex justify-center relative z-10">
                  <div className="w-[88px] h-[88px] rounded-full bg-[#9FE1CB] border-4 border-white/40 flex items-center justify-center overflow-hidden">
                    {teacher.image_url ? (
                      <img src={teacher.image_url} alt={fullName} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-11 h-11 fill-[#085041]"><Icon.User /></div>
                    )}
                  </div>
                </div>
              </div>
              <div className="px-5 pb-5 -mt-9 relative z-20">
                <div className="text-[20px] font-extrabold text-center mb-1 mt-2.5 text-[#0d1f1a]">{fullName}</div>
                <div className="text-[12px] text-[#6b8480] text-center mb-3.5">
                  Teacher · {teacher.subject}
                </div>

                {teacher.teacherid && (
                  <div className="flex items-center justify-center gap-1.5 bg-[#e1f5ee] rounded-full py-1.5 px-3.5 mb-3.5">
                    <div className="w-3.5 h-3.5 fill-[#0f7a60] shrink-0"><Icon.Id /></div>
                    <span className="text-[13px] font-bold text-[#0f7a60] font-mono tracking-wide">
                      {teacher.teacherid}
                    </span>
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5 justify-center mb-4">
                  <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#e1f5ee] text-[#0f7a60]">
                    <div className="w-2.5 h-2.5 fill-[#0f7a60]"><Icon.Check /></div> {expired ? 'Inactive' : 'Active'}
                  </span>
                  {teacher.gender && (
                    <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#eff5ff] text-[#1a5fc0]">
                      {teacher.gender}
                    </span>
                  )}
                </div>

                <div className="text-[10px] font-bold text-[#a8bdb9] uppercase tracking-wider px-1 mb-0.5">
                  Teacher details
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-2.5 py-2 border-b border-[#e0ebe8]">
                    <div className="w-7 h-7 shrink-0 rounded-lg bg-[#e1f5ee] flex items-center justify-center">
                      <div className="w-3.5 h-3.5 fill-[#1aaa85]"><Icon.User /></div>
                    </div>
                    <div>
                      <div className="text-[10px] text-[#a8bdb9] font-semibold uppercase tracking-wider">Full name</div>
                      <div className="text-[13px] text-[#0d1f1a] font-medium mt-px">{fullName}</div>
                    </div>
                  </div>
                  {teacher.date_of_birth && (
                    <div className="flex items-center gap-2.5 py-2 border-b border-[#e0ebe8]">
                      <div className="w-7 h-7 shrink-0 rounded-lg bg-[#e1f5ee] flex items-center justify-center">
                        <div className="w-3.5 h-3.5 fill-[#1aaa85]"><Icon.Calendar /></div>
                      </div>
                      <div>
                        <div className="text-[10px] text-[#a8bdb9] font-semibold uppercase tracking-wider">Date of birth</div>
                        <div className="text-[13px] text-[#0d1f1a] font-medium mt-px">{formatDate(teacher.date_of_birth)}</div>
                      </div>
                    </div>
                  )}
                  {teacher.phone && (
                    <div className="flex items-center gap-2.5 py-2 border-b border-[#e0ebe8] last:border-b-0">
                      <div className="w-7 h-7 shrink-0 rounded-lg bg-[#e1f5ee] flex items-center justify-center">
                        <div className="w-3.5 h-3.5 fill-[#1aaa85]"><Icon.Phone /></div>
                      </div>
                      <div>
                        <div className="text-[10px] text-[#a8bdb9] font-semibold uppercase tracking-wider">Contact number</div>
                        <div className="text-[13px] text-[#0d1f1a] font-medium mt-px">{teacher.phone}</div>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </div>
          </aside>

          {/* MAIN */}
          <main className="flex flex-col gap-4">

            <div className="bg-white rounded-[14px] border border-[#e0ebe8] overflow-hidden fade-in delay-2">
              <div className="px-5 py-3.5 border-b border-[#e0ebe8] flex items-center gap-2">
                <div className="w-4 h-4 fill-[#1aaa85]"><Icon.List /></div>
                <span className="text-[13px] font-bold text-[#0d1f1a]">Quick overview</span>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-[#f7faf9] border border-[#e0ebe8] rounded-lg px-4 py-3.5">
                    <div className="text-[10px] text-[#a8bdb9] font-semibold uppercase tracking-wider flex items-center gap-1.5 mb-1">
                      <div className="w-3 h-3 fill-[#1aaa85]"><Icon.Star /></div> Subject
                    </div>
                    <div className="text-[15px] font-bold text-[#0d1f1a]">{teacher.subject}</div>
                  </div>

                  {teacher.qualification && (
                    <div className="bg-[#f7faf9] border border-[#e0ebe8] rounded-lg px-4 py-3.5">
                      <div className="text-[10px] text-[#a8bdb9] font-semibold uppercase tracking-wider flex items-center gap-1.5 mb-1">
                        <div className="w-3 h-3 fill-[#1aaa85]"><Icon.User /></div> Qualification
                      </div>
                      <div className="text-[15px] font-bold text-[#0d1f1a]">{teacher.qualification}</div>
                    </div>
                  )}

                  {teacher.experience_years !== null && (
                    <div className="bg-[#f7faf9] border border-[#e0ebe8] rounded-lg px-4 py-3.5">
                      <div className="text-[10px] text-[#a8bdb9] font-semibold uppercase tracking-wider flex items-center gap-1.5 mb-1">
                        <div className="w-3 h-3 fill-[#1aaa85]"><Icon.Clock /></div> Experience
                      </div>
                      <div className="text-[15px] font-bold text-[#0d1f1a]">{teacher.experience_years} years</div>
                    </div>
                  )}

                  <div className="bg-[#f7faf9] border border-[#e0ebe8] rounded-lg px-4 py-3.5">
                    <div className="text-[10px] text-[#a8bdb9] font-semibold uppercase tracking-wider flex items-center gap-1.5 mb-1">
                      <div className="w-3 h-3 fill-[#1aaa85]"><Icon.Calendar /></div> Joined since
                    </div>
                    <div className="text-[15px] font-bold text-[#0d1f1a]">{formatDate(teacher.join_date)}</div>
                  </div>
                </div>
              </div>
            </div>

            {teacher.address && (
              <div className="bg-white rounded-[14px] border border-[#e0ebe8] overflow-hidden fade-in delay-3">
                <div className="px-5 py-3.5 border-b border-[#e0ebe8] flex items-center gap-2">
                  <div className="w-4 h-4 fill-[#1aaa85]"><Icon.Pin /></div>
                  <span className="text-[13px] font-bold text-[#0d1f1a]">Residential Address</span>
                </div>
                <div className="p-5">
                  <p className="text-[13px] text-[#4d5f5c] leading-relaxed">{teacher.address}</p>
                </div>
              </div>
            )}

            <div className="fade-in delay-4">
              <div className="school-card bg-[#1aaa85] rounded-[14px] p-5 md:px-6 md:py-[22px] relative overflow-hidden">
                <div className="text-[18px] font-extrabold text-white mb-4 relative z-10">{school.name}</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 relative z-10">
                  <div className="flex items-start gap-2">
                    <div className="w-3.5 h-3.5 fill-white/75 mt-0.5 shrink-0"><Icon.Pin /></div>
                    <span className="text-[12px] text-white/90 leading-snug">{school.address}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-3.5 h-3.5 fill-white/75 mt-0.5 shrink-0"><Icon.Phone /></div>
                    <span className="text-[12px] text-white/90 leading-snug">{school.phone}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-3.5 h-3.5 fill-white/75 mt-0.5 shrink-0"><Icon.Mail /></div>
                    <span className="text-[12px] text-white/90 leading-snug">{school.email}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-3.5 h-3.5 fill-white/75 mt-0.5 shrink-0"><Icon.World /></div>
                    <span className="text-[12px] text-white/90 leading-snug">
                      <a href={school.website} target="_blank" rel="noreferrer" className="text-white/95 underline decoration-white/30 underline-offset-2">
                        {school.website.replace('https://', '')}
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#e0ebe8] rounded-lg px-5 py-3.5 flex flex-col md:flex-row items-center justify-between gap-1.5 md:gap-0 text-center md:text-left fade-in delay-4 mt-3">
              <div className="flex items-center gap-1.5 text-[12px] text-[#6b8480]">
                <div className="w-3.5 h-3.5 fill-[#1aaa85]"><Icon.Lock /></div> Official verification page · Read-only
              </div>
              <div className="text-[11px] text-[#a8bdb9] font-mono tracking-tight">
                Last scanned: {lastScanned}
              </div>
            </div>

          </main>

        </div>
      </div>
    </div>
  );
}
