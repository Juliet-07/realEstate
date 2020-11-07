import React from "react";
import * as Yup from "yup";
import { useMutation } from "@apollo/client";
import CustomForm from "../../../components/Form";
import AuthLayout from "../../../components/Layout/AuthLayout";
import { AdminSenatorsWrap } from "./styles";
import { P } from "../../../components/FontSize/styles";
import Spacer from "../../../components/Spacer";
import { ADD_SENATOR } from "../../../lib/queries/senators/index.gql";

const initialValues = {
  name: "",
  year: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Senator's name is required"),
});

const formData = [
  {
    name: "name",
    type: "text",
    required: true,
    inputtype: "input",
    label: "Senator's Name",
  },
  {
    name: "state",
    type: "text",
    required: true,
    inputtype: "select",
    defaultValue: "Select State",
    options: ["Abia", "Adamawa"],
    label: "Senator's State",
  },
  {
    name: "constituency",
    type: "text",
    required: true,
    inputtype: "select",
    options: ["Ukwa West", "Enugu Ukwu"],
    label: "Senator's Constituency",
    defaultValue: "Select Consituency",
  },
  {
    name: "party",
    type: "text",
    required: true,
    inputtype: "select",
    label: "Senator's Party",
    options: ["APC", "PDP", "YDP"],
    defaultValue: "Select Party",
  },
  {
    name: "year",
    type: "number",
    required: true,
    inputtype: "input",
    label: "Senator's Years in Service",
  },
];

const AddSenatorsForm = () => {
  const [state, setstate] = React.useState({
    state: "",
    constituency: "",
    party: "",
  });

  const [onAddMutation, { error }] = useMutation(ADD_SENATOR);

  const handleSubmit = (values, { setSubmitting }) => {
    const name = values.name;
    const constituency = state.constituency;

    onAddMutation({
      variables: {
        ...state,
        ...values,
      },
    });
    setSubmitting(false);
  };

  const handleChange = (e, name) => {
    setstate({ ...state, [name]: e });
  };

  return (
    <AuthLayout admin>
      <AdminSenatorsWrap>
        <section className="top-layer">
          <aside>
            <h5>Add Senator</h5>
            <P>Add verifiable information to the Database</P>
          </aside>
        </section>

        <Spacer mx={"3rem"} />

        <CustomForm
          withFormik
          btnTxt={"Save"}
          formData={formData}
          secondBtnTxt={"Close"}
          onSubmit={handleSubmit}
          handleChange={handleChange}
          initialValues={initialValues}
          validationSchema={validationSchema}
        />
      </AdminSenatorsWrap>
    </AuthLayout>
  );
};

export default AddSenatorsForm;
