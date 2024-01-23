import Button from "../Elements/Button/Button";

const Home = ({ scrollToContact }) => {
  return (
    <main
      id="home"
      className="w-full flex flex-row gap-x-5 justify-center items-center"
    >
      <div className="w-1/4 flex flex-col justify-center items-center gap-5">
        <img
          src="/tampandanpemberani.jpg"
          alt=""
          className="rounded-full w-64 h-64 object-cover"
        />
        <div className="flex flex-row my-5 gap-x-7">
          <img src="/linkedin-logo.png" alt="" className="w-10" />
          <img src="/whatsapp-logo.png" alt="" className="w-10" />
          <img src="/facebook-logo.png" alt="" className="w-10" />
        </div>
      </div>
      <div className=" w-2/4 h-screen flex flex-col justify-center">
        <h1 className="text-4xl mb-2">Hi, i&apos;m Alden Farrel</h1>
        <h3 className="text-3xl mb-7 ">Front-End Web Dev</h3>
        <div className="flex flex-col  items-center">
          <p className="font-light text-justify text-xl">
            I am a graduate of one of the Bootcamps for Full Stack web
            development. Able to work on projects using a framework with a team
            and have a high sense of togetherness in building a project.
          </p>
          <div className="flex flex-row gap-5 my-5">
            <Button title={"Contact Me"} onClick={scrollToContact} />
          </div>
        </div>
      </div>
    </main>
  );
};
export default Home;
