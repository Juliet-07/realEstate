import React from 'react'
import TextField from "../components/Inputs/TextField"
import Select from "../components/Inputs/Select";
import TextArea from "../components/Inputs/TextArea";
import Switch from "../components/Switch";
import {DatePickerV1} from "../components/DatePicker";

export const genFormElements = (formDetail, withFormik) => {

  if (formDetail.inputtype === "input")
    return <TextField {...formDetail} withFormik={withFormik} />;

  if (formDetail.inputtype === "select")
    return (
      <Select {...formDetail} withFormik={withFormik} />
    );

  if (formDetail.inputtype === "textarea")
    return (
      <TextArea {...formDetail} withFormik={withFormik} />
    );

  if (formDetail.inputtype === "checkbox")
    return (
      <Switch {...formDetail} withFormik={withFormik} />
    );

  if (formDetail.inputtype === "date") {
    return (
      <DatePickerV1
        withFormik={withFormik}
        {...formDetail}
      />
    );
  }

};