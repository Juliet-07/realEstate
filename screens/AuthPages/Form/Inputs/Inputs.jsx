/*
 * component: CustomFormInput
 * author: George Favour
 * Date: April 16th, 2020
 * EmBED CustomFormInput component
 */
import React from "react";
import {FormStylesWrapper} from "./styles";
import Switch from "../../../../components/Switch";
import {useField} from "formik";
import {FlexibleDiv} from '../../../../components/Box/styles';
import CustomInput from '../../../../components/Inputs/Inputs.component';
import {generateID} from "../../../../lib/generateID";

const Input = ({
  handleToggle,
  label,
  ...props
}) => {

  // console.log(props, 'props')
  const [field, meta] = useField(props);

  return (

    <FormStylesWrapper width={props.width}>
      {/* <label htmlFor={props.id || props.name}>{label}</label> */}
      <div className="field">
        {
          props.type === 'switch' ? (
              <FlexibleDiv justifyContent='flex-start'>
                <span style={{paddingRight: '10px'}}>
                  {props.placeholder}
                </span>
                <Switch
                  click={(selected) => handleToggle(selected, props.name)}
                  initialState={props.initialValue}
                />
              </FlexibleDiv>
            )
            : props.type === 'select' ? (
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
            )
            : !props.textarea ? (
              <input {...field} {...props}/>
            ) : (
              <textarea {...field} {...props}/>
            )
        }
        {meta.touched && meta.error ? (
            <div className="invalid-feedback">{meta.error}</div>
          ) : null
        }
      </div>
    </FormStylesWrapper>
  );
};

export default Input;
