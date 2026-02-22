export default function LoginPage() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#111",
        color: "white",
        flexDirection: "column",
      }}
    >
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Email"
        style={{ padding: "10px", margin: "10px", width: "250px" }}
      />
      <input
        type="password"
        placeholder="Password"
        style={{ padding: "10px", margin: "10px", width: "250px" }}
      />
      <button style={{ padding: "10px 20px", marginTop: "10px" }}>Login</button>
    </div>
  );
}
