/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
/* eslint-enable */

/* eslint-disable global-require, import/no-unresolved */
const right = require('../assets/right.png');
/* eslint-enable */

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 24,
  },
});

const StatusBarIcons = () => (
  <View style={styles.container}>
    <Image source={right} />
  </View>
);

export default StatusBarIcons;
