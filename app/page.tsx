"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
        color: "white",
        flexDirection: "column",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>Next.js Fullstack Auth System</h1>

      <button
        onClick={() => router.push("/login")}
        style={{
          padding: "12px 24px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#3b82f6",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Go to Login
      </button>
    </div>
  );
}
