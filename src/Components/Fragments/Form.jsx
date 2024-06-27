import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "../Elements/Button/Button";
import Input from "../Elements/Form/Input";
import TextArea from "../Elements/Form/TextArea";

const Form = () => {
  const form = useForm();
  const { register, control, handleSubmit, formState, reset } = form;
  const { errors, isSubmitSuccessful } = formState;
  const ref = useRef();
  const [submitLoading, setSubmitLoading] = useState(false);

  function sendEmail(e) {
    emailjs
      .sendForm(
        "service_xuddgyz",
        "template_641601q",
        ref.current,
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
  }
  useEffect(() => {
    if (isSubmitSuccessful) {
      setSubmitLoading(true);

      setTimeout(() => {
        reset({ username: "", email: "", message: "" });
        setSubmitLoading(false);
        setTimeout(() => {
          alert("data berhasil dikirim");
        }, 500);
      }, 1000);
    }
  }, [formState, isSubmitSuccessful, reset]);
  return (
    <form
      id="contact"
      className="container w-full max-w-screen-lg mx-auto pt-16 pb-16 "
      onSubmit={handleSubmit(sendEmail)}
      ref={ref}
    >
      <div className="flex flex-col items-center justify-center px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-primary uppercase block lg:text-5xl">
            Contact{" "}
          </h2>
          <span className="text-4xl mt-3 font-bold text-dark uppercase block lg:text-xl">
            Contact Me 📧
          </span>
          <span className="text-base block leading-relaxed text-secondary mt-3 mb-12 lg:text-lg">
            You can send an email in the form below
          </span>
        </div>
        <div className="w-full gap-x-10 lg:flex lg:flex-row">
          <div className="w-full flex flex-col gap-y-10 mb-10 lg:w-1/2">
            <Input
              title={"Your Name"}
              type={"text"}
              name={"nama"}
              errorMessage={errors.username?.message}
              useForm={{
                ...register("username", {
                  required: {
                    value: true,
                    message: "username is required!",
                  },
                }),
              }}
            />
            <Input
              title={"Email Address"}
              type={"email"}
              name={"email"}
              errorMessage={errors.email?.message}
              useForm={{
                ...register("email", {
                  required: {
                    value: true,
                    message: "email is required!",
                  },
                }),
              }}
            />
          </div>
          <div className="flex flex-col gap-y-10 lg:w-1/2">
            <TextArea
              name={"message"}
              id={"message"}
              errorMessage={errors.message?.message}
              useForm={{
                ...register("message", {
                  required: {
                    value: true,
                    message: "please fill the message!",
                  },
                  minLength: {
                    value: 10,
                    message: "the message must be at least 10 characters!",
                  },
                }),
              }}
            />
            {!submitLoading ? (
              <Button title={"Submit"} type={"submit"} color={"2b2a4c"} />
            ) : (
              <Button
                title={"Loading.."}
                type={"submit"}
                color={"2b2a4c"}
                disabled={true}
              />
            )}
          </div>
        </div>
      </div>
    </form>
  );
};
export default Form;
