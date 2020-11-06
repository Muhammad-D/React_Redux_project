import React, { Suspense } from "react";
import Preloader from "../common/Preloader/Preloader";

const WithSuspense = (Component) => {
  return (props) => {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Component {...props} />
      </Suspense>
    );
  };
};

export default WithSuspense;
