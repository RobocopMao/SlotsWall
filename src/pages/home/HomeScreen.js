import React, {Component} from 'react';
import {
  Button,
  View,
  Text,
  Image,
  ScrollView,
  StatusBar,
  TouchableHighlight,
  StyleSheet
} from 'react-native';
import HomeHead from './HomeHead';
import DialogItemList from './DialogItemList';


export default class HomeScreen extends Component {
  static navigationOptions = {
    title: '',
  };

  render() {
    // const { navigate } = this.props.navigation;
    let numbers = [1, 2, 3, 4, 5]
    return (
      <ScrollView>
        <StatusBar
          backgroundColor='#488aff'
          translucent={false}
          hidden={false}
          animated={true}
        />
        <HomeHead navigate={this.props.navigation}/>
        <DialogItemList numbers={numbers} />
      </ScrollView>
    );
  }
}