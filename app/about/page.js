import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <main>
      <h1 style={{ marginTop: "3rem", textAlign: "center", color: "#c6901d" }}>About this page</h1>
      <div className="about-container">
        <div>
          <p style={{ textAlign: "left", color: "#ffffff", fontSize: "1rem", lineHeight: "1.9" }}>
            Hi there! I am your Joselyne! I study the world as an interesting book with a lot to explore. If you want to see the world in its different angles, there are many pages and chapters that always await! Keep learning.
          </p>
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
              margin: "0 auto"
            }}
          />
        </div>
      </div>
    </main>
  );
}