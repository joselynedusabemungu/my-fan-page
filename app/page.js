import { items } from "./data";
import Hero from "./components/Hero";
import CardGrid from "./components/CardGrid";

export default function Home() {
  return (
    <main>
      <Hero
        title={
          <>
            {" "}
            <span style={{ fontFamilty: "Poppins", color: "#D4AF37" }}>BOOKS</span> ON THE SHELVE{" "}
          </>
        }
        tagline={
          <span
            style={{
              color: "#fafafa",
              fontWeight: "bold",
              fontSize: "1.7rem",
              position: "relative",
              display: "inline-block",
              backgroundImage:
                "linear-gradient(90deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)",
              backgroundPosition: "0 100%",
              backgroundSize: "100% 3px",
              backgroundRepeat: "no-repeat",
              paddingBottom: "4px",
            }}
          >
            Insightful books of an open mind.
          </span>
        }
      />
      <CardGrid items={items} />
    </main>
  );
}
