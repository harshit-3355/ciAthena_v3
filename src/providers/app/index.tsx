import { createContext, useContext, type ReactNode } from 'react';

interface AppContextType {
  exampleFunction: () => string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const exampleFunction = () => {
    return 'Hello from AppProvider!';
  };

  return <AppContext.Provider value={{ exampleFunction }}>{children}</AppContext.Provider>;
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
