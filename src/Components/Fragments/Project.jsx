const Project = () => {
  const projects = [
    {
      title: "Clonning Website H&M",
      image: "/projects/1.png",
      stack: ["ReactJS", "Vite", "Tailwind CSS"],
      description:
        "Focuses on the Front-End section by prioritizing the functionality of each component. Worked as a team",
    },
    {
      title: "Movie Website",
      image: "/projects/2.png",
      stack: ["HTML", "CSS", "ReactJS", "Vite"],
      description: "Focuses on API calls",
    },
  ];

  return (
    <div
      id="projects"
      className="container max-w-full pt-16 pb-16 bg-gray-300 flex flex-col items-center"
    >
      <div className="flex flex-col items-center justify-center text-center mx-auto px-4">
        <h1 className="text-2xl lg:text-5xl font-bold text-primary block uppercase">
          Portfolio
        </h1>
        <span className="text-4xl mt-3 lg:text-xl font-bold text-dark block uppercase">
          New Project ⚒️
        </span>
        <span className="text-base leading-relaxed text-secondary mt-3 mb-10 lg:text-lg ">
          This is a project I worked on while graduating from bootcamp
        </span>
      </div>
      <div className="flex flex-wrap gap-x-32 px-4">
        {projects.map((project, i) => {
          // console.log(project.stack);
          return (
            <div
              key={i}
              className="flex flex-col mb-20 mx-auto gap-y-3 max-w-sm"
            >
              <img src={project.image} alt="" />
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-secondary text-base">{project.description}</p>
              <ul>
                <li>{project.stack.join(" • ")}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Project;
