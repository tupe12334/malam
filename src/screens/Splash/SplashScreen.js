import React from 'react';
import {
  Image, View
} from 'react-native';
import styles from './styles';

export default class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.photo} source={require('../../../assets/icons/cookie100.png')} />
      </View>
    );
  }
}
