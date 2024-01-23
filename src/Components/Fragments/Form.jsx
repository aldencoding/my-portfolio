import Button from "../Elements/Button/Button";
import Input from "../Elements/Form/Input";
import TextArea from "../Elements/Form/TextArea";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xuddgyz",
        "template_641601q",
        form.current,
        "yNQJbolLlZw8vJ2GA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <form
      id="contact"
      className=" h-screen flex flex-col justify-center items-center"
      onSubmit={sendEmail}
      ref={form}
    >
      <div className="flex flex-col items-center">
        <h1 className="text-4xl text-center my-8 font-bold">Contact Me!</h1>
        <div className="flex flex-row ">
          <div className="w-[35em] flex flex-col gap-y-4">
            <Input title={"Your Name"} type={"text"} name={"user_name"} />
            <Input title={"Email Address"} type={"email"} name={"user_email"} />
            <TextArea name={"message"} />
            <Button title={"Submit"} type={"submit"} color={"2b2a4c"} />
          </div>
        </div>
      </div>
    </form>
  );
};
export default Form;
