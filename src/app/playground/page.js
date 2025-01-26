"use client";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Playground() {
  // const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      window.location.href = "/sign_up";
      return;
    }
  }, []);
  

  return (
    <div>
      <h1>Playground</h1>
      <p>Here you can play around with the code</p>
    </div>
  );
}