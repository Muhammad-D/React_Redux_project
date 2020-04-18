import { createStore, combineReducers } from "redux";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let redusers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogReducer,
  sidebar: sidebarReducer,
});

let store = createStore(redusers);

export default store;
