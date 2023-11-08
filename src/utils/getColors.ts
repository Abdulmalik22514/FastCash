import {COLORS} from '../constants/colors';

export const getActiveDotColor = (page: number) => {
  switch (page) {
    case 0:
      return COLORS.orange;
    case 1:
      return COLORS.indigo;
    case 2:
      return COLORS.teal;
  }
};
