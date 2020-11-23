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
import {MdMenu as MenuIcon} from "react-icons/md";
import {FlexibleDiv} from "../Box/styles";
import { P } from "../FontSize/styles";
import Link from "next/link";

const links = [
  {href: "/", label: "Home"},
  {href: "/buy", label: "Buy"},
  {href: "/sell", label: "Sell"},
  {href: "/rent", label: "Rent"},
  {href: "/sign-up", label: "Register"},
  {href: "/about", label:"About"}
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
  const { dispatch } = useContext(AppContext);

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
                <P> A & E Properties </P>
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
            </Nav>
          </div>
        </HeaderBox>
      </HeaderContainer>
    </FlexibleDiv>
  );
};

export default Header;
