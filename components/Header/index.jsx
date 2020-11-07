/*
 * component: Header
 * author: Juliet Kelechi
 * Date: September 20, 2020
 * General header
 */

import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import {
  HeaderContainer,
  HeaderBox,
  IconButton,
  Nav,
  ShowMenu,
} from "./header.style";
import AppContext from "../../store/context";
import Button from "../Button";
import {MdMenu as MenuIcon} from "react-icons/md";
import {FlexibleDiv} from "../Box/styles";
import { AvatarIcon2, LogoutIcon } from "../../assets/svg";
import { P } from "../FontSize/styles";
import { useMutation } from "@apollo/client";
import { USER_LOGOUT } from "../../store/types";
import { LOGOUT_USER } from "../../lib/queries/auth.gql";
import {MODE} from "../../lib/constants";
import {getFirstName} from "../../lib/helper.lib";
import {capitalizeWords} from "../../lib/factory.lib";
import Link from "next/link";

const links = [
  {href: "/", label: "Home"},
  {href: "/buy", label: "Buy"},
  {href: "/sell", label: "Sell"},
  {href: "/rent", label: "Rent"},
  
  {href: "/sign-up", label: "Register"},
  
];

const Header = () => {
  const [showMenu, setShowMenu] = useState(undefined);
  const [menuPosition, setMenuPosition] = useState(0);
  const router = useRouter();
  const {
    state: { user },
  } = useContext(AppContext);

  const isActive = (href) => router.pathname === href;

  const handleScroll = () => setMenuPosition(window.scrollY);

  const [onLogout] = useMutation(LOGOUT_USER);
  const { dispatch } = useContext(AppContext);

  const handleLogout = async () => {
    await onLogout();
    dispatch({ type: USER_LOGOUT });

    window.location.href = MODE
      ? "https://thenigerianpetition.com"
      : "http://localhost:3000";
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    setMenuPosition(window.scrollY);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuPosition]);

  return (
    <FlexibleDiv onScroll={handleScroll}>
      <HeaderContainer menuPosition={menuPosition}>
        <HeaderBox showMenu={showMenu} menuPosition={menuPosition}>
          <FlexibleDiv className="major" justifyContent="space-between">
            <div className="logo">
              <a onClick={() => router.push("/")}>
                <P>A & E Properties</P>
              </a>
            </div>

            <div className={"mobileSection"}>
              <IconButton>
                <MenuIcon onClick={() => setShowMenu(!showMenu)} />
              </IconButton>
            </div>
          </FlexibleDiv>

          <div className={"desktopSection"}>
            <Nav menuPosition={menuPosition}>
              {links.map(({ href, label }, idx) => (
                <li
                  key={`${idx}-${label}`}
                  className={`${isActive(href) ? "isActive" : ""}`}
                >
                  <Link href={href}>
                    <a>{label}</a>
                  </Link>
                </li>
              ))}
              {user && user._id ? (
                <FlexibleDiv
                  justifyContent={"space-around"}
                  className={"profileMain_wrap"}
                >
                  <FlexibleDiv>
                    <FlexibleDiv
                      className="profileMain"
                      onClick={() => router.push("/dashboard/settings")}
                    >
                      <P>Hey, {capitalizeWords(getFirstName(user.fullName))}</P>
                      <AvatarIcon2 width="20px" height="20px" color="#b3b3b9" />
                    </FlexibleDiv>
                  </FlexibleDiv>
                  <FlexibleDiv onClick={handleLogout}>
                    <LogoutIcon width="20px" height="20px" color="#b3b3b9" />
                  </FlexibleDiv>
                </FlexibleDiv>
              ) : (
                <div className="btn">
                  <Button
                    size={"sm"}
                    text={"Login Here"}
                    type={"button"}
                    click={() => router.push("/login")}
                  />
                </div>
              )}
            </Nav>
          </div>
        </HeaderBox>
      </HeaderContainer>
    </FlexibleDiv>
  );
};

export default Header;
