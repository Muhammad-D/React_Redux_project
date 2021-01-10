import React from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import {
  FieldCreater,
  InputArea,
  TextArea,
} from "../../../../common/FormsControlers/FormsControlers";
import { updateProfileData } from "../../../../../redux/profile-reducer";
import "../../../../common/FormsControlers/FormsControlers.scss";
import "./ProfileDataForm.scss";

import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import WebIcon from "@material-ui/icons/Web";
import Button from "../../../../common/Button/Button";

const ProfileDataForm = ({ handleSubmit, error, ...props }) => {
  return (
    <form className="person-data-form" onSubmit={handleSubmit}>
      <div className="person-data-form__fullname">
        <span className="person-data-form__title">fullname </span>
        <span className="person-data-form__value">
          <FieldCreater
            placeholder="Fullname"
            name="fullName"
            component={InputArea}
            props={{ type: "text" }}
          />
        </span>
      </div>

      <div className="person-data-form__about-me">
        <span className="person-data-form__title">about me</span>
        <span className="person-data-form__value">
          <FieldCreater
            placeholder="About me"
            name="aboutMe"
            component={TextArea}
            props={{ type: "text" }}
          />
        </span>
      </div>

      <div className="person-data-form__looking-for-job">
        <span className="person-data-form__title">searching for a job</span>
        <span className="person-data-form__value">
          <FieldCreater
            name="lookingForAJob"
            component={InputArea}
            props={{ type: "checkbox" }}
          />
        </span>
      </div>

      <div className="person-data-form__position-description">
        <span className="person-data-form__title">position description </span>
        <span className="person-data-form__value">
          <FieldCreater
            placeholder="Position description"
            name="lookingForAJobDescription"
            component={TextArea}
            props={{ type: "text" }}
          />
        </span>
      </div>

      <div className="person-data-form__contacts">
        <div className="person-data-form__github">
          <GitHubIcon />
          <span className="person-data-form__value">
            <FieldCreater
              placeholder={props.profile.contacts.github}
              name={`contacts.github`}
              component={InputArea}
              props={{ type: "text" }}
            />
          </span>
        </div>

        <div className="person-data-form__instagram">
          <InstagramIcon />
          <span className="person-data-form__value">
            <FieldCreater
              placeholder={props.profile.contacts.instagram}
              name={`contacts.instagram`}
              component={InputArea}
              props={{ type: "text" }}
            />
          </span>
        </div>

        <div className="person-data-form__linkin">
          <LinkedInIcon />
          <span className="person-data-form__value">
            <FieldCreater
              placeholder={props.profile.contacts.mainLink}
              name={`contacts.mainLink`}
              component={InputArea}
              props={{ type: "text" }}
            />
          </span>
        </div>

        <div className="person-data-form__facebook">
          <FacebookIcon />
          <span className="person-data-form__value">
            <FieldCreater
              placeholder={props.profile.contacts.facebook}
              name={`contacts.facebook`}
              component={InputArea}
              props={{ type: "text" }}
            />
          </span>
        </div>

        <div className="person-data-form__twitter">
          <TwitterIcon />
          <span className="person-data-form__value">
            <FieldCreater
              placeholder={props.profile.contacts.twitter}
              name={`contacts.twitter`}
              component={InputArea}
              props={{ type: "text" }}
            />
          </span>
        </div>

        <div className="person-data-form__youtube">
          <YouTubeIcon />
          <span className="person-data-form__value">
            <FieldCreater
              placeholder={props.profile.contacts.youtube}
              name={`contacts.youtube`}
              component={InputArea}
              props={{ type: "text" }}
            />
          </span>
        </div>

        <div className="person-data-form__website">
          <WebIcon />
          <span className="person-data-form__value">
            <FieldCreater
              placeholder={props.profile.contacts.website}
              name={`contacts.website`}
              component={InputArea}
              props={{ type: "text" }}
            />
          </span>
        </div>
      </div>
      {/* {error && <div className="errorForm">{error}</div>} */}
      <div className="person-data-form__submit-button">
        <Button>Submit</Button>
      </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({ form: "edit-profile" })(
  ProfileDataForm
);

class ProfileDataFormReduxFormWrapper extends React.Component {
  reduxOnSubmit = (formData) => {
    this.props.updateProfileData(formData).then(() => {
      this.props.setEditMode(false);
    });
  };

  render() {
    return (
      <>
        <ProfileDataFormReduxForm
          onSubmit={this.reduxOnSubmit}
          {...this.props}
        />
      </>
    );
  }
}

export default connect(() => ({}), { updateProfileData })(
  ProfileDataFormReduxFormWrapper
);
