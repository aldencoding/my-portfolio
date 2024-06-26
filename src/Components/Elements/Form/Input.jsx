const Input = ({ title, type, name, id, errorMessage, useForm }) => {
  return (
    <div className="flex flex-col">
      <label className="text-base font-bold text-primary mb-3">{title}</label>
      <input
        className="w-full bg-slate-200 rounded-md p-3 focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
        type={type}
        name={name}
        id={id}
        {...useForm}
      />
      <p className="text-sm text-red-700">{errorMessage}</p>
    </div>
  );
};
export default Input;
