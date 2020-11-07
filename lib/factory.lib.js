import React from "react";
import moment from "moment";
import {FlexibleDiv} from "../components/Box/styles";
import {AvatarIcon4} from "../assets/svg";
import Button from "../components/Button";
import {ROLE_MATCHER} from "./constants";
import {generateID} from "./generateID";
import {B, H2, P} from "../components/FontSize/styles";

/**
 * Truncate
 * returns the truncated text with "..." or any specified ending character
 * @param {String} str
 * @param {Number} length
 * @param {String} ending
 * */
export const truncate = (str = "", length = 20, ending = "...") =>
  str.length > length ? `${str.substring(0, length - ending.length)} ${ending}` : str;

/**
 * Capitalize
 * returns a capitalized sentence
 * @param {String} sentence
 * */
export const capitalizeWords = (sentence) => {
  if (!sentence) return;

  if (sentence.length === 1) return sentence.toUpperCase();

  return sentence
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

/**
 * getInitials
 * Returns the first letters of the passed strings
 * @param {String} fName
 * @param {String} lName
 * */
export const getInitials = (fName = '', lName = '') =>
  `${fName.charAt(0).toUpperCase()}${lName.charAt(0).toUpperCase()}`;

/**
 * formatDate
 * Returns a moment formatted date
 * @param {Date} date
 * @param options
 * */
export const formatDate = (date, options = {
  format: 'DD, MM YYYY',
  fromNow: false
}) => {
  if (options['format']) {
    return moment(date).format(options.format)
  }

  if (options['fromNow']) {
    return moment(date).fromNow()
  }

  return moment(date).format(options.format)
};

/*
* shadeColor
* Lighten or Darken a color
* usage [lighten]: shadeColor(#DD23EF, 20)
* usage [darken]: shadeColor(#DD23EF, -20)
* */
export const shadeColor = (col, amt) => {
  let usePound = false;

  if (col[0] === "#") {
    col = col.slice(1);
    usePound = true;
  }

  let num = parseInt(col, 16);

  let r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  let b = ((num >> 8) & 0x00FF) + amt;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  let g = (num & 0x0000FF) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
};

/**
 * isNotEmpty return true if the object is not empty
 * @param {Object} obj
 * */
export function isNotEmpty(obj) {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) return true;
  }

  return false;
}

/**
 * generate profile card data based on the account type supplied
 * @param {boolean} isOwner
 * @param {boolean} isAdmin
 * @param {object} profileData
 * */
export const getProfileData = (profileData, {
  isOwner = false,
  isAdmin = false
}) => {
  if (ROLE_MATCHER[profileData.accountType] === "Academics") {
    return (
      <>
        <header>
          <FlexibleDiv className="profile-section-imageMain">
            {profileData.avatar ? profileData.avatar : <AvatarIcon4/>}
          </FlexibleDiv>
          <div className={"profile_body"}>
            <H2>{capitalizeWords(profileData.fullName)}</H2>
            <div className="profile-section-about">
              <P>{ROLE_MATCHER[profileData.accountType]} Admin</P>
              {profileData.lastSeen && (
                <small>
                  <b>Last Seen</b> {" "}
                  {formatDate(profileData.lastSeen, {fromNow: true})}
                </small>
              )}
            </div>

            <FlexibleDiv
              className="profile-section-btn"
              justifyContent="space-around"
            >
              {isOwner ? (
                <>
                  <Button
                    size="sm"
                    type="button"
                    borderRadius="4px"
                    bngColor={"#6C006C"}
                    text={"Edit Profile"}
                  />
                  <Button
                    size="sm"
                    type="button"
                    color={"#6C006C"}
                    borderRadius="4px"
                    bngColor={"white"}
                    text={"Deactivate"}
                  />
                </>
              ) : (
                <Button
                  text="Contact"
                  click={() => []}
                  type="button"
                  size="sm"
                  borderRadius="4px"
                />
              )}
            </FlexibleDiv>
          </div>
        </header>

        <section>
          {profileData.email && (
            <FlexibleDiv
              flexDir="column"
              flexWrap="nowrap"
              className="profile-section-list"
              alignItems="flex-start"
            >
              <small>Email</small>
              <P>{profileData.email}</P>
            </FlexibleDiv>
          )}
          {profileData.phone && (
            <FlexibleDiv
              flexDir="column"
              flexWrap="nowrap"
              className="profile-section-list"
              alignItems="flex-start"
            >
              <small>Phone</small>
              <P>{profileData.phone}</P>
            </FlexibleDiv>
          )}
          {profileData.createdAt && (
            <FlexibleDiv
              flexDir="column"
              flexWrap="nowrap"
              className="profile-section-list"
              alignItems="flex-start"
            >
              <small>Date Joined</small>
              <P>{formatDate(profileData.createdAt)}</P>
            </FlexibleDiv>
          )}
          {profileData.profileData && (
            <FlexibleDiv
              flexDir="column"
              flexWrap="nowrap"
              className="profile-section-list"
              alignItems="flex-start"
            >
              <small>Location</small>
              <P>{profileData.profileData.nationality}</P>
            </FlexibleDiv>
          )}
          {profileData.bio && (
            <FlexibleDiv
              flexDir="column"
              flexWrap="nowrap"
              className="profile-section-list"
              alignItems="flex-start"
            >
              <small>Bio</small>
              <P className="bio">{profileData.bio}</P>
            </FlexibleDiv>
          )}

          {profileData.socials && (
            <FlexibleDiv
              className="profile-section-socials"
              justifyContent="space-between"
            >
              {profileData.socials.map((social) => (
                <FlexibleDiv className="profile-section-social">
                  {social}
                </FlexibleDiv>
              ))}
            </FlexibleDiv>
          )}
        </section>
      </>
    );
  }

  if (ROLE_MATCHER[profileData.accountType] === "Teacher") {
    return (
      <>
        <header>
          <FlexibleDiv className="profile-section-imageMain">
            <AvatarIcon4 />
          </FlexibleDiv>
          <div className="profile_body">
            <H2>{capitalizeWords(profileData.fullName)}</H2>

            <div className="profile-section-about">
              <P>{ROLE_MATCHER[profileData.accountType]} Admin</P>
              {profileData.lastSeen ? (
                <small>
                  <b>Last Seen</b> {" "}
                  {formatDate(profileData.lastSeen, {fromNow: true})}
                </small>
              ) : <small><b>Last Seen</b> Never</small>}
            </div>
            {profileData.socials && (
              <FlexibleDiv
                className="profile-section-socials"
                // justifyContent="space-around"
              >
                {profileData.socials.map((social) => (
                  <FlexibleDiv
                    className="profile-section-social"
                    key={generateID(13)}
                  >
                    {social.social}
                  </FlexibleDiv>
                ))}
              </FlexibleDiv>
            )}

            <FlexibleDiv
              className="profile-section-btn"
              justifyContent="space-evenly"
            >
              {isOwner ? (
                <>
                  <Button
                    size="sm"
                    type="button"
                    borderRadius="4px"
                    bngColor={"#6C006C"}
                    text={"Edit Profile"}
                  />
                  <Button
                    size="sm"
                    type="button"
                    color={"#6C006C"}
                    borderRadius="4px"
                    bngColor={"white"}
                    text={"Deactivate"}
                  />
                </>
              ) : isAdmin ? (
                <>
                  <Button
                    size="sm"
                    type="button"
                    text="Contact"
                    click={() => []}
                    borderRadius="4px"
                  />
                  <Button
                    size="sm"
                    type="button"
                    borderRadius="4px"
                    text={"Deactivate"}
                    variant={"alternate"}
                  />
                </>
              ) : (
                <Button
                  size="sm"
                  type="button"
                  text="Contact"
                  click={() => []}
                  borderRadius="4px"
                />
              )}
            </FlexibleDiv>
          </div>
        </header>

        <section>
          {profileData.email && (
            <FlexibleDiv
              flexDir="column"
              flexWrap="nowrap"
              className="profile-section-list"
              alignItems="flex-start"
            >
              <small>Email</small>
              <P>{profileData.email}</P>
            </FlexibleDiv>
          )}
          {profileData.phone && (
            <FlexibleDiv
              flexDir="column"
              flexWrap="nowrap"
              className="profile-section-list"
              alignItems="flex-start"
            >
              <small>Phone</small>
              <P>{profileData.phone}</P>
            </FlexibleDiv>
          )}
          {profileData.createdAt && (
            <FlexibleDiv
              flexDir="column"
              flexWrap="nowrap"
              className="profile-section-list"
              alignItems="flex-start"
            >
              <small>Date joined</small>
              <P>{formatDate(profileData.createdAt)}</P>
            </FlexibleDiv>
          )}
          {profileData.profileData && (
            <FlexibleDiv
              flexDir="column"
              flexWrap="nowrap"
              className="profile-section-list"
              alignItems="flex-start"
            >
              <small>Location</small>
              <P>{profileData.profileData.address}</P>
            </FlexibleDiv>
          )}
          {profileData.profileData && (
            <FlexibleDiv
              flexDir="column"
              flexWrap="nowrap"
              className="profile-section-list"
              alignItems="flex-start"
            >
              <small>Bio</small>
              <P className="bio">{profileData.profileData.bio}</P>
            </FlexibleDiv>
          )}
          {profileData.qualification && (
            <FlexibleDiv
              flexDir="column"
              flexWrap="nowrap"
              className="profile-section-list"
              alignItems="flex-start"
            >
              <small>Qualification</small>
              <P>{profileData.qualification}</P>
            </FlexibleDiv>
          )}
          {profileData.subject && (
            <FlexibleDiv
              flexDir="column"
              flexWrap="nowrap"
              className="profile-section-list"
              alignItems="flex-start"
            >
              <small>Subject</small>
              <P>{profileData.subject}</P>
            </FlexibleDiv>
          )}
        </section>
      </>
    )
  }
};

/*
<div className="profile-section-container">
        <header>
          <FlexibleDiv className="profile-section-imageMain">
            <AvatarIcon4 />
          </FlexibleDiv>
          <div className="profile_body">
            <H2>{userProfile.name}</H2>
            <div className="profile-section-about">
              {userProfile.joined && (
                <P>
                  <b>Joined: </b>
                  {userProfile.joined}
                </P>
              )}
              <P>
                {userProfile.registeredKids ? (
                  <>
                    <b>No. of kids: </b>
                    {userProfile.registeredKids.length}
                  </>
                ) : null}
              </P>
              <P>
                <b>{userProfile.email}</b>
              </P>
            </div>
            {userProfile.socials && (
              <FlexibleDiv
                className="profile-section-socials"
                // justifyContent="space-around"
              >
                {userProfile.socials.map((social) => (
                  <FlexibleDiv
                    className="profile-section-social"
                    key={generateID(13)}
                  >
                    {social.social}
                  </FlexibleDiv>
                ))}
              </FlexibleDiv>
            )}
            <p className="bio">{userProfile.bio}</P>
            <FlexibleDiv
              className="profile-section-btn"
              justifyContent="space-between"
            >
              {userProfile.btn ? (
                userProfile.btn.map(({ btn, color, bngColor }) => (
                  <Button
                    text={btn}
                    click={() => []}
                    type="button"
                    size="sm"
                    bngColor={bngColor}
                    color={color}
                    borderRadius="4px"
                  />
                ))
              ) : (
                <Button
                  text="Contact"
                  click={() => []}
                  type="button"
                  size="sm"
                  borderRadius="4px"
                />
              )}
            </FlexibleDiv>
          </div>
        </header>

        <section>
          {userProfile.role && (
            <FlexibleDiv
              flexDir="column"
              flexWrap="nowrap"
              className="profile-section-list"
              alignItems="flex-start"
            >
              <small>Role</small>
              <P>{userProfile.role}</P>
            </FlexibleDiv>
          )}
          {userProfile.email && (
            <FlexibleDiv
              flexDir="column"
              flexWrap="nowrap"
              className="profile-section-list"
              alignItems="flex-start"
            >
              <small>Email</small>
              <P>{userProfile.email}</P>
            </FlexibleDiv>
          )}
          {userProfile.phone && (
            <FlexibleDiv
              flexDir="column"
              flexWrap="nowrap"
              className="profile-section-list"
              alignItems="flex-start"
            >
              <small>Phone</small>
              <P>{userProfile.phone}</P>
            </FlexibleDiv>
          )}
          {userProfile.dateJoined && (
            <FlexibleDiv
              flexDir="column"
              flexWrap="nowrap"
              className="profile-section-list"
              alignItems="flex-start"
            >
              <small>Date joined</small>
              <P>{userProfile.dateJoined}</P>
            </FlexibleDiv>
          )}
          {userProfile.location && (
            <FlexibleDiv
              flexDir="column"
              flexWrap="nowrap"
              className="profile-section-list"
              alignItems="flex-start"
            >
              <small>Location</small>
              <P>{userProfile.location[0].country}</P>
            </FlexibleDiv>
          )}
          {userProfile.bio && (
            <FlexibleDiv
              flexDir="column"
              flexWrap="nowrap"
              className="profile-section-list"
              alignItems="flex-start"
            >
              <small>Bio</small>
              <p className="bio">{userProfile.bio}</P>
            </FlexibleDiv>
          )}
          {userProfile.numberOfIje && (
            <FlexibleDiv
              flexDir="column"
              flexWrap="nowrap"
              className="profile-section-list"
              alignItems="flex-start"
            >
              <small>NUMBER OF CREATED IJE’S</small>
              <P>{userProfile.numberOfIje}</P>
            </FlexibleDiv>
          )}
          {userProfile.classesHandled && (
            <FlexibleDiv
              flexDir="column"
              flexWrap="nowrap"
              className="profile-section-list"
              alignItems="flex-ndex: 1;start"
            >
              <small>CLASSES HANDLED</small>
              <P>{userProfile.classesHandled}</P>
            </FlexibleDiv>
          )}
        </section>
      </div>
*/
