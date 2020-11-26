function App() {
  return (
    <div className="App">
      <Welcome />
    </div>
  );
}

function Welcome({ name }) {
  return <h1>Hello, {name?name:"🤠"}</h1>;
}

export default App;
