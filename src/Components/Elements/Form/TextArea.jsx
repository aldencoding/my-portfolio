const TextArea = ({ name, id, useForm, errorMessage }) => {
  return (
    <div className="flex flex-col">
      <label className="text-base font-bold text-primary mb-3">
        Your Message
      </label>
      <textarea
        name={name}
        id={id}
        {...useForm}
        className="w-full bg-slate-200 rounded-md p-5 h-44 resize-none focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
      ></textarea>
      <p className="text-sm text-red-700">{errorMessage}</p>
    </div>
  );
};
export default TextArea;
