import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;

  // simulasi database
  if (email === "admin@gmail.com" && password === "123456") {
    return NextResponse.json({
      success: true,
      message: "Login berhasil",
    });
  }

  return NextResponse.json(
    {
      success: false,
      message: "Email atau password salah",
    },
    { status: 401 }
  );
}
