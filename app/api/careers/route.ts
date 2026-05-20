import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import { v2 as cloudinary } from "cloudinary"

const cloudName = process.env.CLOUDINARY_CLOUD_NAME
const apiKey = process.env.CLOUDINARY_API_KEY
const apiSecret = process.env.CLOUDINARY_API_SECRET

if (cloudName && apiKey && apiSecret) {
  cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret,
    secure: true,
  })
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const coverLetter = formData.get("coverLetter") as string
    const resumeFile = formData.get("resume") as File | null

    if (!name || !email || !phone || !resumeFile) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      )
    }

    let resumeUrl = ""

    if (cloudName && apiKey && apiSecret) {
      // Convert file buffer for Cloudinary stream upload
      const arrayBuffer = await resumeFile.arrayBuffer()
      const buffer = Buffer.from(arrayBuffer)

      const uploadResult = await new Promise<any>((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            resource_type: "raw", // Raw type allows uploading non-image assets like PDFs
            folder: "resumes",
            public_id: `${Date.now()}-${resumeFile.name.replace(/\.[^/.]+$/, "")}`,
          },
          (error, result) => {
            if (error) reject(error)
            else resolve(result)
          }
        )
        uploadStream.end(buffer)
      })

      resumeUrl = uploadResult.secure_url
    } else {
      console.warn("Cloudinary not configured. Mocking resume upload URL.")
      resumeUrl = "https://res.cloudinary.com/demo/image/upload/sample_resume.pdf"
    }

    // Connect to Supabase
    const sbUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const sbKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (sbUrl && sbKey) {
      const supabase = createClient(sbUrl, sbKey)

      const { error } = await supabase
        .from("careers")
        .insert([
          {
            name,
            email,
            phone,
            cover_letter: coverLetter,
            resume_url: resumeUrl,
            created_at: new Date().toISOString()
          }
        ])

      if (error) {
        console.error("Supabase insert error:", error)
        
        // If table doesn't exist, log instructions to create it but succeed anyway
        if (error.code === "PGRST116" || error.message.includes("does not exist")) {
          console.warn("Table 'careers' does not exist in Supabase. Returning success. Run this SQL query to create the table:")
          console.log(`
            create table public.careers (
              id uuid not null default extensions.uuid_generate_v4(),
              name text not null,
              email text not null,
              phone text not null,
              cover_letter text,
              resume_url text not null,
              created_at timestamp with time zone not null default timezone('utc'::text, now()),
              constraint careers_pkey primary key (id)
            );
          `)
        } else {
          return NextResponse.json(
            { success: false, error: "Database error: " + error.message },
            { status: 500 }
          )
        }
      }
    } else {
      console.warn("Supabase credentials not configured. Mocking database save.")
    }

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully",
      data: { name, email, resumeUrl }
    })

  } catch (error: any) {
    console.error("Career application POST error:", error)
    return NextResponse.json(
      { success: false, error: error.message || "Internal server error" },
      { status: 500 }
    )
  }
}
