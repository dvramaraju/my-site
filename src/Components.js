import React from 'react'

export default function Components() {
  return (
    <div>
      
    </div>
  )
}

export function Welcome({ name }) {
  return (
    <center>
      <h1 className="text-shadow" style={{ border: "thick double #32a1ce", backgroundColor: "white", width: 600, padding: 10, margin: 15 }}>
        {name ? `Hello, there my Friend ${name}` : "Please sign up 🤠"}
      </h1>
    </center>
  );
}