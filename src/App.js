import React from "react";
import "./App.css";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import { globalInitializationSuccess } from "./redux/app-reducer";
import store from "./redux/redux-store";

class App extends React.Component {
  componentDidMount() {
    this.props.globalInitializationSuccess();
  }
  render() {
    if (!this.props.initialization) return <Preloader />;
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <NavbarContainer />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" component={Login} />
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
