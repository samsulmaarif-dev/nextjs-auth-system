"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const storedUser = localStorage.getItem("user");

    if (!isLoggedIn) {
      router.push("/login");
    } else if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    router.push("/login");
  };

  return (
    <div
      style={{
        height: "100vh",
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#1e293b",
          padding: "40px",
          borderRadius: "12px",
          width: "400px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
          textAlign: "center",
          color: "white",
        }}
      >
        <h1 style={{ marginBottom: "10px" }}>Dashboard</h1>

        {user && (
          <>
            <p style={{ marginBottom: "5px" }}>
              Welcome, <strong>{user.name}</strong>
            </p>
            <p style={{ opacity: 0.8, marginBottom: "20px" }}>
              Email: {user.email}
            </p>
            <p style={{ opacity: 0.6, marginBottom: "25px" }}>
              Role: {user.role}
            </p>
          </>
        )}

        <button
          onClick={handleLogout}
          style={{
            padding: "12px 20px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#ef4444",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
