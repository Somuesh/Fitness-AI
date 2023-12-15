import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext(undefined);

export const AppProvider = ({ children }) => {

  const [appState, setAppState] = useState({
        muscle_group: '',
        fitness: '',
        age: '',
        duration: '',
        gender: '',
        step: 'explore'
  });

  const [workout, setWorkout] = useState([])


  return (
    <AppContext.Provider
      value={{
        appState,
        setAppState,
        workout,
        setWorkout
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within a AppProvider');
  }
  return context;
};

// Mark the file as a module
export { };
