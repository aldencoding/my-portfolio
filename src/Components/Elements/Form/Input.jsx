const Input = ({ title, type, name }) => {
  return (
    <div>
      <input
        className="w-full h-9 p-5 border rounded-lg border-solid border-[#2B2A4C] bg-[#ececece3]"
        placeholder={title}
        type={type}
        name={name}
      />
    </div>
  );
};
export default Input;
