export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
};

export type TabParamList = {
  EditProfile: undefined;
  HomeTab: undefined;
};

type AllParam = RootStackParamList & TabParamList;

export type RouteName = keyof AllParam;
