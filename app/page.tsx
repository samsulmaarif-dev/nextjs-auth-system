import { supabase } from "@/lib/supabase";

export default async function Home() {
  // Ambil semua data dari table users
  const { data, error } = await supabase
    .from("users")
    .select("*");

  // Kalau ada error
  if (error) {
    return (
      <div style={{ padding: "40px", color: "red" }}>
        <h1>Error</h1>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Data Users</h1>

      {data && data.length === 0 && (
        <p>Tidak ada data di database.</p>
      )}

      {data && data.map((user) => (
        <div
          key={user.id}
          style={{
            padding: "15px",
            marginBottom: "10px",
            border: "1px solid #ddd",
            borderRadius: "8px"
          }}
        >
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Created:</strong> {user.created_at}</p>
        </div>
      ))}
    </div>
  );
}