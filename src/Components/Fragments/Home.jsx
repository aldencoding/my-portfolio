import Button from "../Elements/Button/Button";

const Home = ({ scrollToContact }) => {
  return (
    <section className="container mx-auto pt-20">
      <div className=" flex flex-wrap items-center">
        <div className="w-full px-4 lg:w-1/2">
          <h1 className="text-2xl font-semibold text-dark md:text-2xl">
            Hi everyone 👋,I &apos;am{" "}
            <span className="text-5xl lg:text-5xl font-bold text-primary block">
              Alden Farrel
            </span>
          </h1>
          <h3 className="text-2xl mb-3 font-semibold md:text-2xl ">
            Front-End Web Dev
          </h3>
          <p className="text-base leading-relaxed text-secondary mt-3 lg:text-lg">
            I am a graduate of one of the Bootcamps for Full Stack web
            development.
          </p>
          <div className="max-w-sm">
            <Button
              title={"Contact Me"}
              onClick={scrollToContact}
              color={"primary"}
              textColor={"white"}
            />
          </div>
        </div>
        <div className="w-full self-end px-4 lg:w-1/2 lg:px-4">
          <img
            src="public/tampandanpemberani2.png"
            alt="Profil Picture"
            width={"450px"}
          />
        </div>
      </div>
    </section>
  );
};
export default Home;
