import { useState } from "react";

const Header = ({
  scrollToHome,
  scrollToAbout,
  scrollToSkills,
  scrollToProjects,
  scrollToContact,
}) => {
  const [isScroll, setIsScroll] = useState("absolute");
  const [isMenuOpen, setMenuOpen] = useState(false);
  const list = [
    { title: "Home", navigate: scrollToHome },
    { title: "About", navigate: scrollToAbout },
    { title: "Projects", navigate: scrollToProjects },
    { title: "Contact", navigate: scrollToContact },
  ];

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };

  //scroll effect
  window.onscroll = function () {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;
    console.log(fixedNav);

    if (window.scrollY > fixedNav) {
      setIsScroll("fixed-nav transition ease-in-out");
    } else {
      setIsScroll("absolute transition ease-in-out");
    }
  };

  return (
    <header
      className={`bg-transparent top-0 left-0 py-3 px-4 z-10 w-full md:px-8 lg:px-10
      lg:py-5 
      ${isScroll}`}
    >
      <div className="flex justify-between items-center">
        <a
          href=""
          className="text-primary text-xl font-bold w-24 uppercase lg:w-40"
        >
          Farrel
        </a>
        {/* Nav Start */}
        <nav
          className={`bg-white shadow-lg rounded-lg max-w-[250px] py-5 w-full font-semibold right-4 text-xl absolute top-full 
          lg:max-w-full lg:right-0 lg:top-0 lg:bg-transparent lg:shadow-none lg:rounded-none lg:relative lg:py-0 lg:block lg:translate-x-0
          ${
            isMenuOpen
              ? "transition ease-in-out "
              : "transition ease-in-out hidden"
          }`}
        >
          <ul className="block lg:flex lg:justify-end ">
            {list.map((e, i) => (
              <li key={i} className="group py-1">
                <a
                  className="text-base mx-8 group-hover:text-primary group-hover:cursor-pointer"
                  onClick={e.navigate}
                >
                  {e.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {/* Nav End */}
        {/* Button Start */}
        <button className="lg:hidden" onClick={toggleMenu}>
          <span
            className={`w-[30px] h-[2px] my-2 block bg-dark ${
              isMenuOpen ? "hamburger-active" : ""
            }`}
          ></span>
          <span
            className={`w-[30px] h-[2px] my-2 block bg-dark ${
              isMenuOpen ? "hamburger-active" : ""
            }`}
          ></span>
          <span
            className={`w-[30px] h-[2px] my-2 block bg-dark ${
              isMenuOpen ? "hamburger-active" : ""
            }`}
          ></span>
        </button>
        {/* Button End */}
      </div>
    </header>
  );
};
export default Header;
