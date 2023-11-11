import React from 'react';
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

interface HomeContextState {
  name: string;
  job: string;
  setValue: Dispatch<
    SetStateAction<{
      name: string;
      job: string;
    }>
  >;
}

const HomeContext = createContext<HomeContextState | undefined>(undefined);

const HomeProvider = ({children}: PropsWithChildren) => {
  const [value, setValue] = useState({
    name: '',
    job: '',
  });

  const values: HomeContextState = {
    name: value.name,
    job: value.job,
    setValue,
  };

  return <HomeContext.Provider value={values}>{children}</HomeContext.Provider>;
};

const useHomeContext = () => {
  const context = useContext(HomeContext);
  if (context === undefined) {
    throw new Error('Error!!!');
  }
  return context;
};

export {useHomeContext, HomeProvider, HomeContext};
