import React, { useState, Fragment } from "react";
import { useRouter } from "next/router";
import { RegAuthWrapper } from "./styles";
import LOGO from "../../../assets/images/electoral-recall-logo.png";
import { AuthTab } from "../AuthTab/index";
import { FlexibleDiv } from "../../Box/styles";

const links = [
	{
		name: "Home",
		url: "/",
	},
	{
		name: "Recall",
		url: "/recall",
	}
];

const signUpAuthComponent = ({ logo, title, tagline, tab, form, capitalized }) => {
	const Router = useRouter();
	const [active, setActive] = useState(1);

	return (
		<RegAuthWrapper capitalized={capitalized}>
			<FlexibleDiv
				className="form-section"
				flexWrap="no-wrap"
				flexDir="column"
			>
				{logo ? logo : <img src={LOGO} alt="embed logo" />}
				<div className="text">
					<h4>{title || "Sign-up for The Nigerian Petition"}</h4>
					<p>{tagline || "Please enter your credentials to proceed."}</p>
				</div>

				{tab && (
					<FlexibleDiv flexDir="row" className="tab" width="90%">
						{tab.map(({ id, icon, title, bodyText }) => (
							<AuthTab
								key={id}
								icon={icon}
								title={title}
								bodyText={bodyText}
								onItemClicked={() => setActive(id)}
								isActive={active === id}
							/>
						))}
					</FlexibleDiv>
				)}

				{tab ? (
					<FlexibleDiv className="content">
						{tab.map(({ id, content }) => {
							return active === id ? (
								<Fragment key={id}>{content} </Fragment>
							) : (
									""
								);
						})}
					</FlexibleDiv>
				) : (
						<FlexibleDiv className="content">{form}</FlexibleDiv>
					)}
			</FlexibleDiv>

			<FlexibleDiv className="text-section" flexDir="column">
				<FlexibleDiv className="form-links">
					<ul>
						{links.map(({ url, name }) => (
							<li key={url}>
								<a onClick={() => Router.push(url)}>{name}</a>
							</li>
						))}
					</ul>
				</FlexibleDiv>
			</FlexibleDiv>
		</RegAuthWrapper>
	);
};

export default signUpAuthComponent;
