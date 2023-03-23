import Home from "../pages/Home";
import React, { createContext, useReducer } from "react";
import ManageProjectUsers from "../pages/ManageProjectUsers";
import ManageRoleAssignment from "../pages/ManageRoleAssignment";
import MyProjects from "../pages/MyProjects";
import MyTickets from "../pages/MyTickets";
import UserProfile from "../pages/UserProfile";

type AppState = typeof initialState;
type Action = 
         { type: "GO_TO_HOME";}
      |  { type: "GO_TO_MANAGE_ROLE_ASSIGNMENT"; }
      |  { type: "GO_TO_MANAGE_PROJECT_USERS"; }
      |  { type: "GO_TO_MY_PROJECTS"; }
      |  { type: "GO_TO_MY_TICKETS"; }
      |  { type : "GO_TO_USER_PROFILE"}

type ACTIONSType = {
  GO_TO_HOME: "GO_TO_HOME",
  GO_TO_MANAGE_ROLE_ASSIGNMENT: "GO_TO_MANAGE_ROLE_ASSIGNMENT",
  GO_TO_MANAGE_PROJECT_USERS: "GO_TO_MANAGE_PROJECT_USERS",
  GO_TO_MY_PROJECTS: "GO_TO_MY_PROJECTS",
  GO_TO_MY_TICKETS: "GO_TO_MY_TICKETS",
  GO_TO_USER_PROFILE: "GO_TO_USER_PROFILE"
};


interface TabValueContextProviderProps {
  children: React.ReactNode;
}

const initialState = {
  currentTab: <Home />,
};

const ACTIONS:ACTIONSType = {
  GO_TO_HOME: "GO_TO_HOME",
  GO_TO_MANAGE_ROLE_ASSIGNMENT: "GO_TO_MANAGE_ROLE_ASSIGNMENT",
  GO_TO_MANAGE_PROJECT_USERS: "GO_TO_MANAGE_PROJECT_USERS",
  GO_TO_MY_PROJECTS: "GO_TO_MY_PROJECTS",
  GO_TO_MY_TICKETS: "GO_TO_MY_TICKETS",
  GO_TO_USER_PROFILE: "GO_TO_USER_PROFILE"
}

const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case ACTIONS.GO_TO_HOME:
      return { currentTab: <Home /> };
    case ACTIONS.GO_TO_MANAGE_ROLE_ASSIGNMENT:
      return { currentTab: <ManageRoleAssignment /> };
    case ACTIONS.GO_TO_MANAGE_PROJECT_USERS:
      return { currentTab: <ManageProjectUsers /> };
    case ACTIONS.GO_TO_MY_PROJECTS:
      return { currentTab: <MyProjects /> };
    case ACTIONS.GO_TO_MY_TICKETS:
      return { currentTab: <MyTickets /> };
    case ACTIONS.GO_TO_USER_PROFILE:
      return { currentTab: <UserProfile /> };
    default:
      return state;
  }
};

const TabValueContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<Action>;
  ACTIONS: ACTIONSType;
}>({ state: initialState, dispatch: () => {}, ACTIONS});

function TabValueProvider({ children }: TabValueContextProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TabValueContext.Provider value={{ state, dispatch, ACTIONS }}>
      {children}
    </TabValueContext.Provider>
  );
}

export { TabValueContext, TabValueProvider, ACTIONS };
