import Link from "next/link";

export default function Nav() {

  const linkStyle={
    color: "white",
    textDecoration: "none",
    fontSize: "1.2rem",
  }
  return (
    <nav style={{display: "flex", gap: "16px"}}>
      <Link href="/" style={linkStyle}>Home</Link>
      <Link href="/about" style={linkStyle}>About</Link>
    </nav>
  );
}
