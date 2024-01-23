const Project = () => {
  const projects = [
    {
      title: "Clonning Website H&M",
      image: "/projects/1.png",
      stack: [
        "/html-logo.png",
        "/tailwind-mark.svg",
        "/react-logo.svg",
        "/vite.svg",
      ],
      description:
        "berfokus pada bagian Front-End dengan lebih mengendepankan fungsional pada setiap komponen. Dikerjakan secara team",
    },
    {
      title: "Movie Website",
      image: "/projects/2.png",
      stack: [
        "/html-logo.png",
        "/css-logo.png",
        "/react-logo.svg",
        "/vite.svg",
      ],
      description: "Hanya berfokus pada bagian API",
    },
  ];

  return (
    <div
      id="projects"
      className="h-screen flex flex-col justify-center items-center "
    >
      <h1 className="text-5xl mb-16 font-semibold underline decoration-3 underline-offset-8 decoration-secondary">
        MY PROJECT <span>⚒️</span>
      </h1>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-2 gap-10 my-5">
          {projects.map((project, i) => {
            const stack = project.stack;
            console.log(project.stack);
            return (
              <div
                className="w-[450px] h-auto border border-solid border-black gap-x-4 box-border rounded-lg shadow-md hover:shadow-lg hover:translate- hover:border-2 hover:shadow-primary transition hover:scale-105 hover:translate-y-3 ease-in-out duration-100 "
                key={i}
              >
                <div>
                  <img
                    src={project.image}
                    alt=""
                    className="w-full h-56 rounded-lg"
                  />
                </div>
                <h4 className="text-2xl font-bold px-3 py-2">
                  {project.title}
                </h4>
                <div className="flex items-center gap-x-4 w-24 px-3">
                  {stack.map((stack, i) => (
                    <img
                      src={stack}
                      alt=""
                      title=""
                      className="w-12 py-2 "
                      key={i}
                    />
                  ))}
                </div>
                <p className="p-3">{project.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Project;
