import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import useNavigation from '@/hooks/useNavigation';
import {BackArrow, FrontArrow} from '@/assets/svgs/svg';
import {CustomButton} from '@/components/CustomButton';
import {COLORS} from '@/constants/colors';
import {wp, hp} from '@/constants/utils';
export interface SlideComponentProps {
  icon: ImageSourcePropType;
  title: string;
  subtitle: string;
  backgroundColor: string;
  textColor: string;
  disabled?: boolean;
  backArrowColor: string;
  frontArrowColor: string;
  onPressNext?: () => void;
  onPressPrev?: () => void;
  isLast?: boolean;
}

const SlideComponent = (props: SlideComponentProps) => {
  const {
    icon,
    title,
    subtitle,
    backgroundColor,
    textColor,
    disabled,
    backArrowColor,
    frontArrowColor,
    onPressNext,
    onPressPrev,
    isLast,
  } = props;
  const navigation = useNavigation();

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <Image source={icon} style={styles.onboardingIcon} />
      <Text style={[styles.title, {color: textColor}]}>{title}</Text>
      <Text style={styles.description}>{subtitle}</Text>
      {isLast ? (
        <View style={styles.buttonsView1}>
          <CustomButton
            title="Sign Up"
            onPressButton={() => navigation.navigate('SignUp')}
          />
          <CustomButton title="Sign In" disabled />
        </View>
      ) : (
        <View style={styles.buttonsView}>
          <Pressable
            style={styles.prevButton}
            disabled={disabled}
            onPress={onPressPrev}>
            <BackArrow color={backArrowColor} />
          </Pressable>
          <Pressable style={styles.nextButton} onPress={onPressNext}>
            <Text style={[styles.nextText, {color: textColor}]}>Next</Text>
            <FrontArrow color={frontArrowColor} />
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default SlideComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(20),
    paddingVertical: hp(20),
  },
  buttonsView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp(60),
  },
  buttonsView1: {
    marginTop: hp(90),
  },
  onboardingIcon: {
    width: wp(300),
    height: hp(300),
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: hp(90),
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    marginTop: hp(40),
  },
  description: {
    fontSize: 15,
    lineHeight: hp(22),
    letterSpacing: 0.3,
    marginVertical: hp(15),
  },
  prevButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(43),
    height: hp(48),
    backgroundColor: COLORS.offWhite,
    borderRadius: 5,
  },
  nextButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp(103),
    height: hp(48),
    backgroundColor: COLORS.offWhite,
    borderRadius: 5,
    paddingHorizontal: wp(15),
  },
  nextText: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.indigo,
  },
});
