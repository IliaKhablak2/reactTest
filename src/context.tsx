// import React, { createContext, useContext, useReducer } from 'react';

// export const StateContext = createContext([]);
// export const StateProvider = (props: any) => {
//   const [state, dispatch] = useReducer(props.reducer, props.initialState);
//   const value = { state, dispatch };
//   return (
//     <StateContext.Provider value={value}>{props.children}
//     </StateContext.Provider>
//   )
// };
// export const useStateValue = () => useContext(StateContext);

import React, { createContext, Dispatch, Reducer, useContext, useReducer } from 'react';

interface Actions {
  type: string;
  value: any;
}

interface SidebarProps {
  users: [];
  posts: [];
}

interface SidebarProviderProps {
  reducer: Reducer<SidebarProps, Actions>;
  initState: SidebarProps;
}

interface InitContextProps {
  state: SidebarProps;
  dispatch: Dispatch<Actions>;
}

export const StateContext = createContext({} as InitContextProps);
export const StateProvider: React.FC<SidebarProviderProps> = ({ reducer, initState, children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const value = { state, dispatch };
  return (
    <StateContext.Provider value={value}>
      {children}
    </StateContext.Provider>
  );
};

const SidebarController: React.FC = ({ children }) => {
  const initState: SidebarProps = {
    users:[],
    posts: []
  };

  const reducer: Reducer<SidebarProps, Actions> = (state, action) => {
    switch (action.type) {
      case 'setUsers':
        return {
          ...state,
          users: action.value
        };
      case 'setPosts':
        return {
          ...state,
          posts: action.value
        };
      default:
        return state;
    }
  };

  return (
    <StateProvider reducer={reducer} initState={initState}>
      {children}
    </StateProvider>
  );
};

export const useStateValue = () => useContext(StateContext);

export default SidebarController;