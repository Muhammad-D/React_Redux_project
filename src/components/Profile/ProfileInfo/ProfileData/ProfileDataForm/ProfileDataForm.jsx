import React from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import {
  FieldCreater,
  InputArea,
  TextArea,
} from "../../../../common/FormsControlers/FormsControlers";
import { updateProfileData } from "../../../../../redux/profile-reducer";
import style from "../../../../common/FormsControlers/FormsControlers.module.css";

const ProfileDataForm = ({ handleSubmit, error, ...props }) => {
  console.log(error);
  return (
    <form className="person-data-form" onSubmit={handleSubmit}>
      <div className="person-data-form__fullname">
        <strong>fullname: </strong>
        <FieldCreater
          placeholder="Fullname"
          name="fullName"
          component={InputArea}
          props={{ type: "text" }}
        />
      </div>
      <div className="person-data-form__about-me">
        <strong>about me: </strong>
        <FieldCreater
          placeholder="About me"
          name="aboutMe"
          component={TextArea}
          props={{ type: "text" }}
        />
      </div>
      <div className="person-data-form__looking-for-job">
        <strong>looking for a work: </strong>
        <FieldCreater
          props={{ type: "checkbox" }}
          name="lookingForAJob"
          component={InputArea}
        />
      </div>
      <div className="person-data-form__position-description">
        <strong>desired job position description: </strong>
        <FieldCreater
          placeholder="Position description"
          name="lookingForAJobDescription"
          component={TextArea}
          props={{ type: "text" }}
        />
      </div>
      <div className="person-data__contacts">
        <strong>contacts: </strong>
        {Object.keys(props.profile.contacts).map((key) => (
          <div key={key} className="person-data__contact">
            <strong>{key}: </strong>
            <FieldCreater
              placeholder={key}
              name={`contacts.${key}`}
              component={InputArea}
              props={{ type: "text" }}
            />
          </div>
        ))}
      </div>
      {error && <div className={style.errorForm}>{error}</div>}
      <div className="person-data-form__submit-button">
        <button>Submit</button>
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
