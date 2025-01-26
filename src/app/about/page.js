"use client";

export default function Home() {
console.log("Hello from the client side!");
  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={() => alert("Button clicked!")}>Test JS on Click</button>
    </div>
  );
}
