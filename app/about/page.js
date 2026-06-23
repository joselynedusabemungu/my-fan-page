import React from 'react';
import Image from "next/image";

export default function About() {
  return (
    
    <main>
      <h1 style={{ fontFamily: "Poppins", marginTop: "3rem", textAlign: "center", color: "#c6901d" }}>About this page</h1>   
      <div style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "2.5rem",
        maxWidth: "650px",
        backgroundColor: "#434040",
        padding: "2.5rem",
        borderRadius: "24px",
        border: "2px solid #f3e9d2", 
        boxShadow: "0 12px 30px rgba(97, 73, 18, 0.08)", 
        margin: "0 auto",
      }}>
        <div>   
          <p style={{ fontFamily:"poppins", textAlign: "left", color: "#ffffff", fontSize: "1rem", lineHeight: "1.9" }}>Hi there! I am your Joselyne! I study the world as an interesting book with a lot to explore. If you want to see the world in its different angles, there many pages and chapters that always awaits! Keep learning.</p></div>
          <Image 
      src="/Profile.png" 
      alt="About me" 
      width={200} 
      height={200}
      style={{ 
        borderRadius: "50%", 
        border: "3px solid #c6901d",
        padding: "5px",
        objectFit: "cover",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto"
      }}
      />
      </div>
    </main>
  );
}