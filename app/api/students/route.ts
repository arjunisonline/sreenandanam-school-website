import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

export async function GET(request: Request) {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

    const { searchParams } = new URL(request.url)
    const studentId = searchParams.get("id") || searchParams.get("studentid")

    // Fetch a single student by ID or admission number
    if (studentId) {
      let query = supabase
        .from("students")
        .select(`
          *,
          student_enrollments (
            status,
            classes ( class_name, section ),
            academic_years ( name )
          )
        `)

      query = query.ilike("studentid", `${studentId.trim()}%`)



      const { data, error } = await query.maybeSingle()

      if (error) {
        console.error("Supabase student fetch error:", error)
        return NextResponse.json({ success: false, error: error.message }, { status: 500 })
      }

      if (!data) {
        return NextResponse.json({ success: false, error: "Student not found" }, { status: 404 })
      }

      const activeEnrollment = data.student_enrollments?.find((e: any) => e.status === "active") || data.student_enrollments?.[0]
      const formattedStudent = {
        ...data,
        classes: activeEnrollment?.classes || null,
        academic_years: activeEnrollment?.academic_years || null,
      }

      return NextResponse.json({ success: true, data: formattedStudent })
    }

    // Fetch all active students
    const { data, error } = await supabase
      .from("students")
      .select(`
        *,
        student_enrollments (
          status,
          classes ( class_name, section ),
          academic_years ( name )
        )
      `)
      .eq("is_active", true)
      .order("full_name", { ascending: true })

    if (error) {
      console.error("Supabase students fetch error:", error)
      return NextResponse.json({ success: false, error: error.message }, { status: 500 })
    }

    const formattedData = (data || []).map((student: any) => {
      const activeEnrollment = student.student_enrollments?.find((e: any) => e.status === "active") || student.student_enrollments?.[0]
      return {
        ...student,
        classes: activeEnrollment?.classes || null,
        academic_years: activeEnrollment?.academic_years || null,
      }
    })

    return NextResponse.json({ success: true, data: formattedData })
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 })
  }
}
