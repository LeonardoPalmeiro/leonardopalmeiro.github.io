export default function Home() {
  const name = "Your Name";
  const projects = [
    { title: "Project 1", description: "Description of project 1", link: "#" },
    { title: "Project 2", description: "Description of project 2", link: "#" },
    { title: "Project 3", description: "Description of project 3", link: "#" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-4">{name}</h1>
      <p className="text-gray-700 mb-8">Welcome to my personal page. Here are some of my projects:</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600">{project.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}