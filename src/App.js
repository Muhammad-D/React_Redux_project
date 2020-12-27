import React, { lazy, Suspense } from "react";
import "./App.scss";
import {
  BrowserRouter,
  HashRouter,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import NavbarContainer from "./components/Navbar/NavbarContainer";
// import UsersContainer from "./components/Users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import { globalInitializationSuccess } from "./redux/app-reducer";
import store from "./redux/redux-store";
import backGroundImg from "./assets/images/background-image.jpg";
const ProfileContainer = lazy(() =>
  import("./components/Profile/ProfileContainer")
);
const DialogsContainer = lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const UsersContainer = lazy(() => import("./components/Users/UsersContainer"));

class App extends React.Component {
  componentDidMount() {
    this.props.globalInitializationSuccess();
  }
  render() {
    if (!this.props.initialization) return <Preloader />;
    return (
      <div className="app-wrapper">
        {/* <div className="app-wrapper__backGroung-img"></div> */}
        <HeaderContainer />
        <NavbarContainer />
        <div className="app-wrapper__content">
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/dialogs" component={DialogsContainer} />
              <Route path="/profile/:userId?" component={ProfileContainer} />
              <Route path="/news" component={News} />
              <Route path="/music" component={Music} />
              <Route path="/settings" component={Settings} />
              <Route path="/users" render={() => <UsersContainer />} />
              <Route
                path="/login/facebook"
                render={() => <div>Facebook</div>}
              />
              <Route path="/login" component={Login} />
            </Switch>
          </Suspense>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialization: state.app.initialized,
});

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { globalInitializationSuccess })
)(App);

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};
export default AppWrapper;
