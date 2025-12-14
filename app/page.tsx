import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import About from "@/components/About";
import TechArsenal from "@/components/TechArsenal";
import Projects from "@/components/Projects";
import GithubContributions from "@/components/GithubContributions";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Home />
      <About />
      <TechArsenal />
      <Projects />
      <GithubContributions />
      <Contact />
    </main>
  );
}
