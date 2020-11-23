import React from "react";
import * as Yup from "yup";
import Forms from "../../Form";
import withApollo from "../../../lib/apollo/withApollo";

const inputs = [
  {
    name: "phone",
    type: "text",
    placeholder: "Phone number",
  },
  {
    name: "email",
    type: "email",
    placeholder: "Email",
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
  },
];

const schema = Yup.object().shape({
  phone: Yup.string().required("Phone is required"),
  email: Yup.string()
    .email("Enter a valid email address")
    .required("Your Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(4, "Password is too short - minimum is 4 char"),
});

const initialValues = {
  phone: "",
  email: "",
  password: "",
};

const SignUpForm = () => {
  const onSubmit =  () => {
    console.log("Registered");
  };

  return (
    <Forms
      initialValues={initialValues}
      onSubmit={onSubmit}
      inputs={inputs}
      schema={schema}
      type="signup"
    />
  );
};

export default withApollo(SignUpForm);
