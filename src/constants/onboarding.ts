import {COLORS} from './colors';
import icons from './icons';

export const DATA = [
  {
    icon: icons.AwardIcon,
    title: 'Quality assets',
    subtitle:
      'Rise invests your money into the best dollar investments around the world.',
    backgroundColor: COLORS.slide1,
    textColor: COLORS.orange,
    disabled: true,
    backArrowColor: COLORS.grey,
    frontArrowColor: COLORS.orange,
  },
  {
    icon: icons.MoneyLensIcon,
    title: 'Superior Selection',
    subtitle:
      'Our expert team and intelligent algorithms select assets that beat the markets.       ',
    backgroundColor: COLORS.slide2,
    textColor: COLORS.indigo,
    backArrowColor: COLORS.indigo,
    frontArrowColor: COLORS.indigo,
  },
  {
    icon: icons.SpeedometerIcon,
    title: 'Better Performance',
    subtitle:
      'You earn more returns, achieve more of your financial goals and protect your money from devaluation.      ',
    backgroundColor: COLORS.slide3,
    textColor: COLORS.teal,
    backArrowColor: COLORS.teal,
    frontArrowColor: COLORS.teal,
    isLast: true,
  },
];
