import Navbar from "./Navbar";
import { connect } from "react-redux";

let mapStateToprops = (state) => ({
  sidebar: state.sidebar,
});

let mapDispatchToprops = (dispatch) => ({});

const NavbarContainer = connect(mapStateToprops, mapDispatchToprops)(Navbar);

export default NavbarContainer;
