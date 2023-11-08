import {StyleSheet, View} from 'react-native';
import React, {useRef, useState} from 'react';
import PagerView from 'react-native-pager-view';
import Container from '../../components/Container';
import SlideComponent from './components/SlideComponent';
import Dots from 'react-native-dots-pagination';
import {DATA} from '../../constants/onboarding';
import {getActiveDotColor} from '../../utils/getColors';

const Onboarding = () => {
  const pagerRef = useRef<PagerView>(null);
  const [page, setPage] = useState(0);

  return (
    <Container noTopInset>
      <PagerView
        ref={pagerRef}
        style={styles.container}
        onPageScroll={e => setPage(e.nativeEvent.position)}
        initialPage={0}>
        {DATA.map((e, i) => (
          <View key={i.toString()}>
            <SlideComponent
              {...e}
              onPressNext={() => pagerRef.current?.setPage(page + 1)}
              onPressPrev={() => pagerRef.current?.setPage(page - 1)}
            />
          </View>
        ))}
      </PagerView>
      <View style={styles.dotContainer}>
        <Dots
          length={3}
          active={page}
          activeColor={getActiveDotColor(page)}
          marginHorizontal={10}
          activeDotHeight={6}
          activeDotWidth={6}
          passiveDotHeight={6}
          passiveDotWidth={6}
        />
      </View>
    </Container>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dotContainer: {
    position: 'absolute',
    bottom: 200,
    alignItems: 'center',
    justifyContent: 'center',
    left: 100,
    right: 100,
    top: 200,
  },
});
