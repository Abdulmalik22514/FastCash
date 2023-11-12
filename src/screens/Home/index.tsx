import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Container from '@/components/Container';
import {hp, wp} from '@/constants/utils';
import useNavigation from '@/hooks/useNavigation';
import {COLORS} from '@/constants/colors';
import {useAppDispatch, useAppSelector} from '@/hooks/useStore';
import {GET_USER} from '@/store/features/authSlice';

const Home = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const {user, singleUser} = useAppSelector(state => state.authReducer);

  useEffect(() => {
    dispatch(GET_USER(user?.id));
  }, [dispatch, user?.id]);

  return (
    <Container style={styles.container}>
      <Text onPress={() => navigation.goBack()} style={styles.backText}>
        Back
      </Text>
      <View style={styles.userDetails}>
        <Text style={styles.userName}>
          {singleUser?.first_name} {singleUser?.last_name}
        </Text>
        <Text>{singleUser?.email}</Text>
        <Image source={{uri: singleUser?.avatar}} style={styles.avatar} />
      </View>
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(20),
    paddingTop: hp(20),
  },
  backText: {
    color: COLORS.teal,
    marginBottom: hp(20),
  },
  userDetails: {
    alignItems: 'center',
  },
  avatar: {
    width: wp(150),
    height: hp(150),
    marginVertical: hp(10),
    resizeMode: 'contain',
  },
  userName: {
    marginVertical: hp(10),
    fontSize: 15,
    fontWeight: '700',
  },
});
