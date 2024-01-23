import Button from "../Elements/Button/Button";
const Footer = ({ scrollToHome }) => {
  return (
    <div className="flex flex-row justify-center items-center bg-primary py-3 px-5  text-[#ececece3]">
      <Button
        title={"Back to the top👆"}
        color={""}
        onClick={scrollToHome}
      ></Button>
    </div>
  );
};
export default Footer;
