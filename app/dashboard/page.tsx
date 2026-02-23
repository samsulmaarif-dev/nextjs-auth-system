"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      router.push("/login");
    }
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0f172a",
        color: "white",
        flexDirection: "column",
      }}
    >
      <h1>Dashboard</h1>
      <p>Welcome to your app 🚀</p>
    </div>
  );
}
