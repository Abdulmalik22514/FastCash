import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
// import {COLORS} from '../constants/theme';

export default function Container({
  children,
  style,
  noTopInset = false,
  bottomInset = false,
  testID = '',
  barIconColor = 'dark-content',
}: any): JSX.Element {
  const {top, bottom} = useSafeAreaInsets();

  return (
    <>
      <StatusBar
        barStyle={barIconColor}
        // backgroundColor={COLORS.blue}
        translucent={false}
      />
      <View style={styles.coreLayer}>
        <View style={styles.upperPart} />
        <View style={styles.lowerPart} />
      </View>
      {/* Using View with a top inset instead of SafeAreaView allows to avoid jumping header on iOS */}
      {!noTopInset && (
        <View
          style={{
            height: top || 0,
          }}
          testID="topInset_id"
        />
      )}
      <SafeAreaView
        style={[styles.container, style]}
        testID={testID}
        edges={['left', 'right']}
        mode="margin">
        {children}
      </SafeAreaView>
      {bottomInset && (
        <View
          style={{
            height: bottom || 0,
          }}
          testID="bottomInset_id"
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  coreLayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
  },
  upperPart: {
    flex: 1,
    backgroundColor: 'white',
  },
  lowerPart: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
