/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import React, { PropTypes } from 'react';
import { View, Image, StyleSheet } from 'react-native';
/* eslint-enable */

/* eslint-disable global-require, import/no-unresolved */
const sources = {
  'dark-content': {
    left: require('../assets/dark-content-left.png'),
    center: require('../assets/dark-content-center.png'),
    right: require('../assets/dark-content-right.png'),
  },
  'light-content': {
    left: require('../assets/light-content-left.png'),
    center: require('../assets/light-content-center.png'),
    right: require('../assets/light-content-right.png'),
  },
  default: null,
};

sources.default = sources['light-content'];
/* eslint-enable */

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 20,
  },
});

const StatusBarIcons = ({ barStyle }) => (
  <View style={styles.container}>
    <Image source={sources[barStyle].left} />
    <Image source={sources[barStyle].center} />
    <Image source={sources[barStyle].right} />
  </View>
);

StatusBarIcons.defaultProps = {
  barStyle: 'default',
};

StatusBarIcons.propTypes = {
  barStyle: PropTypes.oneOf(Object.keys(sources)),
};

export default StatusBarIcons;
