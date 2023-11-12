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
  id: string;
  setValue: Dispatch<
    SetStateAction<{
      name: string;
      job: string;
      id: string;
    }>
  >;
}

const HomeContext = createContext<HomeContextState | undefined>(undefined);

const HomeProvider = ({children}: PropsWithChildren) => {
  const [value, setValue] = useState({
    name: '',
    job: '',
    id: '',
  });

  const values: HomeContextState = {
    name: value.name,
    job: value.job,
    id: value.id,
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
