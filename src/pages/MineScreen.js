import React, {Component} from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

export default class MineScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: '我的'
  });

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Text>Mine</Text>
      </View>
    )
  }
}