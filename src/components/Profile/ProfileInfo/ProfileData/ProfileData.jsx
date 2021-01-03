import React from "react";
import "./ProfileData.scss";

import ContactMailIcon from "@material-ui/icons/ContactMail";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import WebIcon from "@material-ui/icons/Web";

const ProfileData = ({ profile }) => {
  return (
    <div className="person-data">
      <div className="person-data__fullname">
        <span className="person-data__title">fullname </span>
        <span className="person-data__value">{profile.fullName}</span>
      </div>
      <div className="person-data__about-me">
        <span className="person-data__title">about me </span>
        <span className="person-data__value">{profile.aboutMe}</span>
      </div>
      <div className="person-data__looking-for-job">
        <span className="person-data__title">searching for a job</span>
        <span className="person-data__value">
          {profile.lookingForAJob ? "Yes" : "No"}
        </span>
      </div>
      <div className="person-data__position-description">
        <span className="person-data__title">position description </span>
        <span className="person-data__value">
          {profile.lookingForAJobDescription}
        </span>
      </div>
      <div className="person-data__contacts">
        <div className="person-data__github">
          <a href={profile.contacts.github}>
            <GitHubIcon />
          </a>
        </div>
        <div className="person-data__instagram">
          <a href={profile.contacts.instagram}>
            <InstagramIcon />
          </a>
        </div>

        <div className="person-data__linkin">
          <a href={profile.contacts.mainLink}>
            <LinkedInIcon />
          </a>
        </div>

        <div className="person-data__facebook">
          <a href={profile.contacts.facebook}>
            <FacebookIcon />
          </a>
        </div>
        <div className="person-data__twitter">
          <a href={profile.contacts.twitter}>
            <TwitterIcon />
          </a>
        </div>
        <div className="person-data__youtube">
          <a href={profile.contacts.youtube}>
            <YouTubeIcon />
          </a>
        </div>
        <div className="person-data__website">
          <a href={profile.contacts.website}>
            <WebIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileData;
