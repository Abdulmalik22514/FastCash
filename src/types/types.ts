export type RootStackParamList = {
  Register: undefined;
  Login: undefined;
  Home: undefined;
  CreateUser: undefined;
};

export type TabParamList = {
  EditProfile: undefined;
  HomeTab: undefined;
};

type AllParam = RootStackParamList & TabParamList;

export type RouteName = keyof AllParam;
