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

type ACTIVE_TABS_TYPE = {
  HOME: "HOME",
  MANAGE_ROLE_ASSIGNMENT: "MANAGE_ROLE_ASSIGNMENT",
  MANAGE_PROJECT_USERS: "MANAGE_PROJECT_USERS",
  MY_PROJECTS: "PROJECTS",
  MY_TICKETS: "MY_TICKETS",
  USER_PROFILE: "USER_PROFILE"
}


interface TabValueContextProviderProps {
  children: React.ReactNode;
}

const initialState = {
  activeTab: 'HOME',
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

const ACTIVE_TABS: ACTIVE_TABS_TYPE = {
  HOME: "HOME",
  MANAGE_ROLE_ASSIGNMENT: "MANAGE_ROLE_ASSIGNMENT",
  MANAGE_PROJECT_USERS: "MANAGE_PROJECT_USERS",
  MY_PROJECTS: "PROJECTS",
  MY_TICKETS: "MY_TICKETS",
  USER_PROFILE: "USER_PROFILE"
}

const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case ACTIONS.GO_TO_HOME:
      return { activeTab: ACTIVE_TABS.HOME, currentTab: <Home /> };
    case ACTIONS.GO_TO_MANAGE_ROLE_ASSIGNMENT:
      return { activeTab: ACTIVE_TABS.MANAGE_ROLE_ASSIGNMENT, currentTab: <ManageRoleAssignment /> };
    case ACTIONS.GO_TO_MANAGE_PROJECT_USERS:
      return { activeTab: ACTIVE_TABS.MANAGE_PROJECT_USERS, currentTab: <ManageProjectUsers /> };
    case ACTIONS.GO_TO_MY_PROJECTS:
      return { activeTab: ACTIVE_TABS.MY_PROJECTS, currentTab: <MyProjects /> };
    case ACTIONS.GO_TO_MY_TICKETS:
      return { activeTab: ACTIVE_TABS.MY_TICKETS,currentTab: <MyTickets /> };
    case ACTIONS.GO_TO_USER_PROFILE:
      return { activeTab: ACTIVE_TABS.USER_PROFILE,currentTab: <UserProfile /> };
    default:
      return state;
  }
};

const TabValueContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<Action>;
  ACTIONS: ACTIONSType;
  ACTIVE_TABS: ACTIVE_TABS_TYPE;
}>({ state: initialState, dispatch: () => {}, ACTIONS, ACTIVE_TABS});

function TabValueProvider({ children }: TabValueContextProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TabValueContext.Provider value={{ state, dispatch, ACTIONS, ACTIVE_TABS }}>
      {children}
    </TabValueContext.Provider>
  );
}

export { TabValueContext, TabValueProvider, ACTIONS };
