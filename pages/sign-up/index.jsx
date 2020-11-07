import React from "react";
import SignUpAuthComponent from "../../components/Auth/signUp";
import { CurrentIcon, ChatIcon } from "../../assets/svg";
import SignUpForm from '../../screens/AuthPages/SignUp';
import withApollo from "../../lib/apollo/withApollo";

const SignUp = () => {
	const tab = [
		{
			id: 1,
			icon: <CurrentIcon height="12px" width="12px" color="#6c006c" />,
			title: "Nigerians (Home/Abroad)",
			content: <SignUpForm type={1} />,
		},
		{
			id: 2,
			icon: <ChatIcon height="12px" width="12px" color="#6c006c" />,
			title: "Friends of Nigeria",
			content: <SignUpForm type={2} user={"diaspora"} />,
		},
	];

	return (
		<div>
			<SignUpAuthComponent tab={tab} />
		</div>
	);
};

export default withApollo(SignUp);
