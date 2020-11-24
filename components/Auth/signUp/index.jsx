import React, { useState, Fragment } from "react";
import { useRouter } from "next/router";
import { AuthWrapper } from "../styled";
import { AuthTab } from "../AuthTab/index";
import { FlexibleDiv } from "../../Box/styles";

const links = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Sell",
    url: "/sell",
  },
];

const signUpAuthComponent = ({
  logo,
  title,
  tagline,
  tab,
  form,
  capitalized,
}) => {
  const Router = useRouter();
  const [active, setActive] = useState(1);

  return (
    <AuthWrapper capitalized={capitalized}>
      <FlexibleDiv className="form-section" flexWrap="no-wrap" flexDir="column">
        {logo ? logo : <p>A & E Properties</p>}
        <div className="text">
          <h4>
            {title || "Sign-up to be elgible to buy and sell on this platform"}
          </h4>
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

      {/* <FlexibleDiv className="text-section" flexDir="column">
        <FlexibleDiv className="form-links">
          <ul>
            {links.map(({ url, name }) => (
              <li key={url}>
                <a onClick={() => Router.push(url)}>{name}</a>
              </li>
            ))}
          </ul>
        </FlexibleDiv>
      </FlexibleDiv> */}
    </AuthWrapper>
  );
};

export default signUpAuthComponent;
