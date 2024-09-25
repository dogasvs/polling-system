"use client"
import Lottie from "lottie-react";
import Animation from "@/lotties/Animation.json"

export default function Home() {
  return (
  <div className="home">
    <h1>Yoklama Takip Sistemi</h1>
    <Lottie animationData={Animation} width={300} height={300} loop={true} />
  </div>
  );
}
