import Hero from "./components/hero";
import UnderConstruction from "./components/underConstruction";

export default function Home() {
  const name = "Your Name";
  const projects = [
    { title: "Project 1", description: "Description of project 1", link: "#" },
    { title: "Project 2", description: "Description of project 2", link: "#" },
    { title: "Project 3", description: "Description of project 3", link: "#" },
  ];

  return (
    <>
    <UnderConstruction />
    {/* <Hero /> */}
    </>
  );
}