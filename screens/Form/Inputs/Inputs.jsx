import React from "react";
import { FormStylesWrapper } from "./styles";
import { useField } from "formik";

const Input = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<FormStylesWrapper width={props.width}>
			{/* <label htmlFor={props.id || props.name}>{label}</label> */}
			<div className="field">
				{!props.textarea ? (
					<input {...field} {...props} />
				) : (
					<textarea {...field} {...props} />
				)}
				{meta.touched && meta.error ? (
					<div className="invalid-feedback">{meta.error}</div>
				) : null}
			</div>
		</FormStylesWrapper>
	);
};
export default Input;
