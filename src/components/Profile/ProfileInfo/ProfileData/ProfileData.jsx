import React from "react";
import "./ProfileData.css";

const ProfileData = ({ profile }) => {
  return (
    <div className="person-data">
      <div className="person-data__fullname">
        <strong>fullname: </strong>
        {profile.fullName}
      </div>
      <div className="person-data__about-me">
        <strong>about me: </strong>
        {profile.aboutMe}
      </div>
      <div className="person-data__looking-for-job">
        <strong>looking for a work: </strong>
        {profile.lookingForAJob ? "Yes" : "No"}
      </div>
      <div className="person-data__position-description">
        <strong>desired job position description: </strong>
        {profile.lookingForAJobDescription}
      </div>
      <div className="person-data__contacts">
        <strong>contacts: </strong>
        {Object.keys(profile.contacts).map((key) => (
          <div key={key} className="person-data__contact">
            <strong>{key}: </strong>
            {profile.contacts[key]}
          </div>
        ))}
      </div>
    </div>
  );
  //   <div>
  //     {Object.keys(profile).map((key) => {
  //       if (key === "contacts") {
  //         console.log(key);
  //         return (
  //           <ProfileDataContasctsTemplate
  //             key={key}
  //             discriptionName={key}
  //             discriptionValue={profile[key]}
  //           />
  //         );
  //       } else if (key === "photos") {
  //         return "";
  //       }
  //       return (
  //         <ProfileDataTemplate
  //           key={key}
  //           discriptionName={key}
  //           discriptionValue={profile[key]}
  //         />
  //       );
  //     })}
  //   </div>
  // );
};

// const ProfileDataTemplate = ({ discriptionName, discriptionValue }) => {
//   return (
//     <>
//       <div>
//         <strong>{discriptionName}: </strong>
//         {discriptionValue}
//       </div>
//     </>
//   );
// };

// const ProfileDataContasctsTemplate = ({
//   discriptionName,
//   discriptionValue,
// }) => {
//   return (
//     <>
//       <div>
//         <strong>{discriptionName}: </strong>
//         {Object.keys(discriptionValue).map((key) => (
//           <li key={key}>
//             <strong>{key}: </strong>
//             {discriptionValue[key]}
//           </li>
//         ))}

//         {console.log(discriptionValue)}
//       </div>
//     </>
//   );
// };

export default ProfileData;
