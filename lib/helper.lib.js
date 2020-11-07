/**
 * Author: George Favour
 * Date: 12th, August 2020
 * Helper lib functions
 * */

import React from 'react';
import { generateID } from "./generateID";
import TextArea from "../components/Inputs/TextArea";

export const variantMatch = {
  info: 'info',
  danger: 'error',
  primary: 'primary',
  default: 'grey',
  success: 'success',
  warning: 'warning',
  accent: 'secondary',
  alternate: 'alternate',
  secondary: 'secondary'
};

export const getInputProps = (props, field) => {
  if (props.type === "select") {
    if (props.optionstype === "country") {
      return (
        <select {...field}>
          <option disabled value={""} defaultValue={props.default} hidden>
            {props.default}
          </option>
          {props.options.map(({ emoji, name }) => {
            delete props.options;
            delete props.optionstype;

            return (
              <option {...props} key={generateID(12)}>
                {emoji} {name}
              </option>
            );
          })}
        </select>
      );
    } else {
      return (
        <select {...field}>
          <option disabled value={""} defaultValue={props.default} hidden>
            {props.default}
          </option>
          {props.options.map((
            option // changed this because of React's complain about "selectOptions" being an invalid DOM prop attribute.
          ) => (
              <option {...props} key={generateID(12)}>
                {option}
              </option>
            ))}
        </select>
      );
    }
  } else {
    return <input {...field} {...props} />;
  }
};

export const isAdminHelper = (accountType = '') => {
  const admins = ["academic_admin", "marketing_admin", "admin"]
  return admins.includes(accountType)
}

export const getFirstName = str => {
  if (!str) return;

  return str.split(' ')[0];
}