import Navbar from "./Navbar";
import { connect } from "react-redux";

let mapStateToProps = (state) => ({
  sidebar: state.sidebar,
});

let mapDispatchToProps = (dispatch) => ({});

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;
