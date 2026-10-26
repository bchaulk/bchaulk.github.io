function App() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", padding: "2rem" }}>
      <h1>Hello, world!</h1>
      <p>This page is running React with JSX.</p>
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
