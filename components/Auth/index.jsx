import React, {Fragment, useState} from "react";
import {useRouter} from "next/router";
import {AuthWrapper} from "./styled";
import LOGO from "../../assets/images/electoral-recall-logo.png";
import {FlexibleDiv} from "../Box/styles";

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

const AuthComponent = ({ logo, title, tagline, tab, form, capitalized }) => {
  const Router = useRouter();
  const [active, setActive] = useState(1);

  return (
    <AuthWrapper capitalized={capitalized}>
      <FlexibleDiv
        className="form-section"
        // justifyContent="start"
        flexWrap="no-wrap"
        flexDir="column"
      >
        {logo ? logo : <img src={LOGO} alt="embed logo" />}
        <div className="text">
          <h4>{title || "Sign-in to The Nigerian Petition"}</h4>
          <p>{tagline || "Please enter your credentials to proceed."}</p>
        </div>

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
    </AuthWrapper>
  );
};

export default AuthComponent;
