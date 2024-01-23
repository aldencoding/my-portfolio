import { Link } from "react-router-dom";

const Header = ({
  scrollToHome,
  scrollToAbout,
  scrollToSkills,
  scrollToProjects,
  scrollToContact,
}) => {
  const list = [
    { title: "Home", navigate: scrollToHome },
    { title: "About", navigate: scrollToAbout },
    { title: "Skills", navigate: scrollToSkills },
    { title: "Projects", navigate: scrollToProjects },
    { title: "Contact", navigate: scrollToContact },
  ];
  return (
    <nav className="flex flex-row justify-between items-center bg-primary py-3 px-5 text-white">
      <h1 className="text-3xl font-bold cursor-pointer">
        <a to="/">Farrel</a>
      </h1>
      <ul className="flex flex-row gap-7 font-semibold text-xl">
        {list.map((e) => (
          <li
            key={e}
            className=" transition ease-in-out cursor-pointer delay-150 hover:-translate-y-1 hover:scale-110 hover:underline hover:decoration-secondary duration-150 "
          >
            <a onClick={e.navigate}>{e.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Header;
