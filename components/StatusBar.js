/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import React, { PropTypes } from 'react';
import { View, StatusBar, StyleSheet, Platform } from 'react-native';
/* eslint-enable */
import StatusBarIcons from './StatusBarIcons';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  translucent: {
    position: 'absolute',
    width: '100%',
    zIndex: 1000,
  },
});

const MockStatusBar = ({ translucent, backgroundColor, ...iconProps }) => (
  <View style={[translucent && styles.translucent, { backgroundColor }]}>
    <StatusBarIcons {...iconProps} />
  </View>
);

MockStatusBar.defaultProps = {
  backgroundColor: Platform.select({ ios: 'transparent', android: 'black' }),
  translucent: Platform.select({ ios: true, android: false }),
};

MockStatusBar.propTypes = {
  backgroundColor: PropTypes.string,
  translucent: PropTypes.bool,
};

const Container = ({ children, ...statusBarProps }) => (
  <View style={styles.root}>
    <MockStatusBar {...statusBarProps} />
    {children}
    <StatusBar hidden />
  </View>
);

Container.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default Container;
