import { items } from "./data";
import Hero from "./components/Hero";
import CardGrid from "./components/CardGrid";

export default function Home() {
  return (
    <main>
      <Hero
        title={<> <span style={{ color: '#D4AF37' }}>BOOKS</span> ON THE SHELVE </>}
        tagline="Insightful books of an open mind."
      />
      <CardGrid items={items} />
    </main>
  );
}
