import { Hero } from "../components/Hero";
import { Trust } from "../components/Trust";
import { Solutions } from "../components/Solutions";
import { Data } from "../components/Data";
import { CustomerStories } from "../components/CustomerStories";
import { CtaBanner } from "../components/CtaBanner";

export function HomePage() {
  return (
    <main>
      <Hero />
      <Trust />
      <Solutions />
      <Data />
      <CustomerStories />
      <CtaBanner />
    </main>
  );
}
