function App() {
  return (
    <div className="App">
      <Welcome />
    </div>
  );
}

function Welcome({ name }) {
  return (
    <center>
      <h1 className="text-shadow" style={{ backgroundColor: "white", width: 500, padding: 10, margin: 15 }}>
        Hello, there my Friend {name ? name : "🤠"}
      </h1>
    </center>
  );
}

export default App;
