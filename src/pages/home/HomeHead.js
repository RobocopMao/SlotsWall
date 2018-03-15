import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

export default class HomeHead extends Component {
  render() {
    const {navigate} = this.props.navigate;
    return (
      <TouchableHighlight onPress={() => navigate('Mine', {})}>
        <View style={styles.container}>
          <Text style={styles.username}>
            PAIJO
          </Text>
          <Text style={styles.userInfo}>
            3 MINUTES OLD
          </Text>
          <Text style={styles.userInfo}>
            LEVEL 1
          </Text>
          <Image
            style={styles.avatar}
            source={require('./avatar.jpg')}
          />
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#488aff',
  },
  username: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
    marginTop: 40,
    marginBottom: 10,
  },
  userInfo: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 100,
    marginTop: 20,
    marginBottom: 30,
  }
});