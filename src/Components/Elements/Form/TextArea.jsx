const TextArea = ({ name }) => {
  return (
    <div>
      <textarea
        name={name}
        className=" bg-[#ececece3] border border-[#2B2A4C] rounded-md w-full h-44 p-5 resize-none"
        placeholder="Your Message"
      ></textarea>
    </div>
  );
};
export default TextArea;
