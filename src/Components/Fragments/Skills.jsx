const Skills = () => {
  return (
    <div
      id="skills"
      className=" flex flex-col justify-center items-center h-screen gap-3"
    >
      <h1 className="text-5xl font-semibold mb-16 underline decoration-3 underline-offset-8 decoration-secondary">
        MY SKILLS 📚
      </h1>
      <div className="grid grid-cols-3 gap-10 items-center">
        <img src="/html-logo.png " alt="" className="w-32" />
        <img src="/css-logo.png" alt="" className="w-32" />
        <img src="/js2-logo.png" alt="" className="w-32" />
        <img src="/tailwind-mark.svg" alt="" className="w-32" />
        <img src="/react-logo.svg" alt="" className="w-32" />
        <img src="/vite.svg" alt="" className="w-32" />
      </div>
    </div>
  );
};
export default Skills;
