import {
  NavigationProp,
  useNavigation as useNativeNav,
} from '@react-navigation/native';
import {RootStackParamList, RouteName} from '../types/types';

export default function useNavigation<T extends RouteName>() {
  const {navigate, ...rest} =
    useNativeNav<NavigationProp<RootStackParamList>>();

  const navigateTo = (routeName: RouteName, params?: RootStackParamList[T]) => {
    // @ts-ignore
    return navigate(routeName, params);
  };

  return {
    navigate: navigateTo,
    ...rest,
  };
}
